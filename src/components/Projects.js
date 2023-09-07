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
  Badge,
} from "@chakra-ui/react";
import { Fade } from "react-reveal";

export default function Projects({ color }) {
  const projects = [
    {
      name: "Google Bard Clone",
      description: "This project is a clone of Google Bard, a large language model (LLM) chatbot developed by Google AI. The project was created using HTML, CSS, JavaScript, and Flask. The project is able to generate text, translate languages, write different kinds of creative content, and answer questions in an informative way.",
      buttons: [
        { text: "GitHub", href: "https://github.com/shreyasshettyb/Google_Bard_Clone" }
      ],
      badges: [{ text: "HTML, CSS, JavaScript, Flask, Python.", colorScheme: "pink" }],
    },
    {
      name: "Blood Bank Management System",
      description: "This project is a web-based blood bank management system that allows blood banks in hospital to manage their inventory of blood, request other blood bank for donations. The system is built using HTML, CSS, PHP, and MySQL",
      buttons: [
  
        { text: "GitHub", href: "https://github.com/shreyasshettyb/BloodBank_Management_System" },
      ],
      badges: [{ text: "HTML, CSS, PHP, MYSQL.", colorScheme: "red" }],
    },
    {
      name: "Portfolio Website",
      description: "This project is a personal portfolio website that showcases my skills and experience in web development. The website is built using HTML, CSS, JavaScript, Node.js, and React.js.",
      
      buttons: [
      
        { text: "GitHub", href: "https://github.com/shreyasshettyb/Portfolio_V2.0" },
      ],
      badges: [{ text: "HTML, CSS, JavaScript, Node.JS, React.", colorScheme: "purple" }],
    },
    {
      name: "Crowd Funding",
      description: "This Android project is a crowdfunding app that allows users to create and manage crowdfunding campaigns.",
      
      buttons: [
      
        { text: "GitHub", href: "https://github.com/shreyasshettyb/CrowdFunding-MAD-Project" },
      ],
      badges: [{ text: "Android Studio", colorScheme: "blue" }],
    }
  ];

  return (
    <>
      <Container maxW={"3xl"} id="projects">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 10 }}
        >
          <Stack align="center" direction="row" >
            <HStack mx={2}>
              <Text color={`${color}.400`} fontWeight={800}>
                04
              </Text>
              <Text fontWeight={800}>Projects</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Stack align="center" px={4} spacing={4}>
            {projects.map((project) => (
              <Fade bottom key={project.name}>
                <Card
                  direction={{
                    base: "column",
                  }}
                  overflow="hidden"
                >
                  <Stack>
                    <CardBody align="left">
                      <Heading size="md" color={`${"purple"}.400`}>{project.name}</Heading>

                      <Text py={2}>{project.description}</Text>

                      <HStack py={2}>
                        {project.buttons.map((button) => (
                          <a key={button.text} href={button.href} target="_blank" rel="noopener noreferrer">
                            <Button color={`${"purple"}.400`}>
                              {button.text}
                            </Button>
                          </a>
                        ))}
                      </HStack>
                      <HStack pt={4} spacing={2}>
                        {project.badges.map((badge) => (
                          <Badge
                            key={badge.text}
                            colorScheme={badge.colorScheme}
                          >
                            {badge.text}
                          </Badge>
                        ))}
                      </HStack>
                    </CardBody>
                  </Stack>
                </Card>
              </Fade>
            ))}
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
