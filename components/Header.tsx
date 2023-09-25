import Button, { ButtonVariant } from "@components/Button/Button";
import Nav from "@components/Nav";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header id="header" className="bg-white rounded-b-3xl flex justify-center fixed w-full">
      <div className="header-container relative py-4 justify-between md:justify-start flex items-center">
        <div className="flex items-center mr-8">
          <h1>
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
          </h1>
        </div>
        {/* <Nav /> */}
        {/* <div className="button-container hidden md:flex flex-wrap gap-4 ml-auto">
          <Button
            text="Sign Up"
            link="/sign-up"
            variant={ButtonVariant.primary}
          />
          <Button
            text="Login"
            link="/login"
            variant={ButtonVariant.secondary}
          />
        </div> */}
      </div>
    </header>
  );
};

export default Header;
