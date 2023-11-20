/* eslint-disable @next/next/no-img-element */

import "../../globals.css";
import Navbar from "../../components/Navbar";
import Foot from "../../components/Foot";
import Image from "next/image";
const fs = require("fs");
// import parse from "html-react-parser";

// components
import background from "../../../public/galaxy.png";
import ServicesList from "../../components/ServicesList";

export const metadata = {
  title: "Hendersen",
  description: "Hendersen Taxand",
};

const Services = () => {
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
              <ServicesList />
            </div>
            <div className="md:col-span-2">
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

export default Services;
