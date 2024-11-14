# RecipeApp

# setup

docker compose up -d
docker compose down



docker build -f "D:\repos\RecipeApp\WebAPI\Dockerfile" --force-rm -t recipeappwebapi:dev --target base  --label "com.microsoft.created-by=visual-studio" --label "com.microsoft.visual-studio.project-name=RecipeApp.WebAPI" "D:\repos\RecipeApp\WebAPI"
docker run -dt -v "C:\Users\Vladimir\vsdbg\vs2017u5:/remote_debugger:rw" -v "C:\Users\Vladimir\AppData\Roaming\Microsoft\UserSecrets:/root/.microsoft/usersecrets:ro" -v "C:\Users\Vladimir\AppData\Roaming\ASP.NET\Https:/root/.aspnet/https:ro" -v "D:\repos\RecipeApp\WebAPI:/app" -v "D:\repos\RecipeApp\WebAPI:/src/" -v "C:\Users\Vladimir\.nuget\packages\:/root/.nuget/fallbackpackages2" -v "C:\Program Files (x86)\Microsoft Visual Studio\Shared\NuGetPackages:/root/.nuget/fallbackpackages" -e "ASPNETCORE_LOGGING__CONSOLE__DISABLECOLORS=true" -e "ASPNETCORE_ENVIRONMENT=Development" -e "ASPNETCORE_URLS=https://+:443;http://+:80" -e "DOTNET_USE_POLLING_FILE_WATCHER=1" -e "NUGET_PACKAGES=/root/.nuget/fallbackpackages2" -e "NUGET_FALLBACK_PACKAGES=/root/.nuget/fallbackpackages;/root/.nuget/fallbackpackages2" -P --name RecipeApp.WebAPI --entrypoint tail recipeappwebapi:dev -f /dev/null