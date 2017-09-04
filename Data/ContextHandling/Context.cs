using Interfaces.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace Data.ContextHandling
{
    public class Context : DbContext
    {

        public DbSet<User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

            optionsBuilder.UseSqlServer("Server=ara;Database=TubingProductionWizard;User Id=tubingproductioneizard_user;Password=tubingproductioneizard_user;");

            base.OnConfiguring(optionsBuilder);
        }
    }
}
