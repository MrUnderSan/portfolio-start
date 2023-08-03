import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {SectionTitle} from "../../../components/SectionTitle";


const Skills = styled.section`
  
  @media ${theme.media.mobile} {
    ${SectionTitle} {
      bottom: -36px;
    }
  }
  
`

const Skill = styled.div`
  text-align: center;
  width: 380px;
  padding: 45px 20px 50px;
  
  @media ${theme.media.tablet} {
    padding: 62px 0 40px;
  }
  
  @media screen and (max-width: 450px) {
    width: 330px;
  }


`

const IconWrapper = styled.div`
  position: relative;
  z-index: 0;

  &::before {
    content: "";
    display: inline-block;
    width: 80px;
    height: 80px;
    transform: rotate(45deg) translate(-50%, -50%);
    background-color: rgba(255, 255, 255, 0.10);

    position: absolute;
    left: 50%;
    top: 45%;
    transform-origin: top left;
    z-index: -1;

  }
`

const SkillTitle = styled.h3`
  text-transform: uppercase;
  margin: 70px 0 15px;
`

const SkillText = styled.p`

`

export const S = {
    Skills,
    Skill,
    IconWrapper,
    SkillTitle,
    SkillText
}