"use client"

import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import "../App.css"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="identa-header sticky-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg py-3">

          {/* Brand */}
          <a className="navbar-brand fw-bold fs-4 text-white" href="#">
            UniLogin
          </a>

          {/* React Icon Hamburger */}
          <button
            className="navbar-toggler border-0"
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <FaTimes size={24} color="#110808" />
            ) : (
              <FaBars size={24} color="#140505" />
            )}
          </button>

          {/* Nav Links */}
          <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto text-center text-lg-start align-items-lg-center">

              <li className="nav-item">
                <a className="nav-link text-white" href="#features" onClick={handleNavClick}>
                  Features
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-white" href="#security" onClick={handleNavClick}>
                  Security
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-white" href="#demo" onClick={handleNavClick}>
                  Demo
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="btn btn-cta ms-lg-3 mt-3 mt-lg-0"
                  href="#contact"
                  onClick={handleNavClick}
                >
                  Get Started
                </a>
              </li>

            </ul>
          </div>

        </nav>
      </div>
    </header>
  )
}
