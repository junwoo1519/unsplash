import React from "react";
import styled from "styled-components";
import {Avatar} from "./PhotoItem.Styled";
import {TiHeartFullOutline} from "react-icons/ti";
import {BsBookmarkPlus} from "react-icons/bs";
import {FiDownload} from "react-icons/fi";
import {IoIosShareAlt} from "react-icons/io";
import {AiFillInfoCircle} from "react-icons/all";

const Photo = ({photo}) => {

    return (
        <Container>
            <Header>
                <Desc>
                    <Avatar>
                        <img src={photo.user.profile_image.small} alt=""/>
                    </Avatar>
                    <Name>
                        <User>
                            <p>{photo.user.name}</p>
                        </User>
                        <Username>
                            <p>@{photo.user.username}</p>
                        </Username>
                    </Name>
                </Desc>
                <Add>
                    <Likes>
                        <TiHeartFullOutline/>
                    </Likes>
                    <Collection>
                        <BsBookmarkPlus/>
                    </Collection>
                    <Download>
                        <p>Download</p>
                        <DownloadBtn>
                            <FiDownload/>
                        </DownloadBtn>
                    </Download>
                </Add>
            </Header>
            <Thumb>
                <img src={photo.urls.small} alt=""/>
            </Thumb>
            <Share>
                <ShareBtn>
                    <IoIosShareAlt/>
                    <p>Share</p>
                </ShareBtn>
                <InfoBtn>
                    <AiFillInfoCircle/>
                    <p>Info</p>
                </InfoBtn>
            </Share>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  padding: 9px 12px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  display: flex;
`;

const Add = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #767676;
`;

const Likes = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  border: 1px solid #d7d7d7;
  background-color: transparent;
  padding: 7px 9px;
  font-size: 20px;
  color: #767676;
  border-radius: 5px;
  box-shadow: 1px 1px 1px #f3f3f3;
  transition: .3s;
  cursor: pointer;

  &:hover {
    color: #000;
    border-color: #000;
  }
`;

const Collection = styled(Likes)`

`;

const Download = styled.div`
  display: flex;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #d7d7d7;
    box-shadow: 1px 1px 1px #f3f3f3;
    background-color: transparent;
    padding: 7px 9px;
    font-size: 14px;
    color: #767676;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    transition: .3s;
    cursor: pointer;

    &:hover {
      color: #000;
      border-color: #000;
    }

  }
`;

const DownloadBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #d7d7d7;
  box-shadow: 1px 1px 1px #f3f3f3;
  background-color: transparent;
  padding: 7px 9px;
  font-size: 20px;
  color: #767676;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  transition: .3s;
  cursor: pointer;

  &:hover {
    color: #000;
    border-color: #000;
  }
`;

const Name = styled.div`

`;

const User = styled.div`
  font-size: 15px;
  color: #111111;
`;

const Username = styled.div`
  font-size: 11px;
  color: #767676;
`;

const Thumb = styled.div`
  margin: 0 auto;
  flex: 1;
`;

const Share = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const ShareBtn = styled(Likes)`
  margin-top: 20px;

  p {
    margin-left: 5px;
    font-size: 14px;
  }
`;

const InfoBtn = styled(ShareBtn)`

`;

export default Photo;