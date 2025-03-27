import React, { useState } from "react";
import { addRecipe } from "../../utility/ApiClient";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "state/store";
import { getText } from "../../utility/LanguageManager";
import { LanguageTextCode } from "../../models/LanguageTextCode";

export default function AddRecipeForm () {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [currentSteps, setCurrentSteps] = useState<string[]>([]);
    const [currentStepDescription, setCurrentStepDescription] = useState('');
    const language = useSelector((state: RootState) => state.language.value);

    const navigate = useNavigate();

    return (
        <form className="add-form" onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            addRecipe({
                title: title,
                description: description,
                steps: currentSteps.map(x => ({
                    details: x
                }))
            });
            alert("Recipe was added successfully!");
            navigate('/');
        }}>
            <div>
                <label>{getText(LanguageTextCode.EnterNameRecipe, language)}
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
            </div>
            <div>
                <label>Enter description
                    <textarea name="description" value={description} onChange={(event) => {
                        const newValue = event.target.value;
                        setDescription(newValue);
                    }}/>
                </label>
            </div>
            <div>
                {currentSteps.map((step, index) => {
                    return (
                        <div>
                            <h3>Step {index}</h3>
                            <div>
                                {step}
                            </div>
                        </div>
                    );
                })}

                <div>
                    <label>
                        Please add description of steps for your recipe
                    </label>
                    <textarea value={currentStepDescription} onChange={(e) => {
                        const value = e.target.value;
                        setCurrentStepDescription(value);
                    }}></textarea>
                    <input type="button" value={"Create step"} onClick={(e) => {
                        setCurrentSteps([... currentSteps, currentStepDescription]);
                        setCurrentStepDescription('');
                    }} />
                </div>
            </div>
            <div>
                <input type="submit" />
            </div>
        </form>
    );
}