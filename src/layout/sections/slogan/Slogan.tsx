import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";

export const Slogan: React.FC = () => {
    return (
        <StyledSlogan>
            <Container>
                <SectionTitle>I Am Available For Work</SectionTitle>
                <FlexWrapper justify={"center"}>
                    <Button>Hire me</Button>
                </FlexWrapper>
            </Container>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
  background-color: rgba(192, 86, 255, 0.89);
`