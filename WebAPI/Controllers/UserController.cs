using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using WebAPI.Models.Auth;
using WebAPI.Utilities;

namespace WebAPI.Controllers
{
    [Route("api/v1/user")]
    [ApiController]
    public class UserController (IOptions<JwtSettings> jwtSettings) : ControllerBase
    {
        [HttpPost("create")]
        public IActionResult Create([FromBody] LoginModel model)
        {
            var user = new UserModel
            {
                Username = model.Username
            };

            AuthUtility.CreatePasswordHash(model.Password, out byte[] hash, out byte[] salt);
            user.PasswordHash = hash;
            user.PasswordSalt = salt;

            // TODO save user in database

            return Ok();
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginModel model)
        {
            // TODO get user from database

            string passwordHash = "TODO";
            string passwordSalt = "TODO";

            if (AuthUtility.VerifyPassword(model.Password, passwordHash, passwordSalt)) // TODO
            {
                var token = GenerateJwtToken(model.Username);
                return Ok(new { token });
            }

            return Unauthorized();
        }

        private string GenerateJwtToken(string username)
        {
            var claims = new[]
            {
                new Claim(ClaimTypes.Name, username),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

            var jwt = jwtSettings.Value;
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwt.Key));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: jwt.Issuer,
                audience: jwt.Audience,
                claims: claims,
                expires: DateTime.Now.AddHours(1),
                signingCredentials: creds);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
