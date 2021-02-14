import React from "react";
import styled from "styled-components";
import {IconFollow} from "../../../icons";

const UserItem = (props) => {

    const {
        name,
        username,
        profile_image,
        photos
    } = props;

    return (
        <Container>
            <Head>
                <Avatar>
                    <img src={profile_image.medium} alt=""/>
                </Avatar>
                <Info>
                    <h3>{name}</h3>
                    <p>{username}</p>
                </Info>
            </Head>
            <Thumb>
                {
                    photos.map((item, i) => (
                        <Image>
                            <img src={item.urls.thumb} alt=""/>
                        </Image>
                    ))
                }
                <img src="" alt=""/>
                <img src="" alt=""/>
                <img src="" alt=""/>
            </Thumb>
            <Follow>
                <IconFollow/>
                Follow
            </Follow>
        </Container>
    )
}

const Container = styled.div`
  border: 1px solid #d1d1d1;
  border-radius: 9px;
  overflow: hidden;
  transition: .3s;
  padding: 15px;

  &:hover {
    border-color: #111;
  }
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const Avatar = styled.div`
  margin-right: 15px;

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
`;

const Info = styled.div`
  h3 {
    font-size: 18px;
    color: #111;
    margin-bottom: 4px;
  }

  p {
    font-size: 14px;
    color: #767676;
  }
`;

const Thumb = styled.div`
  display: flex;
  margin-left: -4px;
  margin-right: -4px;
  margin-bottom: 15px;
`;

const Image = styled.div`
  position: relative;
  width: 33.3333%;
  padding-bottom: 24%;
  margin: 0 4px;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

`;

const Follow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  font-size: 14px;
  color: #767676;
  border: 1px solid #d1d1d1;
  border-radius: 4px;
  transition: .2s;

  &:hover {
    border-color: #111;
    color: #111;
    cursor: pointer;

    svg {
      opacity: 1;
    }
  }

  svg {
    width: 18px;
    margin-right: 8px;
    opacity: .5;
  }

`;


export default UserItem;