import React from "react";
import {TiHeartFullOutline} from "react-icons/ti";
import {BsBookmarkPlus} from "react-icons/bs";
import {FiDownload} from "react-icons/fi";
import cn from "classnames";
import {Add, Avatar, Collection, Container, Desc, Download, Info, Likes, Thumb, View,} from "./PhotoItem.Styled";

const PhotoItem = ({user, urls}) => {

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

export default PhotoItem;