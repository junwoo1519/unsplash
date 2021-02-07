import React from "react";
import styled from "styled-components";
import PhotoItem from "./PhotoItem";
import {composeList} from "../../../lib/common";

const PhotoList = ({list}) => {

    const listGroups = composeList(list);

    return (
        <Container>
            {
                listGroups.map((group, index) => (
                    <Group>
                        {
                            group.map((item, index) => (
                                <Col key={index}>
                                    <PhotoItem {...item}/>
                                </Col>
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
  padding: 12px;
`;

export default PhotoList;