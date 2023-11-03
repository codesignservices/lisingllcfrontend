import React from "react";
import Header from "./components/header";
import Banner from "./components/banner";
import AboutUs from "./components/about";
import Services from "./components/services";
import Features from "./components/features";
import Testimonials from "./components/testimonial";
import ContactForm from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <div className="bg-black">
      <header className="App-header">
        <Header />
        <Banner />
        <AboutUs />
        <Services />
        <Features />
        <Testimonials />
        <ContactForm />
        <Footer />
      </header>
    </div>
  );
}

export default App;
