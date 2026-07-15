export const SITE_META = {
  name: "Priyanshu Rawat",
  university: "Manipal University Jaipur (MUJ)",
  degree: "B.Tech CSE — IoT & Information Security",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? '',
  github: "https://github.com/insanityatpeak",
  leetcode: "https://leetcode.com/u/priyanshu_rawat_1729/",
  linkedin: "https://www.linkedin.com/in/priyanshu-rawat-235518242/",
  x: "https://x.com/DragonE17010245",
};

export const EXPERIENCE = [
  {
    id: "gssoc",
    role: "Open Source Contributor",
    company: "GSSoC",
    period: "2024–Present",
    bullets: [
      "PR reviews on live repos",
      "CI/CD pipeline contributions",
      "cross-team code review culture",
    ],
  },
  {
    id: "imc",
    role: "Algorithmic Trader",
    company: "IMC Prosperity Rounds 1+3",
    period: "2024–2025",
    bullets: [
      "EMA-based market making on synthetic assets",
      "Options spread farming on VEV_xxxx series",
      "Fixed position tracker divergence bug in Round 1",
    ],
  },
  {
    id: "researcher",
    role: "Security Researcher",
    company: "Independent",
    period: "2024",
    bullets: [
      "WPA3-SAE LSTM anomaly detector — 98.4% accuracy, 0.993 ROC-AUC",
      "Hidden IoT camera detection via cyber-physical correlation",
      "ONNX export for edge deployment — 550KB, <15ms inference",
    ],
  },
  {
    id: "mlh",
    role: "MLH Hackathon",
    company: "Team Scooby_Doing",
    period: "2024",
    bullets: [
      "Autonomous AI cybersecurity agent for SMBs",
      "MERN + Python ML stack",
      "48hr build sprint",
    ],
  },
];

export const PROJECTS = [
  {
    id: "chatgpt_from_temu",
    title: "Chatgpt_from_temu",
    description: "add ur api key and expierece a temu slick version of chatgpt.",
    tags: ["JavaScript", "AI"],
    github: "https://github.com/insanityatpeak/Chatgpt_from_temu",
  },
  {
    id: "juro",
    title: "Juro",
    description: "An adversarial AI tribunal for denied health-insurance claims. Four agents argue a denial in one shared room on Band, a human delivers the binding ruling, and every line is hash-chained.",
    tags: ["TypeScript", "Next.js", "AI"],
    homepage: "https://juro-eta.vercel.app/",
    github: "https://github.com/insanityatpeak/Juro",
  },
  {
    id: "kryptonite-ai",
    title: "kryptonite-ai",
    description: "An open-source, autonomous AI workflow automation platform. Visual drag-and-drop workflow builder powered by Next.js 15, React Flow, OpenRouter AI, Better Auth, and Neon Postgres.",
    tags: ["TypeScript", "React Flow", "AI"],
    github: "https://github.com/insanityatpeak/kryptonite-ai",
  },
  {
    id: "blue-berry",
    title: "Blue-Berry-Berry-or-NOTHING",
    description: "A modern React dashboard template implementation.",
    tags: ["TypeScript", "React"],
    homepage: "https://berry.reactbd.com/",
    github: "https://github.com/insanityatpeak/Blue-Berry-Berry-or-NOTHING",
  },
  {
    id: "the-word-project",
    title: "The-Word-Project",
    description: "A high-performance, cross-platform terminal word puzzle and discovery engine written in modern C11 with dynamic ASCII art, ANSI styling, and interactive game loops.",
    tags: ["C", "Terminal", "Game"],
    github: "https://github.com/insanityatpeak/The-Word-Project",
  },
  {
    id: "nalayak_beta",
    title: "nalayak_beta",
    description: "A lightweight, cross-platform terminal hook that intercepts failed commands, roasts you with customizable personalities, and natively plays meme audio in the background.",
    tags: ["Python", "CLI"],
    github: "https://github.com/insanityatpeak/nalayak_beta",
  },
];

export const SKILLS = {
  languages: ["Java", "C++", "Python", "TypeScript"],
  security: ["Network Analysis", "WPA3-SAE", "Anomaly Detection", "Cyber-physical Correlation"],
  iot: ["ESP8266", "MQTT", "ThingSpeak", "Hardware Integration"],
  ml_ai: ["LSTM", "ONNX", "Keras/TensorFlow", "Scikit-Learn"],
  web: ["Next.js 14", "React", "Tailwind CSS", "Framer Motion", "MERN"],
  devops: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Linux (Kali/Ubuntu)"],
  trading: ["Market Making", "Options Spread", "EMA Strategies", "Quantitative Analysis"],
};

export const RESEARCH = [
  {
    id: "wpa3-research",
    title: "WPA3-SAE LSTM Anomaly Detection",
    venue: "Independent Research",
    year: "2024",
    abstract: "Developed an LSTM-based anomaly detector for WPA3-SAE using a 7-input feature set and 8-frame sliding window sequences. The model achieved 98.4% accuracy with a 0.993 ROC-AUC and was successfully exported to ONNX format (<15ms inference on edge devices).",
    link: undefined,
  },
  {
    id: "iot-lighting",
    title: "IoT Street Lighting and Cloud Integration",
    venue: "CCE3207 Academic Project",
    year: "2024",
    abstract: "Designed an IoT street lighting system utilizing NodeMCU ESP8266. Implemented NTP-based time switching over traditional LDR sensors and integrated DHT11, SG90 servo, and HW-316 relay with ThingSpeak via MQTT.",
    link: undefined,
  },
];
