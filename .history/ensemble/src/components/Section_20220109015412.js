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
                   { title && <div style={{ marginLeft: '3%', display: 'flex', width: '100%', justifyContent: 'top', alignItems: 'center', top: 0, right: 0, left: 0}}>
                        <Box color="#2f70be" bgcolor="white" p={3} borderRadius={8}>
                            <h1>{ title }</h1>
                        </Box>
                    </div>}
                </ItemText>
            </Fade>
            { leftBtnText && <div>
                <Box sx={{
                    width: 1500,
                    height: 650,
                     backgroundColor: 'white',
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'center',
                     marginBottom: '20px',
                     marginTop: '-10px'
                    }} borderRadius={8}>
                        <a href="#"><h1>{leftBtnText}</h1></a>
                </Box>
            </div>}
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

    h3 {
        color: white;
    }
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