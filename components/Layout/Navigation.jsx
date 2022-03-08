import Link from "next/link";
import React, { Fragment, useState, useRef, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { Button } from "..";
import HamBurgerIcon from "@assets/HamBurgerIcon";
import ExitIcon from "@assets/ExitIcon";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalMenu = useRef();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    window.addEventListener("resize", resizeFunction);
    return function cleanup() {
      window.removeEventListener("resize", resizeFunction);
    };
  }, [modalMenu]);

  const resizeFunction = () => {
    if (window.innerWidth >= 1024) {
      closeModal();
    }
  };

  return (
    <>
      <div className="relative py-4 flex w-full px-[23px] lg:px-[135px] justify-between items-center bg-dark-bg ">
        <div className="text-white text-3xl font-bold">Bestman</div>

        <div className="hidden lg:block">
          <ul className="flex space-x-24 flex-1 text-gray-300">
            <li>
              <Link href="/about-me">About</Link>
            </li>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="hidden lg:block">
          <Button variant="outline">Contact</Button>
        </div>

        <div
          className="block h-[40px] w-[40px] lg:hidden border-[1px] border-white border-solid rounded-md p-[0.3rem] cursor-pointer"
          onClick={openModal}
        >
          <HamBurgerIcon />
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="absolute inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
          ref={modalMenu}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="block w-full max-w-[100%] p-3 my-2 mx-auto overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <div className="flex flex-row-reverse">
                  <div
                    className="block h-[40px] w-[40px] lg:hidden border-[1px] border-dark-bg border-solid rounded-md p-[0.3rem] cursor-pointer"
                    onClick={closeModal}
                  >
                    <ExitIcon />
                  </div>
                </div>

                <div className="mt-2 flex flex-col space-y-4">
                  <Link href="/about-me">About</Link>

                  <Link href="/portfolio">Portfolio</Link>

                  <Link href="/blog">Blog</Link>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Navigation;
