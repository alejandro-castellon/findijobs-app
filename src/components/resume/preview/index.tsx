import { ResumePDF } from "./pdf";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { useSelector } from "react-redux";
import { selectResume } from "@/hooks/redux/resumeSlice";
import { Button } from "@/components/ui/button";
import { ResumeIframeCSR } from "./resume-iframe";

export function ResumePreview() {
  const resume = useSelector(selectResume);
  return (
    <>
      <ResumeIframeCSR documentSize={"A4"}>
        <ResumePDF resume={resume} />
      </ResumeIframeCSR>
      <PDFDownloadLink
        document={<ResumePDF resume={resume} />}
        fileName="resume.pdf"
      >
        {({ loading }) =>
          loading ? (
            <Button>Loading document...</Button>
          ) : (
            <Button className="my-4">Download resume as PDF</Button>
          )
        }
      </PDFDownloadLink>
    </>
  );
}
