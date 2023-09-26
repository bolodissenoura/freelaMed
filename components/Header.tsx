import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header
      id="header"
      className="bg-white rounded-b-3xl flex justify-center fixed w-full"
      style={{ zIndex: 99 }}>
      <div className="header-container relative py-4 justify-between md:justify-start flex items-center">
        <div className="flex items-center mr-8">
          <Link href="/" className="logo">
            <Image
              src="/icons/freelamed-logo-dark.png"
              alt="logo"
              className="h-6 w-auto"
              height="25"
              width="100"
              priority
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
