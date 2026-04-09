using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Naorobi.Api.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Admins",
                columns: table => new
                {
                    Id_Admin = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Email = table.Column<string>(type: "TEXT", nullable: false),
                    Contraseña = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Admins", x => x.Id_Admin);
                });

            migrationBuilder.CreateTable(
                name: "Usuarios",
                columns: table => new
                {
                    Id_Usuario = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Email = table.Column<string>(type: "TEXT", nullable: false),
                    Contraseña = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Usuarios", x => x.Id_Usuario);
                });

            migrationBuilder.CreateTable(
                name: "Carros",
                columns: table => new
                {
                    Id_Carro = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Marca = table.Column<string>(type: "TEXT", nullable: false),
                    Modelo = table.Column<string>(type: "TEXT", nullable: false),
                    Precio_Renta_Diario = table.Column<int>(type: "INTEGER", nullable: false),
                    Caballos_Fuerza = table.Column<int>(type: "INTEGER", nullable: false),
                    Maxima_Velocidad = table.Column<int>(type: "INTEGER", nullable: false),
                    Tipo_Motor = table.Column<string>(type: "TEXT", nullable: false),
                    Transmision = table.Column<string>(type: "TEXT", nullable: false),
                    Tipo_Combustible = table.Column<string>(type: "TEXT", nullable: false),
                    Id_Admin = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Carros", x => x.Id_Carro);
                    table.ForeignKey(
                        name: "FK_Carros_Admins_Id_Admin",
                        column: x => x.Id_Admin,
                        principalTable: "Admins",
                        principalColumn: "Id_Admin",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Reservas",
                columns: table => new
                {
                    Id_Reserva = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Fecha_Inicio = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Fecha_Final = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Id_Carro = table.Column<int>(type: "INTEGER", nullable: false),
                    Id_Usuario = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Reservas", x => x.Id_Reserva);
                    table.ForeignKey(
                        name: "FK_Reservas_Carros_Id_Carro",
                        column: x => x.Id_Carro,
                        principalTable: "Carros",
                        principalColumn: "Id_Carro",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Reservas_Usuarios_Id_Usuario",
                        column: x => x.Id_Usuario,
                        principalTable: "Usuarios",
                        principalColumn: "Id_Usuario",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Carros_Id_Admin",
                table: "Carros",
                column: "Id_Admin");

            migrationBuilder.CreateIndex(
                name: "IX_Reservas_Id_Carro",
                table: "Reservas",
                column: "Id_Carro");

            migrationBuilder.CreateIndex(
                name: "IX_Reservas_Id_Usuario",
                table: "Reservas",
                column: "Id_Usuario");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Reservas");

            migrationBuilder.DropTable(
                name: "Carros");

            migrationBuilder.DropTable(
                name: "Usuarios");

            migrationBuilder.DropTable(
                name: "Admins");
        }
    }
}
