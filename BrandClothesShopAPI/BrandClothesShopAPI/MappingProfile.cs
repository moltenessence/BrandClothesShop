using AutoMapper;
using BrandClothesShopAPI.Models;
using Core.Models;


namespace BrandClothesShopAPI
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<RegistrationModel, User>()
                .ForMember(dst => dst.Email, opt => opt.MapFrom(src => src.Email))
                .ForMember(dst => dst.Username, opt => opt.MapFrom(src => src.Username))
                .ForMember(dst => dst.Password, opt => opt.MapFrom(src => src.Password))
                .ForMember(dst => dst.UserId, opt => opt.Ignore())
                .ForMember(dst => dst.Orders, opt => opt.Ignore());

            CreateMap<User, AuthenticateResponse>()
                .ForMember(dst => dst.Email, opt => opt.MapFrom(src => src.Email))
                .ForMember(dst => dst.Username, opt => opt.MapFrom(src => src.Username))
                .ForMember(dst => dst.Id, opt => opt.MapFrom(src => src.UserId))
                .ForMember(dst => dst.Token, opt => opt.Ignore())
                .ForMember(dst => dst.RefreshToken, opt => opt.Ignore());
        }

    }
}