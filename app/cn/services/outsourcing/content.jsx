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
            <h3 className="text-black underline">外包服务</h3>
            <h3>常见问题</h3>
            <p>
              处身于目前快节奏的商业环境中，很多公司发现：
              <br />
              ⁃由于资源或工作量的匮乏，没有必要雇佣全职员工去完成相关工作；
              <br />
              ⁃不愿意承担雇佣和培训财务、税务或其他员工的职责或者在公司不愿意设置上述相关职位；
              <br />
              ⁃相关职位上的员工由于休假导致工作处于停滞状态；
              <br />
              ⁃以及定期需要财务、税务或相关的专业人员现场或非现场的服务支持。
            </p>
            <h3 className="text-black underline mt-20">我们的服务</h3>
            <p>
              会计外包服务 -
              准备总帐、试算平衡表、月度会计报表（资产负债表和损益表）、以及每天的销售及现金收讫表等等。
            </p>
            <p>
              支付外包服务 -
              本地员工支付系统的初始设置以及每月的支付服务，包括计算支付净额、准备工资单、管理扣除个人所得税和法定社会保险后的支付存款，准备以及申报员工个人所得税。
            </p>
            <p>
              税收依从服务 -
              协助处理不同的中国税收事项，包括发票管理服务（申请，开具，认证，存档，等等），税款计算以及申报服务等等。
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Services;
