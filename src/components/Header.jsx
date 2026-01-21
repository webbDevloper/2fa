"use client"

import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="identa-header sticky-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="navbar-brand fw-bold fs-4">
            {/* <span className="brand-icon">◆</span> */}
            <span className="brand-text">Identa.Ai</span>
          </div>
          <button className="navbar-toggler" type="button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#features">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#security">
                  Security
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#demo">
                  Demo
                </a>
              </li>
              <li className="nav-item">
                <a className="btn btn-cta ms-3" href="#contact">
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
