/* eslint-disable react/no-unescaped-entities */
import "../../../globals.css";

import Image from "next/image";
import portrait from "../../../../public/grace.jpg";

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
            <h2 className="mt-5 mb-10 text-black text-2xl">陈燕瑾</h2>
            <div className="grid sm:grid-cols-2 mb-20">
              <section>
                <Image
                  src={portrait}
                  alt="Dennis Xu"
                  className="shadow-lg shadow-slate-700 rounded-lg"
                />
              </section>
              <section className=" text-black ml-10 hidden sm:block">
                <p>合伙人</p>
                <p>中国注册会计师,英国特许管理会计师, 资深会员</p>
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
              陈燕瑾以优异成绩获复旦大学经济学学士学位，现为中国注册会计师，英国特许管理会计师
            </p>
            <p>
              陈燕瑾女士的职业生涯始于安达信审计和管理咨询部并取得了杰出的成绩。她和许多世界和国内公司合作过，包括通用汽车、通用电气、联邦快递、NDK、JP
              Morgan、上海电力局和沈阳热电厂等。
            </p>
            <p>
              在 2001 年1
              月，她为电子资讯系统中国有限公司提供财务和管理控制的支持服务，同时为通用汽车、德尔福以及上海通用的项目经理提供专业的财务分析，内控管理以及其他相关支持服务。
              在她的支持下，项目经理们在亚太区获得了杰出的业绩。即使在公司最困难的时期，她依然获得了亚太区颁发的中国区唯一的特殊贡献奖。
            </p>
            <p>
              2003年她加入德尔福派克电气有限公司，负责亚太区的财务管理及协调工作。2005
              年作为合伙人加入汉森咨询。
            </p>
            <p>
              2003年她加入德尔福派克电气有限公司，负责亚太区的财务管理及协调工作。2005
              年加入汉森咨询。
            </p>
            <p>
              在职业生涯期间，陈燕瑾女士在以下领域积累了丰富的：财务系统的建立、内部控制、管理报告、资金支出的监控、工资福利分析、ERP
              系统、项目审核及控制等。
            </p>
            <p>
              主要服务的客户有：2007特殊奥林匹克运动会开幕式项目、JP
              Morgan、哈兹、PVS、
              GE塑料上海有限公司、康斯麦特中国、世博会马德里馆项目、维珍、喜来登虹桥太平洋大饭店、塞福科，确知医疗技术、皇家马德里俱乐部等。
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Services;
