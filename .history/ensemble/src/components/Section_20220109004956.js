import React from 'react';
import styled from "styled-components";
import Fade from 'react-reveal/Fade';
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';

function Section({title, description, leftBtnText, rightBtnText, backgroundImage, foregroundImage }) {
    return (
        <Wrap bgImage={ backgroundImage }>
            <img src={ foregroundImage } alt=""/>
            <Fade bottom>
                <ItemText>
                    <div style={{ marginLeft: '-15%', marginBottom: '700px', width: '125%'}}>
                        <Box color="white" bgcolor="#2f70be" p={3} borderRadius={8}>
                            <h1>{ title }</h1>
                        </Box>
                    </div>
                </ItemText>
            </Fade>
            <div style={{ marginLeft: '-15%', marginTop: '50px', width: '10%'}}>
                <Box color="white" bgcolor="#2f70be" p={3} borderRadius={8}>
                    <ButtonGroup>
                        <LeftButton>
                            Click Me!
                        </LeftButton>
                    </ButtonGroup>
                </Box>
            </div>
        </Wrap>
    )
};

export default Section

const Wrap = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/images/${props.bgImage}")`};
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    flex-wrap: nowrap;

    @media(max-width: 768px) {
        display: none;
    }

    h1 {
        color: white;
        background-color: #2f70be;
    }
`

const ButtonGroup = styled.div`
    margin-bottom: 30px;
    display: flex;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
`

const RightButton = styled(LeftButton)`
    background: white;
    opacity: 0.65;
    color: black;
`

const DownArrow = styled.img`
    margin-bottom: 40px;
    height: 40px;
    width: 28.25vw;
    animation: animateDown infinite 1.5s;
`

const Buttons = styled.div`
`