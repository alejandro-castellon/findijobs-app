"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Textarea } from "@/components/ui/textarea";

export const ProfileForm = () => {
  return (
    <Card className="flex flex-col gap-3 rounded-md p-6 pt-4 shadow transition-opacity duration-200">
      <CardContent className="grid gap-4">
        <Input name="name" placeholder="Sal Khan" />
        <Textarea
          name="summary"
          placeholder="Entrepreneur and educator obsessed with making education free for anyone"
        />
        <Label htmlFor="email">Email</Label>
        <Input name="email" placeholder="hello@khanacademy.org" />
        <Input name="phone" placeholder="(123)456-7890" />
        <Input name="url" placeholder="linkedin.com/in/khanacademy" />
        <Input name="location" placeholder="NYC, NY" />
      </CardContent>
    </Card>
  );
};
