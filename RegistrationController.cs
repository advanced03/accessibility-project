using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Threading.Tasks;

[Route("api/[controller]")]
[ApiController]
public class RegistrationController : ControllerBase
{
    private readonly IConfiguration _configuration;

    public RegistrationController(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] RegistrationModel model)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest("Invalid input data");
        }

        // Azure SQL Database connection string
        string connectionString = _configuration.GetConnectionString("Server=your-server-name.database.windows.net;Database=your-database-name;User Id=your-username;Password=your-password;");

        using (SqlConnection connection = new SqlConnection(connectionString))
        {
            await connection.OpenAsync();

            // Insert user data into the database
            string insertQuery = "INSERT INTO Ervaringsdeskundige (Gebruiker_ID, Gebruikersnaam, Wachtwoord, E-Mail, Voorletters, Achternaam, Postcode, Telefoonnummer, Comerciële benadering, Leeftijdsgroep) " +
                                "VALUES (@Gebruiker_ID, @Gebruikersnaam, @Wachtwoord, @E-mail, @Voorletters, @Achternaam, @Postcode, @Telefoonnummer, @Comerciële benadering, @Leeftijdsgroep)";

            using (SqlCommand command = new SqlCommand(insertQuery, connection))
            {
                command.Parameters.AddWithValue("@Gebruikers_ID", model.Gebruikers_ID);
                command.Parameters.AddWithValue("@Gebruikersnaam", model.Gebruikersnaam);
                command.Parameters.AddWithValue("@Wachtwoord", model.Wachtwoord);
                command.Parameters.AddWithValue("@E-Mail", model. E-Mail);
                command.Parameters.AddWithValue("@Voorletters", model.Voorletters);
                command.Parameters.AddWithValue("@Achternaam", model.Achternaam);
                command.Parameters.AddWithValue("@Postcode", model.Postcode);
                command.Parameters.AddWithValue("@Telefoonnummer", model.Telefoonnummer);
                command.Parameters.AddWithValue("@Comerciële_Benadering", model.Comerciële benadering);
                command.Parameters.AddWithValue("@Leeftijdsgroep", model.Leeftijdsgroep);

                await command.ExecuteNonQueryAsync();
            }
        }

        return Ok("Registration successful");
    }
}

public class RegistrationModel
{
    public string Gebruikers_ID { get; set; }
    public string Gebruikersnaam { get; set; }
    public string Wachtwoord { get; set; }
    public string E-Mail { get; set; }
public string Voorletters { get; set; }
public string Achternaam { get; set; }
public string Postcode { get; set; }
public string Telefoonnummer { get; set; }
public string Comerciële_Benadering { get; set; }
public string Leeftijdsgroep { get; set; }
}
