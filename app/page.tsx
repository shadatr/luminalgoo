"use client";
import About from "@/components/about";
import Contact from "@/components/contact";
import Home from "@/components/home";
import Navbar from "@/components/navbar";
import Services from "@/components/services";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

export default function Page() {
  return (
    <div className="h-[3000px]">
      <Provider store={store}>
        <Navbar />
        <Home />
        <About/>
        <Services/>
        <Contact/>
      </Provider>
    </div>
  );
}
