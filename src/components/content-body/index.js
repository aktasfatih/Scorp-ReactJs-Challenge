import React, {useEffect } from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import {settitle} from '../../app/appSlicer';

function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(settitle("Home"));
    });
    return <h2>Home</h2>;
}

function Link1() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(settitle("Link1"));
    });
    return <h2>About</h2>;
}

function Link2() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(settitle("Link2"));
    });
    return <h2>Users</h2>;
}

export default function ContentBody(){
    return (
        <Switch>
            <Route path="/link2">
                <Link2 />
            </Route>
            <Route path="/link1">
                <Link1 />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    );
}
