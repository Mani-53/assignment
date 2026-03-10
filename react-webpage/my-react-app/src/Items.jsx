import React from "react";
function Items() {
    var [items, setitem] = React.useState([])
    React.useEffect(() => {
        fetch("https://dummyjson.com/recipes")
            .then((res) => { return res.json() })
            .then((data) => { setitem(data.recipes) })
    }, [])
    return (
        <div id="mainitemsdiv">
            <div id="dishes">
                <h1>Dishes here...</h1>
            </div>
            {
                items.map((item) => {
                    return (
                        <div key={item.id} className="itemsdiv">

                            <table>
                                <thead></thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img src={item.image} alt="" id="itemsimage" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="td">
                                            <strong>{item.name}</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="td">
                                            <strong>MealType:{item.mealType[0]}</strong>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="td">
                                            <em>Rating:<i className="bi bi-star-fill"></i>{item.rating}</em>

                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Items