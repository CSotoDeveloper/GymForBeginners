import React from "react";
import { FaGithub, FaGlobe, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-6 flex flex-col items-center gap-4">
      <p className="text-center text-sm md:text-base">Contact</p>
      <div className="flex gap-6">
        <a
          href="https://github.com/CSotoDeveloper"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-colors"
        >
<FaGithub size={24} />
</a>
        <a
          href="https://www.linkedin.com/in/carlos-soto-gamez/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-colors"
        >
<FaLinkedin size={24} />
</a>
        <a
          href="https://csotoportfolio.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-colors"
        >

<FaGlobe size={24} />

        </a>
      </div>
      <p className="text-xs text-slate-500 text-center">
        CSotoDeveloper - 2024
      </p>
    </footer>
  );
}
