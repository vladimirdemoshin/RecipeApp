using Microsoft.AspNetCore.Mvc;
using System.Text;

namespace RecipeApp.WebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetWeatherForecast")]
        public IEnumerable<WeatherForecast> Get()
        {
            string s = "test";
            var stack = new Stack<char>(s.Length);
            foreach (var symbol in s)
            {
                if (symbol == '*')
                {
                    stack.Pop();
                    continue;
                }

                stack.Push(symbol);
            }


            var result = new StringBuilder();
            foreach (var symbol in stack)
            {
                result.Append(symbol);
            }

            var a = result.ToString().Reverse();


            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }
    }
}