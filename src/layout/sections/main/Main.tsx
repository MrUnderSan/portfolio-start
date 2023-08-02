import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/photo.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"} wrap={"wrap"}>
                    <div>
                        <SmallText>Hi There</SmallText>
                        <Name>I am <NameSpan><span>Aliaksandr</span> <span>Yurhilevich</span></NameSpan></Name>
                        <MainTitle>A Web Developer.</MainTitle>
                    </div>
                    <PhotoWrapper>
                        <Photo src={photo} alt=""/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>

        </StyledMain>
    );
};

const StyledMain = styled.section`
  min-height: 100vh;
  background-color: #ffc8c8;
  display: flex;
  padding-top: 100px;

  @media screen and (max-width: 930px) {
    ${FlexWrapper} {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  @media screen and (max-width: 360px) {
    ${FlexWrapper} {
      align-items: flex-start;
    }
  }
  
`
const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;
  margin-top: 65px;
  
  &::before {
    content: "";
    position: absolute;
    width: 360px;
    height: 470px;
    border: 5px solid ${theme.colors.accent};
    
    top: -24px;
    left: 24px;
    z-index: -1;


    @media ${theme.media.mobile} {
      width: 314px;
      height: 414px;
      top: -17px;
      left: 20px;
    }
  }
`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;

  @media screen and (max-width: 1260px) {
    margin-right: 40px;
  }
  
  @media ${theme.media.mobile} {
    width: 310px;
    height: 380px;
    margin-right: 35px;
  }
`

const MainTitle = styled.h1`
  ${font({weight: 400, fMax: 27, fMin: 20})}

`

const Name = styled.p`

  ${font({family: "'Josefin Sans', sans-serif", weight: 700, fMax: 50, fMin: 36})}
  
  letter-spacing: 2.5px;
  margin: 10px 0;
  

  
  @media ${theme.media.mobile} {
    margin: 15px 0 22px;
  }
`

const NameSpan = styled.span `
    position: relative;
    z-index: 0;


    &::before {
        content: "";
        display: inline-block;
        height: 20px;
        width: 100%;
        background-color: ${theme.colors.accent};

        position: absolute;
        bottom: 0;
        z-index: -1;
    }

    @media screen and (max-width: 1140px) {
        display: flex;
    }
    
    @media screen and (max-width: 490px) {
        flex-direction: column;
    }
`

const SmallText = styled.span`
  font-size: 14px;
  font-weight: 400;
`
