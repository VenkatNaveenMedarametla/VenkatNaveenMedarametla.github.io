const ORGANIZATIONS = Object.freeze({
  berkadia: {
    name: "Berkadia",
    logo: "assets/logos/berkadia-logo.svg",
    website: "https://www.berkadia.com",
  },
  gitam: {
    name: "GITAM Deemed to be University",
    logo: "assets/logos/gitam-logo.png",
    website: "https://www.gitam.edu",
  },
  nss: {
    name: "National Service Scheme (NSS)",
    logo: "assets/logos/nss-logo.jpg",
    website: "https://nss.gov.in",
  },
  itc: {
    name: "ITC Limited",
  },
});

// Edit all site text here. Replace the Web3Forms key before publishing.
export const profile = {
  name: "Venkat Naveen Medarametla",
  brandMark: "VN",
  title: "Senior Software Engineer II",
  location: "Hyderabad, India",
  tagline:
    "Building AI-driven enterprise solutions with a human in the loop, from prompt optimization for document processing to Salesforce integrations and event-sourced data pipelines.",
  photo: "assets/profile.jpg",
  careerStartDate: "2019-02-01",

  links: {
    linkedin: "https://www.linkedin.com/in/venkat-medarametla/",
    github: "https://github.com/VenkatNaveenMedarametla",
    resume: "assets/Venkat-Naveen-Resume.pdf",
  },

  about: {
    summary:
      "As a Senior Software Engineer with over seven years of experience, I specialize in architecting and delivering robust end-to-end web applications, complex Salesforce integrations, and cutting-edge AI-driven solutions using the Model Context Protocol (MCP). My expertise spans the entire development lifecycle, from initial design and full-stack implementation to cloud deployment and ongoing production support. I build with Cursor and AI-assisted tooling.",
    focusAreas: [
      "AI integration with MCP and prompt optimization for document processing",
      "Salesforce CRM and integrations",
      "Event sourcing and CQRS",
    ],
  },

  experience: [
    {
      organization: ORGANIZATIONS.berkadia,
      summary: "A leader in commercial real estate, serving multifamily and commercial property clients.",
      location: "Hyderabad, India",
      training: [
        {
          role: "JavaScript Trainer and Mentor",
          description: "Conducted JavaScript training for 16 freshers and mentored teammates in full-stack development.",
        },
      ],
      roles: [
        {
          title: "Senior Software Engineer II",
          period: "Feb 2026 – Present",
          workMode: "Hybrid",
          highlights: [
            "Built a proof of concept connecting a Salesforce MCP server to an internal MCP client, giving the AI engine secure, permission-aware Salesforce access.",
            "Lead ongoing Salesforce enhancements and cross-system integrations.",
            "Build user-requested features that improve platform reliability and the end-user experience.",
          ],
        },
        {
          title: "Senior Software Engineer",
          period: "Feb 2024 – Jan 2026",
          workMode: "Hybrid",
          highlights: [
            "Built Comps identification and creation APIs with a CQRS subscription model.",
            "Redesigned Comps identification with Lightning Web Components and Node.js.",
            "Built a custom Excel add-in for data extraction and persistence.",
            "Built Grafana dashboards in KQL to monitor Salesforce-to-database pipelines.",
            "Built a Handlebars and Puppeteer engine that generates template-driven PDFs.",
          ],
        },
        {
          title: "Software Engineer",
          period: "Aug 2021 – Jan 2024",
          workMode: "Remote",
          highlights: [
            "Built a data indexing solution that consolidated streams into single objects, cutting API call volume.",
            "Built Salesforce CI/CD pipelines with Salesforce CLI and Azure Pipelines, including branching and security validation.",
            "Engineered loan calculation and refinancing modules.",
          ],
        },
        {
          title: "Associate Software Engineer",
          period: "Feb 2019 – Jul 2021",
          workMode: "On-site",
          highlights: [
            "Built a property search mechanism over complex Elasticsearch queries.",
            "Built high-throughput real-time sync from Salesforce to Elasticsearch.",
            "Refined OCR post-processing for data extracted from PDFs.",
          ],
        },
      ],
    },
  ],

  skills: [
    {
      category: "Languages & frameworks",
      items: ["JavaScript", "Node.js", "Express.js", "Python", "TypeScript", "React", "Handlebars.js", "Mocha"],
    },
    { category: "AI & integration", items: ["Model Context Protocol (MCP)", "Agent Orchestration", "RAG", "REST APIs"] },
    { category: "CRM", items: ["Salesforce", "Apex", "Lightning Web Components"] },
    { category: "Data & search", items: ["MySQL", "Elasticsearch", "Amazon S3"] },
    { category: "Cloud & DevOps", items: ["AWS", "Docker", "Kubernetes", "Azure DevOps", "Git", "CI/CD"] },
    { category: "Monitoring & tools", items: ["Grafana", "Kibana", "Cursor", "VS Code", "DBeaver", "Postman"] },
    {
      category: "Practices",
      items: ["Agile", "HLD & LLD", "Test-driven development", "RESTful API design", "Documentation"],
    },
  ],

  education: [
    {
      degree: "B.Tech, Computer Science",
      organization: ORGANIZATIONS.gitam,
      location: "Hyderabad, India",
      period: "2015 – 2019",
      grade: "CGPA 8.57",
    },
  ],

  certifications: [
    {
      name: "Introduction to Model Context Protocol",
      issuer: "Anthropic",
      issued: "Jul 2025",
      credentialId: "vabeewk55y23",
      verifyUrl: "https://verify.skilljar.com/c/vabeewk55y23",
    },
    {
      name: "Model Context Protocol: Advanced Topics",
      issuer: "Anthropic",
      issued: "Jul 2025",
      credentialId: "nchgwsq9yj9x",
      verifyUrl: "https://verify.skilljar.com/c/nchgwsq9yj9x",
    },
    {
      name: "Salesforce Certified Administrator (SCA)",
      issuer: "Salesforce",
      issued: "Jan 2024",
      credentialId: "4036589",
    },
    {
      name: "Salesforce Certified Platform Developer I",
      issuer: "Salesforce",
      issued: "Aug 2023",
      credentialId: "3573894",
    },
    {
      name: "Salesforce Certified Associate",
      issuer: "Salesforce",
      issued: "May 2023",
      credentialId: "3429118",
    },
    {
      name: "Security White Belt",
      issuer: "Security Journey",
      issued: "Feb 2024",
      verifyUrl: "https://my.securityjourney.com/api/certificates/21Is5DVKOvwGEo48oARxcP/berkadia",
    },
    {
      name: "Security Yellow Belt",
      issuer: "Security Journey",
      issued: "Feb 2024",
      verifyUrl: "https://my.securityjourney.com/api/certificates/GFuzlOMVv0Gw9AJWtxKeG/berkadia",
    },
    {
      name: "CPR/AED/First Aid",
      issuer: "NIST Institute Private Limited",
      issued: "Jun 2019",
      credentialId: "00396723",
    },
  ],

  awards: [
    {
      title: "LEAP Achiever Award",
      year: "Jun 2026",
      note: "Recognized by Learning & Development for exemplary performance; ranked among the top five in the leadership development cohort.",
      organization: ORGANIZATIONS.berkadia,
    },
    {
      title: "Berkadia Change Maker",
      year: "Feb 2023",
      note: "Recognized for proactively identifying opportunities for the greater good and inspiring lasting impact.",
      organization: ORGANIZATIONS.berkadia,
    },
    {
      title: "Stellar Performer of the Year, Innovation",
      year: "Dec 2021",
      note: "Recognized for innovation at the 2021 annual awards ceremony.",
      organization: ORGANIZATIONS.berkadia,
    },
    {
      title: "Best NSS Leader",
      year: "Mar 2019",
      note: "Awarded by National Service Scheme GITAM Hyderabad for leading 400 volunteers.",
      organization: ORGANIZATIONS.nss,
    },
    {
      title: "University Merit Award for Excellence in Academics and Social Activities",
      year: "Mar 2019",
      note: "Awarded by GITAM University Hyderabad for academic performance and event organization.",
      organization: ORGANIZATIONS.gitam,
    },
  ],

  leadership: [
    {
      role: "Lead, Innovation Event Organizing Committee",
      organization: ORGANIZATIONS.berkadia,
    },
    {
      role: "Advisory Committee Member",
      period: "Jul 2018 – Apr 2019",
      organization: ORGANIZATIONS.nss,
    },
    {
      role: "Student Lead",
      period: "Jul 2016 – Jul 2018",
      description:
        "Directed 400 volunteers on tree plantation drives, blood donation and medical camps, anti-drug awareness, and community outreach.",
      organization: ORGANIZATIONS.nss,
    },
    {
      role: "Vice President",
      period: "Jun 2017 – Jul 2018",
      description: "Street Cause, GITAM Division.",
      organization: ORGANIZATIONS.gitam,
    },
    {
      role: "Campus Head, WOW Initiative",
      period: "Jun 2017 – Apr 2018",
      description: "ITC Limited.",
      organization: ORGANIZATIONS.itc,
    },
    {
      role: "Marketing & Publishing Team Member, PR & Media Cell",
      organization: ORGANIZATIONS.gitam,
    },
  ],
};
