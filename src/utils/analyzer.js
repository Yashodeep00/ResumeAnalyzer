// Resume Analysis Utility
// This simulates a comprehensive resume analysis system

export const analyzeResume = async (resumeFile, jobDescription) => {
  // Simulate processing time
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Extract text from resume (in a real app, you'd use a PDF parser or OCR)
  const resumeText = await extractTextFromFile(resumeFile);
  
  // Analyze different aspects
  const skillsScore = analyzeSkills(resumeText, jobDescription);
  const experienceScore = analyzeExperience(resumeText, jobDescription);
  const educationScore = analyzeEducation(resumeText, jobDescription);
  const keywordsScore = analyzeKeywords(resumeText, jobDescription);
  const formattingScore = analyzeFormatting(resumeText);

  // Calculate overall score
  const overallScore = Math.round(
    (skillsScore + experienceScore + educationScore + keywordsScore + formattingScore) / 5
  );

  // Generate findings and recommendations
  const keyFindings = generateFindings(resumeText, jobDescription, {
    skillsScore,
    experienceScore,
    educationScore,
    keywordsScore,
    formattingScore
  });

  const recommendations = generateRecommendations(resumeText, jobDescription, {
    skillsScore,
    experienceScore,
    educationScore,
    keywordsScore,
    formattingScore
  });

  return {
    overallScore,
    categoryScores: {
      skills: skillsScore,
      experience: experienceScore,
      education: educationScore,
      keywords: keywordsScore,
      formatting: formattingScore
    },
    keyFindings,
    recommendations
  };
};

const extractTextFromFile = async (file) => {
  // Simulate text extraction
  // In a real application, you would use libraries like pdf-parse for PDFs
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      // For demo purposes, we'll simulate some resume content
      const simulatedResume = `
        JOHN DOE
        Software Engineer
        john.doe@email.com | (555) 123-4567 | linkedin.com/in/johndoe
        
        SUMMARY
        Experienced software engineer with 5+ years developing web applications using React, Node.js, and Python. Passionate about creating scalable solutions and leading development teams.
        
        EXPERIENCE
        Senior Software Engineer | TechCorp Inc. | 2021 - Present
        - Led development of customer portal using React and Node.js
        - Implemented CI/CD pipelines reducing deployment time by 40%
        - Mentored 3 junior developers and conducted code reviews
        - Collaborated with product team to define technical requirements
        
        Software Engineer | StartupXYZ | 2019 - 2021
        - Developed RESTful APIs using Python Flask and PostgreSQL
        - Built responsive web interfaces with JavaScript and CSS
        - Participated in agile development process with 2-week sprints
        - Optimized database queries improving performance by 25%
        
        EDUCATION
        Bachelor of Science in Computer Science
        University of Technology | 2015 - 2019
        GPA: 3.8/4.0
        
        SKILLS
        Programming Languages: JavaScript, Python, Java, SQL
        Frameworks & Libraries: React, Node.js, Express, Flask, Django
        Databases: PostgreSQL, MongoDB, MySQL
        Tools & Technologies: Git, Docker, AWS, Jenkins, JIRA
        Soft Skills: Leadership, Problem Solving, Team Collaboration, Communication
        
        CERTIFICATIONS
        AWS Certified Developer Associate
        Google Cloud Professional Developer
      `;
      resolve(simulatedResume);
    };
    reader.readAsText(file);
  });
};

const analyzeSkills = (resumeText, jobDescription) => {
  const commonSkills = [
    'javascript', 'python', 'java', 'react', 'node.js', 'sql', 'aws', 'docker',
    'git', 'agile', 'leadership', 'communication', 'problem solving'
  ];
  
  const resumeSkills = resumeText.toLowerCase();
  const jobSkills = jobDescription.toLowerCase();
  
  let skillMatches = 0;
  let totalSkills = 0;
  
  commonSkills.forEach(skill => {
    if (jobSkills.includes(skill)) {
      totalSkills++;
      if (resumeSkills.includes(skill)) {
        skillMatches++;
      }
    }
  });
  
  return totalSkills > 0 ? Math.round((skillMatches / totalSkills) * 100) : 70;
};

const analyzeExperience = (resumeText, jobDescription) => {
  const experienceKeywords = ['years', 'experience', 'senior', 'lead', 'manage'];
  const jobExp = jobDescription.toLowerCase();
  const resumeExp = resumeText.toLowerCase();
  
  let experienceScore = 70; // Base score
  
  // Check for experience level indicators
  if (jobExp.includes('senior') && resumeExp.includes('senior')) experienceScore += 15;
  if (jobExp.includes('lead') && resumeExp.includes('lead')) experienceScore += 10;
  if (jobExp.includes('manage') && resumeExp.includes('manage')) experienceScore += 10;
  
  // Check for years of experience
  const yearMatch = resumeExp.match(/(\d+)\+?\s*years?/);
  if (yearMatch) {
    const years = parseInt(yearMatch[1]);
    if (years >= 5) experienceScore += 15;
    else if (years >= 3) experienceScore += 10;
    else if (years >= 1) experienceScore += 5;
  }
  
  return Math.min(experienceScore, 100);
};

const analyzeEducation = (resumeText, jobDescription) => {
  const educationKeywords = ['bachelor', 'master', 'phd', 'degree', 'university', 'college'];
  const jobEdu = jobDescription.toLowerCase();
  const resumeEdu = resumeText.toLowerCase();
  
  let educationScore = 80; // Base score for having education section
  
  educationKeywords.forEach(keyword => {
    if (jobEdu.includes(keyword) && resumeEdu.includes(keyword)) {
      educationScore += 5;
    }
  });
  
  // Bonus for relevant field
  if (jobEdu.includes('computer') && resumeEdu.includes('computer')) educationScore += 10;
  if (jobEdu.includes('engineering') && resumeEdu.includes('engineering')) educationScore += 10;
  
  return Math.min(educationScore, 100);
};

const analyzeKeywords = (resumeText, jobDescription) => {
  const resumeWords = resumeText.toLowerCase().split(/\s+/);
  const jobWords = jobDescription.toLowerCase().split(/\s+/);
  
  const resumeWordSet = new Set(resumeWords);
  const jobWordSet = new Set(jobWords);
  
  let matches = 0;
  let totalJobWords = jobWordSet.size;
  
  jobWordSet.forEach(word => {
    if (resumeWordSet.has(word) && word.length > 3) {
      matches++;
    }
  });
  
  return totalJobWords > 0 ? Math.round((matches / totalJobWords) * 100) : 60;
};

const analyzeFormatting = (resumeText) => {
  let formattingScore = 70; // Base score
  
  // Check for proper sections
  const sections = ['experience', 'education', 'skills', 'summary'];
  sections.forEach(section => {
    if (resumeText.toLowerCase().includes(section)) {
      formattingScore += 5;
    }
  });
  
  // Check for contact information
  if (resumeText.includes('@') && resumeText.includes('.')) formattingScore += 10;
  
  // Check for bullet points
  if (resumeText.includes('•') || resumeText.includes('-')) formattingScore += 5;
  
  return Math.min(formattingScore, 100);
};

const generateFindings = (resumeText, jobDescription, scores) => {
  const findings = [];
  
  if (scores.skills >= 80) {
    findings.push({
      type: 'positive',
      message: 'Strong skill alignment with job requirements'
    });
  } else if (scores.skills < 60) {
    findings.push({
      type: 'negative',
      message: 'Limited skill overlap with job requirements'
    });
  }
  
  if (scores.experience >= 80) {
    findings.push({
      type: 'positive',
      message: 'Experience level matches job requirements well'
    });
  } else if (scores.experience < 60) {
    findings.push({
      type: 'warning',
      message: 'May need more relevant experience for this role'
    });
  }
  
  if (scores.keywords >= 70) {
    findings.push({
      type: 'positive',
      message: 'Good keyword optimization for ATS systems'
    });
  } else {
    findings.push({
      type: 'warning',
      message: 'Consider adding more relevant keywords from job description'
    });
  }
  
  if (scores.formatting >= 80) {
    findings.push({
      type: 'positive',
      message: 'Well-structured and professional resume format'
    });
  } else {
    findings.push({
      type: 'warning',
      message: 'Resume formatting could be improved for better readability'
    });
  }
  
  return findings;
};

const generateRecommendations = (resumeText, jobDescription, scores) => {
  const recommendations = [];
  
  if (scores.skills < 80) {
    recommendations.push('Add more relevant technical skills from the job description to your skills section');
  }
  
  if (scores.keywords < 70) {
    recommendations.push('Incorporate more keywords from the job description naturally throughout your resume');
  }
  
  if (scores.experience < 70) {
    recommendations.push('Highlight relevant experience that matches the job requirements more prominently');
  }
  
  if (scores.formatting < 80) {
    recommendations.push('Improve resume formatting with clear sections, bullet points, and professional layout');
  }
  
  recommendations.push('Quantify your achievements with specific numbers and metrics where possible');
  recommendations.push('Tailor your summary section to align with the specific role and company');
  
  return recommendations;
}; 