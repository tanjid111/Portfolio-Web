import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, mediaQueries } from "./Themes";
import styled from 'styled-components';
import { Design, Develope } from './AllSvgs';
import LogoComponents from '../subComponents/LogoComponents';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitle';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
display: flex;
flex-direction:column; 
justify-content: Center;
align-items: center;

${mediaQueries(50)`
            flex-direction:column;  
            padding:8rem 0;
height:auto;
            &>*:nth-child(5){
              margin-bottom:5rem;
            }
           
  `};
  ${mediaQueries(30)`
           
            &>*:nth-child(5){
              margin-bottom:4rem;
            }
           
  `};
`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 60vh;
z-index: 3;
line-height: 1.5;
cursor: pointer;

${mediaQueries(60)`
height: 55vh;
`};

${mediaQueries(50)`
  width: 50vw;
  height: max-content;

`};

font-family: 'Ubuntu Mono', monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
    color: ${props => props.theme.body};
    background-color:  ${props => props.theme.text}
}
`
const Title = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${mediaQueries(60)`
font-size:calc(0.8em + 1vw);
`};

${mediaQueries(50)`
font-size:calc(1em + 2vw);
margin-bottom:1rem;
`};

${mediaQueries(30)`
font-size:calc(1em + 1vw);
`};
${mediaQueries(25)`
font-size:calc(0.8em + 1vw);
`};

${Main}:hover &{
   &>*{
       fill:${props => props.theme.body};
   }
}
   &>*:first-child{
    margin-right: 1rem;
}
`


const Form = styled.form`
display: flex;
flex-direction:column; 
justify-content: Center;
align-items: center;
margin: 2px 0;
`

const Input = styled.input`
width: 30vw;
margin: 5px 0;

${mediaQueries(50)`
width: 50vw;
font-size:calc(0.8em + 1vw);
`};

${mediaQueries(25)`
width: 50vw;
font-size:calc(0.8em + 1vw);
`};
`

const TextArea = styled.textarea`
width: 30vw;
height: 20vh;
${mediaQueries(50)`
width: 50vw;
font-size:calc(0.8em + 1vw);
`};

${mediaQueries(25)`
width: 50vw;
font-size:calc(0.8em + 1vw);
`};
`

const Button = styled.button`
margin: 10px 0;
padding: 10px;
border-radius: 10px;
`


const ContactPage = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_vupilw6', 'template_wk1fswc', form.current, 'XG10vXwb8Z77Grzyp')
            .then((result) => {
                console.log(result.text);
                if (result.text) {
                    alert('Message Sent!')
                }
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <ThemeProvider theme={lightTheme}>
            <Box>
                <LogoComponents theme='light' />
                <SocialIcons theme='light' />
                <PowerButton />
                <ParticleComponent theme='light' />
                <Main>
                    <Form ref={form} onSubmit={sendEmail}>
                        <Title>
                            <strong>Contact Me</strong>
                        </Title>
                        <label htmlFor='name'>Name</label>
                        <Input type='text' name='name'></Input>
                        <label htmlFor='email'>Email</label>
                        <Input type='email' name='email'></Input>
                        <label htmlFor='message'>Message</label>
                        <TextArea name='message'></TextArea>
                        <Button type='submit'>Send Message</Button>
                    </Form>
                </Main>

                <BigTitle text='CONTACT' top='80%' right='30%' />
            </Box>
        </ThemeProvider>
    );
};

export default ContactPage;