import { EducationForm } from "./education-form";
import { ProfileForm } from "./profile-form";
import { ScrollArea } from "@/components/ui/scroll-area";

export const ResumeForm = () => {
  return (
    <ScrollArea className="h-[calc(100vh-4rem)] rounded-md">
      <ProfileForm />
      <EducationForm />
    </ScrollArea>
  );
};
