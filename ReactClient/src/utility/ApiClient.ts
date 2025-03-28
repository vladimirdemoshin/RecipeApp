export const fetchData = async <T>(url: string): Promise<T> => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data: T = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Fetch error: ${(error as Error).message}`);
    }
};

export const addRecipe = async (data: AddRecipeModel): Promise<void> => {
  const url = `https://localhost:44325/api/v1/recipes/add`;
  await fetch(url, { 
    method: 'POST', 
    headers: {
       'Content-Type': 'application/json', 
    }, 
    body: JSON.stringify(data)
  });
}