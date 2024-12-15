import React from "react";
import { useParams } from "react-router-dom";

export default function RecipePage () {
    const { id } = useParams();
    return (
        <div>
            "Welcome to recipe {id}"
        </div>
    );
}