import { Document, Page, View, Text, StyleSheet } from "@react-pdf/renderer";
import { Resume } from "@/types/types";

export const ResumePDF = ({ resume }: { resume: Resume }) => {
  return (
    <Document>
      <Page>
        <Text>Name: {resume.profile.name}</Text>
        <Text>Summary: {resume.profile.summary}</Text>
        <Text>Email: {resume.profile.email}</Text>
        <Text>Phone: {resume.profile.phone}</Text>
        <Text>Website: {resume.profile.url}</Text>
        <Text>Location: {resume.profile.location}</Text>
      </Page>
    </Document>
  );
};
