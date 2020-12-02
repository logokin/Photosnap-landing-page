import React, { useState, useEffect } from "react";
import Link from "next/link";

function header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let body = document.getElementsByTagName("body")[0];

    if (menuOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }

    return (body.style.overflow = scroll);
  }, [menuOpen]);

  function MobileMenu() {
    return (
      <>
        <div className="mobile-menu">
          <ul>
            <li>
              <Link href="/stories">
                <a onClick={() => setMenuOpen(false)}>STORIES</a>
              </Link>
            </li>
            <li>
              <Link href="/features">
                <a onClick={() => setMenuOpen(false)}>FEATURES</a>
              </Link>
            </li>
            <li>
              <Link href="/pricing">
                <a onClick={() => setMenuOpen(false)}>PRICING</a>
              </Link>
            </li>
          </ul>
          <div className="btn primary dark">GET AN INVITE</div>
        </div>
        <div className="close-menu-button" onClick={() => setMenuOpen(false)} />
      </>
    );
  }

  return (
    <div className="header">
      <nav>
        <Link href="/">
          <a>
            <img src="/assets/shared/desktop/logo.svg" alt="Photosnap"></img>
          </a>
        </Link>

        <ul className="nav-links">
          <li>
            <Link href="/stories">
              <a>STORIES</a>
            </Link>
          </li>
          <li>
            <Link href="/features">
              <a>FEATURES</a>
            </Link>
          </li>
          <li>
            <Link href="/pricing">
              <a>PRICING</a>
            </Link>
          </li>
        </ul>
        <div className="btn primary dark">GET AN INVITE</div>

        {!menuOpen ? (
          <div className="menu-button" onClick={() => setMenuOpen(true)}>
            <img src="/assets/shared/mobile/menu.svg" />
          </div>
        ) : (
          <div className="menu-button" onClick={() => setMenuOpen(false)}>
            <img src="/assets/shared/mobile/close.svg" />
          </div>
        )}
      </nav>

      {menuOpen ? <MobileMenu /> : ""}
    </div>
  );
}

export default header;
