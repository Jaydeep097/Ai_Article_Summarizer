import { logo } from "../assets";
import React from "react";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className=" flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() => window.open("https://github.com/Jaydeep097")}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>
      <h1 className="head_text">
        {" "}
        Summarize Article with <br />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Summize is an open-source article summarizer that simplifies reading by
        condensing long articles into short, clear summaries. It helps users
        quickly grasp essential points without going through the entire text
      </h2>
    </header>
  );
};

export default Hero;
