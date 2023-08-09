// import { useState, useEffect } from "react";

// const parseExperience = (mdContent) => {
//   const experience = [];
//   const lines = mdContent.split("\n");

//   for (let i = 0; i < lines.length; i++) {
//     const line = lines[i];

//     if (line.startsWith("## ")) {
//       const company = line.substr(3).trim();
//       const positionLine = lines[++i]
//         .substr(2)
//         .split("|")
//         .map((s) => s.trim());
//       const position = positionLine[0].slice(1, -1);
//       const duration = positionLine[1].trim();
//       const imageLine = lines[++i];
//       const image = imageLine.match(/!\[(.*)\]\((.*)\)/)[2];
//       const tags = lines[++i].split(":")[1].trim();
//       const badges = [];
//       const listItems = [];

//       while (lines[++i] && !lines[i].startsWith("- Badges:")) {}
//       while (lines[++i] && lines[i].startsWith("  - ")) {
//         const badgeLine = lines[i].substr(4).split("[");
//         const badgeName = badgeLine[0].trim();
//         const badgeColor = badgeLine[1].split("]")[0].trim();
//         badges.push({ name: badgeName, colorScheme: badgeColor });
//       }

//       while (lines[++i] && lines[i].startsWith("  - ")) {
//         listItems.push(lines[i].substr(4));
//       }

//       experience.push({
//         image,
//         company,
//         position,
//         duration,
//         badges,
//         listItems,
//         tags,
//       });
//     }
//   }

//   return experience;
// };

// const ExperienceArray = () => {
//   const [experience, setExperience] = useState([]);

//   useEffect(() => {
//     fetch("/content/Experience.md")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch markdown content");
//         }
//         return response.text();
//       })
//       .then((mdContent) => {
//         setExperience(parseExperience(mdContent));
//       })
//       .catch((error) => {
//         console.error("Error fetching markdown content:", error);
//       });
//   }, []);

//   return experience;
// };

// export default ExperienceArray;

import { useState, useEffect } from "react";

const parseSkills = (mdContent) => {
  const skills = [];
  const lines = mdContent.split("\n");

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      const skillName = line.substr(3).trim();
      const skillLine = lines[++i]
        .substr(2)
        .split("|")
        .map((s) => s.trim());
      const skillLevel = skillLine[0].slice(1, -1);
      const description = skillLine[1].trim();
      const frameworks = skillLine[2].split(",").map((framework) => framework.trim());
      const icon = lines[++i].match(/!\[(.*)\]\((.*)\)/)[2];
      const tag = lines[++i].split(":")[1].trim();

      skills.push({
        icon,
        name: skillName,
        level: skillLevel,
        description,
        frameworks,
        tag,
      });
    }
  }

  return skills;
};

const SkillsArray = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("/content/Skills.md")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch markdown content");
        }
        return response.text();
      })
      .then((mdContent) => {
        setSkills(parseSkills(mdContent));
      })
      .catch((error) => {
        console.error("Error fetching markdown content:", error);
      });
  }, []);

  return skills;
};

export default SkillsArray;
