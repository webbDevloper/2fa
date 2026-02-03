  "use client"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Features from "./components/Features"
import VideoSection from "./components/VideoSection"
import Stats from "./components/Stats"
import CTA from "./components/CTA"
import Footer from "./components/Footer"
import Security from "./components/Security"

export default function App() {
  return (
    <main className="identa-main">
      <Header />
      <Hero />
      <Stats />
      <Features />
      <VideoSection />
      <Security />
      <CTA />
      <Footer />
    </main>
  )
}
