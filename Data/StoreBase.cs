using Interfaces.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Data
{
    public abstract class StoreBase<TEntity> : IStoreBase<TEntity>
        where TEntity : class
    {

        internal virtual ContextHandling.Context Context
        {
            get
            {
                return new ContextHandling.Context();
            }
        }

        public virtual int InsertOrUpdate(TEntity entity)
        {
            var id = GetEntityIdValue(entity);

            if (id > 0)
            {
                Update(entity);

                return id;
            }
            else
            {
                return Insert(entity);
            }

        }

        public virtual async Task<int> InsertOrUpdateAsync(TEntity entity)
        {

            var id = GetEntityIdValue(entity);

            if (id > 0)
            {
                await UpdateAsync(entity);

                return id;
            }
            else
            {
                return await InsertAsync(entity);
            }

        }

        public virtual int Insert(TEntity entity)
        {
            AddForInsert(entity);

            this.Context.SaveChanges();

            return GetEntityIdValue(entity);

        }

        public virtual async Task<int> InsertAsync(TEntity entity)
        {
            AddForInsert(entity);

            await this.Context.SaveChangesAsync();

            return GetEntityIdValue(entity);
        }

        public virtual void Update(TEntity entity)
        {
            AttachForUpdate(entity);

            this.Context.SaveChanges();

        }

        public virtual async Task UpdateAsync(TEntity entity)
        {
            AttachForUpdate(entity);

            await this.Context.SaveChangesAsync();
        }

        public virtual async Task UpdateManyAsync(IEnumerable<TEntity> entities)
        {
            foreach (var entity in entities)
            {
                AttachForUpdate(entity);
            }

            await this.Context.SaveChangesAsync();
        }

        public virtual void Delete(TEntity entity)
        {
            AttachForDelete(entity);

            this.Context.SaveChanges();

        }

        public virtual async Task DeleteAsync(TEntity entity)
        {
            AttachForDelete(entity);

            await this.Context.SaveChangesAsync();
        }

        public virtual async Task DeleteManyAsync(IEnumerable<TEntity> entities)
        {
            foreach (var entity in entities)
            {
                AttachForDelete(entity);
            }

            await this.Context.SaveChangesAsync();
        }

        protected IQueryable<TEntity> DbSetWithIncludes
        {
            get
            {
                return AddIncludesToQuery(this.Context.Set<TEntity>());
            }
        }

        protected virtual IQueryable<TEntity> AddIncludesToQuery(IQueryable<TEntity> query)
        {
            return query;
        }

        public virtual TEntity Get(int id)
        {

            IQueryable<TEntity> query = DbSetWithIncludes;

            return query.FirstOrDefault(GetGetWhereFilter(id));

        }

        public virtual async Task<TEntity> GetAsync(int id)
        {

            IQueryable<TEntity> query = DbSetWithIncludes;

            return await query.FirstOrDefaultAsync(GetGetWhereFilter(id));
        }

        private Expression<Func<TEntity, bool>> GetGetWhereFilter(int id)
        {

            var instance = Activator.CreateInstance<TEntity>();

            var keyAttribute = GetEntityIdPropertyOrNull(instance);

            var param = Expression.Parameter(typeof(TEntity), "t");

            MemberExpression member = Expression.Property(param, keyAttribute.Name);
            ConstantExpression constant = Expression.Constant(id);
            var exp = Expression.Equal(member, constant);

            var filter = Expression.Lambda<Func<TEntity, bool>>(exp, param);

            return filter;

        }


        public virtual IEnumerable<TEntity> GetAllWithTracking()
        {
            var query = GetAllQuery();

            return query.ToList();
        }

        public virtual async Task<IEnumerable<TEntity>> GetAllWithTrackingAsync()
        {

            var query = GetAllQuery();

            return await query.ToListAsync();
        }

        private IQueryable<TEntity> GetAllQuery()
        {
            IQueryable<TEntity> query = DbSetWithIncludes;

            return AddDefaultOrderingToQuery(query);

        }

        public virtual IEnumerable<TEntity> GetAll()
        {
            var query = GetAllNoTrackingQuery();

            return query.ToList();
        }


        public virtual async Task<IEnumerable<TEntity>> GetAllAsync()
        {
            var query = GetAllNoTrackingQuery();

            return await query.ToListAsync();
        }

        private IQueryable<TEntity> GetAllNoTrackingQuery()
        {
            IQueryable<TEntity> query = DbSetWithIncludes.AsNoTracking();

            return AddDefaultOrderingToQuery(query);
        }


        protected virtual IQueryable<TEntity> AddDefaultOrderingToQuery(IQueryable<TEntity> query)
        {

            string sortingPropertyName = null;

            if (sortingPropertyName != null)
            {

                ParameterExpression[] typeParams = new ParameterExpression[] { Expression.Parameter(typeof(TEntity), sortingPropertyName) };

                Expression<Func<TEntity, string>> orderByExpression = (Expression<Func<TEntity, string>>)
                                                                           Expression.Lambda(Expression.Property(typeParams[0], sortingPropertyName), typeParams);

                query = query.OrderBy(orderByExpression);

            }

            return query;

        }

        private static Dictionary<Type, string> __sortingPropertyNames = new Dictionary<Type, string>();


        private void AttachForDelete(TEntity entity)
        {

            var context = this.Context;

            context.Set<TEntity>().Attach(entity);

            context.Entry(entity).State = EntityState.Deleted;

        }

        private void AddForInsert(TEntity entity)
        {
            var context = this.Context;

            context.Set<TEntity>().Add(entity);
        }

        private void AttachForUpdate(TEntity entity)
        {

            var context = this.Context;

            context.Set<TEntity>().Attach(entity);
            context.Entry<TEntity>(entity).State = EntityState.Modified;

        }

        private int GetEntityIdValue(TEntity entity)
        {

            var prop = GetEntityIdPropertyOrNull(entity);

            if (prop != null)
            {
                return Convert.ToInt32(prop.GetValue(entity));
            }
            else
            {
                return 0;
            }

        }

        private System.Reflection.PropertyInfo GetEntityIdPropertyOrNull(TEntity entity)
        {
            return (from prop in entity.GetType().GetProperties()
                    let keyAttribute = prop.GetCustomAttributes(typeof(System.ComponentModel.DataAnnotations.KeyAttribute), true).FirstOrDefault()
                    where keyAttribute != null &&
                    prop.PropertyType == typeof(int)
                    select prop).FirstOrDefault();
        }

    }
}
