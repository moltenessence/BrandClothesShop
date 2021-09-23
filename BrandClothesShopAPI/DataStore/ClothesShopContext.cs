﻿using BrandClothesShopAPI.Models;
using Microsoft.EntityFrameworkCore;
using System;

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

    }
}