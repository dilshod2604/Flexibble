import React from "react";
import scss from "./Navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import { NavLinks } from "@/constants";
import AuthProvider from "../AuthProvider/AuthProvider";
const Navbar = () => {
  const session = {};
  return (
    <nav className={scss.Navbar}>
      <div className="container">
        <div className={scss.nav_content}>
          <Link href="/" className={scss.logo}>
            <Image
              src={logo}
              alt="Logo"
              width={150}
              height={30}
              className={scss.logo_image}
            />
          </Link>
          <ul className={scss.nav_list}>
            {NavLinks.map((link) => (
              <li key={link.key} className={scss.nav_items}>
                <Link href={link.href} className={scss.nav_links}>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
          <div className={scss.auth}>
            {session ? (
              <div className={scss.profile}>
                userPhoto
                <Link href="/create-project">Share work</Link>
              </div>
            ) : (
              <AuthProvider />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
