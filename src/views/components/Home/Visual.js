import React from "react";
import styled from "styled-components";
import SearchBox from "../SearchBox";
import {Highlight} from "../../Styled/Common.Styled";

const Visual = () => {

    return (
        <Container>
            <Content>
                <h1>Unsplash</h1>
                <h2>The internet’s source of <Highlight>freely-usable images.</Highlight><br/>
                    Powered by creators everywhere.</h2>
                <SearchBox shape="square"/>
                <p>Trending: <Highlight>flower</Highlight>, <Highlight>wallpapers</Highlight>, <Highlight>backgrounds</Highlight>, <Highlight>happy</Highlight>, <Highlight>love</Highlight>
                </p>
            </Content>
            <License>
                <div><Highlight>Photo of the Day</Highlight> by <Highlight>CHUTTERSNAP</Highlight></div>
                <div>Read more about the <Highlight>Unsplash License</Highlight></div>
                <Highlight>Create your website today.</Highlight>
            </License>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 600px;
  position: relative;
  background: url("https://images.unsplash.com/photo-1604906843532-abe1da4289af?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1994&q=80") 50% / cover no-repeat;
`;

const Content = styled.div`
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

const License = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  padding: 20px;
  font-size: 13px;
  color: #767676;
`;


export default Visual;