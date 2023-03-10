import React from "react";

function FooterSite() {
  return (
    <footer className="p-4 bg-rose-800 shadow md:px-6 md:py-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <a
          href="https://flowbite.com/"
          className="flex items-center mb-4 sm:mb-0"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white font-bebas">
            Flowbite
          </span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-white sm:mb-0 dark:text-gray-400">
          <li>
            <a
              href="https://flowbite.com/"
              className="mr-4 hover:underline md:mr-6 "
            >
              About
            </a>
          </li>
          <li>
            <a
              href="https://flowbite.com/"
              className="mr-4 hover:underline md:mr-6"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="https://flowbite.com/"
              className="mr-4 hover:underline md:mr-6 "
            >
              Licensing
            </a>
          </li>
          <li>
            <a href="https://flowbite.com/" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-white sm:mx-auto lg:my-8" />
      <span className="block text-sm text-white sm:text-center dark:text-gray-400">
        © 3{" "}
        <a href="https://flowbite.com/" className="hover:underline">
          Flowbite™
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
}

export default FooterSite;
