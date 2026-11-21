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
    logo: "assets/logos/itc-logo.svg",
    website: "https://www.itcportal.com",
  },
});

// Portfolio content and linked credentials.
export const profile = {
  name: "Venkat Naveen Medarametla",
  brandMark: "VN",
  title: "Senior Software Engineer II",
  location: "Hyderabad, India",
  headlineLines: ["Engineering", "what’s next."],
  introduction:
    "At Berkadia, I build software for commercial real estate. I connect Salesforce data to the search tools and dashboards that mortgage bankers use to understand a property and its owner.",
  heroLabels: ["Event-driven systems", "Salesforce", "AI integration"],
  photo: "assets/profile.jpg",
  photoSmall: "assets/profile-800.jpg",
  careerStartDate: "2019-02-01",

  links: {
    email: "mailto:venkatnaveen1693@gmail.com",
    linkedin: "https://www.linkedin.com/in/venkat-medarametla/",
    github: "https://github.com/VenkatNaveenMedarametla",
    resume: "assets/Venkat-Naveen-Resume.pdf",
  },

  about: {
    summary: [
      "I joined Berkadia in Hyderabad in 2019. I started with property search APIs, then built the integrations and release pipelines behind our Salesforce applications. For a refinance calculation tool, I took the design from its first technical specification through production deployment.",
      "My recent work explores how an internal AI client can use Salesforce data while respecting user permissions. I also mentor full-stack developers and have taught JavaScript to a cohort of 16 new hires.",
    ],
    focusAreas: [
      "AI integration with MCP and prompt optimization for document processing",
      "Salesforce CRM and integrations",
      "Event sourcing and CQRS",
    ],
  },

  projects: [
    {
      id: "owner-dashboard",
      category: "Berkadia · Application engineering",
      title: "Mortgage banker dashboard",
      summary: "I brought properties, lenders, and transactions into one owner view so mortgage bankers could see the whole relationship with fewer API calls.",
      technologies: ["Event subscriptions", "Data indexing"],
      details: {
        context: "Software Engineer · Berkadia",
        question: "What does a mortgage banker need to know about one owner?",
        sections: [
          { title: "The banker’s view", text: "A property is only one part of a lending relationship. To understand an owner, a banker also needs to see their other holdings, who financed them, and the transactions connecting them. Assembling those pieces separately took multiple API calls." },
          { title: "The indexing decision", text: "I used the owner as the unit of the index. I subscribed to owner-specific events and brought the related data and calculations into one record. That let the dashboard read the owner’s view together." },
          { title: "What changed", text: "The dashboard needed fewer calls to assemble an owner’s profile. The banker could follow the relationships between owners, properties, and lenders in the same application." },
        ],
      },
    },
    {
      id: "transactional-outbox",
      category: "Berkadia · Event-driven systems",
      title: "Salesforce event delivery",
      summary: "I managed real-time transfers from more than 30 Salesforce streams into a shared event store that internal applications could subscribe to.",
      technologies: ["Salesforce", "CQRS", "Event sourcing"],
      details: {
        context: "Associate Software Engineer and Software Engineer · Berkadia",
        question: "How do internal applications receive both historical Salesforce records and new changes?",
        sections: [
          { title: "Two kinds of updates", text: "Internal applications needed existing Salesforce data as well as changes arriving in real time. The team used a transactional outbox to carry both into an event store." },
          { title: "My contribution", text: "I contributed to the outbox and managed live transfers across more than 30 streams. As a Software Engineer, I extended event schemas and worked on the guarantees around message delivery." },
          { title: "How applications used it", text: "Downstream applications could subscribe to changes as messages. The shared store gave those applications a common source for the events they consumed." },
        ],
      },
    },
    {
      id: "us-filings",
      category: "Team capstone · Public source",
      title: "US Filings Analyst Desk",
      summary: "A research workspace for analysts to trace a figure back to a filing, review a cited draft, and approve the exact note that gets published.",
      technologies: ["Python", "LangGraph", "MCP"],
      sourceUrl: "https://github.com/VenkatNaveenMedarametla/US-Filings-Analyst-Desk",
      details: {
        context: "Agentic AI team capstone",
        question: "How can an analyst verify the figures in an AI-drafted research note?",
        sections: [
          { title: "One figure you can check", text: "The project’s public evaluation set asks for Microsoft’s fiscal 2008 revenue. Its expected answer is $60.42 billion. The entry pairs that figure with the XBRL revenue fact, the fiscal year ending June 30, 2008, and SEC accession 0001193125-10-171791.",
            link: { label: "Inspect the evaluation entry", href: "https://github.com/VenkatNaveenMedarametla/US-Filings-Analyst-Desk/blob/37fc45a7cd49feca2358678e88ec8a6b32d6deef/eval/golden/numeric_cases.jsonl#L1" } },
          { title: "From evidence to draft", text: "The team’s workflow retrieves filing passages and calculates figures in Python. The analyst can inspect fact identifiers and reporting periods alongside the draft. In the published demo, the analyst compares Microsoft and Alphabet and reviews the evidence before signing." },
          { title: "What approval covers", text: "Approval is tied to the reviewed draft and its citations. Editing the note clears the previous approval so the analyst can review the revised version.",
            link: { label: "Read the demo walkthrough", href: "https://github.com/VenkatNaveenMedarametla/US-Filings-Analyst-Desk/blob/37fc45a7cd49feca2358678e88ec8a6b32d6deef/docs/demo.md" } },
        ],
      },
    },
  ],

  experience: [
    {
      organization: ORGANIZATIONS.berkadia,
      summary: "Commercial real estate services for multifamily and commercial property clients.",
      location: "Hyderabad, India",
      roles: [
        {
          title: "Senior Software Engineer II",
          period: "Feb 2026 – Present",
          scope: "I lead Salesforce integrations and explore how AI clients can use them within existing permissions.",
          workMode: "Hybrid",
          highlights: [
            "Built a proof of concept connecting a Salesforce MCP server to an internal MCP client, giving the AI engine secure, permission-aware Salesforce access.",
            "Mentor teammates in full-stack development.",
          ],
        },
        {
          title: "Senior Software Engineer",
          period: "Feb 2024 – Jan 2026",
          scope: "I took a refinance integration from design to release and built tools for working with property data.",
          workMode: "Hybrid",
          highlights: [
            "Led a refinance calculation integration from technical design through production deployment.",
            "Built APIs and a Salesforce interface to identify comparable properties and create their records.",
            "Built a custom Excel add-in for data extraction and persistence.",
            "Built Grafana dashboards in KQL to monitor Salesforce-to-database pipelines.",
            "Built a Handlebars and Puppeteer engine that generates template-driven PDFs.",
          ],
        },
        {
          title: "Software Engineer",
          period: "Aug 2021 – Jan 2024",
          scope: "I built applications for mortgage bankers and automated the delivery of Salesforce changes.",
          workMode: "Remote",
          project: { id: "owner-dashboard", label: "Read the dashboard project notes" },
          highlights: [
            "Built the owner dashboard and the event subscriptions behind it.",
            "Built Salesforce CI/CD pipelines with Salesforce CLI and Azure Pipelines, including branching and security validation.",
            "Built loan calculation and refinancing modules.",
          ],
        },
        {
          title: "Associate Software Engineer",
          period: "Feb 2019 – Jul 2021",
          scope: "I started with property search and the data feeds behind it.",
          workMode: "On-site",
          project: { id: "transactional-outbox", label: "Read the event delivery project notes" },
          highlights: [
            "Built a property search mechanism over complex Elasticsearch queries.",
            "Managed real-time transfers from more than 30 Salesforce streams to the event store.",
            "Refined OCR post-processing for data extracted from PDFs.",
          ],
        },
      ],
    },
  ],

  expertise: [
    { category: "AI & integration", items: ["Model Context Protocol (MCP)", "Multimodal Agent Orchestration", "RAG", "REST APIs"] },
    {
      category: "Full-stack engineering",
      items: ["JavaScript", "Node.js", "Express.js", "Python", "TypeScript", "React", "Handlebars.js", "Mocha"],
    },
    { category: "Salesforce engineering", items: ["Salesforce", "Apex", "Lightning Web Components"] },
    { category: "Data & search", items: ["OpenSearch", "MySQL", "Elasticsearch", "Amazon S3"] },
    { category: "Cloud & delivery", items: ["AWS", "Docker", "Kubernetes", "Azure DevOps", "Git", "CI/CD"] },
    {
      category: "Observability & practices",
      items: [
        "Grafana",
        "Kibana",
        "Agile",
        "HLD & LLD",
        "Test-driven development",
        "RESTful API design",
        "Documentation",
      ],
    },
  ],

  dailyTools: ["Cursor", "VS Code", "DBeaver", "Postman"],

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
      group: "AI & MCP",
      name: "Introduction to Model Context Protocol",
      issuer: "Anthropic",
      issued: "Jul 2025",
      credentialId: "vabeewk55y23",
      verifyUrl: "https://verify.skilljar.com/c/vabeewk55y23",
    },
    {
      group: "AI & MCP",
      name: "Model Context Protocol: Advanced Topics",
      issuer: "Anthropic",
      issued: "Jul 2025",
      credentialId: "nchgwsq9yj9x",
      verifyUrl: "https://verify.skilljar.com/c/nchgwsq9yj9x",
    },
    {
      group: "Salesforce",
      name: "Salesforce Certified Administrator (SCA)",
      issuer: "Salesforce",
      issued: "Jan 2024",
      credentialId: "4036589",
    },
    {
      group: "Salesforce",
      name: "Salesforce Certified Platform Developer I",
      issuer: "Salesforce",
      issued: "Aug 2023",
      credentialId: "3573894",
    },
    {
      group: "Salesforce",
      name: "Salesforce Certified Associate",
      issuer: "Salesforce",
      issued: "May 2023",
      credentialId: "3429118",
    },
    {
      group: "Security",
      name: "Security White Belt",
      issuer: "Security Journey",
      issued: "Feb 2024",
      verifyUrl: "https://my.securityjourney.com/api/certificates/21Is5DVKOvwGEo48oARxcP/berkadia",
    },
    {
      group: "Security",
      name: "Security Yellow Belt",
      issuer: "Security Journey",
      issued: "Feb 2024",
      verifyUrl: "https://my.securityjourney.com/api/certificates/GFuzlOMVv0Gw9AJWtxKeG/berkadia",
    },
    {
      group: "Additional",
      name: "CPR/AED/First Aid",
      issuer: "NIST Institute Private Limited",
      issued: "Jun 2019",
      credentialId: "00396723",
    },
  ],

  professionalAwards: [
    {
      title: "LEAP Achiever Award",
      year: "Jun 2026",
      note: "Ranked among the top five in Berkadia’s leadership development cohort.",
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
  ],

  academicAndVolunteerAwards: [
    {
      title: "University Merit Award for Excellence in Academics and Social Activities",
      year: "Mar 2019",
      note: "Awarded by GITAM University Hyderabad for academic performance and event organization.",
      organization: ORGANIZATIONS.gitam,
    },
    {
      title: "Best NSS Leader",
      year: "Mar 2019",
      note: "Awarded by National Service Scheme GITAM Hyderabad for leading 400 volunteers.",
      organization: ORGANIZATIONS.nss,
    },
  ],

  professionalContributions: [
    {
      role: "JavaScript Trainer",
      description: "Taught JavaScript to a cohort of 16 new hires.",
    },
    {
      role: "Mentor",
      description: "Mentored teammates in full-stack development.",
    },
  ],

  leadership: [
    {
      role: "Member, Innovation Event Organizing Committee",
      description: "Led innovation events across Berkadia.",
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
