import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <div className="bg-red-600">
      <div className="container mx-auto flex justify-between">
        <div className="flex">
          <h2>
            <NavLink
              to="/"
              exact
              activeClassName="text-white"
              className="inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-white text-4xl font-bold cursive tracking-widest"
            >
              Kapehe
            </NavLink>
          </h2>
          <NavLink
            to="/content"
            activeClassName="text-red-100 bg-red-700"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-red-100"
          >
            Content
          </NavLink>
          <NavLink
            to="/projects"
            activeClassName="text-red-100 bg-red-700"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-red-100"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-red-100 bg-red-700"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-red-100"
          >
            About Me!
          </NavLink>
        </div>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://twitter.com/kapehe_ok"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://youtube.com/c/kapehe"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://linkedin.com/in/kapehe"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </div>
  );
}
