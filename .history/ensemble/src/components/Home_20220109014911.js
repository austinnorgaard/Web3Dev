import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
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