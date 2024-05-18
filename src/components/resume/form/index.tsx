import { ProfileForm } from "./profile-form";

export const ResumeForm = () => {
  return (
    <div className="flex justify-center scrollbar scrollbar-track-gray-100 scrollbar-w-3 md:h-[calc(100vh-var(--top-nav-bar-height))] md:justify-end md:overflow-y-scroll">
      <section className="flex max-w-2xl flex-col gap-8 p-[var(--resume-padding)]">
        <ProfileForm />
      </section>
    </div>
  );
};
