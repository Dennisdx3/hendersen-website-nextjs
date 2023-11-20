/* eslint-disable @next/next/no-img-element */

import "../../../globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";
const fs = require("fs");

// components
import background from "../../../../public/sea_sunset.png";
import PeopleList from "../../../components/PeopleListCN.jsx";
import Content from "./Content.jsx";
import Navbar from "../../../components/NavbarCN";
import Foot from "../../../components/FootCN";
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
                  <a href="/cn" className="text-center underline">
                    返回
                  </a>
                </span>
              </p>
            </div>
          </section>
        </main>
        <Foot />
      </div>
    </>
  );
};

export default People;
