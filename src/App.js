import React from "react";
import styled, {createGlobalStyle} from "styled-components";
import Header from "./component/Header";
import {Switch, Route} from "react-router-dom";

import Home from "./pages/Home";
import Following from "./pages/Following";
import Topic from "./component/Topic";

const App = () => {

    return (
        <Container>
            <GlobalStyled/>
            <Header/>
            <Topic/>
            <Switch>
                <Route exact path={"/"} component={Home}/>
                <Route path={"/following"} component={Following}/>

            </Switch>
        </Container>
    )
}

const Container = styled.div`

`;

const GlobalStyled = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    font-family: -apple-system, BlinkMacSystemFont, San Francisco, Helvetica Neue, Helvetica, Ubuntu, Roboto, Noto, Segoe UI, Arial, sans-serif;
  }

  img {
    max-width: 100%;
    vertical-align: top;
  }
`;

export default App;