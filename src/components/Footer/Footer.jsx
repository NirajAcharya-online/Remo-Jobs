import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="flex justify-center items-center">
      <p className="max-w-5/6 text-xs text-center ">
        Job listings displayed on this site are sourced from Remotive. We use
        the Remotive API to bring you remote job opportunities. For the full
        list of jobs and to support the platform, please visit
        <span className="ml-1 text-blue-500">
          <a
            href="https://remotive.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Remotive's job board
          </a>
        </span>
      </p>
    </footer>
  );
}

export default Footer;
