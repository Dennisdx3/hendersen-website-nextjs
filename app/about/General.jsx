/* eslint-disable react/no-unescaped-entities */
import "../../app/globals.css";

import Image from "next/image";

export const metadata = {
  title: "Hendersen",
  description: "Hendersen Taxand",
};

const Services = () => {
  return (
    <>
      <div>
        <div>
          <section className="mb-5 ">
            <h2 className="mt-5 mb-10 text-black">About Us</h2>
            <p>
              Hendersen Taxand is established in 2004, which is a leading firm
              specialized in business, financial and tax advisory services in
              China. Hendersen Taxand is the sole member firm of Taxand Group in
              China. Taxand is the world's largest independent tax organization
              with more than 400 tax partners and over 2000 tax advisers in 50
              countries. The partners of Hendersen Taxand had been serving top
              global consulting firms and fortune 500 companies. We are
              committed to provide world-class professional services for global
              and Chinese clients. We are:
            </p>
            <p>
              - Independent: With independence, we provide unbiased advice with
              no-conflict of interests;
            </p>
            <p>
              - Value-focused: We focus on adding value to your business in
              every piece of our services;
            </p>
            <p>- Solution-Oriented: We deliver practical solutions.</p>
            <h2 className="mt-20 mb-10 text-black">Contact US</h2>
            <p className="underline text-black">Shanghai</p>
            <Image
              src="/shanghaiAddress.png"
              width={500}
              height={500}
              alt="Dennis Xu"
              className="shadow-lg shadow-slate-700 rounded-lg mb-10"
            />
            <p>Address: 12th floor, Modern Central Tower, 468 Xinhui Rd.</p>
            <p className="mb-3">Tel: +8621 6447 7878 </p>
            <p>Fax: +8621 6076 1736</p>
            <p className="underline text-black">Beijing</p>
            <Image
              src="/beijingAddress.png"
              width={500}
              height={500}
              alt="Dennis Xu"
              className="shadow-lg shadow-slate-700 rounded-lg mb-10"
            />
            <p>
              1502, Building 16, Soho Tower, No 39 3rd Central East Ring,
              Chaoyang District
            </p>
            <p className="mb-3">Tel: +8610 5869 9338 </p>
            <p>Fax: +8621 5869 9337</p>
            <a href="mailto:admin@hendersen.com" className="underline">
              email: admin@hendersen.com
            </a>
          </section>
        </div>
      </div>
    </>
  );
};

export default Services;
