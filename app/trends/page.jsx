/* eslint-disable react/no-unescaped-entities */

import "../../app/globals.css";

import Image from "next/image";
import background from "../../public/forrest.png";

// components
import Navbar from "../components/Navbar";
import Foot from "../components/Foot";

import Cards from "../cards/cards";

export const metadata = {
  title: "Hendersen",
  description: "Hendersen Taxand",
};

function trends() {
  return (
    <div>
      <Navbar />
      <Image
        src={background}
        alt="background"
        className="object-cover w-screen shadow-lg shadow-slate-700"
        placeholder="blur"
      />
      <main>
        <section className="mt-20 grid md:grid-cols-3">
          <Cards />
        </section>
      </main>
      <p>
        <span className="grid grid-cols-1">
          <a href="/" className="text-center underline">
            BACK
          </a>
        </span>
      </p>
      <Foot />
    </div>
  );
}

export default trends;
