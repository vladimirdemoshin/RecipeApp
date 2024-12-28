'use client'

import { FormEvent } from "react";

export interface AddRecipeFormProps {
    addCallback: (formData: FormData) => void,
}

export default function AddRecipeForm({addCallback} : AddRecipeFormProps) {
    return (
        <form onSubmit={(event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            debugger;
            const formData = new FormData(event.currentTarget);
            addCallback(formData);
        }}>
            <div>Fill info about your recipe</div>
            <div>
                <label>Name of recipe</label>
            </div>
            <div>
                <input type="text" id="name" name="name" placeholder="Type name"/>
            </div>
            <div>
                <label htmlFor="description">Description</label>
            </div>
            <div>
                <input type="text" id="description" name="description" placeholder="Type recipe"/>
            </div>
            <div>
                <button type="submit">Add</button>
            </div>
        </form>
    );
}