import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import {useEthers} from '@usedapp/core'
import helperConfig from "../helper-config.json"


function Home() {
    //const {chainId, error} = useEthers()
    //const networkName = chainId ? helperConfig[chainId] : "dev"

    return (
        <Container>
            <Section
                title="Welcome to Ensemble Comics!"
                description=""
                backgroundImage="1and0bw.jpg"
            />
            <Section
                description=""
                backgroundImage="1and0.jpg"
                leftBtnText="Click Me!"
            />
        </Container>
    )
}

export default Home


const Container = styled.div`
    height: 100vh;
`