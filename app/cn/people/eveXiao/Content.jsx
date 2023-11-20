/* eslint-disable react/no-unescaped-entities */
import "../../../globals.css";

import Image from "next/image";
import portrait from "../../../../public/eve2.jpg";

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
            <h2 className="mt-5 mb-10 text-black text-2xl">萧静</h2>
            <div className="grid sm:grid-cols-2 mb-20">
              <section>
                <Image
                  src={portrait}
                  alt="Eve Xiao"
                  className="shadow-lg shadow-slate-700 rounded-lg"
                />
              </section>
              <section className=" text-black ml-10 hidden sm:block">
                <p>合伙人</p>
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
              萧静女士在中国税务及商务咨询领域拥有超过十五年的专业经历。在此期间，萧女士积累了中国税务法律法规以及商务处理的丰富经验，并积极参与了涉及各行业的跨国企业在中国税务及商务咨询的项目。
            </p>
            <p>
              特别是在过去的十二年中，萧女士致力于中国转让定价业务的实务操作，包括协助大型跨国企业设计、实施跨境业务架构，并准备相应的支持性文件、协助企业解决转让定价争端及调查以及与中国税务机关沟通、准备中国转让定价同期资料、预约定价安排等。萧女士在中国转让定价领域拥有积极和丰富的实务操作经验。
            </p>
            <p>萧静女士毕业于中国政法大学，取得法学学士学位。</p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Services;
