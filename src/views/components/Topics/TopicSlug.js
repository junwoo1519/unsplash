import React from "react";
import styled from "styled-components";
import {AiOutlineUser, HiOutlinePhotograph, HiOutlineUsers, RiErrorWarningFill} from "react-icons/all";
import {ContentContainer} from "../Layout/Layout.Styled";

const TopicSlug = (props) => {

    const {
        title,
        description,
        status,
        top_contributors,
        total_photos
    } = props;

    const setTotalPhoto = (num) => {
        if (num >= 1000) {
            return (num / 1000).toFixed(1)
        }
    }

    const totalPhoto = setTotalPhoto(total_photos);

    return (
        <Container>
            <MainTopic>
                <Topic>
                    <Title>
                        <h1>{title}</h1>
                    </Title>
                    <Explanation>
                        <p>{description}</p>
                    </Explanation>
                </Topic>
                <TopicState>
                    <State>
                        <UserStatus>
                            <RiErrorWarningFill/>
                            <p>Status</p>
                            <Status>
                                <Dot/>
                                {status}
                            </Status>
                        </UserStatus>
                        <Curator>
                            <AiOutlineUser/>
                            <p>Curator</p>
                        </Curator>
                        <Contributions>
                            <HiOutlinePhotograph/>
                            <p>Contributions</p>
                            <TotalPhoto>
                                {totalPhoto}k
                            </TotalPhoto>
                        </Contributions>
                        <TopContributors>
                            <HiOutlineUsers/>
                            <p>Top contributors</p>
                            <SlugItems>
                                {
                                    top_contributors.map((item, i) => (
                                            <SlugItem key={i}>
                                                <img src={item.profile_image.small} alt=""/>
                                            </SlugItem>
                                        )
                                    )
                                }
                            </SlugItems>
                        </TopContributors>
                    </State>
                    <Submit>
                        <p>Submit to <span>{title}</span></p>
                    </Submit>
                </TopicState>
            </MainTopic>
        </Container>
    )
}

const Container = styled(ContentContainer)`

`;

const MainTopic = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
`;

const Topic = styled.div`

`;

const Title = styled.div`

  h1 {
    font-size: 46px;
  }
`;

const Explanation = styled.div`
  margin-top: 20px;
  margin-bottom: 24px;
  max-width: 620px;
  line-height: 1.5;

  p {
    font-size: 18px;
  }
`;

const TopicState = styled.div`
  width: 415px;
`;

const State = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #d1d1d1;
  padding: 24px;
  border-radius: 5px;
  width: 100%;
  height: 230px;
`;

const UserStatus = styled.div`
  position: relative;
  height: 50px;
  display: flex;
  align-items: center;
  color: #d1d1d1;
  font-size: 18px;
  border-bottom: 1px solid #eeeeee;

  p {
    color: #000;
    font-size: 14px;
    margin-left: 10px;
  }

`;

const Status = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  background-color: #c2ebd3;
  color: #000;
  padding: 4px 7px;
  border-radius: 5px;
  font-size: 14px;
  text-transform: capitalize;
`;

const Dot = styled.div`
  margin-right: 8px;
  border-radius: 50%;
  width: 8px;
  height: 8px;
  background-color: #3cb46e;
`;

const Curator = styled(UserStatus)`

`;

const Contributions = styled(UserStatus)`

`;

const TotalPhoto = styled.div`
  font-size: 15px;
  color: #111111;
  font-weight: bold;
  position: absolute;
  right: 0;
`;

const TopContributors = styled(UserStatus)`

`;

const SlugItem = styled.div`

  img {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    margin-left: 10px;
  }
`;

const SlugItems = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const Submit = styled.button`
  margin-top: 20px;
  width: 100%;
  height: 44px;
  border: transparent;
  border-radius: 5px;
  background-color: #000;
  color: #fff;
  font-size: 15px;

  span {
    font-weight: bold;
  }
`;

export default TopicSlug;