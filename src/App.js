import React from "react";
 import {CssBaseLine,Grid} from '@material-ui/core';
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";


const App =()=>{
    return(
        <div>
            <CssBaseLine/>
            <Header/>

            <Grid container spacing={3} style={{width}}></Grid>
            <h1>Hello,World!</h1>
        </div>
    );
}

export default App;