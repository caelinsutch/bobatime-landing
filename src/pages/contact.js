import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text, Input } from "../components/Core";

import PageWrapper from "../components/PageWrapper";

import Hero from "../sections/common/Hero";

const FormStyled = styled.form``;

const Contact = () => {
  return (
    <>
      <PageWrapper footerDark>
        <Hero title="Get in touch">
          Questions? Comments? Suggestions? Roasts? Get in touch with the form below. It's only one overworked college student on the other end, so I'll be getting back ASAP
        </Hero>
        <Section>
          <Container>
            <Row className="align-items-center">
              <Col lg="6">
                <FormStyled action="https://formspree.io/xqkyrlyn" method="POST">
                  <Box mb={3}>
                    <Input type="text" placeholder="Your name" name="Name" />
                  </Box>
                  <Box mb={3}>
                    <Input type="email" placeholder="Email address" name="Email" />
                  </Box>

                  <Box mb={3}>
                    <Input type="text" placeholder="Subject" name="Subject "/>
                  </Box>

                  <Box mb={3}>
                    <Input
                      type="text"
                      as="textarea"
                      placeholder="Write your message"
                      rows={4}
                      name="Text"
                    />
                  </Box>

                  <Button width="100%" type="submit" borderRadius={10} value="send">
                    Send Message
                  </Button>
                </FormStyled>
              </Col>
              <Col
                lg={5}
                className="offset-lg-1 order-lg-2 mt-5 mt-lg-0 pt-lg-5"
              >
                <Box className="mb-5">
                  <Title variant="card" fontSize="24px">
                    Email us
                  </Title>
                  <Text>hello@bobati.me</Text>
                </Box>
              </Col>
            </Row>
          </Container>
        </Section>
      </PageWrapper>
    </>
  );
};
export default Contact;
