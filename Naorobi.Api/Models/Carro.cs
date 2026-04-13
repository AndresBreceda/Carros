using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Naorobi.Api.Models
{
    public class Carro
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        public required string marca { get; set; }
        public required string modelo { get; set; }
        public int año { get; set; }
        public decimal precio { get; set; }

        public string tipo_Motor { get; set; } = string.Empty;
        public string transmision { get; set; } = string.Empty;
        public string tipo_Combustible { get; set; } = string.Empty;

        public string imagenUrl { get; set; } = string.Empty;
    }
}