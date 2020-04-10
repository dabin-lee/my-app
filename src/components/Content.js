import React from 'react';
import styled from "styled-components";
import Clock from './Clock'
import Todo from './Todo'

const Content = () => {
    return<Container><Clock /><Todo /></Container>
}

const Container = styled.div`
    position: absolute;
    right: 0;
    top: 33px;
    width: 500px;
    height: calc(100% - 33px);
    background-color:rgba(255,255,255,.1);
    color: white;
`;


export default Content;