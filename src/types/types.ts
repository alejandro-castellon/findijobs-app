export interface ResumeProfile {
  name: string;
  summary: string;
  email: string;
  phone: string;
  location: string;
  url: string;
}

export interface Resume {
  profile: ResumeProfile;
}
