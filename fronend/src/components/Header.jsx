import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import { FaShoppingCart } from 'react-icons/fa';
import { YourCart } from './cart/YourCart'

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Productos", href: "/products" },
  { name: "Conócenos", href: "/about" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  }

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="https://flowbite.com/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Flowbite
          </span>
        </Link>
        <div
          className={`${isMenuOpen ? 'block' : 'hidden'
            } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navigation.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.href}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  aria-current={index === 0 ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <button onClick={toggleMenu}>
            <FaShoppingCart className="w-6 h-6" />
          </button>

          <Transition
            show={isMenuOpen}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className={`fixed z-10 ${isMenuOpen ? 'top-0 right-0' : 'right-0'} mt-2 mr-2 md:w-auto p-4`}
            // {`fixed z-10 ${isMenuOpen ? 'top-0' : 'bottom-0'} mt-2 ml-2  md:w-auto p-4`}
              ref={menuRef}
            >
              <YourCart />
            </div>
          </Transition>
          {isMenuOpen && (
            <div
              className="fixed inset-0 z-0"
              onClick={handleClickOutside}
            />
          )}
        </div>

      </div>
    </nav>
  );
};