using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace ShoppingELF.Models
{
    public class DataContext : DbContext
    {
        public DataContext() : base("ShoppingELFEntities")
        {

        }

        public DbSet <User> users { get; set; }

    }
}