export const SITE_META = {
  name: "Priyanshu Rawat",
  university: "Manipal University Jaipur (MUJ)",
  degree: "B.Tech CSE — IoT & Information Security",
  email: "[set in .env — don't hardcode]",
  github: "https://github.com/insanityatpeak",
  leetcode: "https://leetcode.com/u/priyanshu_rawat_1729/",
  linkedin: "https://www.linkedin.com/in/priyanshu-rawat-235518242/",
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
    id: "nalayak_beta",
    title: "nalayak_beta",
    description: "A lightweight, cross-platform terminal hook that intercepts failed commands, roasts you with customizable personalities, and natively plays meme audio in the background.",
    tags: ["Python"],
    github: "https://github.com/insanityatpeak/nalayak_beta",
  },
  {
    id: "redbus-clone",
    title: "RedBus-Clone",
    description: "This project is a clone of RedBus Web Application which is a online Bus Ticket Booking and Bus Hiring platform. The platform acts as a mediator between relevant customers and bus owners.",
    tags: ["JavaScript"],
    github: "https://github.com/insanityatpeak/RedBus-Clone",
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
    id: "studio-speaks",
    title: "Studio-Speaks",
    description: "A digital agency or studio website implementation.",
    tags: ["JavaScript", "React"],
    homepage: "https://studio.reactbd.com/",
    github: "https://github.com/insanityatpeak/Studio-Speaks",
  },
  {
    id: "streamtube",
    title: "StreamTube-One-OTT-for-everyone",
    description: "A complete OTT streaming platform clone with video playback and catalog management.",
    tags: ["TypeScript", "Next.js"],
    homepage: "https://moviestudioyt.vercel.app/",
    github: "https://github.com/insanityatpeak/StreamTube-One-OTT-for-everyone",
  },
  {
    id: "tulos",
    title: "Tulos-E-commerce-App",
    description: "A modern e-commerce application with full shopping cart and checkout functionality.",
    tags: ["TypeScript", "E-commerce"],
    github: "https://github.com/insanityatpeak/Tulos-E-commerce-App",
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
  },
  {
    id: "iot-lighting",
    title: "IoT Street Lighting and Cloud Integration",
    venue: "CCE3207 Academic Project",
    year: "2024",
    abstract: "Designed an IoT street lighting system utilizing NodeMCU ESP8266. Implemented NTP-based time switching over traditional LDR sensors and integrated DHT11, SG90 servo, and HW-316 relay with ThingSpeak via MQTT.",
  },
];
