/* eslint-disable @next/next/no-img-element */

import "../../../globals.css";

import Image from "next/image";
const fs = require("fs");

// components
import background from "../../../../public/forrest.png";
import Cards from "../../../trends/trends";
import Navbar from "../../../components/NavbarCN";
import Foot from "../../../components/FootCN";

export const metadata = {
  title: "Hendersen",
  description: "Hendersen Taxand",
};

export const dynamicParams = true;

const url = "http://127.0.0.1:3000/api/handleJSON/";

const cardDetails = async ({ params }) => {
  // const card = await getCard(params.id);
  const res = await fetch(url, {
    next: {
      revalidate: 20,
    },
  });

  const cards = await res.json();

  const cardx = cards.filter((x) => x.id === params.id);

  const card = cardx[0];

  const text = fs.readFileSync(`./public/text/${card.html_link}`).toString();

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
          <section className="mt-20 grid lg:grid-cols-3">
            <div className="hidden lg:block">
              <Cards />
            </div>
            <article className="md:col-span-2 ml-10">
              <p className="text-xl text-black">{card.title}</p>
              <p>{card.date}</p>
              <p>
                <img
                  src={`/images/${card.image_link}`}
                  alt={card.title}
                  className="shadow-lg shadow-slate-700 rounded-lg mb-10"
                />
              </p>

              <div dangerouslySetInnerHTML={{ __html: text }} />

              <p>
                <span className="grid grid-cols-1">
                  <a href="/cn/trends" className="text-center underline mt-10">
                    返回
                  </a>
                </span>
              </p>
            </article>
          </section>
        </main>
      </div>
      <Foot />
    </>
  );
};

export default cardDetails;
