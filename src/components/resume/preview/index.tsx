import { ResumePDF } from "./pdf";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { useSelector } from "react-redux";
import { selectResume } from "@/hooks/redux/resumeSlice";
import { Button } from "@/components/ui/button";

export function ResumePreview() {
  const resume = useSelector(selectResume);
  return (
    <>
      <div className="relative p-4 border border-gray-300 bg-white shadow-lg text-gray-500">
        <ResumePDF resume={resume} />
      </div>
      <PDFDownloadLink
        document={<ResumePDF resume={resume} />}
        fileName="resume.pdf"
      >
        {({ loading }) =>
          loading ? (
            <Button>Loading document...</Button>
          ) : (
            <Button>Download resume as PDF</Button>
          )
        }
      </PDFDownloadLink>
    </>
  );
}
