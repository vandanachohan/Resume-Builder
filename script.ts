import *as jsPDF from 'jspdf';

document.addEventListener("DOMContentLoaded", () => {
  const toggleSkillsButton = document.getElementById("toggle-skills");
  const skillsSection = document.querySelector(".skills");
  if (toggleSkillsButton && skillsSection) {
    toggleSkillsButton.addEventListener("click", () => {
      skillsSection.classList.toggle("hidden");
    });
  } else {
    console.error("Could not find one or both of the required elements.");
  }
});

function generateResume(){
    const doc = new jsPDF();
    doc.test(`Your Resume Content`,10, 10)
    doc.save('resume.pdf')
};

const doc = new jsPDF();
const resumeData = {
  name: "Vandana Amarsi",
  contact: "03323505695 | vandanachohan851@gmail.com",
  education: "Associate Degree in Arts, Karachi University (2020-2022)",
  skills: ["HTML/CSS", "TypeScript", "Python", "JavaScript"],
  workExperience: [
    {
      company: "Lifi Insurance Company",
      role: "Data Entry",
      description: "Manage documents file, analyze data client."
    },
    {
      company: "DEF Startups",
      role: "Intern",
      description: "Contributed to the development of a mobile app for tracking personal expenses using Java and Android Studio."
    }
  ]
};

doc.text(resumeData.name, 10, 10);
doc.text(resumeData.contact, 10, 20);
doc.text(resumeData.education, 10, 30);
doc.text("Skills:", 10, 40);
resumeData.skills.forEach((skill, index) => {
  doc.text(skill, 10, 50 + index * 10);
});
doc.text("Work Experience:", 10, 70);
resumeData.workExperience.forEach((experience, index) => {
  doc.text(experience.company, 10, 80 + index * 20);
  doc.text(experience.role, 10, 90 + index * 20);
  doc.text(experience.description, 10, 100 + index * 20);
});

doc.save('resume.pdf', { format: 'letter' });
