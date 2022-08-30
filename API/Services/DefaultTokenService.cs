using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using API.Entities;
using API.Services.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;

namespace API.Services;

public class DefaultTokenService : ITokenService
{

    private readonly UserManager<User> _userManager;
    private readonly IConfiguration _config;

    public DefaultTokenService(UserManager<User> userManager, IConfiguration config)
    {
        _userManager = userManager;
        _config = config;
    }

    public async Task<string> GenerateToken(User user)
    {

        // add Email + UserName to claims list
        var claims = new List<Claim> {
            new Claim(ClaimTypes.Email, user.Email),
            new Claim(ClaimTypes.Name, user.UserName)
        };

        // add each user role to claims list
        var roles = await _userManager.GetRolesAsync(user);
        foreach (var role in roles)
        {
            claims.Add(new Claim(ClaimTypes.Role, role));   
        }

        // create encryption key
        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["JWTSettings:TokenKey"]));
        // generate signin credentials from encryption key
        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512);
        // set token options
        var tokenOptions = new JwtSecurityToken(
            issuer: null, 
            audience: null,
            claims: claims, 
            expires: DateTime.Now.AddDays(7),
            signingCredentials: creds
        );


        return new JwtSecurityTokenHandler().WriteToken(tokenOptions);
    }
}
