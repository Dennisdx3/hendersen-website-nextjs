/* eslint-disable react/no-unescaped-entities */
import "../../globals.css";

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
            <h2 className="mt-5 mb-10 text-black">关于我们</h2>
            <p>
              汉森咨询设立于2004年, 是一家从事专业商务，财务和税务咨询的企业，
              汉森咨询是全球最大独立税务咨询集团-Taxand集团在中国的唯一成员所。
              Taxand是全球最大的独立税务咨询机构，目前在全世界的近50个国家拥有400多位合伙人和2000多名专业顾问。
              汉森咨询的各位合伙人及专业顾问们来自于世界顶级的咨询公司及跨国企业。
              通过多年服务于世界顶尖企业的经验，我们力求全球和中国企业提供顶级的专业服务。我们坚持：
            </p>
            <p>- 独立性: 因为没有利益冲突，我们保持客观公正。</p>
            <p>- 价值导向：我们在任何服务细节中为您创造价值。</p>
            <p>- 问题解决：我们提供经得起实践考验的整合解决方案。</p>
            <h2 className="mt-20 mb-10 text-black">联系我们</h2>
            <p className="underline text-black">上海</p>
            <Image
              src="/shanghaiAddress.png"
              width={500}
              height={500}
              alt="Dennis Xu"
              className="shadow-lg shadow-slate-700 rounded-lg mb-10"
            />
            <p>地址: 上海市星会路468号中环现代大厦12楼</p>
            <p className="mb-3">电话: +8621 6447 7878 </p>
            <p>传真: +8621 6076 1736</p>
            <p className="underline text-black">北京</p>
            <Image
              src="/beijingAddress.png"
              width={500}
              height={500}
              alt="Dennis Xu"
              className="shadow-lg shadow-slate-700 rounded-lg mb-10"
            />
            <p>北京市朝阳区东三环中路39号 建外SOHO 16号楼 1502室 100022</p>
            <p className="mb-3">电话: +8610 5869 9338 </p>
            <p>传真: +8621 5869 9337</p>
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
