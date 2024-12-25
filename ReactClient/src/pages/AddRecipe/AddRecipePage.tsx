import React, { useState } from "react";
import { addRecipe } from "../../utility/ApiClient";
import { useNavigate } from "react-router-dom";

export default function AddRecipePage () {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        addRecipe({
            title: title,
            description: description,
        });
        alert("Recipe was added successfully!");
        navigate('/');
    };

    return (
        <div>
            <form className="add-form" onSubmit={handleSubmit}>
                <label>Enter name of recipe
                    <input 
                        type="text" 
                        name="title" 
                        value={title}
                        onChange={(event) => {
                            const newValue = event.target.value;
                            setTitle(newValue);
                        }}
                    />
                </label>
                <label>Enter description
                    <textarea name="description" value={description} onChange={(event) => {
                        const newValue = event.target.value;
                        setDescription(newValue);
                    }}/>
                </label>
                <input type="submit" />
            </form>
        </div>
    );
}