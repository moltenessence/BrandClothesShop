using Microsoft.EntityFrameworkCore.Migrations;

namespace BrandClothesShopAPI.Migrations
{
    public partial class AddSizeInOrder : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Size",
                table: "OrderList",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Size",
                table: "OrderList");
        }
    }
}
