/* eslint-disable @next/next/no-img-element */

import "../../globals.css";
import Navbar from "../../components/NavbarCN";
import Foot from "../../components/FootCN";
import Image from "next/image";
const fs = require("fs");
// import parse from "html-react-parser";

// components
import background from "../../../public/sea_sunset.png";
import PeopleList from "../../components/PeopleListCN";
import General from "./General.jsx";

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
              <General />
              <p>
                <span className="grid grid-cols-1">
                  <a href="/" className="text-center underline">
                    返回
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
