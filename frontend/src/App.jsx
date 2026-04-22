// App.jsx — Root component that assembles all sections
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Programs from "./components/Programs";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import InquiryForm from "./components/InquiryForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      {/* Fixed top navigation */}
      <Navbar />

      {/* Page sections — IDs used for anchor scroll */}
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="programs">
          <Programs />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="contact">
          <InquiryForm />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;