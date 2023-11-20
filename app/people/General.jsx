/* eslint-disable react/no-unescaped-entities */
import "../../app/globals.css";

import Image from "next/image";
import portrait from "../../public/dennis_big.jpg";

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
            <h2 className="mt-5 mb-10 text-black text-2xl">Dennis Xu</h2>
            <div className="grid sm:grid-cols-2 mb-20">
              <section>
                <Image
                  src={portrait}
                  alt="Dennis Xu"
                  className="shadow-lg shadow-slate-700 rounded-lg"
                />
              </section>
              <section className=" text-black ml-10 hidden sm:block">
                <p>Partner</p>
                <p>CPA, Registered Tax Attorney</p>
                <div>
                  <a
                    href="mailto:dennis.xu@hendersen.com"
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
                    dennis.xu@hendersen.com
                  </a>
                </div>
              </section>
            </div>
            <p>
              Dennis Xu is a founding partner of Hendersen Taxand. He has over
              20 years of experience in the consulting field and is a leading
              advisor in the areas of corporate tax, mergers and acquisitions,
              international tax and investment structuring, covering various
              industries. He also gained in-depth knowledge of domestic and
              cross-border investment and business operations via participating
              in a number of private equities, portfolio companies and business
              start-ups.
            </p>
            <p>
              Dennis was graduated from Shanghai International Studies
              University (SISU). He started his professional career in Arthur
              Andersen and PwC, thereafter he worked with General Electric as
              China tax manager. In 2004 he founded Hendersen Consulting, which
              later became the China member firm of Taxand Global. Dennis also
              served as a board member of Taxand Global during year 2008 – 2015
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Services;
