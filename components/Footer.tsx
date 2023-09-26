import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer-container flex justify-center w-full bg-primary-500 rounded-t-2xl">
      <p className="text-white">
        🛠️ Sendo construido por{" "}
        <Link href="https://twitter.com/daniellimae" target="_blank">
          <span className="text-white bolder-1">@daniellimae</span>{" "}
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
