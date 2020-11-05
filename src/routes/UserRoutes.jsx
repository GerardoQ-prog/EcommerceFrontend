import React from 'react'

import {Switch,Route} from 'react-router-dom'
import Welcome from '../views/Welcome'

const UserRoutes = () => {
    return (
        <div>
            {/* <Appbar open={open} setopen={setopen}></Appbar> */}
            
           <Switch>
                <Route  exact path="/" component={Welcome}></Route>
                {/* <Route exact path="/anime" component={Anime}></Route>
                <Route exact path="/film" component={Film}></Route>
                <Route exact path="/descripcionanime" component={DescriptionA}></Route> */}
           </Switch> 
           {/* <DrawerR open={open} setopen={setopen}></DrawerR> */}
           
        {/* <footer></footer> */}
        </div>
    )
}

export default UserRoutes
