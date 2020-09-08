import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const LogoTitle = styled.h1`
  font-weight: bold;
`

const Logo = ({ white, height, className = "", ...rest }) => {
  return (
    <Link to="/" className={`${className}`} {...rest}>
      <LogoTitle>
        BOBATIME
      </LogoTitle>
    </Link>
  );
};

export default Logo;
