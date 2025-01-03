import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-200 h-96 p-6 mt-10">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <h1 className="font-bold text-4xl">KODEZAM</h1>
            <p className="mt-3 text-sm">
              Kodezam is a platform that allows users to learn, practice and
              showcase their coding skills.
            </p>
          </div>
          <div className="text-center">
            <h1 className="font-bold text-2xl">Contact</h1>
            <p className="mt-3 text-sm">
              Email:{" "}
              <a
                href="mailto:info@kodezam.com"
                className="text-blue-500 hover:underline"
              >
                info@kodezam.com
              </a>
            </p>
            <p className="mt-3 text-sm">
              Phone:{" "}
              <a
                href="tel:+234 813 555 5555"
                className="text-blue-500 hover:underline"
              >
                +234 813 555 5555
              </a>
            </p>
          </div>
          <div className="text-center">
            <h1 className="font-bold text-2xl">Social</h1>
            <p className="mt-3 text-sm">
              <a
                href="https://twitter.com/kodezam"
                className="text-blue-500 hover:underline"
              >
                Twitter
              </a>
              <a
                href="https://github.com/kodezam"
                className="text-blue-500 hover:underline ml-2"
              >
                Github
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
