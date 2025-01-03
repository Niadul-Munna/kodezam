import React from "react";

const notFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-400 to-pink-500">
      <h1 className="text-9xl font-bold">404</h1>
      <p className="text-3xl font-semibold">Page not found</p>
      <p className="text-2xl">
        The page you are looking for does not exist or has been removed.
      </p>
      <a
        href="/"
        className="mt-4 px-4 py-2 border-2 border-black rounded-lg hover:bg-black hover:text-white transition-all duration-300"
      >
        Go back home
      </a>
    </div>
  );
};

export default notFound;
