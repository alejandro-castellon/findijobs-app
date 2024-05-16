import { ResumeForm } from "@/components/resume/resume-form";

export default function Create() {
  return (
    <main className="relative h-full w-full overflow-hidden">
      <div className="grid grid-cols-3 md:grid-cols-6 p-10">
        <div className="col-span-3">
          <ResumeForm />
        </div>
        <div className="col-span-3">PDF</div>
      </div>
    </main>
  );
}
