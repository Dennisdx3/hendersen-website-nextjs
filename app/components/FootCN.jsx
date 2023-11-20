import Image from "next/image";
import qrcode from "../../public/qrchinese.png";

function Foot() {
  return (
    <main className="mx-auto mt-20">
      <div>
        <a href="https://mp.weixin.qq.com/s?__biz=MzI3MTY1NTEwOQ==&mid=2247484353&idx=1&sn=579d508156ba11f94b3787530a29800b&chksm=eb3fca6bdc48437d15c0add4ddea9faf9510bab36dc4f3c68179582a923feb317f2a18856ae6&token=377915113&lang=zh_CN#rd">
          <Image
            src={qrcode}
            width={80}
            alt="qrcode"
            className="shadow-lg
          shadow-slate-700"
          />
        </a>
      </div>
      <br></br>
      <div>
        <h4>© 2004- 2023 版权所有 | 上海汉森企业管理咨询有限公司 </h4>
      </div>
    </main>
  );
}
export default Foot;
