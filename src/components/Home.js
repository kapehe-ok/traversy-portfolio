import React from "react";
import image from "../monstera-leaf.jpg";

export default function Home() {
  return (
    <div>
      <img
        src={image}
        alt="Monstera Leaves"
        className="absolute object-cover w-full h-full"
      />
      <div className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1
          className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug"
          style={{ fontSize: "150px" }}
        >
          Aloha. I'm Kapehe.
        </h1>
      </div>
    </div>
  );
}