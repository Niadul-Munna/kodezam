import React from "react";
import { Button } from "@/components/ui/button";

const courses = [
  {
    title: "Web Development",
    description: "Learn to build websites and web applications.",
  },
  {
    title: "Mobile Apps",
    description: "Create mobile apps for iOS and Android.",
  },
  {
    title: "UI/UX Design",
    description: "Design user interfaces and user experiences.",
  },
];

const Course = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {courses.map((course, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
          <p className="text-gray-600 mb-4">{course.description}</p>
          <Button className="bg-blue-500 text-white">Learn More</Button>
        </div>
      ))}
    </div>
  );
};

export default Course;
