import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useDispatch, useSelector } from "react-redux";
import { changeEducation, selectEducation } from "@/hooks/redux/resumeSlice";
import { ResumeEducation } from "@/types/types";
import { ChangeEvent } from "react";

export const EducationForm = () => {
  const education = useSelector(selectEducation);
  const dispatch = useDispatch();

  const handleProfileChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    dispatch(changeEducation({ field: name as keyof ResumeEducation, value }));
  };

  return (
    <div className="px-4 py-2 md:px-8 md:py-4">
      <Card className="flex flex-col gap-3 rounded-md p-6 pt-4 shadow transition-opacity duration-200">
        <CardContent className="grid gap-4">
          <Label htmlFor="school">School</Label>
          <Input
            name="school"
            placeholder="School"
            value={education.school}
            onChange={handleProfileChange}
          />
          <Label htmlFor="degree">Degree</Label>
          <Input
            name="degree"
            placeholder="Degree"
            value={education.degree}
            onChange={handleProfileChange}
          />
          <Label htmlFor="date">Date</Label>
          <Input
            name="date"
            placeholder="Nov 4"
            value={education.date}
            onChange={handleProfileChange}
          />
        </CardContent>
      </Card>
    </div>
  );
};
