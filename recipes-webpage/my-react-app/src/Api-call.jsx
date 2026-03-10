import React from "react";
function Recipes() {
    var [recipes, setrecipes] = React.useState([])
    fetch("http://dummyjson.com/recipes")
        .then((res) => { return res.json() })
        .then((data) => {
            setrecipes([...data.recipes])
        })
    return (
        <ul id="ul">
            {
                recipes.map((recipe) => {
                    return <li className="li">
                        <img src={recipe.image} alt="" id="image" />
                        <b>{recipe.name}</b>
                        <p>Rating:<i className="bi bi-fill-star"></i>{recipe.rating}</p>
                    </li>
                })
            }
        </ul>
    )
}
export default Recipes