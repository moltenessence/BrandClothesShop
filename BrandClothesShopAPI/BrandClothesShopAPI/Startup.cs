using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DataStore;
using Newtonsoft.Json;
using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Http;
using BrandClothesShopAPI.Services;

namespace BrandClothesShopAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
  
            services.AddControllers();
            services.AddRouting();

            string connectionString = Configuration.GetConnectionString("ClothesShopContext");

            services.AddDbContext<ClothesShopContext>(options =>
               options.UseSqlServer(connectionString, b => b.MigrationsAssembly("BrandClothesShopAPI")));
            services.AddScoped<IUserService, UserService>();

            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();

            services.AddDbContext<ClothesShopContext>(options =>
                 options.UseSqlServer(connectionString));

            services.AddControllersWithViews();
            services.AddControllers()
                    .AddNewtonsoftJson(options =>
                     options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore);

            services.AddControllers()
                .AddNewtonsoftJson(options =>
                    options.SerializerSettings.Formatting = Formatting.Indented);


            var tokenValidationParameters = new TokenValidationParameters()
            {
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = AuthOptions.GetSymmetricSecurityKey(),
                ValidateIssuer = false,
                ValidateAudience = false,
                ValidateLifetime = false
            };

            services.AddAuthentication(x =>{ x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                                             x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                                             x.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            })
                    .AddJwtBearer(options =>{ options.RequireHttpsMetadata = false;
                                              options.SaveToken = true;
                                              options.TokenValidationParameters = tokenValidationParameters;});

            services.AddAuthorization();

            var mappingConfig = new MapperConfiguration(mc =>
            {
                mc.AddProfile(new MappingProfile());
            });

            IMapper mapper = mappingConfig.CreateMapper();
            services.AddSingleton(mapper);

            services.AddMvc();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors(options =>
            options.WithOrigins("http://localhost:3000")
            .AllowCredentials()
            .AllowAnyHeader()
            .AllowAnyMethod());

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
