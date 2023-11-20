/* eslint-disable react/no-unescaped-entities */
import "../../../app/globals.css";

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
            <h3 className="text-black underline">Outsourcing</h3>
            <h3>Common Issues</h3>
            <p>
              In today's fast paced business environment, many companies find
              that:
            </p>
            <ul>
              <li>
                Lack of the resources or work load to justify a full-time
                controller;
              </li>
              <li>
                Do not want the responsibility of hiring, training and retaining
                your own financial, tax or other staff;
              </li>
              <li>Vacant period of current controller/mana-ger's leave;</li>
              <li>
                On-site/off-site requirement for the financial, tax or other
                skills and expertise on a regular basis.
              </li>
            </ul>
            <h3 className="mt-20">Our Services</h3>
            <p>
              Accounting outsourcing services - Preparation of general ledger,
              trial balance, monthly financial statements (balance sheet &
              income statement), and daily sales & cash receipts, etc.
            </p>
            <p>
              Payroll outsourcing services - Initial set-up for the payroll
              system for the local employees and monthly payroll services,
              including net pay calculation, pay slip preparation, administering
              the deposit of payroll net of IIT and employee contribution of
              statutory social securities, preparation and filing of the PRC IIT
              returns for employees, etc.
            </p>
            <p>
              Tax compliance services - Assistance in handling various PRC tax
              matters, including invoice management services (application,
              issuance, verification, archiving, etc.), tax calculation and
              filing services, etc.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Services;
