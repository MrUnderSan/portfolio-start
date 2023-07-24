import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <SectionTitle>I Am Available For Freelance</SectionTitle>
            <FlexWrapper justify={"center"}>
                <Button>Hire me</Button>
            </FlexWrapper>

        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
  background-color: rgba(192, 86, 255, 0.89);
`