import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";

type SkillPropsType = {
    iconId: string
    skillTitle: string
    skillText: string
}
export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId}/>
            <SkillTitle>{props.skillTitle}</SkillTitle>
            <SkillText>{props.skillText}</SkillText>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
  width: 33%;
  background-color: rgba(255, 255, 255, 0.47);
  text-align: center;
`
const SkillTitle = styled.h3`
      
`

const SkillText = styled.p`
      
`