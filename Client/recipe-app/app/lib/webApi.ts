

export async function fetchRecipes() {
    const response = await fetch("http://localhost:57017/api/Recipe", {mode: 'no-cors'});
    const json = await response.json();
    return json;
}