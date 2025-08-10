export const getMyInfo = async () : Promise<{username: string} | null> => {
    const url = "https://localhost:44325/api/v1/me";
    const response = await fetch(url, {
        method: 'GET',
        credentials: 'include'
    });

    if (response.status === 401) {
        return null;
    }

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data: {username: string} = await response.json();
    return data;
}