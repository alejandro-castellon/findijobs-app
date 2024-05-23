import { useSelector } from "react-redux";
import { selectResume } from "@/hooks/redux/resumeSlice";

export function ResumePDF() {
  const resume = useSelector(selectResume);

  return (
    <div className="relative h-full p-4 border border-gray-300 bg-white shadow-lg text-gray-500">
      <h1 className="text-lg font-bold">Name: {resume.profile.name}</h1>
      <p className="text-sm">Summary: {resume.profile.summary}</p>
      <p className="text-sm">Email: {resume.profile.email}</p>
      <p className="text-sm">Phone: {resume.profile.phone}</p>
      <p className="text-sm">Website: {resume.profile.url}</p>
      <p className="text-sm">Location: {resume.profile.location}</p>
    </div>
  );
}
