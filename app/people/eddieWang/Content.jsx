/* eslint-disable react/no-unescaped-entities */
import "../../../app/globals.css";

import Image from "next/image";
import portrait from "../../../public/eddie.jpg";

export const metadata = {
  title: "Hendersen",
  description: "Hendersen Taxand",
};

const Services = () => {
  return (
    <>
      <div>
        <div>
          <section className="mb-5">
            <h2 className="mt-5 mb-10 text-black text-2xl">Eddie Wang</h2>
            <div className="grid sm:grid-cols-2 mb-20">
              <section>
                <Image
                  src={portrait}
                  alt="Eddie Wang"
                  className="shadow-lg shadow-slate-700 rounded-lg"
                />
              </section>
              <section className=" text-black ml-10 hidden sm:block">
                <p>Partner</p>
                <p>CFA, CPA, China Registered Tax Agent, Attorney at Law</p>
                <div>
                  <a
                    href="mailto:eddie.wang@hendersen.com"
                    className="flex hover:font-bold"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                    eddie.wang@hendersen.com
                  </a>
                </div>
              </section>
            </div>
            <p>
              Eddie Wang is a co-founder of Hendersen Taxand. He obtained his
              Bachelor of Laws degree magna cum laude at Shanghai Jiao Tong
              University, majoring in economic law. Eddie is now CFA charter
              holder, member of Chinese Institute of Certified Public
              Accountants, China Registered Tax Agent, and Attorney at Law.
            </p>
            <p>
              Eddie started his professional career in Arthur Andersen and
              subsequently joined PwC. In year 2004, Eddie founded Hendersen
              Consulting together with other partners. During his professional
              career, Eddie has built up knowledge with respect to PRC finance,
              tax and regulatory systems. Eddie has extensive experience in
              advising multinational companies to formulate investment
              strategies in China and directed studies that have involved
              restructuring of Chinese operation and establishment of
              appropriate cross-board transaction vehicles.
            </p>
            <p>
              With his professional experience, Eddie provides advisory services
              to multinational companies at both the pre-investment and
              operational stage and assists foreign and domestic investors to
              obtain business preferences and to assure compliance wherever
              possible.
            </p>
            <p>
              On top of business engagements, Eddie has worked with the Shanghai
              Municipal Government in the planning and implementation of the
              “International Procurement Center” and “Regional Headquarter”
              projects of Shanghai.
            </p>
            <p>
              Eddie has authored and published articles in various international
              professional periodicals.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Services;
