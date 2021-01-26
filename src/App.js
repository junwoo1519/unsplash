import React from "react";
import styled, {createGlobalStyle} from "styled-components";
import Header from "./component/Header";
import {Switch, Route} from "react-router-dom";

import Home from "./pages/Home";
import Following from "./pages/Following";
import Topics from "./component/Topics";
import Login from "./pages/Login";
import Detail from "./pages/Home/Detail";
import Search from "./pages/Home/Search";

const App = () => {

    return (
        <Container>
            <GlobalStyled/>
            {Login.pathname !== "/login" && <Header/>}
            <Topics/>

            <Switch>
                <Route exact path={"/"} component={Home}/>
                <Route path={"/detail"} component={Detail}/>
                <Route path={"/following"} component={Following}/>
                <Route path={`/login`} component={Login}/>
                <Route path={"/search/:query"} component={Search}/>
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