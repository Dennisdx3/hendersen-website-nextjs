import Image from "next/image";
import Link from "next/link";
import Logo from "./hendersen.svg";
import TaxandLogo from "../../public/Taxand.svg";

const Navbar = () => {
  return (
    <>
      <nav>
        <a href="/cn" className="hidden sm:block">
          <Image
            src={Logo}
            alt="Hendersen Logo"
            width={110}
            quality={100}
            className="ml-8 mb-0"
          />
        </a>

        <Link href="/cn" className="ml-10">
          主页
        </Link>
        <Link href="/cn/about">关于我们</Link>
        <Link href="/cn/services/corporateTax">我们的服务</Link>
        <Link href="/cn/people">我们的团队</Link>
        <Link href="/cn/trends">动态</Link>
      </nav>
      <nav className="flex justify-end mt-0">
        <a href="/cn" className="sm:hidden">
          <Image
            src={Logo}
            alt="Hendersen Logo"
            width={110}
            quality={100}
            className="ml-8 mb-0"
          />
        </a>
        <a href="https://www.taxand.com">
          <Image src={TaxandLogo} width={80} alt="Taxand" className="mb-0" />
        </a>
        <a href="mailto:admin@hendersen.com">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
        </a>
        <a href="https://mp.weixin.qq.com/s?__biz=MzI3MTY1NTEwOQ==&mid=2247484353&idx=1&sn=579d508156ba11f94b3787530a29800b&chksm=eb3fca6bdc48437d15c0add4ddea9faf9510bab36dc4f3c68179582a923feb317f2a18856ae6&token=377915113&lang=zh_CN#rd">
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
          >
            <path d="M21.502 19.525c1.524-1.105 2.498-2.738 2.498-4.554 0-3.326-3.237-6.023-7.229-6.023s-7.229 2.697-7.229 6.023c0 3.327 3.237 6.024 7.229 6.024.825 0 1.621-.117 2.36-.33l.212-.032c.139 0 .265.043.384.111l1.583.914.139.045c.133 0 .241-.108.241-.241l-.039-.176-.326-1.215-.025-.154c0-.162.08-.305.202-.392zm-12.827-17.228c-4.791 0-8.675 3.236-8.675 7.229 0 2.178 1.168 4.139 2.997 5.464.147.104.243.276.243.471l-.03.184-.391 1.458-.047.211c0 .16.13.29.289.29l.168-.054 1.899-1.097c.142-.082.293-.133.46-.133l.255.038c.886.255 1.842.397 2.832.397l.476-.012c-.188-.564-.291-1.158-.291-1.771 0-3.641 3.542-6.593 7.911-6.593l.471.012c-.653-3.453-4.24-6.094-8.567-6.094zm5.686 11.711c-.532 0-.963-.432-.963-.964 0-.533.431-.964.963-.964.533 0 .964.431.964.964 0 .532-.431.964-.964.964zm4.82 0c-.533 0-.964-.432-.964-.964 0-.533.431-.964.964-.964.532 0 .963.431.963.964 0 .532-.431.964-.963.964zm-13.398-5.639c-.639 0-1.156-.518-1.156-1.156 0-.639.517-1.157 1.156-1.157.639 0 1.157.518 1.157 1.157 0 .638-.518 1.156-1.157 1.156zm5.783 0c-.639 0-1.156-.518-1.156-1.156 0-.639.517-1.157 1.156-1.157.639 0 1.157.518 1.157 1.157 0 .638-.518 1.156-1.157 1.156z" />
          </svg>
        </a>
        <Link href="/" className="mr-8">
          English
        </Link>
      </nav>
    </>
  );
};
export default Navbar;
