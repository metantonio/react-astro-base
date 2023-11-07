import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.jsx";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import { Suspense, lazy } from "react";

import ScrollToTop from "../components/scrollToTop.js";


import injectContext from "../store/appContext.jsx";

import { Navbar2 } from "../components/Navbar2/navbar2.jsx";
//import Error404 from "../components/404/404.jsx";

import Test from "../components/LandingTest.jsx";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";
    const { store, actions } = useContext(Context)

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    {/* {store.logOutConfirmation ? <Navbar2 /> : <></>} */}
                    <Navbar2 />
                    {/* {store.logOutConfirmation ? <IAInput /> : <></>} */}
                    <Suspense fallback={<div className="spinner-border text-primary" />}>
                        <Switch>
                            <Route exact path="/">
                                <Test />
                            </Route>
                            {/* <Route exact path="*">
                                <Error404 />
                            </Route> */}
                        </Switch>
                    </Suspense>
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
