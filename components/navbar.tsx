'use client'
import { useEffect, useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import Link from "next/link";
import { selectIsEnglish, toggleEnglish } from "@/redux/language";
import { useDispatch, useSelector } from "react-redux";

const menuItems = [
  { title: "Home", link: "/" },
  { title: "About Us", link: "/#about-us" },
  { title: "Services", link: "/#services" },
  { title: "Contact us", link: "/#contact-us" },
];

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isEnglish = useSelector(selectIsEnglish);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleEnglish());
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex w-screen">
      <div
        className={` transtion-bg z-40 fixed w-screen lg:flex sm:hidden items-center p-8 text-xsm justify-between  ${
          scroll ? "bg-aquaMarina text-blue" : "text-aquaMarina"
        }`}
      >
        <div className="text-secondary text-md font-black">LUMIALGOO</div>
        <span className="flex w-[600px] justify-between items-center font-bold">
          <motion.a
            whileHover={{ x: 5 }}
            transition={{ duration: 0.5 }}
            className={`transtion-text ${scroll? "hover:text-blue":"hover:text-aquaMarina"}`}
            href="/"
          >
            Home
          </motion.a>
          <motion.a
            whileHover={{ x: 5 }}
            transition={{ duration: 0.5 }}
            className={`transtion-text ${scroll? "hover:text-blue":"hover:text-aquaMarina"}`}
            href="#about-us"
          >
            About Us
          </motion.a>
          <motion.a
            whileHover={{ x: 5 }}
            transition={{ duration: 0.5 }}
            className={`transtion-text ${scroll? "hover:text-blue":"hover:text-aquaMarina"}`}
            href="#services"
          >
            Services
          </motion.a>
          <motion.a
            whileHover={{ x: 5 }}
            transition={{ duration: 0.5 }}
            className={`transtion-text ${scroll? "hover:text-blue":"hover:text-aquaMarina"}`}
            href="#contact-us"
          >
            Contact Us
          </motion.a>
        </span>
     <div className="text-secondary font-black text-md cursor-pointer" onClick={handleToggle}>{isEnglish?"TR":"EN"}</div>
      </div>
      <div className=" fixed z-50 lg:hidden text-aquaMarina ">
        {!isMenuOpen && (
          <div className="flex justify-between items-center">
            <IoMenu
              size={50}
              className="fixed top-0 bg-babyBlue rounded-full p-2 m-2 transition-opacity duration-300 hover:opacity-80"
              onClick={() => setIsMenuOpen(true)}
            />
            <div className=" fixed top-0  right-0 m-4 font-black text-md cursor-pointer" onClick={handleToggle}>{isEnglish?"TR":"EN"}</div>

          </div>
        )}
        {isMenuOpen && (
          <div
            className={`fixed w-screen h-screen bg-secondary transition-opacity duration-300 bg-darkBlue
            `}
          >
            <IoClose
              className="fixed m-2 right-0 transition-opacity duration-300 hover:opacity-80"
              size={50}
              onClick={() => setIsMenuOpen(false)}
            />
            <span className="flex h-[75vh] gap-5 flex-col justify-center items-center font-black text-md">
              {menuItems.map((item,index) => (
                <Link
                key={index}
                  onClick={() => setIsMenuOpen(false)}
                  href={item.link}
                  className="transition-opacity duration-300 hover:opacity-80"
                >
                  {item.title}
                </Link>
              ))}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;