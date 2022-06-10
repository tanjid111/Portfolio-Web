import React, { useEffect, useRef } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { DarkTheme } from './Themes';
import { motion } from 'framer-motion';

import LogoComponents from '../subComponents/LogoComponents';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';




import BigTitle from '../subComponents/BigTitle';

const Box = styled.div`
background-color: ${props => props.theme.body};
height:400vh;
position: relative;
display: flex;
align-items: center;
`

const Main = styled(motion.ul)`
position: fixed;
top: 20rem;
left:calc(10rem + 15vw);
height: 40vh;
display: flex;
color:white;
font-size: 5rem;
`

// Framer-motion Configuration
const container = {

    hidden: { opacity: 0 },
    show: {
        opacity: 1,

        transition: {
            staggerChildren: 0.5,
            duration: 0.5,
        }
    }

}

const Blogs = () => {


    return (
        <ThemeProvider theme={DarkTheme}>
            <Box>

                <LogoComponents theme='dark' />
                <SocialIcons theme='dark' />
                <PowerButton />

                <Main variants={container} initial='hidden' animate='show'  >
                    Work in Progress
                </Main>

                <BigTitle text="BLOGS" top='10%' right="20%" />
            </Box>

        </ThemeProvider>

    )
}

export default Blogs