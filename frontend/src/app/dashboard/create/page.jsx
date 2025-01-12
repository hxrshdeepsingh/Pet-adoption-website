'use client';

import Dashboard from "@/config/dashboard.json";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

import { useForm } from 'react-hook-form';
import useSubmit from "@/hooks/useSubmit";

function NewPost() {
  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = useSubmit('/api/posts/create');

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <CardHeader>
            <CardTitle>{Dashboard.Create.Title}</CardTitle>
            <CardDescription>{Dashboard.Create.Subtitle}</CardDescription>
          </CardHeader>
          <CardContent className="capitalize flex flex-col gap-3">
            <Label className="capitalize" htmlFor="name">Name</Label>
            <Input {...register("name")} type="text" id="name" placeholder="Enter your pet name here..." />

            <Label className="capitalize" htmlFor="age">Age</Label>
            <Input {...register("age")} type="number" id="age" placeholder="Enter your pet's age here..." />

            <Label className="capitalize" htmlFor="breed">Breed</Label>
            <Input {...register("breed")} type="text" id="breed" placeholder="Enter your pet's breed here..." />

            <Label className="capitalize" htmlFor="species">Species</Label>
            <Input {...register("species")} type="text" id="species" placeholder="Enter your pet's species here..." />

            <Label className="capitalize" htmlFor="weight">Weight</Label>
            <Input {...register("weight")} type="text" id="weight" placeholder="Enter your pet's weight here..." />

            <Label className="capitalize" htmlFor="vaccinated">Is vaccinated?</Label>
            <Select onValueChange={(value) => setValue("vaccinated", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select yes/not..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">Yes</SelectItem>
                <SelectItem value="no">No</SelectItem>
              </SelectContent>
            </Select>

            <Label className="capitalize" htmlFor="gender">Gender</Label>
            <Select onValueChange={(value) => setValue("gender", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select your pet's gender..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
              </SelectContent>
            </Select>

            <Label htmlFor="description">About</Label>
            <Textarea {...register("description")} id="description" rows="7" placeholder="Enter your description here..."></Textarea>
          </CardContent>
          <CardFooter>
            <Button className="mt-10" type="submit">Submit</Button>
          </CardFooter>
        </Card>
      </form>
    </>
  );
}

export default NewPost;
