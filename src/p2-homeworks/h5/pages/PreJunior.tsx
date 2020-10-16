import React from "react";
import {HashRouter} from "react-router-dom";
import HW1 from "../../h1/HW1";
import HW2 from "../../h2/HW2";
import HW3 from "../../h3/HW3";
import HW4 from "../../h4/HW4";
import HW6 from "../../h6/HW6";
import HW7 from "../../h7/HW7";

function PreJunior() {
    return (
        <HashRouter>
            <div>
                <HW1/>
                <HW2/>
                <HW3/>
                <HW4/>
                <HW6/>
                <HW7/>
            </div>
        </HashRouter>
    );
}

export default PreJunior;