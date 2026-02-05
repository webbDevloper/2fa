"use client";

import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import VideoSection from "./components/VideoSection";
import Stats from "./components/Stats";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Security from "./components/Security";
import Pricing from "./components/Pricing";

export default function App() {
  return (
    <main className="identa-main">
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <Stats />
              <Features />
              <VideoSection />
              <Security />
              <CTA />
              <Footer />
            </>
          }
        />

        {/* Pricing Page (ONLY Pricing) */}
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </main>
  );
}
