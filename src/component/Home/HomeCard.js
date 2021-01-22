import React from "react";
import styled from "styled-components";
import {TiHeartFullOutline} from "react-icons/ti";
import {BsBookmarkPlus} from "react-icons/bs";
import {FiDownload} from "react-icons/fi";
import cn from "classnames";
import {HomeCardStyled} from "./HomeCard.Styled";

const HomeCard = (props) => {

    const {
        user,
        urls
    } = props

    return (
        <Container>
            <Thumb>
                <img src={urls.regular} alt=""/>
            </Thumb>
            <View className={cn("View")}>
                <Desc>
                    <Avatar>
                        <img src={user.profile_image.small} alt=""/>
                    </Avatar>
                    <Info>
                        <p>{user.username}</p>
                    </Info>
                </Desc>
                <Add>
                    <Likes>
                        <TiHeartFullOutline/>
                    </Likes>
                    <Collection>
                        <BsBookmarkPlus/>
                    </Collection>
                </Add>
                <Download>
                    <FiDownload/>
                </Download>
            </View>
        </Container>
    )
}

const Container = styled.div`
  position: relative;

  &:hover {
    .View {
      display: block;
      background-color: rgb(0, 0, 0, .1);
      opacity: 1;
    }
  }
`;

const Thumb = styled.div`

  img {
    height: 400px;
    width: 100%;
    object-fit: cover;
  }
`;

const View = styled.div`
  position: absolute;
  transition: .2s;
  opacity: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Desc = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0,), rgba(0, 0, 0, .23) 100%);
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  left: 0;
  bottom: 10px;
  padding: 16px;
`;

const Avatar = styled.div`
  margin-right: 10px;

  img {
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }
`;

const Info = styled.div`
  text-transform: capitalize;
  font-size: 15px;
  font-weight: 500;
  color: #e5e5e5;
  cursor: pointer;
  transition: .3s;

  &:hover {
    color: #fff;
  }
`;

const Add = styled.div`
  display: flex;
  position: absolute;
  top: 20px;
  right: 20px;
`;

const Likes = styled(HomeCardStyled)`

`;

const Collection = styled(HomeCardStyled)`

`;

const Download = styled(HomeCardStyled)`
  position: absolute;
  bottom: 27px;
  right: 15px;

`;

export default HomeCard;