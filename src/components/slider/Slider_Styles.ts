import styled from "styled-components";

const Slider = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Slide = styled.div`
  text-align: center;
  cursor: grab;
  &:active {
    cursor: grabbing;
  }
`

const Text = styled.p`
`

const Name = styled.span`
  font-family: Josefin Sans,sans-serif;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  display: inline-block;
  margin: 22px 0 35px;
`

export const S = {
    Slider,
    Slide,
    Text,
    Name
}