import React from "react";
import "./App.css"

const Recipe = ({title , cals, image, ingredients, link}) => {
    return(
        <div className="each-recipe">
            <h1>{title}</h1>
            <p>{cals}</p>
            <img src={image} alt=""/>
            <ol>{ingredients.map(ingredients =>
                <li>{ingredients.text}</li>)}</ol>

            <a href={link}>Link to Recipe</a>
        </div>
    )
}

export default Recipe;