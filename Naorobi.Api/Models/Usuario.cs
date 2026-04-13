using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Naorobi.Api.Models
{
    public class Usuario
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; } = string.Empty;

        public required string Email { get; set; }
        public required string Contraseña { get; set; }
    }

}