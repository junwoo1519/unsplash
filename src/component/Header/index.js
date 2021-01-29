import React from "react";
import styled, {css} from "styled-components";
import SearchBox from "../SearchBox";
import {HiDotsHorizontal} from "react-icons/hi";
import logo from "../images/Logo.png"
import SingPopup from "../SingPopUp";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../../redux/reducer";

const Header = () => {

    const dispatch = useDispatch();
    const {popup} = useSelector(state => state);

    const openPopup = () => {
        dispatch(Action.Creators.updateState({
            popup: true
        }))
    }

    const closePopup = () => {
        dispatch(Action.Creators.updateState({
            popup: false
        }))
    }

    return (
        <Container>
            <Img src={logo}/>
            <SearchBox shape="round"/>
            <Menu>
                <p>Brands</p>
                <p>Explore</p>
                <span><HiDotsHorizontal/></span>
            </Menu>
            <User>
                <Button shape="white" onClick={openPopup}>Submit a photo</Button>

                {
                    popup && <SingPopup closePopup={closePopup}/>
                }

                <Button shape="login"> <Login to={"/login"}>Login</Login></Button>
                <Button shape="green">Join free</Button>
            </User>
        </Container>
    )

}

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 62px;
  color: #767676;
`;

const Img = styled.img`
  width: 164px;
  height: auto;
  margin: 0 18px 0 0;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  padding: 0 36px;
  font-size: 14px;

  p {
    padding: 20px 12px;
    transition: .3s;
    cursor: pointer;

    &:hover {
      color: #000;
    }
  }

  span {
    padding: 0 12px;
    transition: .3s;
    cursor: pointer;
    font-size: 20px;

    &:hover {
      color: #000;
    }
  }
`;

const User = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  color: #767676;
  background-color: transparent;
  border: none;
  font-size: 14px;
  padding: 0 11px;
  transition: .3s;
  height: 32px;
  cursor: pointer;
  position: relative;
  outline: 0;

  ${(props) => props.shape === "white" && css`
    border: 1px solid #cdcdcd;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    box-shadow: 0 1px 2px rgb(0 0 0 / 8%);
    margin-right: 45px;

    &:hover {
      color: #000;
      border: 1px solid #000;
    }
  `}

  ${(props) => props.shape === "green" && css`
    background-color: #3cb46e;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    color: #fff;
    margin-left: 20px;

    &:hover {
      background-color: #37a766;
    }
  `}

  ${(props) => props.shape === "login" && css`
    :before {
      position: absolute;
      top: 0;
      left: -18px;
      width: 1px;
      height: 32px;
      content: "";
      background-color: #d1d1d1;
    }
  `}
`;

const Login = styled(Link)`
  color: #767676;
  background-color: transparent;
  border: none;
  font-size: 14px;
  padding: 0 11px;
  transition: .3s;
  height: 32px;
  cursor: pointer;
  position: relative;
  outline: 0;

  &:hover {
    color: #000;
  }
`;

export default Header;