import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {animateScroll as scroll} from "react-scroll/modules";

export const GoTopBtn = () => {
    
    const [showBtn, setShowBtn] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 200) {
                setShowBtn(true)
            } else {
                setShowBtn(false)
            }
        })
    }, []);

    return (

        <>
            {showBtn && (
                <StyledGoTopBtn onClick={() => {scroll.scrollToTop()}}>
                    <Icon iconId={"go-top"} height={"15"} width={"16"} viewBox={"0 0 16 15"}/>
                </StyledGoTopBtn>
            )}

        </>

    );
};

const StyledGoTopBtn = styled.button`
  width: 30px;
  height: 30px;
  padding: 8px;
  background: rgba(0, 0, 0, 0.30);
  position: fixed;
  bottom: 30px;
  right: 30px;
`