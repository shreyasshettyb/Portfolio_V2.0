import { useState, useEffect } from "react";

const parseProfile = (mdContent) => {
  const profile = {
    siteName: "Portfolio - Shreyas Shetty B",
    headerName: "Hi, my name is Shreyas Shetty B.",
    headerRole: "I'm a Software Devloper",
    headerDesc: "Welcome to my portfolio website",
    about: "Hello, I am a software developer and an avid technologist. I have always admired how technology can transform our world. I am a self-motivated individual who is always eager to learn something new. I have strong technical skills, interest in real-world problem solving, software development and computing and engineering.",
    contact: "",
    linkedin: "https://www.linkedin.com/in/shreyas-shetty-b-1720141a1",
    github: "https://github.com/shreyasshettyb",
    email: "shreyasb52@gmail.com",
    logo: "",
  };

  const lines = mdContent.split("\n");

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      const section = line.substr(3).trim();

      switch (section) {
        case "Header":
          profile.headerName = lines[++i].substr(2).trim();
          profile.headerRole = lines[++i].substr(2).trim();
          profile.headerDesc = lines[++i].substr(2).trim();
          break;
        case "About":
          profile.about = lines[++i].trim();
          break;
        case "Contact":
          profile.contact = lines[++i].trim();
          const contactLinks = ["LinkedIn", "GitHub", "Email"];
          for (const link of contactLinks) {
            const linkLine = lines[++i].substr(2).trim();
            if (linkLine.startsWith(link)) {
              profile[link.toLowerCase()] = linkLine.split(": ")[1].trim();
            }
          }
          break;
        case "Logo":
          profile.logo = lines[++i].substr(2).trim();
          break;
        default:
          // do nothing
          break;
      }
    }
  }

  return profile;
};

const ProfileArray = () => {
  const [profile, setProfile] = useState({
    siteName: "Portfolio - Shreyas Shetty B",
    headerName: "Hi, my name is Shreyas Shetty B.",
    headerRole: "I'm a Software Devloper",
    headerDesc: "Welcome to my portfolio website",
    about: "Hello, I am a software developer and an avid technologist. I have always admired how technology can transform our world. I am a self-motivated individual who is always eager to learn something new. I have strong technical skills, interest in real-world problem solving, software development and computing and engineering.",
    contact: "",
    linkedin: "https://www.linkedin.com/in/shreyas-shetty-b-1720141a1",
    github: "https://github.com/shreyasshettyb",
    email: "shreyasb52@gmail.com",
    logo: "",
  });

  useEffect(() => {
    fetch("/content/Profile.md")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch markdown content");
        }
        return response.text();
      })
      .then((mdContent) => {
        setProfile(parseProfile(mdContent));
      })
      .catch((error) => {
        console.error("Error fetching markdown content:", error);
      });
  }, []);

  return profile;
};

export default ProfileArray;
