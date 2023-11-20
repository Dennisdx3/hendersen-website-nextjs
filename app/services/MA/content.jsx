/* eslint-disable react/no-unescaped-entities */
import "../../../app/globals.css";
import { Inter } from "next/font/google";

const rubik = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hendersen",
  description: "Hendersen Taxand",
};

const Services = () => {
  return (
    <>
      <div>
        <div>
          <section className="mt-5 ">
            <h3 className="text-black underline">Merger & Acquisition</h3>
            <h3>Common Issues</h3>
            <p>
              The following issues are commonly encountered by Multinational
              companies when doing a M&A transaction in China:
            </p>
            <ul>
              <li>
                Lack of transparency in the entire market, difficult to get
                access to potential target's information
              </li>
              <li>
                Culture difference exists. If not using the appropriate
                language, the deal may be killed from the very beginning
              </li>
              <li>
                The target's financial information is not sufficient to work-out
                the financial model or business valuation
              </li>
              <li>
                The accounting principle used by the target is much different
                from IAS/US GAAP
              </li>
              <li>
                Target uses two set of books, one for management reporting, one
                for tax reporting
              </li>
              <li>Need to take over a huge labor force from the target</li>
              <li>
                The statutory valuation for state-owned companies may generates
                very different results from business valuation
              </li>
              <li>
                Target is overall lack of awareness of environmental, health and
                safety issues
              </li>
              <li>
                The transfer pricing between the target and its related parties
                is a mess
              </li>
              <li>
                The regulatory requirement in certain restricted industries is
                complex
              </li>
            </ul>

            <p>The list goes on. </p>
            <h3 className="mt-20">Our Services</h3>
            <p>
              We provide a one stop shop for our clients to successfully
              conclude a deal in China.
            </p>
            <h4>Entry Strategy</h4>
            <ul>
              <li>Market studies</li>
              <li>Industry competitive analysis</li>
              <li>Benchmarking analysis</li>
              <li>Regulatory environment analysis</li>
              <li>Tax environment study</li>
              <li>Location study</li>
              <li>Supplier assessment</li>
            </ul>

            <h4 className="mt-10">Target Identification</h4>
            <ul>
              <li>Background Check</li>
              <li>High level financial/tax data review</li>
              <li>Comparative analysis of potential targets</li>
              <li>Key risk evaluation</li>
              <li>Pre Due-diligence negotiation support</li>
              <li>Formation of preliminary bid structure</li>
            </ul>
            <h4 className="mt-10">Due Diligence</h4>
            <ul>
              <li>Financial Due Diligence</li>
              <li>Tax Due Diligence</li>
              <li>HR Due Diligence</li>
              <li>Business valuation</li>
              <li>Statutory valuation</li>
              <li>Design deal structure</li>
              <li>Design bidding structure</li>
              <li>Negotiation support</li>
            </ul>
            <h4 className="mt-10">Closing/Post Deal</h4>
            <ul>
              <li>Develop integration plan</li>
              <li>Government approval facilitation</li>
              <li>Tax incentive negotiation</li>
              <li>Work-out the transfer pricing policy</li>
              <li>Liquidation support</li>
              <li>Assistance in implementation of integration plan</li>
              <li>
                Project Management/Merger and Acquisition Framework ("MAF")
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};

export default Services;
