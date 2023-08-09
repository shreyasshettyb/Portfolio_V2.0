import React from "react";
import {
  Container,
  Stack,
  Text,
  Divider,
  Box,
  HStack,
  Button,
  Card,
  CardBody,
  Heading,
  Grid,
} from "@chakra-ui/react";
import { Fade } from "react-reveal";

export default function Certificates({ color }) {
    const certificates = [
        {
          name: "Python Data Structures (Getting Started with Python)",
          description: "Certificate from the University of Michigan on Coursera.",
          image: "python_certificate.jpg", // Replace with actual certificate image
        },
        {
          name: "Web Design for Everybody: Basics of Web Development & Coding Specialization",
          description: "Certificate from the University of Michigan on Coursera.",
          image: "web_design_certificate.jpg", // Replace with actual certificate image
        },
        {
          name: "Introduction to Front-End Development",
          description: "Certificate from Meta on Coursera.",
          image: "front_end_certificate.jpg", // Replace with actual certificate image
        },
        {
          name: "HTML, CSS, and Javascript for Web Developers",
          description: "Certificate from Johns Hopkins University on Coursera.",
          image: "html_css_js_certificate.jpg", // Replace with actual certificate image
        },
        {
          name: "Introduction to Back-End Development",
          description: "Certificate from Meta on Coursera.",
          image: "back_end_certificate.jpg", // Replace with actual certificate image
        },
        {
          name: "Agile for Software Development: Lean, Agile, & Scrum Methodologies",
          description: "Certificate from Skillsoft.",
          image: "agile_certificate.jpg", // Replace with actual certificate image
        },
        {
          name: "SQL Concepts & Queries",
          description: "Certificate from Skillsoft.",
          image: "sql_certificate.jpg", // Replace with actual certificate image
        },
        {
          name: "Javascript For Beginners Complete Course",
          description: "Certificate from Udemy.",
          image: "javascript_certificate.jpg", // Replace with actual certificate image
        },
        {
          name: "7 Days Virtual Bootcamp on Web Development",
          description: "Certificate from DevTown.",
          image: "bootcamp_certificate.jpg", // Replace with actual certificate image
        },
        {
          name: "Postman Classroom Program",
          description: "Certificate from COSH, NITK Surathkal.",
          image: "postman_certificate.jpg", // Replace with actual certificate image
        },
        // ... add more certificates as needed
      ];

   
      return (
        <>
          <Container maxW={"3xl"} id="certificates">
            <Stack
              as={Box}
              textAlign={"center"}
              spacing={{ base: 8, md: 14 }}
              pb={{ base: 20, md: 10 }}
            >
              <Stack align="center" direction="row">
                <HStack mx={2}>
                  <Text color={`${color}.400`} fontWeight={800}>
                    04
                  </Text>
                  <Text fontWeight={800}>Certificates</Text>
                </HStack>
                <Divider orientation="horizontal" />
              </Stack>
              <Grid
                templateColumns="repeat(auto-fill, minmax(350px, 2fr))" // Tiled layout
                gap={2}
                px={5}
                pd={5}
              >
                {certificates.map((certificate) => (
                  <Fade bottom key={certificate.name}>
                    <Card
                      direction={{
                        base: "column",
                      }}
                      overflow="hidden"
                    >
                      <Stack>
                        <CardBody align="left">
                          <Heading size="md" color={`${"teal"}.400`}>
                            {certificate.name}
                          </Heading>
    
                          <Text py={2}>{certificate.description}</Text>
    
                          {/* Add button or link for viewing/download */}
                          
                          <HStack py={2}>
                            <a href="www.google.com" download>
                              <Button color={`${"teal"}.400`}>Download</Button>
                            </a>
                          </HStack>
                        </CardBody>
                      </Stack>
                    </Card>
                  </Fade>
                ))}
              </Grid>
            </Stack>
          </Container>
        </>
      );
    }