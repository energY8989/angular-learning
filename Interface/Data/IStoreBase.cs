using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Interfaces.Data
{
    public interface IStoreBase<TEntity>
        where TEntity : class
    {

        int InsertOrUpdate(TEntity entity);
        Task<int> InsertOrUpdateAsync(TEntity entity);

        int Insert(TEntity entity);
        Task<int> InsertAsync(TEntity entity);

        void Update(TEntity entity);
        Task UpdateAsync(TEntity entity);

        Task UpdateManyAsync(IEnumerable<TEntity> entities);

        void Delete(TEntity entity);
        Task DeleteAsync(TEntity entity);
        Task DeleteManyAsync(IEnumerable<TEntity> entities);

        TEntity Get(int id);
        Task<TEntity> GetAsync(int id);

        IEnumerable<TEntity> GetAllWithTracking();
        Task<IEnumerable<TEntity>> GetAllWithTrackingAsync();

        IEnumerable<TEntity> GetAll();
        Task<IEnumerable<TEntity>> GetAllAsync();

    }
}
