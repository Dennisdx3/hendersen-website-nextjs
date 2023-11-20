/* eslint-disable react/no-unescaped-entities */
import "../../../app/globals.css";

import Image from "next/image";
import portrait from "../../../public/eve2.jpg";

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
            <h2 className="mt-5 mb-10 text-black text-2xl">Eve Xiao</h2>
            <div className="grid sm:grid-cols-2 mb-20">
              <section>
                <Image
                  src={portrait}
                  alt="Eve Xiao"
                  className="shadow-lg shadow-slate-700 rounded-lg"
                />
              </section>
              <section className=" text-black ml-10 hidden sm:block">
                <p>Partner</p>
                <p></p>
                <div>
                  <a
                    href="mailto:eve.xiao@hendersen.com"
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
                    eve.xiao@hendersen.com
                  </a>
                </div>
              </section>
            </div>
            <p>
              Eve has over 15 years of professional experience in China tax and
              business advisory. During her professional years, Eve has
              developed extensive knowledge with respect to PRC tax and business
              systems, and has been actively involved in tax and business
              consultation projects to multinational companies in various
              industries.
            </p>
            <p>
              In addition to her strong tax background, Eve has been specialized
              in transfer pricing for the last 12 years and has helped many
              multinational companies in different industries dealing with their
              PRC transfer pricing issues. These projects include review of
              transfer pricing models, transfer pricing risk and opportunity
              assessment and planning, audit defense support and negotiation
              with tax authorities, preparation of Chinese transfer pricing
              documentation, advanced pricing arrangement, etc. Eve has built up
              valuable experience in the Chinese transfer pricing practice.
            </p>
            <p>
              Eve Xiao obtained her Bachelor of Laws degree magna cum laude at
              China University of Political Science and Law, majoring in
              economic law.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Services;
