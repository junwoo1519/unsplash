import React from "react";
import styled from "styled-components";
import PhotoItem from "./PhotoItem";
import {composeList} from "../../../lib/common";
import {Link} from "react-router-dom";

const PhotoList = ({list = []}) => {

    const listGroups = composeList(list);

    return (
        <Container>
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
        </Container>
    )
}

const Container = styled.div`
  display: flex;
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

export default PhotoList;