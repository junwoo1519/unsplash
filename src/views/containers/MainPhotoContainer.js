import React, {useEffect, useRef, useState, useCallback} from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../../redux/photo/redux";
import PhotoList from "../components/Photo/PhotoList";
import Consts from "../../constants";

const MainPhotoContainer = () => {

    const dispatch = useDispatch();
    const {list, isLoading} = useSelector(state => state.photo);
    const [page, setPage] = useState(1);

    const getList = useCallback(() => {
        dispatch(Action.Creators.getPhotos({
            client_id: Consts.CLIENT_ID,
            per_page: 15,
            page
        }));
    }, [dispatch, page]);

    useEffect(() => {
        getList();
    }, [page, getList]);

    // const getList = () => {
    //     dispatch(Action.Creators.getPhotos({
    //         client_id: Consts.CLIENT_ID,
    //         per_page: 15,
    //         page
    //     }))
    // };

    const observer = useRef();

    const sentinelRef = useCallback((el) => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setPage(prevPage => prevPage + 1);
                }
            });
        });
        if (el) observer.current.observe(el);
    }, [isLoading]);

    return (
        <Container>
            <PhotoList list={list}/>
            {
                !isLoading && list.length > 0 &&
                <Sentinel className={"sentinel"}
                          ref={sentinelRef}
                />
            }
        </Container>
    )
};

const Container = styled.div`
  position: relative;
`;

const Sentinel = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  bottom: 10px;
  height: 30vh;
  background-color: #000;
`;

export default MainPhotoContainer;