import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import styled from 'styled-components';
import Img5 from './img/img5.JPG';

export const StyledContainer = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 500px;
    width: 1000px;
    background-color: #EFF0EA;
`


export const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
    padding-left: 20px;

.pageTitle{
    padding: 6px 5px 6px 5px;
    font-size: 20px;
    background-color: #737C75;
    border-radius: 10px;
    cursor: pointer;
}
.pageTitle:hover {
    background-color:#DCDDDF;
}


.NavList ul{
    display: flex;
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: 18px;
  }
.NavList li {
    padding: 5px 3px 5px 3px;
    margin-right: 20px;
    cursor: pointer;
    border-radius: 8px;
    background-color: #B2B3A8;
  }
  .NavList li:hover{
    background-color: #CCC5BC;
  }

  `
export const StyledContent = styled.div`
    /* border: 1px solid #000; */
    height: 380px;
    width: 900px;
    margin: 50px 40px 40px 40px;

.contentText-1{
    /* border: 1px solid #000; */
    margin-top: 30px;
    line-height: 30px;
    letter-spacing: 1px;
    font-weight: 600;
    width: 450px;
    
}

`
export const LinkStyle = {
    textDecoration: "none",
    color: '#3B4338',
}
