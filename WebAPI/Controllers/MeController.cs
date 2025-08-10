using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/v1/me")]
    public class MeController : ControllerBase
    {
        [HttpGet]
        [Authorize]
        public MeModel GetMyInfo()
        {
            var user = HttpContext.User;
            string username = user.Claims.FirstOrDefault(x => x.Type == "name")?.Value ?? string.Empty;
            var info = new MeModel { Username = username };
            return info;
        }
    }
}
