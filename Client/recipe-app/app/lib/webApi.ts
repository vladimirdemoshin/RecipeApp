

export async function fetchRecipes() {
    const response = await fetch("http://localhost:5053/api/v1/recipes", {
        mode: 'no-cors',
        method: 'GET',
    });
    const json = await response.json();
    return json;
}

export async function fetchRecipe(recipeId: string) {
    const response = await fetch(`http://localhost:5053/api/v1/recipes/${recipeId}`, {
        mode: 'no-cors',
        method: 'GET',
    });
    const json = await response.json();
    return json;
}

export async function addRecipe() {
    const data = {
        Title: 'Test title'
    };
    const response = await fetch("http://localhost:57017/api/Recipe", {
        mode: 'no-cors',
        method: 'POST',
        body: JSON.stringify(data),
    });
    return response
}