export interface ILesson {
 courseId: string;
 description: string;
 duration?: string;
 longDescription?: string;
 tags: string | string[];
 url?: string;
 videoUrl: string;
 }

export class Lesson {
  constructor(public $key: string,
              public courseId: string,
              public description: string,
              public duration: string,
              public longDescription: string,
              public tags: string | string[],
              public url: string,
              public videoUrl: string) {
  }

  get hasVideoUrl() {
    return !!this.videoUrl;
  }

  get hasMultiTags() {
    if (this.tags instanceof Array) {
      return true;
    } else {
      return false;
    }
  }

  static fromJsonList(array): Lesson[] {
    return array.map(Lesson.fromJson);
  }

  static fromJson({
    $key,
    courseId,
    description,
    duration,
    longDescription,
    tags,
    url,
    videoUrl
  }): Lesson {
    return new Lesson($key,
      courseId,
      description,
      duration,
      longDescription,
      tags,
      url,
      videoUrl)
  }
}
