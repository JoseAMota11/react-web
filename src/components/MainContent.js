import React from "react";
// import bgLogo from '../reactjs-icon.png';

export default function MainContent(){
    return (
        <main className="Container">
            <h1 className="Title">Fun facts about React</h1>
            <ul className="list-container">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
           <div className="bg-img"></div>
        </main>
    )
}