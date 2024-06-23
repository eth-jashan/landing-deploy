import React, { useEffect, useRef } from "react";
import Image from 'next/image'; // Import Image component
import "../styles/style.css";

export default function Header() {
  return (
    <>
      <section
        className="smart-scroll"
        style={{ background: "rgba(0,0,0,0" }}
      >
        <div className="container-fluid">
          <nav className="navbar navbar-expand-md navbar-dark">
            <a className="navbar-brand heading-black" href="#">
              <div className="name">XADE</div>
            </a>
            <button
              className="navbar-toggler navbar-toggler-right border-0"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ background: "transparent" }}
              onClick={() => {
                const navbarCollapse =
                  document.getElementById("navbarCollapse");
                navbarCollapse.classList.toggle("show");
              }}
            >
              <Image
                src="/Media/menu.png"
                alt="menu icon"
                width={24}
                height={24}
              />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav ml-auto desktop-arrangement-navbar">
                <div>
                  <li className="nav-item">
                    <a className="nav-link page-scroll" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://docs.xade.finance/"
                      className="nav-link page-scroll"
                    >
                      Docs
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://app.komet.me/nfts/Xade_Explorers/346"
                      className="nav-link page-scroll"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Explorers
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link page-scroll"
                      href="https://medium.com/@XadeFinance/what-is-xade-and-why-do-you-need-it-b483f46ba5a1"
                    >
                      Blog
                    </a>
                  </li>
                </div>
                <div>
                  <li className="Community">
                    <a
                      className="nav-link page-scroll"
                      target="_blank"
                      href="https://trade.xade.finance"
                      rel="noreferrer"
                    >
                      <div className="tack" style={{ fontFamily: "Regular" }}>
                        Xade Pro
                      </div>
                    </a>
                  </li>
                  &nbsp; &nbsp;
                  <li className="webapp" style={{ fontFamily: "Regular" }}>
                    <a
                      className="nav-link page-scroll"
                      target="_blank"
                      href="https://bit.ly/xadefinance"
                      rel="noreferrer"
                    >
                      <div className="greytack">Mobile App</div>
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
}
