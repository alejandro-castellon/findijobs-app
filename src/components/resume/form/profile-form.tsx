import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile, selectProfile } from "@/hooks/redux/resumeSlice";
import { ResumeProfile } from "@/types/types";
import { ChangeEvent } from "react";

export const ProfileForm = () => {
  const profile = useSelector(selectProfile);
  const dispatch = useDispatch();

  const handleProfileChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    dispatch(changeProfile({ field: name as keyof ResumeProfile, value }));
  };

  return (
    <div className="px-4 md:px-8">
      <Card className="flex flex-col gap-3 rounded-md p-6 pt-4 shadow transition-opacity duration-200">
        <CardContent className="grid gap-4">
          <Label htmlFor="name">Name</Label>
          <Input
            name="name"
            placeholder="Sal Khan"
            value={profile.name}
            onChange={handleProfileChange}
          />
          <Label htmlFor="summary">Summary</Label>
          <Textarea
            name="summary"
            placeholder="Entrepreneur and educator obsessed with making education free for anyone"
            value={profile.summary}
            onChange={handleProfileChange}
          />
          <Label htmlFor="email">Email</Label>
          <Input
            name="email"
            id="email"
            placeholder="Email"
            value={profile.email}
            onChange={handleProfileChange}
          />
          <Label htmlFor="phone">Phone</Label>
          <Input
            name="phone"
            placeholder="(123)456-7890"
            value={profile.phone}
            onChange={handleProfileChange}
          />
          <Label htmlFor="url">Website</Label>
          <Input
            name="url"
            placeholder="linkedin.com/in/khanacademy"
            value={profile.url}
            onChange={handleProfileChange}
          />
          <Label htmlFor="location">Location</Label>
          <Input
            name="location"
            placeholder="NYC, NY"
            value={profile.location}
            onChange={handleProfileChange}
          />
        </CardContent>
      </Card>
    </div>
  );
};
