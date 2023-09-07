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
          name: "Python Data Structures ",
          description: "Certificate from the University of Michigan on Coursera.",         
          link:"https://coursera.org/share/b58bb7192ec17ee6f5e698d70d69c972"
        },
        {
          name: "Web Design for Everybody: Basics of Web Development & Coding Specialization",
          description: "Certificate from the University of Michigan on Coursera.",         
          link:"https://coursera.org/share/430013ac8af3a72a4634079558258003"
        },
        {
          name: "Introduction to Front-End Development",
          description: "Certificate from Meta on Coursera.",        
          link:"https://coursera.org/share/ab095ade341bc0a08fce3b7514a23fa4"
        },
        {
          name: "HTML, CSS, and Javascript for Web Developers",
          description: "Certificate from Johns Hopkins University on Coursera.",
          link:"https://coursera.org/share/a64f09f3abe87de23374f4a9025794a0"
        },
        {
          name: "Introduction to Back-End Development",
          description: "Certificate from Meta on Coursera.",
          link:"https://coursera.org/share/07316e3310726e18773144f524584605"
        },
        {
          name: "Agile for Software Development: Lean, Agile, & Scrum Methodologies",
          description: "Certificate from Skillsoft.",
          link:"https://skillsoft.digitalbadges.skillsoft.com/bcbd9851-3283-4a4b-89e7-ea7266882ed4#gs.45an65"
        },
        {
          name: "SQL Concepts & Queries",
          description: "Certificate from Skillsoft.",
          link:"https://skillsoft.digitalbadges.skillsoft.com/fdbb3584-1e53-4b16-a1b4-7cb7986e8d0b#gs.45aoqw"
        },
        {
          name: "Javascript For Beginners Complete Course",
          description: "Certificate from Udemy.",
          link:"https://www.udemy.com/certificate/UC-7734735c-899f-4238-b1ea-5b5021de081b/"
        },
        {
          name: "7 Days Virtual Bootcamp on Web Development",
          description: "Certificate from DevTown.",
          link:"https://cert.devtown.in/verify/11FCSM"
        },
        {
          name: "Postman Classroom Program",
          description: "Certificate from COSH, NITK Surathkal.",
          link:""
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
                    03
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
                            <a href={certificate.link} target="_blank" rel="noopener noreferrer">
                              <Button color={`${"teal"}.400`}>View Certificate</Button>
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