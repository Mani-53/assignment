import React from "react";

function Nav() {
    return (
        <div className="nav">

            <div id="navimage">
                <img src="restaurant-logo.png" alt="logo" id="navlogo" />
            </div>

            <div>
                <ul id="navul">
                    <li><a href="#">Home</a></li>
                    <li id="menu"><a href="#">Menu</a>
                        <div id="menudiv">
                            <ul id="menuul">
                                <li className="menuli">Breakfast</li>
                                <li className="menuli">Lunch</li>
                                <li className="menuli">Dinner</li>
                                <li className="menuli">Snacks</li>
                                <li className="menuli">Appetizer</li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="#dishes">Dishes</a></li>
                    <li><a href="#maincontact">Contact</a></li>
                </ul>
            </div>

        </div>
    )
}

export default Nav;