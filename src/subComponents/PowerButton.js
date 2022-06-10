//Home Button
import styled from 'styled-components';
import React from 'react';
import { PowerBtn } from '../components/AllSvgs';
import { NavLink } from 'react-router-dom';
import { mediaQueries } from "../components/Themes";

const Power = styled.div`
position: fixed;
top: 2rem;
left: 50%;
transform: translate(-50%, 0);
background-color: #FCF6F4;
padding: 0.3rem;
border-radius: 50%;
border: 1px solid #000;
width: 1.8rem;
height: 1.8rem;

display:flex;
just-content: center;
align-items: center;
z-index:3;

cursor:pointer;

&:hover{
  background-color: rgba(0,255,0,0.4);
  box-shadow:0 0 8px 6px rgba(0,255,0,0.4);  
}

&>*:first-child{
    text-decoration: none;
    color: inherit;
}

${mediaQueries(40)`
   width: 1.3rem;
  height: 1.3rem;
      svg{
        width:20px;
        height:20px;
      }

  `};
`

const PowerButton = () => {
    return (
        <Power>
            <NavLink to='/'>
                <PowerBtn width={30} height={30}></PowerBtn>
            </NavLink>
        </Power>
    );
};

export default PowerButton;