using BrandClothesShopAPI.Models;
using Microsoft.EntityFrameworkCore;
using Core.Models;

namespace DataStore
{
    public class ClothesShopContext : DbContext
    {
        public DbSet<СlothesItem> ClothesItems { get; set; }
        public DbSet<RefreshToken> RefreshTokens { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Photo> Photos { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<CartItem> CartItems { get; set; }

        public ClothesShopContext(DbContextOptions<ClothesShopContext> options)
            : base(options)
        {
            Database.EnsureCreated();
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<User>()
                        .HasAlternateKey(k => k.Email);
        }

    }
}
