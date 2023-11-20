/* eslint-disable react/no-unescaped-entities */
import "../../../globals.css";

import Image from "next/image";
import portrait from "../../../../public/kevin.jpg";

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
            <h2 className="mt-5 mb-10 text-black text-2xl">王炜</h2>
            <div className="grid sm:grid-cols-2 mb-20">
              <section>
                <Image
                  src={portrait}
                  alt="Kevin Wang"
                  className="shadow-lg shadow-slate-700 rounded-lg"
                />
              </section>
              <section className=" text-black ml-10 hidden sm:block">
                <p>合伙人</p>
                <p>中国注册会计师, 中国注册税务师</p>
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
              王炜于 1994 年从上海外国语大学作为优秀毕业生在3 年内完成了4
              年制的文学士学位。 2009-2011年他完成了中欧国际工商学院的EMBA课程。
              他是中国注册会计师协会、中国税务师协会及上海企业法律顾问协会会员。
            </p>
            <p>
              王先生在税务方面的经验包括国际国内税务咨询、转让定价，为企业的合并或收购提供税务策划。
            </p>
            <p>
              他曾经积极地为许多投资者在中国控股公司，外商独资公司的投资和可以取得的多种税的优惠提供了咨询。
              他曾经就与外商投资企业相关的税务、外汇问题发表过演讲。
            </p>
            <p>
              王先生 1994 年至2002 年在安达信上海办事处工作任税务经理，2002
              年至2005
              年在毕马威会计师事务所上海办事处税务部工作任高级经理，2005年作为合伙人加入汉森咨询。
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Services;
