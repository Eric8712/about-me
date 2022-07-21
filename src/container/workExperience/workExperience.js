import React from "react";
import styled from "styled-components";
import Img1 from '../img/img1.JPG'

const WorkExperience = () => {
    return(
    <frameElement>
        <StyledContainer>
    <div className = 'contentTitle'>
        <h2>WorkExperience</h2>
    </div>
    <div className = 'contentText'>
    <div className= 'contentText-1'>
        大學時期就在麥當勞打工，2020年畢業後順勢的進入麥當勞月薪行列。
        在這裡學到了很多，樓面管理使營運順暢，藉由績效考核提升自己的生產力，
        人員、貨物、物料的控管降低各項營運成本，使餐廳利潤增加。
        執行值班計畫，讓每一次的尖峰時段產出破紀錄的來客數和營業額。
        同時也和計時人員建立有效的溝通橋樑，傾聽及溝通，使既使人員漸漸提高生產力，創造樓面及餐廳佳績。
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
      background-image: url(${Img1});
      background-repeat: no-repeat;
      background-size: contain;
  }
`

export default WorkExperience