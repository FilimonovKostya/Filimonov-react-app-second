import React from "react";
import {Redirect, Route, Switch} from "react-router";
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import HW1 from "../h1/HW1";
import HW4 from "../h4/HW4";
import HW3 from "../h3/HW3";
import HW2 from "../h2/HW2";


export const PATH = {
    PRE_JUNIOR: "/pre-junior",

}

function Routes() {
    return (
        <div>

            <Switch>

                <Route path={"/"} exact render={() => <Redirect to={'PRE_JUNIOR'}/>}/>

                <Route path={'PRE_JUNIOR'} render={() => <PreJunior/>}/>
                <Route path={'/HW1'} exact render={() => <HW1/>}/>
                <Route path={'/HW2'} exact render={() => <HW2/>}/>
                <Route path={'/HW3'} exact render={() => <HW3/>}/>
                <Route path={'/HW4'} exact render={() => <HW4/>}/>

                у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу
                <Route exact render={() => <Error404/>}/>

            </Switch>
        </div>
    );
}

export default Routes;
