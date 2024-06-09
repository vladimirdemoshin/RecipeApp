export default function RecipeList() {
    const recipes = [
        {
            id: 1,
            title: "Pizza"
        },
        {
            id: 2,
            title: "Pasta with salmon"
        },
    ];
    return (
        <>
            {
                recipes.map(r =>
                    <div>{r.title}</div>
                )
            }
        </>
    );
}