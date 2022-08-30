using System.Runtime.CompilerServices;
using API.Entities;

namespace API.Services.Interfaces;

public interface ITokenService
{
    public Task<string> GenerateToken(User user);
    
}
