import React from "react";
import styled from "styled-components";
import SearchBox from "../../component/SearchBox";
import {HomeSpan} from "../../component/Home/HomeSpan.Styled";
import imgBack from "../../component/images/back.jpg"
import {Route, Switch} from "react-router-dom";
import List from "./List";

const Home = () => {

    return (
        <Container>
            <Img src={imgBack}/>
            <Mid>
                <h1>Unsplash</h1>
                <h2>The internet’s source of <span>freely-usable images.</span><br/>
                    Powered by creators everywhere.</h2>
                <SearchBox title="title"/>
                <p>Trending: <span>flower</span>, <span>wallpapers</span>, <span>backgrounds</span>, <span>happy</span>, <span>love</span>
                </p>
            </Mid>
            <Bot>
                <div><span>Photo of the Day</span> by <span>CHUTTERSNAP</span></div>
                <div>Read more about the <span>Unsplash License</span></div>
                <span>Create your website today.</span>
            </Bot>
            <Switch>
                <Route path={"/"} component={List}/>
            </Switch>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 600px;
  position: relative;
`;

const Img = styled.img`
  position: absolute;
  z-index: -100;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Mid = styled(HomeSpan)`
  color: #fff;
  width: 48%;
  height: 550px;
  margin: 0 auto;
  padding: 144px 12px 152px;

  h1 {
    font-size: 46px;
    margin-bottom: 16px;
  }

  h2 {
    font-size: 18px;
    font-weight: 400;
    line-height: 1.5;
    margin: 0 0 24px 0;

    span {
      border-bottom: 1px solid hsla(0, 0%, 100%, .8);
      transition: .3s;

      &:hover {
        border-color: #fff;
      }
    }
  }

  p {
    margin-top: 16px;
    font-size: 15px;
    transition: .3s;
  }
`;

const Bot = styled(HomeSpan)`
  display: flex;
  justify-content: space-between;
  flex: 1;
  padding: 20px;
  font-size: 13px;
  color: #767676;
`;

export default Home;