using DataAccess.Entities;

namespace DataAccess.Repositories
{
    public interface IUserRepository
    {
        Task AddAsync(UserEntity user);

        Task<UserEntity> GetAsync(int userId);
    }
}
