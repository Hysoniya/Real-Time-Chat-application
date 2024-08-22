import React from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";

export default function Welcome ( { currentUser }){
    const username = currentUser?.username;
    return (
        <Container>
            <img src={Robot} alt="Robot" />
            <h2> 
                Welcome, <span>{currentUser.username}!</span>
            </h2>
            <h3>
                Please select a Chat to start Messaging.
            </h3>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
    img{
        height: 25rem;
    }
    span{
        color: #4e00ff;
    }
`;