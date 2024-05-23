export interface ResumeProfile {
  name: string;
  summary: string;
  email: string;
  phone: string;
  location: string;
  url: string;
}

export interface ResumeEducation {
  school: string;
  degree: string;
  date: string;
}

export interface Resume {
  profile: ResumeProfile;
  education: ResumeEducation;
}
