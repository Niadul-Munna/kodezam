import React from "react";

const Team = () => {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Meet our team of expert developers
          </h2>
          <p className="text-gray-600">
            Our team of expert developers are dedicated to providing you with
            the best possible experience. We have a wide range of skills and
            expertise, so you can be sure that your project is in good hands.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-white p-6 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=256&h=256&q=80"
              alt="John Doe"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2">John Doe</h3>
            <p className="text-gray-600">
              John Doe is a full stack developer with over 5 years of
              experience. He is an expert in JavaScript, HTML, CSS, and React.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1533636784-5c15a9e2f5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=256&h=256&q=80"
              alt="Jane Doe"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Jane Doe</h3>
            <p className="text-gray-600">
              Jane Doe is a front-end developer with over 3 years of experience.
              She is an expert in HTML, CSS, and React.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1533820748945-0cf7e9a6bf39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=256&h=256&q=80"
              alt="Bob Smith"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Bob Smith</h3>
            <p className="text-gray-600">
              Bob Smith is a back-end developer with over 5 years of experience.
              He is an expert in JavaScript, Node.js, and Express.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
