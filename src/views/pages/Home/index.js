import React from "react";
import styled from "styled-components";
import {Route, Switch} from "react-router-dom";
import List from "./List";
import Visual from "../../components/Home/Visual";

const Home = () => {

    return (
        <Container>
            <Visual/>
            <Switch>
                <Route path={"/"} component={List}/>
            </Switch>
        </Container>
    )
}

const Container = styled.div`
    
`;

export default Home;