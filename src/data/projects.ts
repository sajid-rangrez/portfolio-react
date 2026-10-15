
export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "ReTans",
    description:
      "An automated literature monitoring platform with document processing and data integrations.",
    technologies: ["Java", "Spring Boot", "Angular", "Elasticsearch"],
  },
  {
    id: 2,
    title: "Social Media Monitoring Tool",
    description:
      "A monitoring solution integrating social media APIs with a literature monitoring platform.",
    technologies: ["Java", "REST APIs", "Design Patterns"],
  },
  {
    id: 3,
    title: "Web Scraping Tool",
    description:
      "A Selenium-based microservice for collecting literature data from sources without APIs.",
    technologies: ["Java", "Selenium", "Spring Boot", "Docker"],
  },
  {
    id: 4,
    title: "E2B R3 XML Generator",
    description:
      "A microservice that generates regulatory XML documents for reporting workflows.",
    technologies: ["Java", "Spring Boot", "JiBX", "XML"],
  },
  {
    id: 5,
    title: "RAG FAQ Chatbot",
    description:
      "A retrieval-augmented generation system that answers questions using document embeddings.",
    technologies: ["Python", "LangChain", "ChromaDB", "OpenAI"],
  },
  {
    id: 6,
    title: "Real-time Analytics Dashboard",
    description:
      "An analytics platform that summarizes Elasticsearch data and visualizes trends.",
    technologies: ["Java", "Elasticsearch", "Angular"],
  },
];
