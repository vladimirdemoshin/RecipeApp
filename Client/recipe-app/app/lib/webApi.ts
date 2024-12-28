export async function fetchRecipes() {
    const response = await fetch("http://localhost:57017/api/v1/recipes", {
        mode: 'no-cors',
        method: 'GET',
    });
    const json = await response.json();
    return json;
}

export async function fetchRecipe(recipeId: string) {
    const response = await fetch(`http://localhost:57017/api/v1/recipes/${recipeId}`, {
        mode: 'no-cors',
        method: 'GET',
    });
    const json = await response.json();
    return json;
}

export async function addRecipe(formData: FormData) {
    const response = await fetch("http://localhost:57017/api/v1/recipes/add", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData)),
    });
    return response
}

export async function addUser(formData: FormData) {
    const response = await fetch("http://localhost:57017/api/v1/users/add", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData)),
    });
    return response
}