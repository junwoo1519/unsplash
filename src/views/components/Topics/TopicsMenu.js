import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import {BsChevronLeft, BsChevronRight} from "react-icons/bs";
import {TopicItem} from "./TopicItem.Styled";

const TopicsMenu = ({topics}) => {

    const topicItemsRef = useRef(topics);
    const trackRef = useRef();
    const [scrollLeft, setScrollLeft] = useState(0);
    const [maxScroll, setMaxScroll] = useState(0);

    useEffect(() => {
        topicItemsRef.current.addEventListener('scroll', function () {
            setScrollLeft(topicItemsRef.current.scrollLeft);
        })
        setMaxScroll(Math.floor(trackRef.current.getBoundingClientRect().width - topicItemsRef.current.getBoundingClientRect().width));
    }, [topics])

    const onClickLeft = () => {
        topicItemsRef.current.scrollLeft = Math.max(scrollLeft - 200, 0);
    }

    const onClickRight = () => {
        topicItemsRef.current.scrollLeft = Math.min(scrollLeft + 200, maxScroll);
    }

    return (
        <Container>
            {
                scrollLeft > 0 &&
                <ButtonLeft onClick={onClickLeft}>
                    <BsChevronLeft/>
                </ButtonLeft>
            }

            {
                scrollLeft < maxScroll &&
                <ButtonRight onClick={onClickRight}>
                    <BsChevronRight/>
                </ButtonRight>
            }

            <TopicItems ref={topicItemsRef}>
                <Track ref={trackRef}>
                    {
                        topics.map((topic, i) => (
                            <TopicItemStyled to={`/topics/${topic.id}`} key={i}>{topic.title}</TopicItemStyled>
                        ))
                    }
                </Track>
            </TopicItems>
        </Container>
    )
};


const Container = styled.div`
  position: relative;
  width: 92%;
`;

const TopicItems = styled.div`
  overflow: auto;
  margin: 0 32px 0 32px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Track = styled.div`
  display: flex;
  width: max-content;
`;

const TopicItemStyled = styled(TopicItem)`
  margin: 0 0 0 32px;
`;

const ButtonLeft = styled.div`
  position: absolute;
  left: 31px;
  top: 0;
  bottom: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  font-size: 17px;
  cursor: pointer;
  padding: 0 15px;
  color: #767676;
  transition: .2s;
  background-color: rgba(255, 255, 255, 80%);

  &:hover {
    color: #000;
  }
`;

const ButtonRight = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  font-size: 17px;
  cursor: pointer;
  padding: 0 15px;
  transition: .2s;
  color: #767676;
  background-color: rgba(255, 255, 255, 80%);

  &:hover {
    color: #000;
  }
`;

export default TopicsMenu;