/* eslint-disable @next/next/no-img-element */

import "../../../app/globals.css";

import Image from "next/image";
const fs = require("fs");
// import parse from "html-react-parser";

// components
import background from "../../../public/sea_sunset.png";
import PeopleList from "../../components/PeopleList.jsx";
import Content from "./Content.jsx";
import Navbar from "../../components/Navbar";
import Foot from "../../components/Foot";
export const metadata = {
  title: "Hendersen",
  description: "Hendersen Taxand",
};

const People = () => {
  return (
    <>
      <Navbar />
      <div>
        <Image
          src={background}
          alt="background"
          className="object-cover w-screen shadow-lg shadow-slate-700"
          placeholder="blur"
        />

        <main>
          <section className="mt-15 grid lg:grid-cols-3">
            <div className="hidden lg:block">
              <PeopleList />
            </div>
            <div className="md:col-span-2">
              <Content />
              <p>
                <span className="grid grid-cols-1">
                  <a href="/" className="text-center underline">
                    BACK
                  </a>
                </span>
              </p>
            </div>
          </section>
        </main>
      </div>
      <Foot />
    </>
  );
};

export default People;
