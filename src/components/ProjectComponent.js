import { motion } from 'framer-motion';
import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'
import { mediaQueries } from './Themes';

const Box = styled(motion.div)`
backdrop-filter: blur(2px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  text-decoration: none;
  width: calc(10rem + 15vw);
  height: 50rem;
  border: 2px solid ${(props) => props.theme.text};
  padding: 1rem;
  color: ${(props) => props.theme.text};

  display: flex;
  flex-direction: column;
  z-index: 5;

  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};

    transition: all 0.3s ease;
  }

  ${mediaQueries(50)`
    width:calc(60vw);
  `};

  ${mediaQueries(30)`
    height:18rem;
    backdrop-filter: none;
  `};

  ${mediaQueries(25)`
    height:14rem;
    padding:0.8rem;
    backdrop-filter: none;
  `};
`;

const Image = styled(NavLink)`
  background-image: ${(props) => `url(${props.img})`};
  width: 100%;
  height: 15vw;
   object-fit: cover;
  
  background-size: cover;
  border: 1px solid transparent;
  background-position: center center;

  ${mediaQueries(25)`
    height:70%;

  `};

  ${Box}:hover & {
    border: 1px solid ${(props) => props.theme.body};
  }
`;

const Title = styled.h3`
  color: inherit;
  padding: 0.5rem 0;
  padding-top: 1rem;
  font-family: "Karla", sans-serif;
  font-weight: 700;
  
  ${mediaQueries(40)`
    font-size:calc(0.8em + 1vw);
  `};

  ${mediaQueries(25)`  
    font-size:calc(0.6em + 1vw);
  `};

  border-bottom: 1px solid ${(props) => props.theme.text};

  ${Box}:hover & {
    border-bottom: 1px solid ${(props) => props.theme.body};
  }
`;

const Technology = styled.h4`
color: inherit;
  padding: 0.5rem 0;
  padding-top: 1rem;
  font-family: "Karla", sans-serif;
  font-weight: 700;
  
  ${mediaQueries(40)`
    font-size:calc(0.8em + 1vw);
  `};

  ${mediaQueries(25)`  
    font-size:calc(0.6em + 1vw);
  `};

  border-bottom: 1px solid ${(props) => props.theme.text};

  ${Box}:hover & {
    border-bottom: 1px solid ${(props) => props.theme.body};
  }
`

const HashTags = styled.div`
  padding: 0.5rem 1rem;
  display: grid;
  grid-template-columns: repeat(3, 100px);
  gap: 5px;
  ${mediaQueries(50)`  
    font-size:calc(0.5em + 1vw);
    grid-template-columns: repeat(4, 110px);
  `};

  ${mediaQueries(40)`  
  font-size:calc(0.5em + 1vw);
  grid-template-columns: repeat(3, 100px);
`};

${mediaQueries(30)`  
  font-size:calc(0.5em + 1vw);
  grid-template-columns: repeat(2, 110px);
`};
`;

const Tag = styled.span`
  padding-right: 0.5rem;
  
`;

const Description = styled.div`
margin: 0px 0px;
height: 14rem;
border-top: 1px solid ${(props) => props.theme.text};
${Box}:hover & {
  border-top: 1px solid ${(props) => props.theme.body};
}
`

const List = styled.li`
margin: 10px 0px;
`

const Item = {
  hidden: {
    scale: 0
  },
  show: {
    scale: 1,
    transition: {
      type: 'spring',
      duration: 0.5
    }
  }
}

const Container = styled(motion.div)``;

const Buttons = styled.div`
display: flex;
justify-content: center;
// margin: 10px 0;
`

const Button = styled(NavLink)`
color: ${props => props.theme.text};
text-align: center;
font-size: calc(1em + 1.5vw)
position: absolute;
top: 23rem;
right: calc(1rem + 2vw);
border: 2px solid;
padding: 5px;
border-radius:10px;
text-decoration:none;
z-index: 1;
width: 10rem;
margin: 0 auto;

${Box}:hover & {
  border-bottom: 1px solid ${(props) => props.theme.body};
  color: ${props => props.theme.body};
}
`

const ProjectComponent = (props) => {
  const { name, tags, imgSrc, link, description, gitLink } = props.project;


  return (
    <Container
      variants={Item}
    >
      <Box>
        <Title>{name}</Title>
        <Image
          target="_blank" to={{ pathname: link }}
          img={imgSrc} />

        <Technology>Technology Used</Technology>
        <HashTags>
          {
            tags.map((t, id) => {
              return <Tag key={id}>#{t}</Tag>
            })
          }
        </HashTags>

        <Description>
          {
            description.map((d, id) => {
              return <List key={id}>{d}</List>
            })
          }
        </Description>

        <Buttons>
          <Button
            target="_blank" to={{ pathname: `${link}` }}
          >Live Link</Button>

          <Button
            target="_blank" to={{ pathname: `${gitLink}` }}
          >Git Link</Button>
        </Buttons>

      </Box>
    </Container>
  )
}

export default ProjectComponent