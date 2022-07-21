import React from "react"
import styled from "styled-components"
import Img5 from '../img/img5.JPG'

const AboutMe = () => {
    return (
    <frameElement>
      <StyledContainer>
      <div className = 'contentTitle'>
        <h2>About me</h2>
      </div>
      <div className = 'contentText'>
        <div className= 'contentText-1'>你好我是凃硯惟，畢業於中國文化大學地質學系，
        目前在半工半讀邊學習前端工程等課程。
        在一次的線上資源接觸到前端工程師的課程，
        發現網頁在程式語言邏輯的組合下豐富了美感及設計感，
        並對此有了極大的興趣。 熟悉HTML、CSS、JavaScript ，
        能獨立完成切版，微互動特效，JavaScript相關指令。
        目前正在努力學習React.js框架。
        </div>
        <div className="imgContainer">
        <div className = 'img'>
            <StyledImg><div className="image"></div></StyledImg>
        </div>
        </div>
      </div>
      </StyledContainer>
    </frameElement>
    )
  }
  
  const StyledContainer = styled.div`
  .contentText{
    display: inline-flex;
  }
  .imgContainer{
    margin-left: 100px;
  }
  `


  const StyledImg = styled.div`
    position: relative;
    width: 350px;
    /* border: 1px solid #000; */
    :before{
      content:'';
      display: block;
      width: 100%;
      padding-top: 100%;
    }
    .image {
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        position: absolute;
        background-image: url(${Img5});
        background-repeat: no-repeat;
        background-size: contain;
    }
`;


  export default AboutMe