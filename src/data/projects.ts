export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  role: string;
  duration: string;
  team: string;
  tags: string[];
  summary: string;
  challenge: string;
  approach: string;
  outcome: string;
  metrics?: string;
  liveUrl?: string;
  behanceUrl?: string;
  videoUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "suki-ai",
    title: "Suki.ai",
    subtitle: "AI-Powered Healthcare Assistant",
    role: "Product Designer",
    duration: "Current",
    team: "Product Design team at Suki",
    tags: ["AI Healthcare", "UX Design", "Product Design"],
    summary:
      "Designing AI-native clinical workflows that reduce administrative burden for physicians and improve patient outcomes through voice-enabled EHR interactions.",
    challenge:
      "Clinicians spend 2+ hours on documentation for every hour of patient care. The challenge was to design an AI assistant that feels invisible — reducing friction without adding cognitive load, while navigating strict healthcare compliance and varying EHR integrations.",
    approach:
      "I work embedded with engineering and clinical product teams, conducting research with physicians across specialties, mapping complex medical workflows, and iterating on conversation design for voice + UI hybrid interactions. My focus is on making AI feel assistive rather than intrusive in high-stakes clinical settings.",
    outcome:
      "Shipped improvements to core documentation, AI-suggested coding, and ambient scribe features that reduced physician documentation time. Continuously iterating based on clinical feedback and adoption metrics.",
    featured: true,
  },
  {
    slug: "lucio-studio",
    title: "Lucio AI",
    subtitle: "Legal AI Dashboard — UX Audit & 0-to-1 Redesign",
    role: "UX Consultant",
    duration: "2 months",
    team: "Independent consultancy",
    tags: ["Legal Tech", "AI Product", "Dashboard Design", "UX Audit"],
    summary:
      "Audited an existing legal AI dashboard for usability gaps, then led the 0-to-1 design of a redesigned dashboard — improving clarity, workflow efficiency, and trust for legal professionals navigating AI-powered document workflows.",
    challenge:
      "Lucio's existing dashboard was feature-dense but hard to navigate — lawyers reported cognitive overload, unclear information hierarchy, and difficulty discovering key AI capabilities. The product needed a UX overhaul before scaling to enterprise law firms.",
    approach:
      "Started with a systematic UX audit — heuristic evaluation, user interviews with practising lawyers, and task analysis of core workflows (document review, drafting, research). Identified 15+ usability issues. Then designed a new dashboard from scratch: simplified navigation, progressive disclosure for AI features, and a clear action-oriented home surface. Iterated through wireframes, high-fidelity mockups, and usability validation with lawyers.",
    outcome:
      "Delivered a comprehensive audit report and a redesigned dashboard that reduced task completion time for core workflows. The new information architecture improved feature discoverability and reduced cognitive load — directly supporting Lucio's enterprise sales cycle.",
    featured: true,
  },
  {
    slug: "miband-zepp-life",
    title: "Making Fitness Stick",
    subtitle: "Wearable Activity Tracking for Adherence",
    role: "UI/UX Designer",
    duration: "3 months",
    team: "Solo project (Academic)",
    tags: ["Wearable UX", "Health Design", "Interaction Design"],
    summary:
      "Redesigned the Mi Band / Zepp Life experience to improve long-term adherence to activity tracking through better goal-setting, feedback loops, and habit formation mechanics.",
    challenge:
      "Wearable activity trackers see high abandonment within 6 months. Users lose motivation when goals feel generic, feedback is delayed, and progress isn't celebrated in meaningful ways. The Mi Band had strong hardware but the software experience didn't capitalise on it.",
    approach:
      "Conducted user interviews with 12 regular and lapsed wearable users, mapped adherence drop-off points, and prototyped a redesigned goal-setting flow, micro-feedback system, and social accountability features. Iterated through 3 rounds of usability testing.",
    outcome:
      "Design proposal with a 40% improvement in 7-day retention in prototype testing. Presented findings on how granular feedback loops and adaptive goal-setting improve sustained engagement.",
    behanceUrl: "https://www.behance.net/gallery/213452445/Redesigning-the-MiBand-Zepp-Life",
    videoUrl: "https://youtu.be/5HTxbVzJGk0",
    featured: true,
  },
  {
    slug: "intellisight",
    title: "Intellisight",
    subtitle: "Business Analytics with a Conversational Agent",
    role: "UX Designer",
    duration: "2 months",
    team: "Solo project (Academic)",
    tags: ["Web App", "Conversational UI", "Data Visualization"],
    summary:
      "Designed a business analytics web app that lets non-technical users explore data through natural language conversations and interactive visualizations.",
    challenge:
      "Business analytics tools assume SQL literacy or comfort with complex dashboards. Small business owners and non-data roles struggle to extract insights from their data without engineering support.",
    approach:
      "Designed a hybrid interface combining a conversational agent with interactive charts. Users can ask questions in plain language, refine through follow-ups, and pin insights to a dashboard. Iterated on the NLU phrasing with Wizard-of-Oz testing to find the right balance between guided suggestions and open queries.",
    outcome:
      "Prototype validated with 8 target users across e-commerce and service businesses. Participants reduced insight-extraction time by ~60% compared to traditional BI tools.",
    videoUrl: "https://youtu.be/XazxaCIb_Zs",
    featured: true,
  },
  {
    slug: "flo-evaluation",
    title: "Heuristic Evaluation of Flo",
    subtitle: "App Evaluation & Redesign Recommendations",
    role: "UX Evaluator",
    duration: "1 week",
    team: "Solo project (Academic)",
    tags: ["Heuristic Evaluation", "UX Research", "Health Apps"],
    summary:
      "A rapid heuristic evaluation of the Flo period tracking app identifying 12 usability violations and proposing prioritized fixes.",
    challenge:
      "Flo handles sensitive health data but had several navigation inconsistencies, unclear data privacy cues, and cognitive overload in its dashboard. Users needed clarity and trust more than feature density.",
    approach:
      "Applied Nielsen's 10 heuristics systematically across core flows — onboarding, data logging, insights viewing. Prioritized issues by severity. Presented findings with annotated screenshots and low-fi redesigns for the highest-impact fixes.",
    outcome:
      "Delivered a comprehensive evaluation report with severity-ranked issues and proposed solutions. Key recommendations around privacy transparency and dashboard simplification.",
    behanceUrl:
      "https://www.behance.net/gallery/213388451/Flo-Design-Evaluation-1-Week",
    featured: false,
  },
  {
    slug: "fabric-of-time",
    title: "The Fabric of Time",
    subtitle: "A Tangible User Interface",
    role: "Interaction Designer",
    duration: "2 months",
    team: "Solo project (Academic)",
    tags: ["Tangible UI", "Physical Computing", "Interaction Design"],
    summary:
      "A tangible user interface that lets users interact with digital timelines through physical fabric — exploring how texture, tension, and touch can represent temporal data.",
    challenge:
      "Digital calendars and timelines are flat, screen-based abstractions of a fundamentally embodied experience. How might we make time tangible and manipulable through physical interaction?",
    approach:
      "Explored shape-changing interfaces, soft robotics, and capacitive sensing to build a fabric-based timeline. Users stretch, gather, and release fabric to navigate time — compression represents density, tension represents urgency.",
    outcome:
      "Working prototype demonstrated at the IDC design exhibition. Explored novel interaction paradigms for representing temporal data physically.",
    behanceUrl:
      "https://www.behance.net/gallery/213390043/The-Fabric-of-Time-A-Tangible-User-Interface",
    videoUrl: "https://youtu.be/iz7Ge7h2ysw",
    featured: false,
  },
  {
    slug: "pomodoro-timer",
    title: "Reimagining Interactions for a Pomodoro Timer",
    subtitle: "Interaction Techniques Exploration",
    role: "Interaction Designer",
    duration: "3 weeks",
    team: "Solo project (Academic)",
    tags: ["Interaction Design", "Micro-interactions", "Productivity"],
    summary:
      "Explored novel interaction techniques for a Pomodoro productivity timer — moving beyond standard buttons to gesture-based, glanceable, and ambient controls.",
    challenge:
      "Standard Pomodoro timers rely on start/stop/reset buttons that interrupt flow. Can we design interactions that feel more natural and less disruptive to deep work?",
    approach:
      "Rapid prototyped 5 interaction modes — tilt to start, proximity-based pause, gesture-based snooze, ambient color shifts for status, and tap patterns. Tested with 6 regular Pomodoro users in a within-subjects study.",
    outcome:
      "Users preferred tilt-to-start and ambient status for low-disruption flow. Gesture controls reduced context-switch time by ~30%. Documented design guidelines for flow-preserving productivity tools.",
    videoUrl: "https://youtu.be/x9m6hzj8qtE",
    featured: false,
  },
  {
    slug: "digitisation-of-litigation",
    title: "Digitisation of Litigation in India",
    subtitle: "Thesis — M.Des Interaction Design",
    role: "Graduate Researcher",
    duration: "6 months",
    team: "Thesis (IDC IIT Bombay)",
    tags: ["UX Research", "Service Design", "LegalTech"],
    summary:
      "Research thesis examining the digitisation of India's litigation ecosystem — identifying systemic UX breakdowns in e-courts, case management, and lawyer-client workflows.",
    challenge:
      "India's judiciary is undergoing digital transformation (e-Courts Phase III), but the interfaces and workflows designed for legal professionals often ignore actual courtroom practice, creating friction rather than efficiency.",
    approach:
      "Ethnographic research across multiple district courts and high courts — observing hearings, interviewing lawyers, clerks, and judges. Mapped service blueprints showing breakdowns at key handoff points. Identified opportunities for human-centred legal tech.",
    outcome:
      "Thesis submitted and defended at IDC IIT Bombay. Proposed design principles for legal technology in emerging economies — emphasizing contextual workflow mapping over feature parity with Western legal tech.",
    featured: false,
  },
];
