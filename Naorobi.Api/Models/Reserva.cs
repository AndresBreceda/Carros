using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

public class Reserva
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    public DateTime Fecha_Inicio { get; set; }
    public DateTime Fecha_Final { get; set; }

    public string Id_Carro { get; set; }
    public string Id_Usuario { get; set; }

    public string Estado { get; set; }
}