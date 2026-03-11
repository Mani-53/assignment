import React, { useEffect } from "react";
import Todo from "./Todo";
function Todolist() {
    var [todos, settodos] = React.useState(['reading books', 'watcing movies', 'playing free fire'])
    useEffect(() => {
        document.getElementById("input").focus()

    }, [])

    function value() {
        settodos([...todos, document.getElementById("input").value])
    }
    var deletetodo = function (index) {
        var temp = [...todos]
        temp.splice(index, 1)
        settodos([...temp])
    }
    return (
        <div>
            <input type="text" placeholder="Enter todo" id="input" />
            <button onClick={() => { value() }}>Add todo</button>
            <ul>
                {
                    todos.map((todo, i) => {
                        return (<Todo key={todo} t={todo} ind={i} del={deletetodo} />)
                    })
                }
            </ul>
        </div>
    )
}
export default Todolist