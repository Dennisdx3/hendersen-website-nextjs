/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
const url = "http://127.0.0.1:3000/api/handleJSON";
const fs = require("fs");

async function Cards() {
  const response = await fetch(url, {
    next: {
      revalidate: 30,
    },
  });
  const cards = await response.json();

  cards.reverse();

  return (
    <>
      {cards.map((card) => (
        <div key={card.id} className="">
          <Link href={`/trends/${card.id}`}>
            <div>
              <h3 className="text-sm pr-10 mb-5 hover:text-black">
                {card.date}
              </h3>
            </div>
            <div className="mr-10">
              <img
                src={`/images/${card.image_link}`}
                alt={card.title}
                className="w-full h-60 sm:h-60 object-cover shadow-lg shadow-slate-500 hover:shadow-slate-700 rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-sm pr-10 mb-5 mt-8 underline hover:text-black">
                {card.title}
              </h3>
            </div>
            <h3 className="text-sm pr-10 hover:text-black">
              {fs
                .readFileSync(`./public/text/${card.html_link}`)
                .toString()
                .replace(/<[^>]+>/g, "")
                .slice(0, 100)}
              ......
            </h3>
          </Link>
        </div>
      ))}
    </>
  );
}
export default Cards;
