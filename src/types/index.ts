export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: "UI/UX Design" | "Web Apps" | "Mobile";
  tags: string[];
  liveLink?: string;
  sourceLink?: string;
}