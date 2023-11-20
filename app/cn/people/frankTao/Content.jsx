/* eslint-disable react/no-unescaped-entities */
import "../../../globals.css";

import Image from "next/image";
import portrait from "../../../../public/frank.jpg";

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
            <h2 className="mt-5 mb-10 text-black text-2xl">陶刚</h2>
            <div className="grid sm:grid-cols-2 mb-20">
              <section>
                <Image
                  src={portrait}
                  alt="Frank Tao"
                  className="shadow-lg shadow-slate-700 rounded-lg"
                />
              </section>
              <section className=" text-black ml-10 hidden sm:block">
                <p>合伙人</p>
                <p>注册会计师</p>
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
              陶刚先生1999年毕业于上海交通大学，主修国际对外贸易。毕业后，他加入普华永道上海的税务/法律服务部。2011年6月，
              他成为汉森的成员，在这之前，他还曾经领导过协力上海的商务咨询部门。
            </p>
            <p>
              在19多年的专业顾问生涯中，陶先生为许多跨国集团提供过各类服务，包括了国际税务规划、供应链、转移定价、尽职调查、
              合并收购、合规、审计、外商投资、市场进入战略等。客户中有：拜耳，克虏伯不锈钢，FMC，达能，百事，泰科，劳力士，通用电气，
              保乐力加，阿尔斯通，皇家马德里俱乐部，西足联，达姆等。
            </p>
            <p>
              他的综合专业经验涵盖税务、会计、金融、商业运作和法律咨询等领域。因此，他能够为客户提供更多综合多层面考虑的一体服务，能从更不同的角度同时评估各种风险/利益，而不仅仅是常规的税务顾问。
            </p>
            <p>
              在行业覆盖方面，他熟悉中国在机械、制药、食品和饮料、化妆品、特许经营、物流、汽车、零售、货运代理、测试、软件开发、能源、农业等领域的相关影响。
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Services;
