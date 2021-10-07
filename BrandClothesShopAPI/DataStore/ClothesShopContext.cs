using BrandClothesShopAPI.Models;
using Microsoft.EntityFrameworkCore;
using System;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DataStore
{
    public class ClothesShopContext : DbContext
    {
        public DbSet<СlothesItem> ClothesItems { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Photo> Photos { get; set; }
        public DbSet<User> Users { get; set; }

        public ClothesShopContext(DbContextOptions<ClothesShopContext> options)
            : base(options)
        {
            Database.EnsureCreated();
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<User>()
                        .HasMany(o => o.Orders)
                        .WithOne(o => o.User)
                        .HasForeignKey(u => u.UserId)
                        .IsRequired()
                        .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Order>()
                        .HasOne(o => o.User)
                        .WithMany(u => u.Orders)
                        .HasForeignKey(o => o.OrderId)
                        .IsRequired()
                        .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<User>()
                      .HasMany(o => o.Orders)
                      .WithOne(o => o.User)
                      .HasForeignKey(u => u.UserId)
                      .IsRequired();

            modelBuilder.Entity<Order>()
                       .HasOne(o => o.User)
                       .WithMany(u => u.Orders)
                       .HasForeignKey(o => o.OrderId);

        }

    }
}
