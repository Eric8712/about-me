import React from "react";
import styled from "styled-components";
import Img6 from '../img/img6.png' 


const SideProject1 = () => {
    return (
    <frameElement>
        <StyledContainer>
        <div className="contentTitle">
          <h2>Tiffany & co</h2>
        </div>
        <div className="contentText">
            <div className="contentText-1">
            這是第一個做出來的切版網站，是以Tiffany & co
            的官方網站來參考進行切版。
            透過JQuery函式庫來完成特效。
            也加入響應式網頁的元素讓網頁適合在不同大小的視窗裡展現。
            <div className="link-title">
            <a className="link" href="https://tiffany-co-exercise.netlify.app/" 
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
  margin-left: 80px;
  margin-top: 70px;
}
`


const StyledImg = styled.div`
  position: relative;
  width: 400px;
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
      background-image: url(${Img6});
      background-repeat: no-repeat;
      background-size: contain;
  }
`

export default SideProject1