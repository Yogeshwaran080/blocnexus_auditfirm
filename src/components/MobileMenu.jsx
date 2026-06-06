// src/components/MobileMenu.jsx

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  ChevronRight,
  X,
} from "lucide-react";

export default function MobileMenu({
  isOpen,
  onClose,
  services,
  logo,
}) {
  const [servicesOpen, setServicesOpen] =
    useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () =>
      window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* BACKDROP */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="
              fixed inset-0 z-[90]
              bg-black/70
              backdrop-blur-sm
              lg:hidden
            "
          />

          {/* DRAWER */}

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              damping: 28,
              stiffness: 260,
            }}
            className="
              fixed top-0 right-0 z-[100]
              h-screen
              w-[85%]
              max-w-[380px]
              bg-[#060606]
              border-l border-white/10
              shadow-2xl
              lg:hidden
              overflow-y-auto
            "
          >
            {/* HEADER */}

            <div className="flex items-center justify-between p-5 border-b border-white/10">
              <a
                href="/"
                className="flex items-center gap-2"
              >
                <img
                  src={logo}
                  alt="BlocNexus"
                  className="h-[52px] w-[52px] object-contain"
                />

                <span
                  className="
                    text-[20px]
                    tracking-[0.12em]
                    uppercase
                    text-[#C7CDD8]
                    font-light
                  "
                >
                  BlocNexus
                </span>
              </a>

              <button
                onClick={onClose}
                className="
                  rounded-lg
                  p-2
                  hover:bg-white/10
                  transition
                "
              >
                <X
                  size={24}
                  className="text-white"
                />
              </button>
            </div>

            {/* NAV */}

            <div className="p-5">
              <ul className="space-y-2">

                {/* SERVICES */}

                <li>
                  <button
                    onClick={() =>
                      setServicesOpen(!servicesOpen)
                    }
                    className="
                      w-full
                      flex
                      items-center
                      justify-between
                      py-4
                      text-white
                      text-[16px]
                      font-medium
                      border-b
                      border-white/5
                    "
                  >
                    Services

                    {servicesOpen ? (
                      <ChevronDown size={18} />
                    ) : (
                      <ChevronRight size={18} />
                    )}
                  </button>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        className="
                          overflow-hidden
                          pl-4
                        "
                      >
                        {services.map(
                          (item, index) => {
                            const Icon =
                              item.icon;

                            return (
                              <a
                                key={index}
                                href={item.href}
                                onClick={onClose}
                                className="
                                  flex
                                  gap-3
                                  py-4
                                  border-b
                                  border-white/5
                                "
                              >
                                <div
                                  className="
                                    p-2
                                    rounded-lg
                                    bg-blue-500/10
                                    border
                                    border-blue-500/20
                                  "
                                >
                                  <Icon
                                    size={16}
                                    className="text-blue-400"
                                  />
                                </div>

                                <div>
                                  <h4
                                    className="
                                      text-white
                                      text-sm
                                      font-medium
                                    "
                                  >
                                    {item.title}
                                  </h4>

                                  <p
                                    className="
                                      text-xs
                                      text-[#8B95A7]
                                      mt-1
                                    "
                                  >
                                    {item.desc}
                                  </p>
                                </div>
                              </a>
                            );
                          }
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>

                <li>
                  <a
                    href="#about"
                    onClick={onClose}
                    className="
                      block
                      py-4
                      text-white
                      text-[16px]
                      border-b
                      border-white/5
                    "
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    href="#audits"
                    onClick={onClose}
                    className="
                      block
                      py-4
                      text-white
                      text-[16px]
                      border-b
                      border-white/5
                    "
                  >
                    Audits
                  </a>
                </li>

                <li>
                  <a
                    href="#blogs"
                    onClick={onClose}
                    className="
                      block
                      py-4
                      text-white
                      text-[16px]
                      border-b
                      border-white/5
                    "
                  >
                    Blogs
                  </a>
                </li>

                <li>
                  <a
                    href="#contact"
                    onClick={onClose}
                    className="
                      block
                      py-4
                      text-white
                      text-[16px]
                      border-b
                      border-white/5
                    "
                  >
                    Contact
                  </a>
                </li>
              </ul>

              {/* CTA */}

              <a
                href="#contact"
                onClick={onClose}
                className="
                  mt-8
                  flex
                  items-center
                  justify-center
                  rounded-xl
                  bg-blue-600
                  py-4
                  text-white
                  font-semibold
                  hover:bg-blue-700
                  transition
                "
              >
                Request a Quote
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}