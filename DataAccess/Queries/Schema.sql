CREATE LOGIN RecipeAppLogin WITH PASSWORD = 'STRONG_PASSWORD';

CREATE DATABASE RecipeAppDB;

USE RecipeAppDB;
CREATE USER RecipeAppUser FOR LOGIN RecipeAppLogin;

ALTER ROLE db_datareader ADD MEMBER RecipeAppUser;
ALTER ROLE db_datawriter ADD MEMBER RecipeAppUser;

CREATE TABLE Users (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Username NVARCHAR(50) NOT NULL UNIQUE,
    Email NVARCHAR(100) NULL,
    PasswordHash VARBINARY(64) NOT NULL,
    PasswordSalt VARBINARY(128) NOT NULL,
    IsActive BIT DEFAULT 1,
    LoginAttempts INT DEFAULT 0,
    LastLogin DATETIME2 NULL,
    CreatedAt DATETIME2 DEFAULT GETDATE()
);

CREATE TABLE Recipes (
    RecipeId int IDENTITY(1,1) PRIMARY KEY,
    Title varchar(256),
    Description varchar(256),
);

CREATE TABLE RecipeSteps (
    RecipeId int,
    StepIndex int,
    Details varchar(256),
	PRIMARY KEY (RecipeId, StepIndex),
	FOREIGN KEY (RecipeId) REFERENCES Recipes(RecipeId)
);