import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import {
  Title,
  Button,
  Section,
  Box,
  Text,
  InputGroup,
} from "../components/Core";

import { device } from "../utils";

import iphoneMockup from "../assets/image/phoneMockup.svg";
import ConvertKitForm from "convertkit-react";
import theme from "../utils/theme";

const ImgRight = styled(Box)`
  @media ${device.sm} {
  }
`;

const FormWrapper = styled.div`
  .ck-fm button {
      background-color: #5ACAAA !important;
      background: #5ACAAA !important;
      color: #5ACAAA !important;
  }
`

const Hero = () => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <Section bg="#FCFDFE" className="position-relative" pb="60px !important">
        <div className="pt-5"></div>
        <Container>
          <Row className="align-items-center position-relative">
            <Col
              md="5"
              xl="4"
              className="position-static pb-5"
              data-aos="fade-right"
              data-aos-duration="750"
              data-aos-delay="500"
              data-aos-once="true"
            >
              <ImgRight>
                <img src={iphoneMockup} alt="" className="img-fluid" />
              </ImgRight>
            </Col>
            <Col md="7" xl="6" className="offset-xl-1">
              <div
                data-aos="fade-left"
                data-aos-duration="750"
                data-aos-delay="500"
                data-aos-once="true"
              >
                <Box>
                  <Title>
                    Discover Local Boba.
                    <br className="d-none d-sm-block" />
                    Connect with Others.
                  </Title>
                  <Box mb={4}>
                    <Text color="dark">
                      Bobatime is the number one app to discover local boba places and share with friends your favorite drinks and shops.
                    </Text>
                  </Box>
                  <Box>
                    <FormWrapper className="">
                      <ConvertKitForm formId={'84b627b07e'} template="clare" submitText="Learn When We Launch" classname="ck-fm"/>
                    </FormWrapper>
                  </Box>
                </Box>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Hero;
