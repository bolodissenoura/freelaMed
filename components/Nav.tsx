import React, { useRef, useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";

const navigation = [
  { name: "Freelamed", href: "/#" },
];

const Nav = () => {
  const router = useRouter();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <nav className="header-nav text-black/60">
      <div className="container">
        <button
          onClick={() => setIsNavOpen(!isNavOpen)}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-black md:hidden hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-primary-200"
          aria-controls="navbar-dropdown"
          aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <Icon icon="material-symbols:menu-rounded" className="h-6 w-auto" />
        </button>
        <div
          className={` ${
            isNavOpen ? "block" : "hidden"
          } menu w-full md:block md:w-auto absolute left-0 md:relative`}
          id="navbar-default">
          <ul className="my-4 md:my-0 p-4 md:p-0 flex font-medium gap-6 flex-col border border-gray-100 bg-gray-50 md:flex-row md:mt-0 md:font-medium md:border-0 md:bg-white">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  passHref
                  key={item.name}
                  href={item.href}
                  className={` block py-2 pl-3 pr-4 transition-colors duration-300 rounded md:bg-transparent md:text-black md:hover:text-primary-500 md:p-0
                    ${
                      router.pathname === item.href
                        ? "text-white bg-primary-700 "
                        : "text-black"
                    }
                  `}
                  onClick={closeNav}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
