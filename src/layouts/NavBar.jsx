import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import ThemeToggle from '../components/ThemeToggle'
import logo_copade from '../../public/img/copade.png'

const navigation = [
  { name: "INICIO", href: "home" },
  { name: "LISTADO", href: "layersList" },
  { name: "MAPAS", href: "mapa_tematico" },
  // { name: "SCROLL", href: "scrollMotion" },
  // { name: "TEST", href: "test" },
  { name: "PRESENTACION", href: "presentaciones" },
  // { name: "Parallax", href: "scrollParallax" },
  // { name: "Pasos", href: "pasos" },
  // { name: "Vista Simple", href: "vistaSimple" },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      <nav className="azulnqn fixed w-full z-40 top-0 shadow py-4 border-b border-nqn-amarillo ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link
                  key={"copade"}
                  to={"/home"}
                >
                  <img
                    className="h-8 w-8"
                    src={logo_copade}
                    alt="Copade"
                    href=""
                  />
                </Link>
              </div>
              <div className="hidden md:block">

                <div className="ml-10 flex items-baseline space-x-4 amarillonqn">

                  {navigation.map((item) => (
                    <Link

                      key={item.name}
                      to={item.href}
                      className={classNames(
                        item.current
                          ? "amarillonqn dark:amarillonqn"
                          : "amarillonqn dark:amarillonqn hover:animate-pulse",
                        "px-3 py-2 rounded-md text-base font-medium font-bold"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}

                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <ThemeToggle />
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-900 dark:text-white hover:bg-gray-700 hover:text-white",
                    "px-3 py-2 rounded-md text-sm font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </Transition>
      </nav>
    </div>
  );
}

export default NavBar;
