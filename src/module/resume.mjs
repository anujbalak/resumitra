export default class Resume {
  constructor() {
    this.name = null;
    this.id = null;
    this.personalDetails = new Personal();
    this.educationDetails = new Education();
    this.experience = new Experience();
    this.projects = new Projects();
  }
}

class Personal {
  constructor() {
    this.name = null;
    this.email = null;
    this.mobile = null;
    this.website = null;
    this.profile = null;
    this.github = null;
    this.linkedin = null;
  }
}

export class Social {
  constructor() {
    this.name = null;
    this.link = null;
  }
}

class Education {
  constructor() {
    this.institute1 = new EducationInstitute(1);
    this.institute2 = new EducationInstitute(0);
    this.institute3 = new EducationInstitute(0);
  }
}

class Projects {
  constructor() {
    this.project1 = new Project(1);
    this.project2 = new Project(0);
    this.project3 = new Project(0);
  }
}

class Experience {
  constructor() {
    this.comp1 = new ExperienceCompany(1);
    this.comp2 = new ExperienceCompany(0);
    this.comp3 = new ExperienceCompany(0);
  }
}

export class Project {
  constructor(code) {
    this.activationStatus = code;
    this.name = null;
    this.details = null;
  }
}

export class ExperienceCompany {
  constructor(code) {
    this.activationStatus = code;
    this.post = null;
    this.company = null;
    this.startDate = null;
    this.endDate = null;
    this.location = null;
    this.details = null;
  }
}

export class EducationInstitute {
  constructor(status) {
    this.activationStatus = status;
    this.name = null;
    this.startDate = null;
    this.EndDate = null;
    this.course = null;
    this.score = null;
  }
}
