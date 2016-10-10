
export class Course {
  constructor(
    public $key: string,
    public courseListIcon: string,
    public description: string,
    public iconUrl: string,
    public longDescription: string,
    public url: string
  ){

  }

  static fromJson({
    $key,
    courseListIcon,
    description,
    iconUrl,
    longDescription,
    url
  }){
    return new Course(
      $key,
      courseListIcon,
      description,
      iconUrl,
      longDescription,
      url
    )
  }

  static fromJsonList(array) {
    return array.map(Course.fromJson)
  }
}
