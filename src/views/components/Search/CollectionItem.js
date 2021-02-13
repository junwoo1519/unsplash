import React from "react";
import styled from "styled-components";
import Tags from "../Tags";

const CollectionItem = (props) => {

    const {
        preview_photos,
        user,
        title,
        total_photos = [],
        tags,
    } = props;

    return (
        <Container>
            <Thumb>
                <ThumbItemLeft>
                    <Image className={"left"}>
                        <img src={preview_photos[0].urls.regular} alt=""/>
                    </Image>
                </ThumbItemLeft>
                <ThumbItemRight>
                    <Image className={"right"}>
                        {
                            preview_photos[0] &&
                            <img src={preview_photos[1]?.urls.regular} alt=""/>
                        }
                    </Image>
                    <Image className={"right"}>
                        {
                            preview_photos[0] &&
                            <img src={preview_photos[2]?.urls.regular} alt=""/>
                        }
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

  &.left {
    padding-bottom: 100%;
  }

  &.right {
    height: calc(50% - 1px);
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

export default CollectionItem;