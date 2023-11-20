import "../../app/globals.css";

import Image from "next/image";

import background from "../../public/moon.png";
import General from "./General.jsx";
import Navbar from "../components/Navbar";
import Foot from "../components/Foot";

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

        <main className="pr-20">
          <section className="mt-15 grid ">
            <div className="md:col-span-2">
              <General />
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
