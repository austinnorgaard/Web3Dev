import React, {useState} from 'react';
import styled from "styled-components";
import CloseIcon from '@material-ui/icons/Close';
import './Header.css';
import { useEthers } from "@usedapp/core";

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const {account, activateBrowserWallet, deactivateBrowserWallet} = useEthers();
    const isConnected = account !== undefined;

    return (
        <Container>
            <Logo>
                <a href="#">
                    <img src="/images/elogowhite.png" alt=""/>
                </a>
            </Logo>
            <Menu>
                <div style={{ display: 'flex', marginTop: '-10px', width: '300%'}}>
                        <a href="#"><h2 className="CenterMenu">Ensemble</h2></a>
                </div>
            </Menu>
            <RightMenu>
                    {isConnected ? (
                        <button onClick={() => deactivateBrowserWallet()}>
                            Disconnect
                        </button>
                    ) : (
                        <button onClick={() => activateBrowserWallet()}>
                            <img src='/images/MetaMask_Fox.svg.png' alt="Connect Wallet"/>
                        </button>
                    )
                }
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <Close onClick={()=>setBurgerStatus(false)}/>
                </CloseWrapper>
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;

    a {
        cursor: pointer;
        max-height: 0px;
    }
`

const Menu = styled.div`
    display: fixed;
    justify-content: center;
    align-text: center;
    margin-top: 20px;
    padding-top: 20px;
    height: 25px;
    margin-right: 70px;
    z-index: 2;

    h2 {
        flex-wrap: nowrap;
        color: white;
    }

    @media(max-width: 768px) {
        display: none;
    }
`

const RightMenu = styled.div`
    align-items: right;
    display: flex;
    padding-right: 30px;
    padding-top: 40px;

    a {
        font-weight: 800;
        margin-right: 10px;
    }
`

const CustomMenu = styled.div`
    cursor: pointer;
    z-index: 15;
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 10;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
    transition: transform 0.6s;
    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);
        a {
            font-weight: 600;
            text-decoration: UPPERCASE;
        }
    }
`

const Close = styled(CloseIcon)`
    cursor: pointer;
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`

const Logo = styled.div`
    display: flex;
    padding-left: 100px;
    padding-top: 20px;
    z-index: 15;
`