import React from "react";
function Contact() {
    return (
        <div id="maincontact">
            <div id="headingcontact">
                <h1>Contact Us</h1>
                <p>We would love to hear from you. Reach out to us anytime.</p>
            </div>
            <div id="addressinput">
                <div id="address">
                    <table>
                        <tbody>
                            <tr>
                                <td style={{ display: "flex", flex: "1" }}>
                                    <p><b>Address:</b></p>
                                </td>
                                <td>
                                    <p style={{ marginTop: "15px", lineHeight: "25px", marginBottom: "0px" }}>My Home restaurant at Dharmavaram</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>Phone:</b></p>
                                </td>
                                <td>
                                    <p>+91 96XXXXXX46</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>E-mail:</b></p>
                                </td>
                                <td>
                                    <p>
                                        myhome@gmail.com
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>Hours:</b></p>
                                </td>
                                <td>
                                    <p>9:00AM - 10:00PM</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="userinput">
                    <table>
                        <tbody>
                            <tr>
                                <td><b>Name</b></td><td className="inputtd"><input type="text" placeholder="Enter Your Name" />
                                </td>
                            </tr>
                            <tr>
                                <td><b>E-mail</b></td><td className="inputtd"><input type="text" placeholder="Enter Your E-mail" /></td>
                            </tr>
                            <tr>
                                <td id="text"><b>Feedback</b></td><td className="inputtd" ><textarea name="" id="" style={{ width: "180px", height: "70px" }} placeholder=""></textarea></td>
                            </tr>
                        </tbody>
                    </table>
                    <button id="send">Send Details</button>
                </div>
            </div>
        </div>
    )
}
export default Contact