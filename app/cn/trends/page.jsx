/* eslint-disable react/no-unescaped-entities */

import "../../globals.css";

import Image from "next/image";
import background from "../../../public/forrest.png";

// components
import Navbar from "../../components/NavbarCN";
import Foot from "../../components/FootCN";

import Cards from "../../cards/cards";

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
          <a href="/cn" className="text-center underline">
            返回
          </a>
        </span>
      </p>
      <Foot />
    </div>
  );
}

export default trends;
