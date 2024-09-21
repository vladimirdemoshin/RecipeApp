import { addRecipe } from "@/app/lib/webApi";

export default function AddRecipePage() {

    async function addRecipeAction(form: FormData) {
        'use server';
        await addRecipe(form);
      }

    // async function onSubmit(event: FormEvent<HTMLFormElement>) {
    //     event.preventDefault()
     
    //     const formData = new FormData(event.currentTarget)
    //     const response = await fetch('/api/submit', {
    //       method: 'POST',
    //       body: formData,
    //     })
     
    //     // Handle response if necessary
    //     const data = await response.json()
    //     console.log(data);
    //   }


    return (
        <form action={addRecipeAction}>
            <div>Fill info about your recipe</div>
            <div>
                <label>Title of recipe</label>
            </div>
            <div>
                <input type="text" id="Title" name="Title" placeholder="Type title"/>
            </div>
            <div>
                <label htmlFor="Description">Description</label>
            </div>
            <div>
                <input type="text" id="description" name="Description" placeholder="Type recipe"/>
            </div>
            <div>
                <button type="submit">Add</button>
            </div>
        </form>
    );
}