import { EducationForm } from "./education-form";
import { ProfileForm } from "./profile-form";

export const ResumeForm = () => {
  return (
    <div className="scrollbar scrollbar-track-gray-100 scrollbar-w-3 md:justify-end md:overflow-y-scroll">
      <ProfileForm />
      <EducationForm />
    </div>
  );
};
