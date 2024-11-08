using Microsoft.EntityFrameworkCore;
using WebAPI.Entites;

namespace WebAPI.Data
{
    public class StoreContext : DbContext
    {
        public StoreContext(DbContextOptions options) : base(options) 
        { 
        }

        public DbSet<Product> Products { get; set; }
    }
}
