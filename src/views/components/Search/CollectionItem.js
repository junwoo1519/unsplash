import React from "react";
import styled from "styled-components";
import Tags from "../Tags";

const CollectionItem = (props) => {

    const {
        tags,
        cover_photo
    } = props;

    return (
        <Container>
            <Thumb>
                <ThumbItem>
                    <img src={cover_photo.urls.regular} alt=""/>
                </ThumbItem>
                <ThumbItem>
                    <img src={cover_photo.urls.regular} alt=""/>
                </ThumbItem>
                <ThumbItem>
                    <img src={cover_photo.urls.regular} alt=""/>
                </ThumbItem>
            </Thumb>
            <Desc>
                <h3>korea</h3>
                <p>11 photos · Curated by Do Un Kwon</p>
            </Desc>
            <Tags tags={tags} limit={3}/>
        </Container>
    )
}

const Container = styled.div`

`;

const Thumb = styled.div`
    
`;

const ThumbItem = styled.div`
    
`;

const Desc = styled.div`
    
`;

export default CollectionItem;