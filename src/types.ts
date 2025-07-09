interface Project {
  title: string;
  description: string;
  dates: string;
  company: string;
  location: string;
  image: string;
  link: string;
  stack: string[];
}

interface FeaturedProject extends Project {
  featuredPhoto: ImageMetadata;
}

export type { Project, FeaturedProject };
