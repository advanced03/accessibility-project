using Npgsql;

// ...

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

            string insertQuery = "INSERT INTO Ervaringsdeskundige (Gebruiker_ID, Gebruikersnaam, Wachtwoord, E_Mail, Voorletters, Achternaam, Postcode, Telefoonnummer, Comerciële_Benadering, Leeftijdsgroep) " +
                                "VALUES (@Gebruiker_ID, @Gebruikersnaam, @Wachtwoord, @E_Mail, @Voorletters, @Achternaam, @Postcode, @Telefoonnummer, @Comerciële_Benadering, @Leeftijdsgroep)";

            using (NpgsqlCommand command = new NpgsqlCommand(insertQuery, connection))
            {
                foreach (var prop in model.GetType().GetProperties())
                {
                    command.Parameters.AddWithValue("@" + prop.Name, prop.GetValue(model));
                }

                await command.ExecuteNonQueryAsync();
            }
        }

        return Ok("Registration successful");
    }
    catch (Exception ex)
    {
        // Log the exception
        return StatusCode(500, "Internal Server Error");
    }
}