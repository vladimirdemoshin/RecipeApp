using Contract.Options;
using DataAccess.Context;
using DataAccess.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace DataAccess.Repositories
{
    public class UserRepository(IOptions<DataAccessOptions> dataAccessOptions) : IUserRepository
    {
        private readonly string _connectionString = dataAccessOptions.Value.ConnectionString;

        public async Task AddAsync(UserEntity user)
        {
            using var context = new DataContext(_connectionString);
            await context.Users.AddAsync(user);
            context.SaveChanges();
        }

        public async Task<UserEntity> GetAsync(string username)
        {
            using var context = new DataContext(_connectionString);
            var user = await context.Users
                .Where(r => r.Username == username)
                .FirstAsync();
            return user;
        }
    }
}
