import {
  Container,
  Stack,
  Text,
  Divider,
  HStack,
  Box,
} from "@chakra-ui/react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaJava,
  FaReact,
  FaNodeJs,
  FaAndroid
} from "react-icons/fa";
import { SiCplusplus,SiPostman,SiMysql,SiPhp } from "react-icons/si"
import { Fade } from "react-reveal";

export default function Skills({ color }) {
  const skillsRow1 = [
    { name: "HTML", icon: <FaHtml5 size="5em" />, color: "#E53E3E" },
    { name: "CSS", icon: <FaCss3Alt size="5em" />, color: "#4299E1" },
    { name: "JavaScript", icon: <FaJs size="5em" />, color: "#D69E2E" },
    { name: "React", icon: <FaReact size="5em" />, color: "#61DBFB" },
    { name: "Node.js", icon: <FaNodeJs size="5em" />, color: "#4CAF50" },
    { name: "PHP", icon: <SiPhp size="5em" />, color: "#8993be" },
  ];

  const skillsRow2 = [
    { name: "C++", icon: <SiCplusplus size="5em" />, color: "#2B6CB0" },
    { name: "Java", icon: <FaJava size="5em" />, color: "#9F7AEA" },
    { name: "Python", icon: <FaPython size="5em" />, color: "#2B6CB0" },
   
    { name: "Postman", icon: <SiPostman size="5em" />, color: "#FF5733" },
    { name: "Mysql", icon: <SiMysql size="5em" />, color: "#2B6CB0" },
    { name: "Android", icon: <FaAndroid size="5em" />, color: "#3DDC84" },
  ];

  return (
    <Container maxW={"3xl"} id="Skills">
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        pb={{ base: 20, md: 10 }}
      >
        <Stack align="center" direction="row" px={4}>
          <HStack mx={4}>
            <Text color={`${color}.400`} fontWeight={800}>
              02
            </Text>
            <Text fontWeight={800}>Skills</Text>
          </HStack>
          <Divider orientation="horizontal" />
        </Stack>
        <Stack align="center" px={4} spacing={4}>
          <HStack spacing={8}>
            {skillsRow1.map((skill, index) => (
              <Fade key={index} delay={index * 200}>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  color={skill.color}
                >
                  <div>{skill.icon}</div>
                  <span>{skill.name}</span>
                </Box>
              </Fade>
            ))}
          </HStack>
          <HStack spacing={8} mt={4}>
            {skillsRow2.map((skill, index) => (
              <Fade key={index} delay={index * 200}>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  color={skill.color}
                >
                  <div>{skill.icon}</div>
                  <span>{skill.name}</span>
                </Box>
              </Fade>
            ))}
          </HStack>
        </Stack>
      </Stack>
    </Container>
  );
}
