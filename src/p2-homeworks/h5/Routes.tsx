import React from "react";
import {Redirect, Route, Switch} from "react-router";
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import Junior from "./pages/Juinior";
import JuniorPlus from "./pages/JuniorPlus";


export const PATH = {
    PRE_JUNIOR: "/pre-junior",
    JUNIOR: '/junior',
    JUNIORPLUS: '/juniorPlus',
}

function Routes() {
    return (
        <div>

            <Switch>

                <Route path={"/"} exact render={() => <Redirect to={'PRE_JUNIOR'}/>}/>

                <Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>
                <Route path={PATH.JUNIOR} exact render={() => <Junior/>}/>
                <Route path={PATH.JUNIORPLUS} exact render={() => <JuniorPlus/>}/>


                у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу
                <Route  render={() => <Error404/>}/>

            </Switch>
        </div>
    );
}

export default Routes;
