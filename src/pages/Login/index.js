import React from "react";
import styled, {css} from "styled-components";
import loginLogo from "../../component/images/Logo2.png"
import {IoLogoFacebook} from "react-icons/all";
import {Span} from "../../component/SingPopUp/SingPopUp.Styled";

const Login = () => {

    return (
        <Container>
            <Logo src={loginLogo}/>
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
                <LoginBtn>
                    <Button shape="blackBtn">Login</Button>
                </LoginBtn>
            </Form>
            <Join>
                <p>Don't have ac account?</p>
                <span>Join</span>
            </Join>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 750px;
  margin: 0 auto;
  
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

const Or = styled.div`
  margin: 16px 0;
  text-transform: uppercase;
  font-size: 12px;
  color: #000;
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

const Email = styled.div`
  margin: 0 0 5px;
  font-size: 15px;
  color: #000;
  font-weight: 500;
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

const Password = styled(Email)`

`;

const PasswordFind = styled(Span)`
  height: 19px;
  cursor: pointer;
`;

const LoginBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
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


export default Login;