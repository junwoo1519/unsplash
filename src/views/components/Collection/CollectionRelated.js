import React from "react";
import styled from "styled-components";
import {composeList} from "../../../lib/common";
import {Link} from "react-router-dom";
import PhotoItem from "../Photo/PhotoItem";

const CollectionRelated = ({listRelated}) => {

    const listGroups = composeList(listRelated);

    return (
        <Container>
            <Title>
                Related photos
            </Title>
            <PhotoList>
                {
                    listGroups.map((group, i) => (
                        <Group key={i}>
                            {
                                group.map((item, i) => (
                                    <Link to={`/photo/${item.id}`} key={i}>
                                        <Col key={i}>
                                            <PhotoItem {...item}/>
                                        </Col>
                                    </Link>
                                ))
                            }
                        </Group>
                    ))
                }
            </PhotoList>
        </Container>
    )
}

const Container = styled.div`
`;

const Title = styled.div`
  color:#343434;
  margin: 0 10%;
  font-size: 18px;
  font-weight: 400;
  padding: 60px 12px;
`;

const PhotoList = styled.div`
  display: flex;
  padding: 0 10%;
  margin-left: -12px;
  margin-right: -12px;
`;

const Group = styled.div`
  width: 33.3333%;
`;

const Col = styled.div`
  cursor: pointer;
  margin: 12px;
`;

export default CollectionRelated;