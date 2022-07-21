import React from "react";
import styled from "styled-components";



const FrontPage = () => {
    return (
        <frameElement>
            <StyledContainer>
            <div className='content'>
                <div className="content-title">
                    <h1>WELECOME TO MY PAGE</h1>
                    <p>The Following Link Is The Website
                        That Relative About My LIfe Or My SideProject
                        ,Hope You'll Love It
                    </p>
                </div>
                <StyledContentText>
                <a href="https://www.instagram.com/eric_yen_wei/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                <a href="https://github.com/Eric8712?tab=repositories" target="_blank"><i class="fa-brands fa-github-square"></i></a>
                </StyledContentText>
            </div>
            </StyledContainer>
        </frameElement>
    )
}
const StyledContainer = styled.div`
    .content-title h1 {
        /* border: 1px solid #000; */
        padding-left: 150px;
        font-size: 50px;
    }
    .content-title p {
        padding-top: 30px;
        font-size: 19px;
        font-weight: 500;
        padding-left: 15px;
    }
`

const StyledContentText = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 90px;
    i{
        font-size: 40px;
        padding: 0px 20px 0px 20px;
        color: #53565C;
    }
    i:hover{
        color: #93939B;
    }
`

export default FrontPage