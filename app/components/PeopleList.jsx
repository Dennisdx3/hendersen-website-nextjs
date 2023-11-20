import Image from "next/image";
import dennis from "../../public/1.png";
import eddie from "../../public/2.png";
import kevin from "../../public/3.png";
import grace from "../../public/4.png";
import eve from "../../public/5.png";
import frank from "../../public/6.png";

const PeopleList = () => {
  return (
    <>
      <div className="my-3">
        <a href="/people/dennisXu" className=" hover:text-black">
          <Image
            src={dennis}
            alt="Dennis"
            width={100}
            className=" shadow-slate-500 shadow-lg rounded-full hover:shadow-slate-700"
          />

          <div className="mt-3 ml-4 mb-10">Dennis Xu</div>
        </a>
      </div>
      <div className="my-3">
        <a href="/people/eddieWang" className=" hover:text-black">
          <Image
            src={eddie}
            alt="Eddie"
            width={100}
            className=" shadow-slate-500 shadow-lg rounded-full hover:shadow-slate-700"
          />

          <div className="mt-3 ml-4 mb-10">Eddie Wang</div>
        </a>
      </div>
      <div className="my-3">
        <a href="/people/kevinWang" className=" hover:text-black">
          <Image
            src={kevin}
            alt="Dennis"
            width={100}
            className=" shadow-slate-500 shadow-lg rounded-full hover:shadow-slate-700"
          />

          <div className="mt-3 ml-4 mb-10">Kevin Wang</div>
        </a>
      </div>
      <div className="my-3">
        <a href="/people/graceChen" className=" hover:text-black">
          <Image
            src={grace}
            alt="Grace"
            width={100}
            className=" shadow-slate-500 shadow-lg rounded-full hover:shadow-slate-700"
          />

          <div className="mt-3 ml-4 mb-10">Grace Cheng</div>
        </a>
      </div>
      <div className="my-3">
        <a href="/people/eveXiao" className=" hover:text-black">
          <Image
            src={eve}
            alt="Eve"
            width={100}
            className=" shadow-slate-500 shadow-lg rounded-full hover:shadow-slate-700"
          />

          <div className="mt-3 ml-4 mb-10">Eve Xiao</div>
        </a>
      </div>
      <div className="my-3">
        <a href="/people/frankTao" className=" hover:text-black">
          <Image
            src={frank}
            alt="Frank"
            width={100}
            className=" shadow-slate-500 shadow-lg rounded-full hover:shadow-slate-700"
          />

          <div className="mt-3 ml-4 mb-10">Frank Tao</div>
        </a>
      </div>
    </>
  );
};
export default PeopleList;
