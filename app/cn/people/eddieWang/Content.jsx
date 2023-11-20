/* eslint-disable react/no-unescaped-entities */
import "../../../globals.css";

import Image from "next/image";
import portrait from "../../../../public/eddie.jpg";

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
            <h2 className="mt-5 mb-10 text-black text-2xl">王辉</h2>
            <div className="grid sm:grid-cols-2 mb-20">
              <section>
                <Image
                  src={portrait}
                  alt="Eddie Wang"
                  className="shadow-lg shadow-slate-700 rounded-lg"
                />
              </section>
              <section className=" text-black ml-10 hidden sm:block">
                <p>合伙人</p>
                <p>特许金融分析师, 中国注册会计师, 中国注册税务师, 律师</p>
                <div>
                  <a
                    href="mailto:eddie.wang@hendersen.com"
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
                    eddie.wang@hendersen.com
                  </a>
                </div>
              </section>
            </div>
            <p>
              王辉先生以优异成绩获上海交通大学经济法学士学位，现为特许金融分析师，
              中国注册会计师，中国注册税务师和中国律师。
            </p>
            <p>
              王辉先生的职业生涯始于安达信上海分公司税务、法律及商务咨询部，随后加入了普华永道上海分公司。
              2004年王辉先生与其他合伙人一起创立了上海汉森企业管理咨询有限公司。在职业生涯期间，
              王辉先生积累了有关中国投资、财务、税务和法律体系的知识。王辉先生在指导跨国公司制定在华投资策略领域拥有丰富的经验，
              并对于重组跨国公司在中国的经营结构和建立适宜的国际交易有着丰富的基于实际操作的研究经验。
            </p>
            <p>
              凭借其专业经验，王辉先生在投资筹划阶段和实施营运阶段，提供税收筹划和咨询的专业服务，在符合法律要求的前提下，
              帮助外国及中国投资者获取最大程度的税务优惠。
            </p>
            <p>
              除了协助商业性项目，王辉先生还协助上海市政府计划并实施了“国际采购中心”和“区域总部”的政府性项目，并取得了良好的效果。
            </p>
            <p>王辉先生还曾在各种国际专业杂志上发表了许多专业文章。</p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Services;
