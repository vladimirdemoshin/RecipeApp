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
  