import React from "react";
import styled from "styled-components";
import {AiOutlineUser, HiOutlinePhotograph, HiOutlineUsers, RiErrorWarningFill} from "react-icons/all";

const TopicSlug = (props) => {

    const {

    } = props;

    return (
        <Container>
            <MainTopic>
                <Topic>
                    <Title>
                        <h1>Wallpapers</h1>
                    </Title>
                    <Explanation>
                        <p>From epic drone shots to inspiring moments in nature, find free HD wallpapers worthy of your
                            mobile and desktop screens. Finally.</p>
                    </Explanation>
                </Topic>
                <TopicState>
                    <State>
                        <Status>
                            <RiErrorWarningFill/>
                            <p>Status</p>
                        </Status>
                        <Curator>
                            <AiOutlineUser/>
                            <p>Curator</p>
                        </Curator>
                        <Contributions>
                            <HiOutlinePhotograph/>
                            <p>Contributions</p>
                        </Contributions>
                        <TopContributors>
                            <HiOutlineUsers/>
                            <p>Top contributors</p>
                        </TopContributors>
                    </State>

                    <Submit>

                    </Submit>
                </TopicState>
            </MainTopic>
        </Container>
    )
}

const Container = styled.div`

`;

const MainTopic = styled.div`
    
`;

const Topic = styled.div`

`;

const Title = styled.div`
    
`;

const Explanation = styled.div`
    
`;

const TopicState = styled.div`
    
`;

const State = styled.div`
    
`;

const Status = styled.div`
    
`;

const Curator = styled.div`
    
`;

const Contributions = styled.div`
    
`;

const TopContributors = styled.div`
    
`;

const Submit = styled.div`
    
`;

export default TopicSlug;