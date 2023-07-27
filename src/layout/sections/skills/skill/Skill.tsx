import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../components/FlexWrapper";

type SkillPropsType = {
    iconId: string
    skillTitle: string
    skillText: string
}
export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper direction={"column"} align={"center"}>
                <IconWrapper>
                    <Icon iconId={props.iconId}/>
                </IconWrapper>
                <SkillTitle>{props.skillTitle}</SkillTitle>
                <SkillText>{props.skillText}</SkillText>

            </FlexWrapper>

        </StyledSkill>
    );
};

const StyledSkill = styled.div`
  text-align: center;
  width: 380px;
  padding: 62px 20px 40px;


`
export const IconWrapper = styled.div`
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