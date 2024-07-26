import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import ThemeToggle from '../components/ThemeToggle'
import logo_copade from '../../src/img/logo_copade_a.png'

const navigation = [
  { name: "INICIO", href: "home" },
  { name: "SERVICIOS", href: "servicios" },
  { name: "MAPAS", href: "mapa_tematico" },
  { name: "GRÁFICOS", href: "graficos" },
  { name: "PRESENTACION", href: "presentaciones" },
  { name: "CONTACTO", href: "contacto" },

]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation()

  if (location.pathname === "/presentaciones") {
    return null
  }
  else {

    return (
      <div className="font-manrope font-bold">
        {/* <nav className="azulnqn fixed w-full z-40 top-0 shadow py-1 border-b border-nqn-amarillo "> */}
        <nav className="azulnqn fixed w-full z-40 top-0 shadow py-1 ">
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
                            ? "text-nqn-verde dark:amarillonqn"
                            : "text-nqn-amarillo dark:amarillonqn hover:animate-pulse hover:text-nqn-verde",
                          "px-3 py-2 rounded-md"
                        )}
                        aria-current={item.current ? "page" : undefined}
                        {...(item.href === "presentaciones" ? { target: "_blank" } : {})}
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
            <div className="md:hidden " id="mobile-menu">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 0 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center translate-x-0">
                {navigation.map((item) => (
                  <Link
                    onClick={() => setIsOpen(!isOpen)}
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      item.current
                        ? "text-nqn-verde dark:amarillonqn"
                        : "text-nqn-amarillo dark:amarillonqn hover:animate-pulse hover:text-nqn-verde",
                      "px-3 py-2 rounded-md text-sm block"
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
}

export default NavBar;
