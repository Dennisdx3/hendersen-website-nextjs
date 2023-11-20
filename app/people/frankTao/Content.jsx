/* eslint-disable react/no-unescaped-entities */
import "../../../app/globals.css";

import Image from "next/image";
import portrait from "../../../public/frank.jpg";

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
            <h2 className="mt-5 mb-10 text-black text-2xl">Frank Tao</h2>
            <div className="grid sm:grid-cols-2 mb-20">
              <section>
                <Image
                  src={portrait}
                  alt="Frank Tao"
                  className="shadow-lg shadow-slate-700 rounded-lg"
                />
              </section>
              <section className=" text-black ml-10 hidden sm:block">
                <p>Partner</p>
                <p>CPA</p>
                <div>
                  <a
                    href="mailto:frank.tao@hendersen.com"
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
                    frank.tao@hendersen.com
                  </a>
                </div>
              </section>
            </div>
            <p>
              Frank Tao was graduated as Bachelor of Science from Shanghai Jiao
              Tong University in 1999, his major is International Foreign Trade.
              After graduation, he joined the Tax and Legal Service department
              of PricewaterhouseCoopers Shanghai office. He became a member of
              Hendersen Taxand in June 2011, before that, he has also worked for
              DezanShira & Associates Shanghai office as the leader of Business
              Advisory department.
            </p>
            <p>
              During more than 19 years’ professional consultant career, Frank
              has worked on projects as international tax planning, supply
              chain, TP, due diligence, M&A, compliance, labor, statutory audit,
              foreign direct investment, market entry strategy and etc. for many
              fortune MNCs, for e.g., Bayer, Krupp Stainless, FMC, DANONE,
              PepsiCo, Tyco, Rolex, GE, Pernod Ricard, Alstom. His comprehensive
              professional experience covers tax, accounting, finance, business
              operation and legal consulting fields. Accordingly, he is capable
              of providing help to clients more than a routine tax advisor, by
              evaluating various risks/benefits from more different
              perspectives.
            </p>
            <p>
              For the industry sectors, Frank is familiar with the relevant PRC
              implications for companies in machinery, pharmaceutics, food and
              beverage, cosmetics, franchising, logistics, automobile, retail,
              freight forwarding, testing, software development, energy,
              agriculture and etc.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Services;
