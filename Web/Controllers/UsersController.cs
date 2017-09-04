using Data;
using Interfaces.Data;
using Interfaces.Entities;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Controllers
{
    [Route("api/[controller]")]
    public class UsersController
    {
        private IUserStore UserStore = new UserStore();


        [HttpGet("All")]
        public async Task<IEnumerable<Interfaces.Json.Users>> GetAllUsersAsync()
        {
            var users = await UserStore.GetAllAsync();

            return users.Select(u => new Interfaces.Json.Users
            {
                Email = u.Email,
                Firstname = u.Firstname,
                Lastname = u.Lastname,
                UserId = u.UserId,
                Username = u.Username
            });
        }
    }
}
