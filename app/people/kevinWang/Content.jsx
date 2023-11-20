/* eslint-disable react/no-unescaped-entities */
import "../../../app/globals.css";

import Image from "next/image";
import portrait from "../../../public/kevin.jpg";

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
            <h2 className="mt-5 mb-10 text-black text-2xl">Kevin Wang</h2>
            <div className="grid sm:grid-cols-2 mb-20">
              <section>
                <Image
                  src={portrait}
                  alt="Kevin Wang"
                  className="shadow-lg shadow-slate-700 rounded-lg"
                />
              </section>
              <section className=" text-black ml-10 hidden sm:block">
                <p>Partner</p>
                <p>CPA, Registered Tax Attorney</p>
                <div>
                  <a
                    href="mailto:Kevin.wang@hendersen.com"
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
                    Kevin.wang@hendersen.com
                  </a>
                </div>
              </section>
            </div>
            <p>
              Kevin Wang is the key Chinese member of Taxand’s global
              compensation, equity and employment tax team. Kevin is based in
              Taxand China where he is a corporate tax partner of Hendersen
              Consulting, China’s leading independent firm of tax advisors.
            </p>
            <p>
              Kevin has over 20 years’ experience in local and international
              tax. Prior to joining China’s Taxand practice, Hendersen
              Consulting, as partner in 2005, Kevin worked for a Big 4 firm in
              Shanghai.
            </p>
            <p>
              He has become an expert in all stages of doing business in China:
              planning; setting up various business vehicles; advising clients
              on PRC corporate tax, transfer pricing, customs, labour, foreign
              exchange and regulatory issues; assisting in M&A transactions; and
              advising on the disposal of China investment. Kevin has specific
              experience in the automobile, advertising, banking, insurance,
              software development, semi-conductor, telecommunication,
              transportation, chemistry, pharmaceutical, real estate, hotel
              management, trading, distribution, foreign contractor and general
              manufacturing sectors.
            </p>
            <p>
              In addition to corporate tax work, Kevin also has assisted both
              expatriates and Chinese nationals to design and implement
              tax-efficient packages to minimize individual income tax in China.
              Kevin is a member of the Chinese Institute of Certified Public
              Accountants as well as a PRC Registered Tax Agent.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Services;
