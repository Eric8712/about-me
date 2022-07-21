import React from "react";
import styled from "styled-components";
import Img7 from '../img/img7.png'

const SideProject2 = () => {
    return (
    <frameElement>
        <StyledContainer>
        <div className="contentTitle">
          <h2>Website exercise</h2>
        </div>
        <div className="contentText">
            <div className="contentText-1">
            這是以日本網站 Straightline bookmark 上面的網頁設計中
            找到的網站為參考來進行網頁切版練習，
            有加入CSS動畫的元素及JQuery函式庫的特效，來讓畫面更有動性
            <div className="link-title">
            <a className="link" href="https://website-exercise.netlify.app/" 
            target="_blank">作品連結</a>
            </div>
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
.link-title{
    margin-top: 30px;
}
.link{
    text-decoration: none;
    margin-top: 30px;
    padding: 10px 10px 10px 10px;
    color: #53565C;
    background-color: #ab9684;
    border-radius: 10px;
    line-height: 30px;
}
.link:hover{
    background-color: #c0b0a2;
}
.link:active{
    color: #241e18;
}

.contentText{
  display: inline-flex;
}
.imgContainer{
  margin-left: 40px;
  margin-top: 70px;
}
`


const StyledImg = styled.div`
  position: relative;
  width: 450px;
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
      background-image: url(${Img7});
      background-repeat: no-repeat;
      background-size: contain;
  }
`
export default SideProject2