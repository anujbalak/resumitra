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
        this.name = null
        this.email = null
        this.mobile = null;
        this.profile = null;
    }
}

class Education {
    constructor() {
        this.institute = new EducationInstitute();        
    }
}

class Projects {
    constructor() {
        this.project = new Project();
    }
}


class Experience {
    constructor() {
        this.exp = new ExperienceCompany();
    }
}

export class Project {
    constructor() {
        this.name = null;
        this.details = null;
    }
}

export class ExperienceCompany {
    constructor() {
        this.post = null
        this.company = null;
        this.startDate = null;
        this.EndDate = null;
        this.location = null;
        this.details = null
    }
}

export class EducationInstitute {
    constructor() {
        this.name = null
        this.startDate = null
        this.EndDate = null;
        this.course = null;
        this.score = null
    }
}