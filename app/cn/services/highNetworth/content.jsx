/* eslint-disable react/no-unescaped-entities */
import "../../../globals.css";

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
            <h3 className="text-black underline">高净值资产管理</h3>

            <p>
              我们帮助我们的高净值个人客户和家庭客户应对复杂的中国外汇管理环境下的税务状态。我们的团队依靠丰富的经验（特别是跨境投资），以实际可操作解决方案为导向，提供专业咨询意见。我们可以提供下列服务：
            </p>
            <ul>
              <li>
                通过使用各种法律工具(信托、基金会、控股公司)协助进行国际结构的筹划；
              </li>
              <li>向中国外汇管理局提供ODI报告；</li>
              <li>就国际税收规划和退出税提供咨询；</li>
              <li>跨境个人投资结构；</li>
              <li>优化外汇业务转移和税收风险；</li>
              <li>出具税务意见书。</li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};

export default Services;
