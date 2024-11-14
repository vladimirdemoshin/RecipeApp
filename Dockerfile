#See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 5053

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src

COPY ["DataAccess/DataAccess.csproj", "DataAccess/"]
COPY ["WebAPI/RecipeApp.WebAPI.csproj", "WebAPI/"]

RUN dotnet restore "WebAPI/RecipeApp.WebAPI.csproj"

COPY . .
WORKDIR "/src/WebAPI"
RUN dotnet build "RecipeApp.WebAPI.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "RecipeApp.WebAPI.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "RecipeApp.WebAPI.dll"]