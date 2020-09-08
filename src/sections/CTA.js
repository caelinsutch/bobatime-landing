import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text } from "../components/Core";

import appStore from "../assets/image/app-store.svg";
import playStore from "../assets/image/google-play-badge.png";

const SectionStyled = styled(Section)`
  border-bottom: 1px solid #eae9f2;
`;

const ButtonContainer = styled(Box)`
  margin-top: 35px;
  display: flex;
  justify-content: center;
`;

const ButtonApp = styled.a`
  padding: 0 9px;
  transition: 0.4s;
  &:visited {
    text-decoration: none;
  }
  &:hover {
    transform: translateY(-8px);
  }
  
  > img {
  height: 60px;
  }
`;

const CTA = () => (
  <>
    <SectionStyled className="position-relative">
      <Container>
        <Row className="justify-content-center">
          <Col md="8" lg="7" xl="6">
            <div className="text-center">
              <Title>App Coming Soon</Title>

              <Text>
                Find the best boba near you and connect with those who share your passion.
              </Text>
              <ButtonContainer>
                <ButtonApp href="">
                  <img src={playStore} alt="" className="img-fluid" />
                </ButtonApp>
                <ButtonApp href="">
                  <img src={appStore} alt="" className="img-fluid" />
                </ButtonApp>
              </ButtonContainer>
            </div>
          </Col>
        </Row>
      </Container>
    </SectionStyled>
  </>
);

export default CTA;
