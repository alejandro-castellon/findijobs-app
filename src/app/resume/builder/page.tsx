"use client";
import store from "@/hooks/redux/store";
import { Provider } from "react-redux";
import { ResumeForm } from "@/components/resume/form";
import { ResumePDF } from "@/components/resume/pdf";

const Create: React.FC = () => {
  return (
    <Provider store={store}>
      <main className="relative h-full w-full overflow-hidden mt-10">
        <div className="grid grid-cols-3 md:grid-cols-6 mt-8">
          <div className="col-span-3 p-4">
            <ResumeForm />
          </div>
          <div className="col-span-3 p-4">
            <ResumePDF />
          </div>
        </div>
      </main>
    </Provider>
  );
};

export default Create;
