using Npgsql;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Threading.Tasks;

namespace YourNamespace.Controllers
{
    [ApiController]
    [Route("api/expert")]
    public class ExpertController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public ExpertController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegistrationModel model)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest("Invalid input data");
                }

                string connectionString = _configuration["postgres://postgres.tsxclcisljiwptocxiou:[Supabasehhs@]@aws-0-eu-central-1.pooler.supabase.com:6543/postgres"];

                using (NpgsqlConnection connection = new NpgsqlConnection(connectionString))
                {
                    await connection.OpenAsync();

                    string insertQuery = "INSERT INTO Ervaringsdeskundige (Gebruiker_ID, Gebruikersnaam, Wachtwoord, E_Mail, Voorletters, Achternaam, Postcode, Telefoonnummer, ComerciŽle_Benadering, Leeftijdsgroep) " +
                                         "VALUES (@Gebruiker_ID, @Gebruikersnaam, @Wachtwoord, @E_Mail, @Voorletters, @Achternaam, @Postcode, @Telefoonnummer, @ComerciŽle_Benadering, @Leeftijdsgroep)";

                    using (NpgsqlCommand command = new NpgsqlCommand(insertQuery, connection))
                    {
                        foreach (var prop in model.GetType().GetProperties())
                        {
                            command.Parameters.AddWithValue("@" + prop.Name, prop.GetValue(model));
                        }

                        await command.ExecuteNonQueryAsync();
                    }
                }

                return Ok(new { Message = "Registration successful" });
            }
            catch (Exception ex)
            {
                // Log the exception
                return StatusCode(500, "Internal Server Error");
            }
        }
    }
}