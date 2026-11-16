import { PLACEHOLDER_ACCESS_KEY } from "../js/constants.js";

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
});

// Edit all site text here. Replace the Web3Forms key before publishing.
export const profile = {
  name: "Venkat Naveen Medarametla",
  shortName: "Venkat Naveen Medarametla",
  title: "Senior Software Engineer",
  location: "Hyderabad, India",
  tagline:
    "Building Salesforce integrations, event-sourcing data pipelines, and CI/CD automation for enterprise teams.",
  photo: "assets/profile.jpg",

  links: {
    linkedin: "https://www.linkedin.com/in/venkat-medarametla/",
    github: "https://github.com/VenkatNaveenMedarametla",
    resume: "assets/Venkat-Naveen-Resume.pdf",
  },

  contactForm: {
    web3formsAccessKey: PLACEHOLDER_ACCESS_KEY,
    intro:
      "Have a question or an opportunity in mind? Send me a message and I'll get back to you.",
  },

  about: {
    summary:
      "Senior Software Engineer with experience since 2019 designing Salesforce integrations, event-sourcing data pipelines, and CI/CD automation. I have worked across the full development lifecycle, from low-level design to production deployment, and have built APIs, reusable NPM packages, and internal tools that teams use every day.",
    focusAreas: [
      "Salesforce CRM and integrations",
      "Event sourcing and CQRS",
      "CI/CD and test automation",
      "Monitoring and observability with Grafana",
    ],
  },

  experience: [
    {
      organization: ORGANIZATIONS.berkadia,
      location: "Hyderabad, India",
      period: "Feb 2019 – Present",
      roles: [
        {
          title: "Senior Software Engineer",
          highlights: [
            "Led Salesforce integrations for comps, refinance calculations, and photo management.",
            "Built CQRS-based subscription and Excel add-in data pipelines on an event-sourcing database.",
            "Improved CI/CD branching and automated Tricentis testing in pipelines.",
            "Set up Grafana dashboards and alerts for transactional outbox events.",
          ],
        },
        {
          title: "Software Engineer",
          highlights: [
            "Built a Salesforce CI/CD pipeline with pre-deployment validation and dynamic delta branches.",
            "Added security scans with Checkmarx, Mend, and StackRox, and scheduled Apex test runs.",
            "Improved the transactional outbox for guaranteed delivery.",
            "Built an owner dashboard that consolidates data to reduce API calls.",
          ],
        },
        {
          title: "Associate Software Engineer",
          highlights: [
            "Developed property search and comps list APIs using Elasticsearch.",
            "Built a reusable NPM package for publishing, subscribing, and transient storage.",
            "Contributed to real-time data transfer from Salesforce to the event-sourcing database using CQRS.",
            "Developed an OCR application for text recognition and PDF conversion.",
          ],
        },
      ],
    },
  ],

  projects: [
    {
      name: "Salesforce CI/CD Pipeline",
      description:
        "Built a CI/CD pipeline with Salesforce CLI and Azure DevOps, including pre-deployment validation and dynamic branch creation for delta changes. Defined branching and PR review strategies for QC and production.",
      tags: ["Salesforce CLI", "Azure DevOps", "CI/CD"],
    },
    {
      name: "Salesforce Test Automation",
      description:
        "Integrated Tricentis test automation into CI/CD pipelines so tests run automatically on every deployment.",
      tags: ["Tricentis", "CI/CD", "Test automation"],
    },
    {
      name: "Refinance Calculation Integration",
      description:
        "Led end-to-end delivery of a Salesforce integration with an NPM package for refinance calculations, covering the low-level design, development lifecycle, and production deployment.",
      tags: ["Salesforce", "NPM", "LLD"],
    },
    {
      name: "Comps Subscription Service",
      description:
        "Designed a subscription process using the CQRS pattern on an event-sourcing database, with MySQL storing and transferring data to Salesforce.",
      tags: ["CQRS", "Event sourcing", "MySQL", "Salesforce"],
    },
    {
      name: "Excel Add-in Component Library",
      description:
        "Built a component library delivered as an Excel add-in that extracts table data from spreadsheets and publishes it to the event-sourcing database.",
      tags: ["Excel add-in", "Event sourcing"],
    },
    {
      name: "Photo Management Tool",
      description:
        "Integrated Salesforce with Amazon S3 for photo storage and retrieval, including bulk operations across S3 and MySQL.",
      tags: ["Salesforce", "Amazon S3", "MySQL"],
    },
    {
      name: "Transactional Outbox",
      description:
        "Managed real-time data transfer from over 30 streams to the event-sourcing database, with guaranteed delivery and Grafana dashboards tracking outbox events.",
      tags: ["Event sourcing", "Grafana", "Messaging"],
    },
    {
      name: "Stateless NPM Package",
      description:
        "Built a reusable NPM package for publishing, subscribing, and temporarily storing data with a transient index, handling processing and status maintenance end to end.",
      tags: ["NPM", "Node.js"],
    },
    {
      name: "Property Search APIs",
      description:
        "Developed APIs for property search and comps lists, integrating multiple data sources with Elasticsearch.",
      tags: ["Elasticsearch", "REST APIs"],
    },
    {
      name: "OCR Document Tool",
      description:
        "Built an application for text recognition and PDF conversion that streamlines document processing and data extraction.",
      tags: ["OCR", "PDF"],
    },
    {
      name: "Owner Dashboard",
      description:
        "Built an app for mortgage bankers to track owners, properties, lenders, and transactions, using a subscription model that consolidates data into single records to reduce API calls.",
      tags: ["Salesforce", "Subscriptions"],
    },
  ],

  skills: [
    {
      category: "Languages & frameworks",
      items: ["JavaScript", "Node.js", "Express.js", "Python", "TypeScript", "React", "Mocha"],
    },
    { category: "CRM", items: ["Salesforce"] },
    { category: "Data & search", items: ["MySQL", "Elasticsearch"] },
    { category: "Cloud & DevOps", items: ["AWS", "Docker", "Kubernetes", "Azure DevOps", "Git", "CI/CD"] },
    { category: "Monitoring & tools", items: ["Grafana", "Kibana", "VS Code", "DBeaver", "Postman"] },
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

  awards: [
    { title: "Berkadia Change Maker", year: "2023", organization: ORGANIZATIONS.berkadia },
    {
      title: "Berkadia Innovation Stellar Performer of the Year",
      year: "2021",
      note: "Nominated in 2020, 2022, and 2023.",
      organization: ORGANIZATIONS.berkadia,
    },
    {
      title: "GITAM University Merit Award and Medal",
      note: "Recognized for curricular and extra-curricular activities.",
      organization: ORGANIZATIONS.gitam,
    },
    {
      title: "Best Student Leader Award, National Service Scheme (NSS)",
      note: "Awarded at GITAM.",
      organization: ORGANIZATIONS.nss,
    },
  ],

  leadership: [
    {
      role: "Lead, Innovation Event Organizing Committee",
      organization: ORGANIZATIONS.berkadia,
    },
    {
      role: "JavaScript Trainer and Mentor",
      description: "Conducted JavaScript training for 16 freshers and mentored teammates in full-stack development.",
      organization: ORGANIZATIONS.berkadia,
    },
    {
      role: "Advisory Committee Member",
      organization: ORGANIZATIONS.nss,
    },
    {
      role: "Student Leader",
      description: "Responsible for 400 volunteers.",
      organization: ORGANIZATIONS.nss,
    },
    {
      role: "Vice President, Street Cause",
      organization: ORGANIZATIONS.gitam,
    },
    {
      role: "Marketing & Publishing Team Member, PR & Media Cell",
      organization: ORGANIZATIONS.gitam,
    },
  ],
};
