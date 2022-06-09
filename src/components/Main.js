import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import LogoComponents from '../subComponents/LogoComponents';
import PowerButton from '../subComponents/PowerButton';
import SocialIcons from '../subComponents/SocialIcons';

const MainContainer = styled.div`
    background:${props => props.theme.body};
    width: 100vw;
    height: 100vh;
    overflow:hidden;

    position: relative;
    h2,h3,h4,h5,h6{
    font-family:'Karla', sans-serif ;
    font-weight:500;
    }
    `
const Container = styled.div`
    padding:2rem
    `
const Contact = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration:none;
z-index:1;
`

const Projects = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 50%;
right: calc(1rem + 2vw);
transform: rotate(90deg) translate(-50%,-50%);
text-decoration:none;
z-index:1;
`

const Work = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 50%;
left: calc(1rem + 2vw);
transform: translate(-50%,-50%) rotate(-90deg) ;
text-decoration:none;
z-index:1;
`
const BottomBar = styled.div`
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;
display: flex;
justify-content: space-evenly;
`

const About = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
text-decoration: none;
z-index:1;
`
const Skills = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index:1;
`



const Main = () => {
    return (
        <MainContainer>
            <Container>
                <PowerButton />
                <LogoComponents />
                <SocialIcons />
                <Contact target="_blank" to={{ pathname: 'mailto:tanjidhossain@yahoo.com' }}>
                    <h2>
                        Say hi...
                    </h2>
                </Contact>

                <Projects to='/projects'>
                    <h2>
                        Projects
                    </h2>
                </Projects>

                <Work to='/work'>
                    <h2>
                        Work
                    </h2>
                </Work>

                <BottomBar>

                    <About to='/about'>
                        <h2>
                            About
                        </h2>
                    </About>

                    <Skills to='/skills'>
                        <h2>
                            Skills
                        </h2>
                    </Skills>
                </BottomBar>
            </Container>
        </MainContainer>
    );
};

export default Main;