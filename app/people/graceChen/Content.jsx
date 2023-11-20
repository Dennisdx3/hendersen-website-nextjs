/* eslint-disable react/no-unescaped-entities */
import "../../../app/globals.css";

import Image from "next/image";
import portrait from "../../../public/grace.jpg";

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
            <h2 className="mt-5 mb-10 text-black text-2xl">Grace Chen</h2>
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
                <p>CPA, CIMA</p>
                <div>
                  <a
                    href="mailto:grace.chen@hendersen.com"
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
                    grace.chenu@hendersen.com
                  </a>
                </div>
              </section>
            </div>
            <p>
              Grace graduated from Fu Dan University with Bachelor degree of
              economics and started her professional career in Audit and
              Business Advisory division of Arthur Andersen (“AA”) Shanghai,
              where she won outstanding performance awards for consecutive
              years.
            </p>
            <p>
              During her professional experience, Grace has worked with a lot of
              major global and domestic corporate clients including GM， GE
              Advanced Material, UPS, Gates Nitta, NDK, UAES, China Unicom,
              Toppan Printing, Shanghai Power Bureau, Shen Yang Heat and Power
              Plant, etc.
            </p>
            <p>
              In January 2001, she joined Electronic Data System and then Delphi
              Packard Electric to provide internal financial support to
              management, from both the view of finance and management control
              level. Upon her support, the project managers’ performance ranks
              high in Pacific Region. Even in the hard year of the company, she
              was awarded with Special Contribution Award. Currently, Grace is
              with Hendersen Consulting as Partner for Finance area.
            </p>
            <p>
              Grace is quite experienced in following areas: Accounting System
              Set-up, Internal Control Set-up and Procedure Monitor, Management
              Reporting Structure, Capital Expenditure Monitor, Payroll and
              welfare analysis, Accounting Compliance, ERP system
              implementation, Project review and control, etc. Major Clients
              are:2007Speical Olympic Games Opening Ceremony, JP
              Morgan、Haartz、PVS、 GE Plastics Shanghai Entity, Cascade
              Microtech China、EXPO Madrid Pavilion, Virgin Airlines、Sheraton
              Pacific Hotel, Safco, Quest Diagnostics, Royal Madrid Club, etc.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Services;
