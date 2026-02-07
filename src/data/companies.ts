export type CompanyCategory = "Marquee" | "SuperDream" | "Dream" | "Regular";

export interface Company {
  company_id: number;
  name: string;
  short_name: string;
  logo_url: string;
  category: CompanyCategory;
  incorporation_year: number;
  overview_text: string;
  nature_of_company: string;
  headquarters_address: string;
  operating_countries: string;
  office_count: string;
  office_locations: string;
  employee_size: string;
  yoy_growth_rate: string;
  website_url: string;
  [key: string]: any;
}

export interface IndustryTrend {
  trend_name: string;
  trend_description: string;
  time_horizon_years: number;
  trend_drivers: string[];
  impact_areas: string[];
  strategic_importance: string;
}

export interface InnovationTheme {
  innovation_theme: string;
  problem_statement: string;
  target_customer: string;
  innovation_type: string;
  time_horizon: string;
  expected_outcome: string;
  required_capabilities: string[];
  dependent_trend_names: string[];
}

export interface Competitor {
  competitor_name: string;
  competitor_type: string;
  core_strength: string;
  market_positioning: string;
  bet_name: string;
  bet_description: string;
  innovation_category: string;
  futuristic_level: string;
  strategic_objective: string;
  threat_level: string;
}

export interface StrategicPillar {
  cto_vision_statement: string;
  pillar_name: string;
  pillar_description: string;
  focus_area: string;
  key_technologies: string[];
  strategic_risks: string;
  strategic_assumptions: string;
}

export interface InnovXProject {
  project_name: string;
  problem_statement: string;
  target_users: string;
  innovation_objective: string;
  tier_level: string;
  differentiation_factor: string;
  aligned_pillar_names: string[];
  architecture_style: string;
  backend_technologies: string[];
  frontend_technologies: string[];
  ai_ml_technologies: string[];
  data_storage_processing: string;
  primary_use_case: string;
  secondary_use_cases: string[];
  scenario_description: string;
  user_journey_summary: string;
  business_value: string;
  success_metrics: string[];
}

export interface InnovXData {
  industry_trends: IndustryTrend[];
  innovation_roadmap: InnovationTheme[];
  competitive_landscape: Competitor[];
  strategic_pillars: StrategicPillar[];
  innovx_projects: InnovXProject[];
}

export interface SkillSet {
  skill_set_code: string;
  typical_questions: string;
}

export interface HiringRound {
  round_number: number;
  round_name: string;
  round_category: string;
  evaluation_type: string;
  assessment_mode: string;
  skill_sets: SkillSet[];
}

export interface JobRole {
  opportunity_type: string;
  role_title: string;
  role_category: string;
  job_description: string;
  compensation: string;
  ctc_or_stipend: number;
  bonus: string;
  benefits_summary: string;
  hiring_rounds: HiringRound[];
}

export interface HiringData {
  company_name: string;
  job_role_details: JobRole[];
}

export interface SkillRating {
  company_id: number;
  skill_code: string;
  rating: number;
  bloom_code: string;
}

// ===================== COMPANY DATA =====================

export const companies: Company[] = [
  {
    company_id: 1,
    name: "Accenture plc",
    short_name: "Accenture",
    logo_url: "",
    category: "Marquee",
    incorporation_year: 1989,
    overview_text: "Accenture is a global professional services company providing strategy, consulting, digital, technology, and operations services.",
    nature_of_company: "Public",
    headquarters_address: "Dublin, Ireland",
    operating_countries: "United States; United Kingdom; India; Germany; France; Japan; Australia; Canada; Brazil; Singapore",
    office_count: "200+",
    office_locations: "New York; London; Bangalore; Paris; Tokyo; Toronto; Sydney; Frankfurt",
    employee_size: "740,000",
    yoy_growth_rate: "3%",
    website_url: "https://www.accenture.com",
    annual_revenue: "$64.1B (FY2024)",
    annual_profit: "$7.2B net income (FY2024)",
    revenue_mix: "Consulting 55%; Managed Services 45%",
    valuation: "$220B market cap",
    profitability_status: "Profitable",
    market_share_percentage: "6-7% of global IT services",
    focus_sectors: "Financials; Health Care; Consumer; Industrials; Energy; Telecom; Public Sector; Technology",
    offerings_description: "Management Consulting; Technology Services; Cloud Solutions; AI & Analytics; Cybersecurity; Business Process Outsourcing; Digital Engineering",
    top_customers: "Fortune 500 Enterprises; Global Banks; Government Agencies; Healthcare Systems",
    core_value_proposition: "End-to-end transformation; Global delivery scale; Deep industry expertise; Strong technology partnerships",
    vision_statement: "To drive continuous innovation and help the world's leading organizations build their digital core.",
    mission_statement: "Deliver on the promise of technology and human ingenuity to create value and shared success.",
    core_values: "Client value creation; Integrity; Respect for individuals; Innovation; Stewardship; Best people",
    unique_differentiators: "Global delivery network; Industry-specific consulting; Strong alliance ecosystem; Proprietary AI platforms",
    competitive_advantages: "Brand leadership; Scale and geographic reach; Deep enterprise relationships; Strong partner network",
    key_competitors: "IBM Consulting; Deloitte; TCS; Infosys; Capgemini; Cognizant; Wipro; PwC; EY",
    technology_partners: "Microsoft; SAP; Oracle; AWS; Google Cloud; Salesforce; NVIDIA",
    tech_stack: "SAP; Salesforce; AWS; Microsoft Azure; ServiceNow; Kubernetes; Python",
    ai_ml_adoption_level: "High — generative AI platforms, AI-led consulting, automation",
    r_and_d_investment: "$1.5B annually",
    cybersecurity_posture: "ISO 27001; SOC 2; Global cyber defense centers",
    ceo_name: "Julie Sweet",
    key_leaders: "Julie Sweet, Chair & CEO; Manish Sharma, CEO; Jack Azagury, Group Chief Executive",
    glassdoor_rating: "3.9",
    work_culture_summary: "Collaborative; Performance-driven",
    diversity_metrics: "47% women workforce; Global DEI programs",
    remote_policy_details: "Hybrid, 60% flexible",
    training_spend: "$1,500 per employee/year",
    linkedin_url: "https://www.linkedin.com/company/accenture",
    twitter_handle: "@Accenture",
    awards_recognitions: "Fortune Global 500; Great Place to Work; Gartner Magic Quadrant Leader; Forbes Most Admired",
    tam: "$1.5T global IT and business services",
    sam: "$400B enterprise digital transformation",
    exit_opportunities: "Big Tech; Global consultancies; Industry leadership roles",
    net_promoter_score: "60",
  },
  {
    company_id: 2,
    name: "Atlassian Corporation",
    short_name: "Atlassian",
    logo_url: "",
    category: "Marquee",
    incorporation_year: 2002,
    overview_text: "Atlassian builds software for teams — Jira, Confluence, Trello, and Bitbucket help teams plan, collaborate, and ship products faster.",
    nature_of_company: "Public",
    headquarters_address: "Sydney, Australia",
    operating_countries: "Australia; United States; India; Netherlands; Japan; Philippines; Germany; United Kingdom",
    office_count: "12",
    office_locations: "Sydney; San Francisco; Austin; Bangalore; Amsterdam; Manila",
    employee_size: "12,000",
    yoy_growth_rate: "25%",
    website_url: "https://www.atlassian.com",
    annual_revenue: "$4.4B (FY2024)",
    focus_sectors: "Technology; Software Development; Enterprise Collaboration",
    offerings_description: "Jira Software; Confluence; Trello; Bitbucket; Jira Service Management; Atlassian Intelligence",
    ceo_name: "Mike Cannon-Brookes & Scott Farquhar",
    work_culture_summary: "Open company, no bullshit; Play as a team; Build with heart and balance",
    tech_stack: "Java; React; TypeScript; AWS; Kubernetes; GraphQL",
  },
  {
    company_id: 3,
    name: "Google LLC",
    short_name: "Google",
    logo_url: "",
    category: "Marquee",
    incorporation_year: 1998,
    overview_text: "Google organizes the world's information and makes it universally accessible and useful through search, cloud, AI, and advertising.",
    nature_of_company: "Public (Alphabet)",
    headquarters_address: "Mountain View, California, USA",
    operating_countries: "United States; India; United Kingdom; Japan; Germany; Brazil; Australia; Singapore; Canada; France",
    office_count: "70+",
    office_locations: "Mountain View; New York; London; Bangalore; Tokyo; Zurich; Singapore",
    employee_size: "182,000",
    yoy_growth_rate: "14%",
    website_url: "https://www.google.com",
    annual_revenue: "$307B (FY2024)",
    focus_sectors: "Technology; Advertising; Cloud; AI/ML; Consumer Products",
    offerings_description: "Search; YouTube; Google Cloud Platform; Android; Chrome; Pixel; Waymo; DeepMind",
    ceo_name: "Sundar Pichai",
    work_culture_summary: "Innovation-first; Data-driven; 20% time for passion projects",
    tech_stack: "C++; Java; Python; Go; TensorFlow; Kubernetes; BigQuery",
  },
  {
    company_id: 4,
    name: "Microsoft Corporation",
    short_name: "Microsoft",
    logo_url: "",
    category: "Marquee",
    incorporation_year: 1975,
    overview_text: "Microsoft empowers every person and every organization on the planet to achieve more through cloud, AI, and productivity solutions.",
    nature_of_company: "Public",
    headquarters_address: "Redmond, Washington, USA",
    operating_countries: "Global — 190+ countries",
    office_count: "100+",
    office_locations: "Redmond; New York; London; Bangalore; Beijing; Dublin; Munich",
    employee_size: "221,000",
    yoy_growth_rate: "16%",
    website_url: "https://www.microsoft.com",
    annual_revenue: "$245B (FY2024)",
    focus_sectors: "Cloud; AI; Enterprise Software; Gaming; Cybersecurity",
    offerings_description: "Azure; Microsoft 365; Windows; Teams; LinkedIn; GitHub; Copilot; Xbox",
    ceo_name: "Satya Nadella",
    work_culture_summary: "Growth mindset; Learn-it-all culture; Diverse and inclusive",
    tech_stack: "C#; .NET; TypeScript; Azure; Python; C++",
  },
  {
    company_id: 5,
    name: "Amazon.com Inc.",
    short_name: "Amazon",
    logo_url: "",
    category: "Marquee",
    incorporation_year: 1994,
    overview_text: "Amazon is guided by customer obsession, passion for invention, and commitment to operational excellence in e-commerce and cloud computing.",
    nature_of_company: "Public",
    headquarters_address: "Seattle, Washington, USA",
    operating_countries: "Global — 20+ countries directly",
    office_count: "50+",
    office_locations: "Seattle; Arlington; New York; Bangalore; London; Tokyo; Berlin",
    employee_size: "1,500,000",
    yoy_growth_rate: "12%",
    website_url: "https://www.amazon.com",
    annual_revenue: "$575B (FY2024)",
    focus_sectors: "E-commerce; Cloud (AWS); AI; Logistics; Entertainment",
    offerings_description: "AWS; Amazon Marketplace; Prime; Alexa; Kindle; Ring; MGM Studios",
    ceo_name: "Andy Jassy",
    work_culture_summary: "Customer obsession; Ownership; Bias for action; Frugality",
    tech_stack: "Java; Python; AWS; DynamoDB; React; Rust",
  },
  {
    company_id: 6,
    name: "Salesforce Inc.",
    short_name: "Salesforce",
    logo_url: "",
    category: "SuperDream",
    incorporation_year: 1999,
    overview_text: "Salesforce is the world's #1 CRM platform, helping businesses connect to their customers through cloud, mobile, social, and AI technologies.",
    nature_of_company: "Public",
    headquarters_address: "San Francisco, California, USA",
    operating_countries: "United States; United Kingdom; India; Japan; Germany; France; Australia; Canada",
    office_count: "30+",
    office_locations: "San Francisco; Indianapolis; London; Hyderabad; Tokyo; Paris",
    employee_size: "73,000",
    yoy_growth_rate: "11%",
    website_url: "https://www.salesforce.com",
    annual_revenue: "$34.9B (FY2024)",
    focus_sectors: "CRM; Enterprise Software; AI; Marketing Automation",
    offerings_description: "Sales Cloud; Service Cloud; Marketing Cloud; Einstein AI; Slack; MuleSoft; Tableau",
    ceo_name: "Marc Benioff",
    work_culture_summary: "Ohana culture; Trust; Innovation; Equality; Sustainability",
    tech_stack: "Java; Apex; Lightning Web Components; Heroku; AWS",
  },
  {
    company_id: 7,
    name: "Adobe Inc.",
    short_name: "Adobe",
    logo_url: "",
    category: "SuperDream",
    incorporation_year: 1982,
    overview_text: "Adobe changes the world through digital experiences — empowering creatives, marketers, and enterprises with best-in-class creative and document cloud solutions.",
    nature_of_company: "Public",
    headquarters_address: "San Jose, California, USA",
    operating_countries: "United States; India; United Kingdom; Japan; Germany; Australia",
    office_count: "25+",
    office_locations: "San Jose; Noida; Bangalore; London; Tokyo; Munich",
    employee_size: "30,000",
    yoy_growth_rate: "10%",
    website_url: "https://www.adobe.com",
    annual_revenue: "$19.4B (FY2024)",
    focus_sectors: "Creative Tools; Digital Experience; Document Management; AI/ML",
    offerings_description: "Creative Cloud; Document Cloud; Experience Cloud; Adobe Firefly; Sensei AI",
    ceo_name: "Shantanu Narayen",
    work_culture_summary: "Creative; Innovative; Inclusive; Customer-centric",
    tech_stack: "C++; Java; JavaScript; React; Python; AWS; Azure",
  },
  {
    company_id: 8,
    name: "ServiceNow Inc.",
    short_name: "ServiceNow",
    logo_url: "",
    category: "SuperDream",
    incorporation_year: 2004,
    overview_text: "ServiceNow makes the world work better by putting AI to work for people — automating workflows and transforming enterprise operations.",
    nature_of_company: "Public",
    headquarters_address: "Santa Clara, California, USA",
    operating_countries: "United States; India; United Kingdom; Germany; Japan; Australia; Netherlands",
    office_count: "20+",
    office_locations: "Santa Clara; San Diego; Hyderabad; London; Amsterdam; Tokyo",
    employee_size: "22,000",
    yoy_growth_rate: "23%",
    website_url: "https://www.servicenow.com",
    annual_revenue: "$9.2B (FY2024)",
    focus_sectors: "IT Service Management; Enterprise Automation; AI/ML; Security Operations",
    offerings_description: "IT Workflows; Employee Workflows; Customer Workflows; Creator Workflows; Now Platform",
    ceo_name: "Bill McDermott",
    work_culture_summary: "Purpose-driven; Innovation-first; Hungry and humble",
    tech_stack: "Java; JavaScript; Angular; Python; MySQL; Machine Learning",
  },
  {
    company_id: 9,
    name: "Tata Consultancy Services",
    short_name: "TCS",
    logo_url: "",
    category: "Dream",
    incorporation_year: 1968,
    overview_text: "TCS is a global leader in IT services, digital and business solutions, partnering with clients to simplify, strengthen, and transform their businesses.",
    nature_of_company: "Public (Tata Group)",
    headquarters_address: "Mumbai, India",
    operating_countries: "India; United States; United Kingdom; Japan; Germany; Australia; Canada; Brazil",
    office_count: "150+",
    office_locations: "Mumbai; Chennai; Hyderabad; New York; London; Tokyo; Toronto",
    employee_size: "614,000",
    yoy_growth_rate: "4%",
    website_url: "https://www.tcs.com",
    annual_revenue: "$29.1B (FY2024)",
    focus_sectors: "BFSI; Retail; Manufacturing; Telecom; Healthcare; Energy",
    offerings_description: "IT Services; Consulting; Digital Transformation; Cloud Migration; Cybersecurity; BPO",
    ceo_name: "K Krithivasan",
    work_culture_summary: "Values-driven; Structured; Employee-centric; Learning-oriented",
    tech_stack: "Java; .NET; SAP; Oracle; AWS; Azure; Python",
  },
  {
    company_id: 10,
    name: "Infosys Limited",
    short_name: "Infosys",
    logo_url: "",
    category: "Dream",
    incorporation_year: 1981,
    overview_text: "Infosys is a global digital services and consulting leader helping enterprises navigate their next with AI-powered and digital-first strategies.",
    nature_of_company: "Public",
    headquarters_address: "Bangalore, India",
    operating_countries: "India; United States; United Kingdom; Germany; Australia; Japan; Canada; Switzerland",
    office_count: "100+",
    office_locations: "Bangalore; Pune; Hyderabad; New York; London; Frankfurt; Melbourne",
    employee_size: "315,000",
    yoy_growth_rate: "5%",
    website_url: "https://www.infosys.com",
    annual_revenue: "$18.6B (FY2024)",
    focus_sectors: "BFSI; Manufacturing; Retail; Healthcare; Energy; Telecom",
    offerings_description: "Digital Services; Cloud; AI; Enterprise Solutions; Engineering Services; Consulting",
    ceo_name: "Salil Parekh",
    work_culture_summary: "Learn, unlearn, relearn; Client value; Integrity; Excellence",
    tech_stack: "Java; Python; SAP; AWS; Azure; Kubernetes; React",
  },
  {
    company_id: 11,
    name: "Wipro Limited",
    short_name: "Wipro",
    logo_url: "",
    category: "Dream",
    incorporation_year: 1945,
    overview_text: "Wipro is a leading technology services and consulting company helping clients harness the power of cognitive computing, cloud, and digital transformation.",
    nature_of_company: "Public",
    headquarters_address: "Bangalore, India",
    operating_countries: "India; United States; United Kingdom; Germany; Japan; Australia; Canada; Middle East",
    office_count: "80+",
    office_locations: "Bangalore; Hyderabad; Chennai; New York; London; Frankfurt; Tokyo",
    employee_size: "240,000",
    yoy_growth_rate: "2%",
    website_url: "https://www.wipro.com",
    annual_revenue: "$11.2B (FY2024)",
    focus_sectors: "BFSI; Healthcare; Manufacturing; Energy; Consumer; Technology",
    offerings_description: "IT Services; Digital Transformation; Cloud Services; Cybersecurity; Engineering R&D",
    ceo_name: "Srini Pallia",
    work_culture_summary: "Spirit of Wipro; Integrity; Customer-centricity; Human-centric approach",
    tech_stack: "Java; .NET; SAP; Oracle; AWS; Azure; ServiceNow",
  },
  {
    company_id: 12,
    name: "HCLTech",
    short_name: "HCLTech",
    logo_url: "",
    category: "Regular",
    incorporation_year: 1976,
    overview_text: "HCLTech powers possibilities for global enterprises with technology-led transformation across industries.",
    nature_of_company: "Public",
    headquarters_address: "Noida, India",
    operating_countries: "India; United States; United Kingdom; Germany; France; Australia; Japan; Nordics",
    office_count: "60+",
    office_locations: "Noida; Chennai; Hyderabad; New York; London; Frankfurt; Melbourne",
    employee_size: "225,000",
    yoy_growth_rate: "6%",
    website_url: "https://www.hcltech.com",
    annual_revenue: "$13.3B (FY2024)",
    focus_sectors: "BFSI; Manufacturing; Telecom; Life Sciences; Energy; Retail",
    offerings_description: "IT Services; Engineering R&D; Digital Business; Cloud Native Services; Cybersecurity",
    ceo_name: "C Vijayakumar",
    work_culture_summary: "Relationship beyond the contract; Ideapreneurship; Employee-first",
    tech_stack: "Java; .NET; SAP; ServiceNow; Azure; AWS; Python",
  },
  {
    company_id: 13,
    name: "Cognizant Technology Solutions",
    short_name: "Cognizant",
    logo_url: "",
    category: "Regular",
    incorporation_year: 1994,
    overview_text: "Cognizant engineers modern businesses to improve everyday life through technology and digital solutions.",
    nature_of_company: "Public",
    headquarters_address: "Teaneck, New Jersey, USA",
    operating_countries: "United States; India; United Kingdom; Germany; Australia; Canada; Japan; Netherlands",
    office_count: "50+",
    office_locations: "Teaneck; Chennai; Hyderabad; London; Frankfurt; Melbourne; Tokyo",
    employee_size: "350,000",
    yoy_growth_rate: "3%",
    website_url: "https://www.cognizant.com",
    annual_revenue: "$19.4B (FY2024)",
    focus_sectors: "BFSI; Healthcare; Manufacturing; Retail; Communications; Technology",
    offerings_description: "Digital Engineering; AI & Analytics; Cloud; Enterprise Platform Services; IoT",
    ceo_name: "Ravi Kumar S",
    work_culture_summary: "Purpose-driven; Digital first; Inclusive; Agile",
    tech_stack: "Java; .NET; Python; AWS; Azure; SAP; Salesforce",
  },
  {
    company_id: 14,
    name: "Tech Mahindra",
    short_name: "Tech Mahindra",
    logo_url: "",
    category: "Regular",
    incorporation_year: 1986,
    overview_text: "Tech Mahindra offers next-gen technology solutions and services to enterprises, associates, and society at large.",
    nature_of_company: "Public (Mahindra Group)",
    headquarters_address: "Pune, India",
    operating_countries: "India; United States; United Kingdom; Germany; Australia; South Africa; Middle East",
    office_count: "40+",
    office_locations: "Pune; Hyderabad; Chennai; New York; London; Johannesburg; Dubai",
    employee_size: "150,000",
    yoy_growth_rate: "1%",
    website_url: "https://www.techmahindra.com",
    annual_revenue: "$6.4B (FY2024)",
    focus_sectors: "Telecom; BFSI; Manufacturing; Healthcare; Retail; Technology",
    offerings_description: "IT Services; Network Services; Digital Transformation; 5G Solutions; Cybersecurity",
    ceo_name: "Mohit Joshi",
    work_culture_summary: "Rise culture; Purpose-driven transformation; Innovation at the core",
    tech_stack: "Java; .NET; Python; AWS; Azure; 5G Technologies; ServiceNow",
  },
];

// ===================== INNOVX DATA =====================

export const innovxDataMap: Record<number, InnovXData> = {
  1: {
    industry_trends: [
      {
        trend_name: "Generative AI at Enterprise Scale",
        trend_description: "Enterprises are moving from GenAI pilots to production-grade, governed deployments embedded in core business processes.",
        time_horizon_years: 3,
        trend_drivers: ["LLM maturity", "Productivity pressure", "Executive AI mandates"],
        impact_areas: ["Consulting delivery", "Operations", "Customer experience"],
        strategic_importance: "Critical",
      },
      {
        trend_name: "Industry-Specific Digital Platforms",
        trend_description: "Clients demand verticalized solutions rather than generic digital transformations.",
        time_horizon_years: 4,
        trend_drivers: ["Complex regulation", "Domain specialization"],
        impact_areas: ["Banking", "Healthcare", "Manufacturing", "Public Sector"],
        strategic_importance: "High",
      },
      {
        trend_name: "Composable Enterprise & Cloud-Native Modernization",
        trend_description: "Large enterprises are modernizing legacy estates using modular, API-first, cloud-native architectures.",
        time_horizon_years: 5,
        trend_drivers: ["Legacy risk", "Cloud economics", "Speed to market"],
        impact_areas: ["Core IT", "Enterprise architecture"],
        strategic_importance: "Critical",
      },
      {
        trend_name: "Managed Services + Outcome-Based Pricing",
        trend_description: "Clients prefer long-term managed services with shared accountability and outcome-linked pricing models.",
        time_horizon_years: 3,
        trend_drivers: ["Cost optimization", "Talent shortages"],
        impact_areas: ["IT operations", "Business process outsourcing"],
        strategic_importance: "High",
      },
      {
        trend_name: "Responsible AI & Regulatory Tech",
        trend_description: "AI governance, explainability, and regulatory compliance are becoming mandatory for enterprise adoption.",
        time_horizon_years: 3,
        trend_drivers: ["AI regulation", "Reputational risk"],
        impact_areas: ["AI programs", "Compliance"],
        strategic_importance: "High",
      },
      {
        trend_name: "Digital Workforce & Automation",
        trend_description: "Enterprises combine human talent with AI agents and automation to redesign work.",
        time_horizon_years: 4,
        trend_drivers: ["Productivity gaps", "Demographic shifts"],
        impact_areas: ["HR", "Operations", "Shared services"],
        strategic_importance: "Medium",
      },
    ],
    innovation_roadmap: [
      {
        innovation_theme: "Enterprise GenAI Transformation",
        problem_statement: "Clients struggle to move GenAI from experiments to governed, value-generating deployments.",
        target_customer: "CXOs and enterprise transformation leaders",
        innovation_type: "Platform",
        time_horizon: "Now",
        expected_outcome: "Faster ROI from GenAI with reduced risk",
        required_capabilities: ["LLM engineering", "AI governance", "Change management"],
        dependent_trend_names: ["Generative AI at Enterprise Scale", "Responsible AI & Regulatory Tech"],
      },
      {
        innovation_theme: "Industry Digital Operating Models",
        problem_statement: "Horizontal transformations fail to deliver industry-specific value.",
        target_customer: "Industry leaders (BFSI, Health, Energy, Public Sector)",
        innovation_type: "Product",
        time_horizon: "Next",
        expected_outcome: "Higher transformation success rates",
        required_capabilities: ["Industry expertise", "Platform engineering"],
        dependent_trend_names: ["Industry-Specific Digital Platforms"],
      },
      {
        innovation_theme: "Autonomous Managed Services",
        problem_statement: "Traditional managed services are labor-heavy and margin-constrained.",
        target_customer: "Large enterprises",
        innovation_type: "Process",
        time_horizon: "Future",
        expected_outcome: "AI-driven, self-optimizing operations",
        required_capabilities: ["AIOps", "Automation", "Outcome-based pricing"],
        dependent_trend_names: ["Managed Services + Outcome-Based Pricing", "Digital Workforce & Automation"],
      },
    ],
    competitive_landscape: [
      {
        competitor_name: "IBM Consulting",
        competitor_type: "Direct",
        core_strength: "Hybrid cloud and enterprise AI",
        market_positioning: "Technology-led consulting",
        bet_name: "Watsonx Consulting Stack",
        bet_description: "Embedding IBM AI platforms into consulting-led transformations",
        innovation_category: "AI",
        futuristic_level: "Advanced",
        strategic_objective: "Own enterprise AI modernization",
        threat_level: "High",
      },
      {
        competitor_name: "Deloitte",
        competitor_type: "Direct",
        core_strength: "C-suite relationships and industry depth",
        market_positioning: "Strategy-led digital transformation",
        bet_name: "Industry Cloud Accelerators",
        bet_description: "Pre-built industry solutions on hyperscalers",
        innovation_category: "Platform",
        futuristic_level: "Advanced",
        strategic_objective: "Speed up transformation delivery",
        threat_level: "High",
      },
      {
        competitor_name: "Capgemini",
        competitor_type: "Direct",
        core_strength: "Engineering and managed services",
        market_positioning: "Cost-effective digital engineering",
        bet_name: "AI-Augmented Delivery",
        bet_description: "Using AI to optimize delivery and operations",
        innovation_category: "Automation",
        futuristic_level: "Advanced",
        strategic_objective: "Improve margins and scale",
        threat_level: "Medium",
      },
      {
        competitor_name: "Hyperscalers (AWS, Microsoft, Google)",
        competitor_type: "Indirect",
        core_strength: "Cloud and AI platforms",
        market_positioning: "Platform providers moving up the value chain",
        bet_name: "Direct Enterprise Transformation Services",
        bet_description: "Offering consulting-like services bundled with platforms",
        innovation_category: "Platform",
        futuristic_level: "Disruptive",
        strategic_objective: "Disintermediate traditional consultancies",
        threat_level: "High",
      },
    ],
    strategic_pillars: [
      {
        cto_vision_statement: "Make Accenture the trusted orchestrator of enterprise GenAI at scale.",
        pillar_name: "GenAI at Scale",
        pillar_description: "Deliver governed, repeatable GenAI solutions across industries.",
        focus_area: "Growth",
        key_technologies: ["LLMs", "Prompt engineering", "AI governance frameworks"],
        strategic_risks: "Rapid commoditization of AI skills",
        strategic_assumptions: "Clients prefer trusted integrators for AI",
      },
      {
        cto_vision_statement: "Win through industry depth and reusable platforms.",
        pillar_name: "Industry Platform Leadership",
        pillar_description: "Vertical platforms that encode best practices.",
        focus_area: "Disruption",
        key_technologies: ["Microservices", "Industry data models"],
        strategic_risks: "Platform fragmentation",
        strategic_assumptions: "Industry specificity drives stickiness",
      },
      {
        cto_vision_statement: "Transform delivery with automation and AI.",
        pillar_name: "Autonomous Delivery & Ops",
        pillar_description: "AI-driven consulting delivery and managed services.",
        focus_area: "Efficiency",
        key_technologies: ["AIOps", "RPA", "Process mining"],
        strategic_risks: "Cultural resistance",
        strategic_assumptions: "Automation improves margins sustainably",
      },
      {
        cto_vision_statement: "Lead the market in responsible digital transformation.",
        pillar_name: "Trust, Security & Responsible AI",
        pillar_description: "Compliance-first, ethical AI and secure transformations.",
        focus_area: "Defense",
        key_technologies: ["Explainable AI", "Zero trust security"],
        strategic_risks: "Regulatory uncertainty",
        strategic_assumptions: "Trust is a competitive differentiator",
      },
    ],
    innovx_projects: [
      {
        project_name: "Accenture GenAI Factory",
        problem_statement: "Clients cannot industrialize GenAI use cases quickly.",
        target_users: "Enterprise transformation teams",
        innovation_objective: "Rapid GenAI deployment at scale",
        tier_level: "Tier 1",
        differentiation_factor: "Reusable, governed AI blueprints",
        aligned_pillar_names: ["GenAI at Scale"],
        architecture_style: "Platform-based microservices",
        backend_technologies: ["Python", "FastAPI"],
        frontend_technologies: ["React"],
        ai_ml_technologies: ["OpenAI APIs", "Azure OpenAI", "LangChain"],
        data_storage_processing: "Cloud data lakehouse (Delta Lake)",
        primary_use_case: "Enterprise GenAI deployment",
        secondary_use_cases: ["AI use case governance"],
        scenario_description: "Clients launch multiple GenAI apps using factory templates.",
        user_journey_summary: "Ideate → Build → Govern → Scale",
        business_value: "Faster AI ROI",
        success_metrics: ["Time-to-production", "GenAI adoption rate"],
      },
      {
        project_name: "Industry Cloud Accelerators",
        problem_statement: "Industry transformations take too long.",
        target_users: "Industry-specific enterprises",
        innovation_objective: "Speed up digital transformation",
        tier_level: "Tier 1",
        differentiation_factor: "Pre-built industry workflows",
        aligned_pillar_names: ["Industry Platform Leadership"],
        architecture_style: "Composable microservices",
        backend_technologies: ["Java", "Spring Boot"],
        frontend_technologies: ["Angular"],
        ai_ml_technologies: ["Industry ML models"],
        data_storage_processing: "Industry data models",
        primary_use_case: "Industry transformation",
        secondary_use_cases: ["Process optimization"],
        scenario_description: "Clients deploy industry-ready platforms.",
        user_journey_summary: "Select → Customize → Deploy",
        business_value: "Higher transformation success",
        success_metrics: ["Deployment time"],
      },
      {
        project_name: "AI-Powered Change Management",
        problem_statement: "Transformation adoption fails due to poor change management.",
        target_users: "HR and transformation leaders",
        innovation_objective: "Increase adoption of change",
        tier_level: "Tier 1",
        differentiation_factor: "Behavioral AI insights",
        aligned_pillar_names: ["GenAI at Scale"],
        architecture_style: "Analytics platform",
        backend_technologies: ["Python"],
        frontend_technologies: ["Web dashboards"],
        ai_ml_technologies: ["NLP sentiment models"],
        data_storage_processing: "Employee data lake",
        primary_use_case: "Change adoption tracking",
        secondary_use_cases: ["Training personalization"],
        scenario_description: "AI monitors and nudges adoption.",
        user_journey_summary: "Measure → Predict → Intervene",
        business_value: "Higher transformation success",
        success_metrics: ["Adoption rate"],
      },
      {
        project_name: "Autonomous Managed Services Platform",
        problem_statement: "Managed services are labor-intensive.",
        target_users: "Enterprise operations leaders",
        innovation_objective: "AI-driven operations",
        tier_level: "Tier 2",
        differentiation_factor: "Self-healing operations",
        aligned_pillar_names: ["Autonomous Delivery & Ops"],
        architecture_style: "Event-driven",
        backend_technologies: ["Python", "Kafka"],
        frontend_technologies: ["Ops dashboards"],
        ai_ml_technologies: ["Anomaly detection", "AIOps"],
        data_storage_processing: "Operational data lake",
        primary_use_case: "IT operations automation",
        secondary_use_cases: ["Cost optimization"],
        scenario_description: "Systems self-detect and resolve issues.",
        user_journey_summary: "Monitor → Auto-fix → Report",
        business_value: "Margin improvement",
        success_metrics: ["MTTR reduction"],
      },
      {
        project_name: "Enterprise Data Modernization Factory",
        problem_statement: "Data modernization is slow and risky.",
        target_users: "CIOs and data leaders",
        innovation_objective: "Accelerate data platform modernization",
        tier_level: "Tier 2",
        differentiation_factor: "Automated migration blueprints",
        aligned_pillar_names: ["Industry Platform Leadership"],
        architecture_style: "Data mesh",
        backend_technologies: ["Spark", "Kafka"],
        frontend_technologies: ["Data catalog UI"],
        ai_ml_technologies: ["Metadata ML"],
        data_storage_processing: "Lakehouse",
        primary_use_case: "Data modernization",
        secondary_use_cases: ["AI readiness"],
        scenario_description: "Clients modernize data faster.",
        user_journey_summary: "Assess → Migrate → Optimize",
        business_value: "Reduced program risk",
        success_metrics: ["Migration time"],
      },
      {
        project_name: "Responsible AI Governance Suite",
        problem_statement: "AI programs lack governance.",
        target_users: "Risk and compliance teams",
        innovation_objective: "Ensure ethical AI usage",
        tier_level: "Tier 2",
        differentiation_factor: "Built-in regulatory mapping",
        aligned_pillar_names: ["Trust, Security & Responsible AI"],
        architecture_style: "Governance platform",
        backend_technologies: ["Java"],
        frontend_technologies: ["Compliance dashboards"],
        ai_ml_technologies: ["Explainability tools"],
        data_storage_processing: "Policy repositories",
        primary_use_case: "AI governance",
        secondary_use_cases: ["Audit readiness"],
        scenario_description: "Organizations govern AI centrally.",
        user_journey_summary: "Register → Monitor → Audit",
        business_value: "Reduced regulatory risk",
        success_metrics: ["Compliance coverage"],
      },
      {
        project_name: "C-Suite Digital Twin",
        problem_statement: "Executives lack visibility into transformation impact.",
        target_users: "Executive leadership",
        innovation_objective: "Simulate enterprise decisions",
        tier_level: "Tier 3",
        differentiation_factor: "End-to-end enterprise modeling",
        aligned_pillar_names: ["Industry Platform Leadership"],
        architecture_style: "Simulation platform",
        backend_technologies: ["Python", "Graph databases"],
        frontend_technologies: ["Advanced visualization UI"],
        ai_ml_technologies: ["System dynamics models"],
        data_storage_processing: "Enterprise data warehouse",
        primary_use_case: "Strategic planning",
        secondary_use_cases: ["Risk simulation"],
        scenario_description: "Executives test strategies virtually.",
        user_journey_summary: "Model → Simulate → Decide",
        business_value: "Better strategic outcomes",
        success_metrics: ["Decision accuracy"],
      },
      {
        project_name: "Digital Workforce Orchestrator",
        problem_statement: "Human and digital workers are poorly coordinated.",
        target_users: "Operations leaders",
        innovation_objective: "Optimize hybrid workforce",
        tier_level: "Tier 3",
        differentiation_factor: "Unified human+AI orchestration",
        aligned_pillar_names: ["Autonomous Delivery & Ops"],
        architecture_style: "Workflow orchestration",
        backend_technologies: ["Node.js"],
        frontend_technologies: ["Operations UI"],
        ai_ml_technologies: ["Optimization models"],
        data_storage_processing: "Workflow databases",
        primary_use_case: "Workforce optimization",
        secondary_use_cases: ["Capacity planning"],
        scenario_description: "AI allocates work dynamically.",
        user_journey_summary: "Plan → Execute → Optimize",
        business_value: "Productivity gains",
        success_metrics: ["Throughput increase"],
      },
      {
        project_name: "Accenture Platform Marketplace",
        problem_statement: "Clients want reusable digital assets.",
        target_users: "Enterprise IT teams",
        innovation_objective: "Monetize reusable IP",
        tier_level: "Tier 3",
        differentiation_factor: "Consulting-grade platforms",
        aligned_pillar_names: ["GenAI at Scale"],
        architecture_style: "Marketplace platform",
        backend_technologies: ["Java", "API Gateway"],
        frontend_technologies: ["Marketplace UI"],
        ai_ml_technologies: ["Recommendation engines"],
        data_storage_processing: "Product catalog DB",
        primary_use_case: "Platform distribution",
        secondary_use_cases: ["Partner ecosystem"],
        scenario_description: "Clients purchase and deploy platforms.",
        user_journey_summary: "Browse → Deploy → Scale",
        business_value: "New IP-driven revenue",
        success_metrics: ["Marketplace revenue"],
      },
    ],
  },
};

// ===================== HIRING DATA =====================

export const hiringDataMap: Record<number, HiringData> = {
  2: {
    company_name: "Atlassian Corporation",
    job_role_details: [
      {
        opportunity_type: "Employment",
        role_title: "Software Engineer (Product Engineering)",
        role_category: "SDE",
        job_description: "Build and scale cloud-first products like Jira, Confluence, and Bitbucket. Design backend services, write high-quality code, participate in design reviews, and collaborate cross-functionally.",
        compensation: "CTC",
        ctc_or_stipend: 3800000,
        bonus: "Joining bonus, annual performance bonus, RSUs",
        benefits_summary: "Health insurance, flexible work, paid parental leave, wellness allowance, stock options",
        hiring_rounds: [
          {
            round_number: 1,
            round_name: "Online Coding Assessment",
            round_category: "Coding Test",
            evaluation_type: "Technical",
            assessment_mode: "Online",
            skill_sets: [
              { skill_set_code: "DSA", typical_questions: "Find the longest consecutive sequence in an array; Detect a cycle in a linked list; Solve a dynamic programming problem on strings" },
              { skill_set_code: "COD", typical_questions: "Implement rate limiter logic; Write code to validate parentheses; Process input to simulate task scheduling" },
              { skill_set_code: "APTI", typical_questions: "Logical reasoning based on constraints; Basic probability puzzle; Analytical question on efficiency" },
            ],
          },
          {
            round_number: 2,
            round_name: "Technical Interview Round 1",
            round_category: "Interview",
            evaluation_type: "Technical",
            assessment_mode: "Online",
            skill_sets: [
              { skill_set_code: "DSA", typical_questions: "Explain time complexity trade-offs; Solve a graph traversal problem; Implement binary tree level order traversal" },
              { skill_set_code: "OS", typical_questions: "Explain multithreading and concurrency issues; What is deadlock; Difference between process and thread" },
              { skill_set_code: "NETW", typical_questions: "Basics of HTTP and REST APIs; What happens when an API request fails; Explain latency vs throughput" },
            ],
          },
          {
            round_number: 3,
            round_name: "System Design & Architecture",
            round_category: "Interview",
            evaluation_type: "Technical",
            assessment_mode: "Online",
            skill_sets: [
              { skill_set_code: "SYSD", typical_questions: "Design a collaborative document editing system; Design a task tracking system like Jira; How would you handle scaling and fault tolerance" },
              { skill_set_code: "OOD", typical_questions: "Design an object-oriented notification system; Explain design patterns; How do you ensure modularity" },
              { skill_set_code: "SWE", typical_questions: "What is code maintainability; How do you approach refactoring; Explain CI/CD practices" },
            ],
          },
          {
            round_number: 4,
            round_name: "Values & Culture Interview",
            round_category: "Interview",
            evaluation_type: "HR",
            assessment_mode: "Online",
            skill_sets: [
              { skill_set_code: "COMM", typical_questions: "Describe a time you received critical feedback; How do you work in distributed teams; Why Atlassian and its values resonate with you" },
            ],
          },
        ],
      },
      {
        opportunity_type: "Employment",
        role_title: "Frontend Engineer",
        role_category: "Frontend_Developer",
        job_description: "Develop intuitive, high-performance user interfaces for Atlassian products using modern frontend frameworks.",
        compensation: "CTC",
        ctc_or_stipend: 3400000,
        bonus: "Annual performance bonus and stock grants",
        benefits_summary: "Health insurance, remote work flexibility, learning budget, wellness programs, RSUs",
        hiring_rounds: [
          {
            round_number: 1,
            round_name: "Frontend Coding Test",
            round_category: "Coding Test",
            evaluation_type: "Technical",
            assessment_mode: "Online",
            skill_sets: [
              { skill_set_code: "COD", typical_questions: "Implement a responsive dashboard layout; Write JavaScript to debounce a function; Manipulate DOM elements efficiently" },
              { skill_set_code: "DSA", typical_questions: "Optimize array and string operations; Explain space-time tradeoffs; Implement a simple caching mechanism" },
            ],
          },
          {
            round_number: 2,
            round_name: "Frontend Technical Interview",
            round_category: "Interview",
            evaluation_type: "Technical",
            assessment_mode: "Online",
            skill_sets: [
              { skill_set_code: "OOD", typical_questions: "Component-based design principles; How would you design a reusable UI library; Explain state management approaches" },
              { skill_set_code: "SWE", typical_questions: "How do you ensure accessibility; Performance optimization techniques; Testing strategies for frontend" },
              { skill_set_code: "COMM", typical_questions: "Explain a complex UI feature you built; Collaborating with designers; Handling user feedback" },
            ],
          },
          {
            round_number: 3,
            round_name: "HR & Culture Fit",
            round_category: "Interview",
            evaluation_type: "HR",
            assessment_mode: "Online",
            skill_sets: [
              { skill_set_code: "COMM", typical_questions: "Why Atlassian; How do you align with Atlassian values; Long-term career aspirations" },
            ],
          },
        ],
      },
    ],
  },
};

// ===================== SKILL RATINGS =====================

export const SKILL_CODES = [
  { code: "COD", name: "Coding", icon: "💻" },
  { code: "DSA", name: "Data Structures & Algorithms", icon: "🧮" },
  { code: "APTI", name: "Aptitude & Problem Solving", icon: "🧠" },
  { code: "COMM", name: "Communication Skills", icon: "🗣️" },
  { code: "OOD", name: "OOP & Design", icon: "🏗️" },
  { code: "AINE", name: "AI Native Engineering", icon: "🤖" },
  { code: "SQL", name: "SQL & Database Design", icon: "🗄️" },
  { code: "SYSD", name: "System Design", icon: "⚙️" },
  { code: "DEVOPS", name: "DevOps & Cloud", icon: "☁️" },
  { code: "SWE", name: "Software Engineering", icon: "📐" },
  { code: "NETW", name: "Computer Networking", icon: "🌐" },
  { code: "OS", name: "Operating Systems", icon: "🖥️" },
];

export const BLOOM_CODES: Record<string, { name: string; level: number }> = {
  RM: { name: "Remember", level: 1 },
  UN: { name: "Understand", level: 2 },
  AP: { name: "Apply", level: 3 },
  AN: { name: "Analyze", level: 4 },
  EV: { name: "Evaluate", level: 5 },
  CR: { name: "Create", level: 6 },
};

export const skillRatings: SkillRating[] = [
  // Accenture
  { company_id: 1, skill_code: "COD", rating: 7, bloom_code: "AP" },
  { company_id: 1, skill_code: "DSA", rating: 6, bloom_code: "AN" },
  { company_id: 1, skill_code: "APTI", rating: 8, bloom_code: "AN" },
  { company_id: 1, skill_code: "COMM", rating: 9, bloom_code: "EV" },
  { company_id: 1, skill_code: "OOD", rating: 5, bloom_code: "AP" },
  { company_id: 1, skill_code: "SYSD", rating: 4, bloom_code: "UN" },
  { company_id: 1, skill_code: "SWE", rating: 6, bloom_code: "AP" },
  // Atlassian
  { company_id: 2, skill_code: "COD", rating: 9, bloom_code: "EV" },
  { company_id: 2, skill_code: "DSA", rating: 9, bloom_code: "EV" },
  { company_id: 2, skill_code: "APTI", rating: 6, bloom_code: "AP" },
  { company_id: 2, skill_code: "COMM", rating: 8, bloom_code: "EV" },
  { company_id: 2, skill_code: "OOD", rating: 8, bloom_code: "AN" },
  { company_id: 2, skill_code: "SYSD", rating: 9, bloom_code: "CR" },
  { company_id: 2, skill_code: "SWE", rating: 8, bloom_code: "AN" },
  { company_id: 2, skill_code: "OS", rating: 7, bloom_code: "AN" },
  { company_id: 2, skill_code: "NETW", rating: 6, bloom_code: "AP" },
  // Google
  { company_id: 3, skill_code: "COD", rating: 10, bloom_code: "CR" },
  { company_id: 3, skill_code: "DSA", rating: 10, bloom_code: "CR" },
  { company_id: 3, skill_code: "SYSD", rating: 10, bloom_code: "CR" },
  { company_id: 3, skill_code: "OOD", rating: 8, bloom_code: "EV" },
  { company_id: 3, skill_code: "OS", rating: 7, bloom_code: "AN" },
  { company_id: 3, skill_code: "SWE", rating: 9, bloom_code: "EV" },
  { company_id: 3, skill_code: "COMM", rating: 7, bloom_code: "AN" },
  // Microsoft
  { company_id: 4, skill_code: "COD", rating: 9, bloom_code: "EV" },
  { company_id: 4, skill_code: "DSA", rating: 9, bloom_code: "EV" },
  { company_id: 4, skill_code: "SYSD", rating: 9, bloom_code: "CR" },
  { company_id: 4, skill_code: "OOD", rating: 8, bloom_code: "EV" },
  { company_id: 4, skill_code: "SWE", rating: 8, bloom_code: "AN" },
  { company_id: 4, skill_code: "COMM", rating: 7, bloom_code: "AP" },
  // Amazon
  { company_id: 5, skill_code: "COD", rating: 9, bloom_code: "EV" },
  { company_id: 5, skill_code: "DSA", rating: 9, bloom_code: "EV" },
  { company_id: 5, skill_code: "SYSD", rating: 10, bloom_code: "CR" },
  { company_id: 5, skill_code: "OOD", rating: 9, bloom_code: "EV" },
  { company_id: 5, skill_code: "SWE", rating: 8, bloom_code: "AN" },
  { company_id: 5, skill_code: "COMM", rating: 8, bloom_code: "AN" },
  // TCS
  { company_id: 9, skill_code: "COD", rating: 6, bloom_code: "AP" },
  { company_id: 9, skill_code: "DSA", rating: 5, bloom_code: "AP" },
  { company_id: 9, skill_code: "APTI", rating: 8, bloom_code: "AN" },
  { company_id: 9, skill_code: "COMM", rating: 7, bloom_code: "AP" },
  { company_id: 9, skill_code: "SWE", rating: 5, bloom_code: "UN" },
  // Infosys
  { company_id: 10, skill_code: "COD", rating: 6, bloom_code: "AP" },
  { company_id: 10, skill_code: "DSA", rating: 6, bloom_code: "AP" },
  { company_id: 10, skill_code: "APTI", rating: 7, bloom_code: "AN" },
  { company_id: 10, skill_code: "COMM", rating: 7, bloom_code: "AP" },
  { company_id: 10, skill_code: "SQL", rating: 6, bloom_code: "AP" },
];

// ===================== HELPER FUNCTIONS =====================

export function getCompanyById(id: number): Company | undefined {
  return companies.find((c) => c.company_id === id);
}

export function getCompaniesByCategory(category?: CompanyCategory): Company[] {
  if (!category) return companies;
  return companies.filter((c) => c.category === category);
}

export function getCategoryCounts(): Record<string, number> {
  const counts: Record<string, number> = { Total: companies.length };
  for (const c of companies) {
    counts[c.category] = (counts[c.category] || 0) + 1;
  }
  return counts;
}

export function searchCompanies(query: string, category?: CompanyCategory): Company[] {
  const filtered = category ? getCompaniesByCategory(category) : companies;
  if (!query) return filtered;
  const q = query.toLowerCase();
  return filtered.filter(
    (c) =>
      c.name.toLowerCase().includes(q) ||
      c.short_name.toLowerCase().includes(q)
  );
}

export function getSkillRatingsForCompany(companyId: number): SkillRating[] {
  return skillRatings.filter((sr) => sr.company_id === companyId);
}

export function getCategoryColor(category: CompanyCategory): string {
  switch (category) {
    case "Marquee": return "bg-marquee text-marquee-foreground";
    case "SuperDream": return "bg-superdream text-superdream-foreground";
    case "Dream": return "bg-dream text-dream-foreground";
    case "Regular": return "bg-regular text-regular-foreground";
  }
}

export function getCategoryLabel(category: CompanyCategory): string {
  switch (category) {
    case "Marquee": return "Marquee";
    case "SuperDream": return "Super Dream";
    case "Dream": return "Dream";
    case "Regular": return "Regular";
  }
}

export function formatCurrency(amount: number): string {
  if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(1)} Cr`;
  if (amount >= 100000) return `₹${(amount / 100000).toFixed(1)} L`;
  return `₹${amount.toLocaleString()}`;
}

export const SKILL_CODE_NAMES: Record<string, string> = {
  COD: "Coding",
  DSA: "Data Structures & Algorithms",
  APTI: "Aptitude & Problem Solving",
  COMM: "Communication Skills",
  OOD: "OOP & Design",
  AINE: "AI Native Engineering",
  SQL: "SQL & Database Design",
  SYSD: "System Design",
  DEVOPS: "DevOps & Cloud",
  SWE: "Software Engineering",
  NETW: "Computer Networking",
  OS: "Operating Systems",
};
