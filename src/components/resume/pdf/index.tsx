import { useSelector } from "react-redux";
import { selectResume } from "@/hooks/redux/resumeSlice";

export function ResumePDF() {
  const resume = useSelector(selectResume);

  return (
    <div className="md:w-1/2 p-4">
      <div className="p-4 border border-gray-300 bg-white shadow-lg text-gray-500">
        <h1 className="text-lg font-bold">{resume.profile.name}</h1>
        <p className="text-sm">{resume.profile.summary}</p>
        <p className="text-sm">{resume.profile.email}</p>
      </div>
    </div>
  );
}
