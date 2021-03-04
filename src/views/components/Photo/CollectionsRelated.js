import React from "react";
import styled from "styled-components";
import Tags from "../Tags";

const CollectionsRelated = (props) => {

    const {
        preview_photos,
        user,
        title,
        total_photos = [],
        tags,
    } = props;

    return (
        <Container>
            <Title>
                Related collections
            </Title>
            <Thumb>
                <ThumbItemLeft>
                    <Image className={"lefts"}>
                        <img src={preview_photos.urls.regular} alt=""/>
                    </Image>
                </ThumbItemLeft>
                <ThumbItemRight>
                    <Image className={"rights"}>
                        <img src={preview_photos.urls.regular} alt=""/>
                    </Image>
                    <Image className={"rights"}>
                        <img src={preview_photos.urls.regular} alt=""/>
                    </Image>
                </ThumbItemRight>
            </Thumb>
            <Desc>
                <h3>{title}</h3>
                <p>{total_photos} photos · Curated by {user.name}</p>
            </Desc>
            <Tags tags={tags} limit={3}/>
        </Container>
    )
}

const Container = styled.div`
`;

const Title = styled.div`
  color: #343434;
  margin: 0 10%;
  font-size: 18px;
  font-weight: 400;
  padding: 60px 12px;
`;

const Thumb = styled.div`
  display: flex;
  border-radius: 9px;
  overflow: hidden;
`;

const ThumbItemLeft = styled.div`
  width: 70%;
`;

const ThumbItemRight = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 2px;
`;

const Image = styled.div`
  position: relative;

  &.lefts {
    padding-bottom: 100%;
  }

  &.rights {
    height: calc(50% - 1px);
    background-color: #eee;
  }

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    flex: 1;

    + img {
      margin-top: 2px;
    }
  }
`;

const Desc = styled.div`
  padding-top: 15px;

  h3 {
    font-size: 18px;
    color: #111;
    margin-bottom: 4px;
  }

  p {
    color: #767676;
    font-size: 14px;
  }
`;

export default CollectionsRelated;