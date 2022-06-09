import React from 'react';
import styled from 'styled-components';
import img from '../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg'
import LogoComponents from '../subComponents/LogoComponents';
import PowerButton from '../subComponents/PowerButton';
import SocialIcons from '../subComponents/SocialIcons';
import { Projects } from '../data/ProjectsData'
import ProjectComponent from './ProjectComponent';

const ProjectsPage = () => {

    const MainContainer = styled.div`
    background-image: url(${img});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
  

    `

    const Container = styled.div`
    background-color: ${props => `rgba(${props.theme.bodyRgba},0.8)`};
    width: 100%;
   
    position: relative;
    padding-bottom: 5rem;    
    `
    const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10rem;
    `

    const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
    grid-gap: calc(1rem + 2vw);
    `

    return (
        <MainContainer>
            <Container>
                <LogoComponents />
                <PowerButton />
                <SocialIcons />
                <Center>
                    <Grid>
                        {
                            Projects.map(project => {
                                return <ProjectComponent
                                    key={project.id}
                                    project={project}
                                />
                            })
                        }
                    </Grid>

                </Center>
            </Container>
        </MainContainer>
    );
};

export default ProjectsPage;