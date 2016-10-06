export interface Lesson {
  courseId: string;
  description: string;
  duration?: string;
  longDescription?: string;
  tags: string | string[];
  url?: string;
  videoUrl: string;
}
