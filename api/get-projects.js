// This is a serverless function — runs only when called
export default function handler(req, res) {
  // You can do anything here: read files, connect to database later, etc.
  const projects = [
    {
      title: "AeroTwin: Physics-AI Landing Gear Digital Twin",
      description: "Certification-compliant system with LSTM + Simscape...",
      tech: ["SIMSCAPE", "LSTM", "PostgreSQL", "CS-23.473"]
    },
    // ... add your other projects dynamically if you want
  ];

  res.status(200).json(projects);
}
