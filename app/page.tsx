"use client";
import Home from "@/components/home";
import Navbar from "@/components/navbar";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

export default function Page() {
  return (
    <div className="h-[3000px]">
      <Provider store={store}>
        <Navbar />
        <Home />
      </Provider>
    </div>
  );
}
