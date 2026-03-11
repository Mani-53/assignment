import React from "react";
function Todo({ t, ind, del }) {
    React.useEffect(() => {
        console.log(t + ":is rendered")
        console.log(ind)
    })
    return (
        <li>{t}
            <button onClick={() => { del(ind) }}>Delete</button>
        </li>
    )
}
export default React.memo(Todo)