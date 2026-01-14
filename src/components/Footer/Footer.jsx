import React from "react";

function Footer() {
  return (
    <footer className="w-full flex p-2 justify-center items-center">
      <p className="max-w-3xl text-xs text-center text-gray-600 leading-snug">
        Job listings displayed on this site are sourced from Remotive. We use
        the Remotive API to bring you remote job opportunities. For the full
        list of jobs and to support the platform, please visit
        <a
          href="https://remotive.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Remotive's job board
        </a>
        .
      </p>
    </footer>
  );
}

export default Footer;
