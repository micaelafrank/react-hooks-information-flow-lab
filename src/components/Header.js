
import React from "react";

function HeaderChild({ isDarkMode, onDarkModeClick }){ 
    return(
        <header>
            <h2>Shopster</h2>
            <button onClick={onDarkModeClick}>
                {isDarkMode ? "Light" : "Dark"} Mode
            </button>
        </header>
    );
}

export default HeaderChild;
