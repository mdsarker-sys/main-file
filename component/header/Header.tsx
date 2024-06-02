"use client"
import Link from "next/link";
import React from "react";
import NavigationSection from "../navigation/NavigationSection";
import { useCafeuContext } from "@/context/CafeuContext";

interface HeaderProps {
  style: string;
}

const Header: React.FC<HeaderProps> = ({style}) => {
    const {
      isHeaderFixed,
      openSearchbarModal,
      openSidebar
    } = useCafeuContext()
    
  return (
    <header>
      <div className={`header ${style} ${isHeaderFixed? 'navbar-fixed':''}`}>
        <div className="container">
          <div className="header-inner">
            <div className="logo">
              <Link href="/">
                <img
                  src="/img/logo/logo.png"
                  alt="Logo not found"
                  className="logo-img"
                />
              </Link>
            </div>
            <div className="header-right">
              <div className="header-menu d-none d-lg-block">
                <NavigationSection/>
              </div>
              <div className="header-right-search-phone d-none d-lg-block ml-35">
                <a className="header-search" id="search" role="button" onClick={openSearchbarModal}>
                  <span className="icofont-search-1"></span>
                </a>
                <Link href="tel:+880123456789" className="header-phone">
                  <img
                    src="/img/icon/call.png"
                    alt="Image not found"
                    className="contact-icon"
                  />{" "}
                  +880 123 456 789
                </Link>
              </div>
              <div className="d-lg-none dr-navbar-mobile-sign side-toggle">
                <div className="dr-navbar-sign menu-tab" role="button" onClick={openSidebar}>
                  <span className="dr-line-1"></span>
                  <span className="dr-line-2"></span>
                  <span className="dr-line-3"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
