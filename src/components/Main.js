import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import LogoComponents from '../subComponents/LogoComponents';
import PowerButton from '../subComponents/PowerButton';
import SocialIcons from '../subComponents/SocialIcons';
import { YinYang } from './AllSvgs';
import Intro from './Intro';
import { motion } from 'framer-motion';
import { mediaQueries } from "./Themes";

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

    h2 {
        ${mediaQueries(40)`
          font-size:1.2em;
    
      `};
    
        ${mediaQueries(30)`
          font-size:1em;
    
      `};
      }

    `
const Container = styled.div`
    padding:2rem
    `

const rotate = keyframes`
from{
transform: rotate(0)
}
to{
transform: rotate(360deg)
}
`

const Center = styled.div`
position: absolute;
top: ${props => props.click ? '85%' : '50%'};
left: ${props => props.click ? '92%' : '50%'};
transform: translate(-50%,-50%);
border: none;
outline: none;
background-color: transparent;
cursor: pointer;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1s ease;
&>:first-child{
    animation: ${rotate} infinite 1.5s linear;
}

&>:last-child{
    display: ${props => props.click ? 'none' : 'inline-block'};
    padding-top: 1rem;
}

@media only screen and (max-width: 50em) {
    top: ${(props) => (props.click ? "90%" : "50%")};
    left: ${(props) => (props.click ? "90%" : "50%")};
    width: ${(props) => (props.click ? "80px" : "150px")};
    height: ${(props) => (props.click ? "80px" : "150px")};
  }
  @media only screen and (max-width: 30em) {
    width: ${(props) => (props.click ? "40px" : "150px")};
    height: ${(props) => (props.click ? "40px" : "150px")};
  }
`

const Contact = styled(NavLink)`
color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration:none;
z-index:1;
@media only screen and (max-width: 50em) {
      color: ${(props) => props.click ? props.theme.body : props.theme.text};
  }
`

const Projects = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 50%;
right: calc(1rem + 2vw);
transform: rotate(90deg) translate(-50%,-50%);
text-decoration:none;
z-index:1;
@media only screen and (max-width: 50em) {
    text-shadow: ${props => (props.click ? "0 0 4px #000" : "none")};
    color:  ${props => props.click ? props.theme.body : props.theme.text};
       }
`

const Blogs = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
position: absolute;
top: 50%;
left: calc(1rem + 2vw);
transform: translate(-50%,-50%) rotate(-90deg) ;
text-decoration:none;
z-index:1;
@media only screen and (max-width: 50em) {
    text-shadow: ${(props) => (props.click ? "0 0 4px #000" : "none")};
  }
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

@media only screen and (max-width: 50em) {
    color: ${(props) => props.theme.text};
  }
`
const Skills = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index:1;
`

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.click ? "50%" : "0%")};
  background-color: #000000;
  height: ${(props) => (props.click ? "100%" : "0%")};
  transition: height 0.5s ease, width 1s ease 0.5s;
  z-index: 1;

  ${(props) =>
        props.click
            ? mediaQueries(50)`
       height: 50%;
  right:0;
  
  width: 100%;
  transition: width 0.5s ease, height 1s ease 0.5s;

  `
            : mediaQueries(50)`
       height: 0;
  
  width: 0;
  `};
`;

const Main = () => {
    const [click, setClick] = useState(false);
    const [path, setpath] = useState("");

    const handleClick = () => setClick(!click);

    const moveY = {
        y: "-100%",
    };
    const moveX = {
        x: `${path === "work" ? "100%" : "-100%"}`,
    };
    const mq = window.matchMedia("(max-width: 50em)").matches;


    return (
        <MainContainer
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={path === "about" || path === "skills" ? moveY : moveX}
            transition={{ duration: 0.5 }}
        >
            <DarkDiv click={click} />
            <Container>
                <PowerButton />
                <LogoComponents theme={click ? 'dark' : 'light'} />

                {mq ? (
                    <SocialIcons theme="light" />
                ) : (
                    <SocialIcons theme={click ? "dark" : "light"} />
                )}

                <Center click={click}>
                    {mq ? (
                        <YinYang
                            onClick={() => handleClick()}
                            width={click ? 80 : 150}
                            height={click ? 80 : 150}
                            fill="currentColor"
                        />
                    ) : (
                        <YinYang
                            onClick={() => handleClick()}
                            width={click ? 120 : 200}
                            height={click ? 120 : 200}
                            fill="currentColor"
                        />
                    )}
                    <span>Click Here</span>
                </Center>

                {mq ? (
                    <Contact
                        click={+click} onClick={() => setpath("contact")} to="/contact"
                    >
                        <motion.h3
                            initial={{
                                y: -200,
                                transition: { type: "spring", duration: 1.5, delay: 1 },
                            }}
                            animate={{
                                y: 0,
                                transition: { type: "spring", duration: 1.5, delay: 1 },
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            Contact Me
                        </motion.h3>
                    </Contact>
                ) : (
                    <Contact
                        click={+click} onClick={() => setpath("contact")} to="/contact"
                    >
                        <motion.h3
                            initial={{
                                y: -200,
                                transition: { type: "spring", duration: 1.5, delay: 1 },
                            }}
                            animate={{
                                y: 0,
                                transition: { type: "spring", duration: 1.5, delay: 1 },
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            Contact Me
                        </motion.h3>
                    </Contact>
                )}

                {mq ? (
                    <Projects click={+click} onClick={() => setpath("projects")} to="/projects">
                        <motion.h2
                            initial={{
                                y: -200,
                                transition: { type: "spring", duration: 1.5, delay: 1 },
                            }}
                            animate={{
                                y: 0,
                                transition: { type: "spring", duration: 1.5, delay: 1 },
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            Projects
                        </motion.h2>
                    </Projects>
                ) : (
                    <Projects click={+false} onClick={() => setpath("projects")} to="/projects">
                        <motion.h2
                            initial={{
                                y: -200,
                                transition: { type: "spring", duration: 1.5, delay: 1 },
                            }}
                            animate={{
                                y: 0,
                                transition: { type: "spring", duration: 1.5, delay: 1 },
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            Projects
                        </motion.h2>
                    </Projects>
                )}

                <Blogs to='/blogs' click={click}>
                    <motion.h2
                        initial={{
                            y: -200,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        animate={{
                            y: 0,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Blogs
                    </motion.h2>
                </Blogs>

                <BottomBar>
                    <About to='/about' click={click}>
                        <motion.h2
                            initial={{
                                y: 200,
                                transition: { type: 'spring', duration: 1.5, delay: 1 }
                            }}
                            animate={{
                                y: 0,
                                transition: { type: 'spring', duration: 1.5, delay: 1 }
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            About
                        </motion.h2>
                    </About>

                    <Skills to='/skills'>
                        <motion.h2
                            initial={{
                                y: 200,
                                transition: { type: 'spring', duration: 1.5, delay: 1 }
                            }}
                            animate={{
                                y: 0,
                                transition: { type: 'spring', duration: 1.5, delay: 1 }
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            Skills
                        </motion.h2>
                    </Skills>
                </BottomBar>
            </Container>
            {click ? <Intro click={click} /> : null}
        </MainContainer >
    );
};

export default Main;