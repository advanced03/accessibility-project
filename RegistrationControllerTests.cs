[TestFixture]
public class RegistrationControllerTests
{
	[Test]
	public async Task Register_ValidInput_Success()
	{
		// Arrange
		var configurationMock = new Mock<IConfiguration>();
		configurationMock.Setup(c => c["ConnectionStrings:DefaultConnection"]).Returns("dummyConnectionString");

		var registrationModel = new RegistrationModel { /* valid model data */ };
		var controller = new RegistrationController(configurationMock.Object);

		// Act
		var result = await controller.Register(registrationModel);

		// Assert
		Assert.IsInstanceOf<OkObjectResult>(result);
	}

	[Test]
	public async Task Register_InvalidInput_BadRequest()
	{
		// Arrange
		var configurationMock = new Mock<IConfiguration>();
		configurationMock.Setup(c => c["ConnectionStrings:DefaultConnection"]).Returns("dummyConnectionString");

		var registrationModel = new RegistrationModel { /* invalid model data */ };
		var controller = new RegistrationController(configurationMock.Object);
		controller.ModelState.AddModelError("key", "error message");

		// Act
		var result = await controller.Register(registrationModel);

		// Assert
		Assert.IsInstanceOf<BadRequestObjectResult>(result);
	}

	[Test]
	public async Task Register_Exception_InternalServerError()
	{
		// Arrange
		var configurationMock = new Mock<IConfiguration>();
		configurationMock.Setup(c => c["ConnectionStrings:DefaultConnection"]).Returns("dummyConnectionString");

		var registrationModel = new RegistrationModel { /* valid model data */ };
		var controller = new RegistrationController(configurationMock.Object);
		// Force an exception in the code
		controller.ConfigureForException();

		// Act
		var result = await controller.Register(registrationModel);

		// Assert
		Assert.IsInstanceOf<StatusCodeResult>(result);
		Assert.AreEqual(500, ((StatusCodeResult)result).StatusCode);
	}
}