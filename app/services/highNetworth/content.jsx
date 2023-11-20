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
            <h3 className="text-black underline">High Net Worth</h3>

            <p>
              We help our high net worth individuals and families on their
              personal tax position under the complicated tax and foreign
              exchange environment. Our team offers professional advice on a
              solutions oriented approach, based on experience and specifically
              taking into account cross border situations. We can assist you
              with:
            </p>
            <ul>
              <li>
                International structuring by using various legal vehicles
                (trusts, foundations, holding companies)
              </li>
              <li>
                The ODI reporting with the China Foreign Exchange authority
              </li>
              <li>
                Advising on international tax planning opportunities and exit
                taxes
              </li>
              <li>Cross-border individual investment structuring</li>
              <li>
                Optimize the transfer of businesses on foreign exchange concerns
                and tax exposures
              </li>
              <li>Issue tax opinion letter</li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};

export default Services;
