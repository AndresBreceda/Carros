using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using MongoDB.Driver;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// 📦 =======================
// MongoDB Configuration
// =========================
var mongoSettings = builder.Configuration.GetSection("MongoDB");
var connectionUri = mongoSettings["ConnectionString"];
var databaseName = mongoSettings["DatabaseName"];

// ⚠️ Validación
if (string.IsNullOrEmpty(connectionUri) || string.IsNullOrEmpty(databaseName))
{
    throw new Exception("Falta la configuración de MongoDB en appsettings.json");
}

// 🔗 Mongo Client
builder.Services.AddSingleton<IMongoClient>(sp =>
{
    return new MongoClient(connectionUri);
});

// 🔗 Mongo Database
builder.Services.AddScoped(sp =>
{
    var client = sp.GetRequiredService<IMongoClient>();
    return client.GetDatabase(databaseName);
});


// 🔐 =======================
// JWT Authentication
// =======================
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,

            ValidIssuer = builder.Configuration["Jwt:Issuer"],
            ValidAudience = builder.Configuration["Jwt:Audience"],

            IssuerSigningKey = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]!)
            )
        };
    });


// 📚 =======================
// Services
// =======================
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// 🌐 =======================
// CORS
// =======================
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});


// 🚀 =======================
// Build App
// =======================
var app = builder.Build();


// 🔧 =======================
// Pipeline
// =======================
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("AllowAll");

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();