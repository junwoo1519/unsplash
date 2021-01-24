import React from "react";
import styled, {css} from "styled-components";
import {GrFormClose, IoLogoFacebook} from "react-icons/all";
import singLogo from "../images/Logo2.png";
import {Span} from "./SingPopUp.Styled";

const SingPopup = ({closePopup}) => {

    return (
        <Container>
            <Content>
                <Logo src={singLogo}/>
                <h2>Login</h2>
                <h3>To submit a photo, login.</h3>
                <Button>
                    <FacebookIcon>
                        <IoLogoFacebook/>
                    </FacebookIcon>
                    <Facebook>Login with Facebook</Facebook>
                </Button>
                <Or>or</Or>
                <Form>
                    <Id>
                        <Email>Email</Email>
                    </Id>
                    <Input type="text"/>
                    <PasswordBox>
                        <Password>Password</Password>
                        <PasswordFind><span>Forgot your password?</span></PasswordFind>
                    </PasswordBox>
                    <Input type="password"/>
                    <Login>
                        <Button shape="blackBtn">Login</Button>
                    </Login>
                </Form>
                <Join>
                    <p>Don't have ac account?</p>
                    <span>Join</span>
                </Join>
                <ButtonClose onClick={closePopup}>
                    <GrFormClose/>
                </ButtonClose>
            </Content>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Content = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 900px;
  height: 650px;
  background-color: #fff;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  padding: 0 45px;

  h2 {
    margin-bottom: 8px;
    font-size: 28px;
    color: #000;
  }

  h3 {
    font-size: 15px;
    font-weight: 400;
    margin-bottom: 30px;
    color: #000;
  }

`;

const Or = styled.div`
  margin: 16px 0;
  text-transform: uppercase;
  font-size: 12px;
  color: #000;
`;

const Logo = styled.img`
  margin: 24px 0 16px;
  width: 64px;
  height: 64px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  height: 44px;
  width: 70%;
  background-color: #1778f2;
  border: none;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: .3s;

  &:hover {
    background-color: #166fe0;
  }

  ${(props) => props.shape === "blackBtn" && css`
    background-color: #000;

    &:hover {
      background-color: #171717;
    }
  `}
`;

const FacebookIcon = styled.div`
  font-size: 30px;
  color: #fff;
  background-color: transparent;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
`;

const Facebook = styled.div`
  margin-left: 10px;
  color: #fff;
  font-size: 15px;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Id = styled.div`
  width: 70%;
  text-align: left;
`;

const Input = styled.input`
  height: 44px;
  width: 70%;
  background-color: #e8f0fe;
  border: 1px solid #aaaaaa;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  text-align: left;
  padding: 0 10px;
  margin: 0 auto 24px auto;

  &:focus {
    outline: none;
  }
`;

const PasswordBox = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-between;
`;

const Login = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Email = styled.div`
  margin: 0 0 5px;
  font-size: 15px;
  color: #000;
  font-weight: 500;
`;

const Password = styled(Email)`

`;

const PasswordFind = styled(Span)`
  height: 19px;
  cursor: pointer;
`;

const Join = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: #000;
    font-size: 15px;
    font-weight: 500;
  }

  span {
    margin-left: 5px;
    font-size: 15px;
    color: #767676;
    border-bottom: 1px solid #767676;
    cursor: pointer;
  }
`;

const ButtonClose = styled.div`
  position: absolute;
  font-size: 30px;
  color: #767676;
  top: 0;
  right: 0;
  padding: 5px;
  cursor: pointer;
`;

export default SingPopup;