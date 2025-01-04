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