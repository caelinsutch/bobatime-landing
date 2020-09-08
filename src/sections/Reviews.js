import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import { Section, Box, Text } from "../components/Core";
import Rating from "../components/Rating";

const ContentCard = ({
  className,
  numStar = 5,
  image,
  name,
  company,
  children,
  ...rest
}) => (
  <Box className={`${className}`} {...rest}>
    <Rating
      numStar={numStar}
      color="warning"
      pb={2}
      css={`
        font-size: 21px;
      `}
    />

    <Text color="light" mt={3} mb={3} className="font-italic">
      {children}
    </Text>
    <Box className={`d-flex justify-content-between mt-auto`} pt={2}>
      <div className="flex-grow-1">
        <Text
          color="lightShade"
          fontSize="16px"
          fontWeight={300}
          lineHeight="1"
        >
          {name}
        </Text>
      </div>
    </Box>
  </Box>
);

const Reviews = () => {
  return (
    <>
      <Section bg="secondary" borderBottom="1px solid #EAE9F2;">
        <Container>
          <Row className="justify-content-center mt-3">
            <Col md="6" className="mb-5 mb-lg-0">
              <ContentCard name="Some Excited Customer" numStar={5}>
                "OMG! This is such an excellent idea! I love boba and this will make it so much easier to find others who do too!"
              </ContentCard>
            </Col>
            <Col md="6" className="mb-5 mb-lg-0">
              <ContentCard name="Stephen Krider" numStar={5}>
                "BobaTime is the most revolutionary app since bro!"
              </ContentCard>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Reviews;
