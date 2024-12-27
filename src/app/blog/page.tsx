import React from "react";

const Blog = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Our Blog</h1>
      <div className="space-y-8">
        {[
          {
            title: "Understanding React Hooks",
            date: "November 1, 2023",
            excerpt:
              "React Hooks are functions that let you use state and other React features without writing a class.",
          },
          {
            title: "Getting Started with Next.js",
            date: "October 15, 2023",
            excerpt:
              "Next.js is a popular React framework for building server-rendered applications.",
          },
          {
            title: "Introduction to Tailwind CSS",
            date: "October 1, 2023",
            excerpt:
              "Tailwind CSS is a utility-first CSS framework for creating custom designs without writing any CSS.",
          },
        ].map((post, index) => (
          <div key={index} className="border-b pb-4">
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="text-gray-500">{post.date}</p>
            <p className="mt-2">{post.excerpt}</p>
            <a
              href="#"
              className="text-primary hover:underline mt-3 inline-block"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
