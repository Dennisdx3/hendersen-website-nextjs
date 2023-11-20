// import { useUrl } from "nextjs-current-url";
// import { useRouter } from "next/navigation";
const process = require("process");

export default async function FetchData() {
  const response = await fetch("http://127.0.0.1:3000/api/handleJSON");
  const data = await response.json();
  // console.log(data);
  const text = data;
  // console.log(process.cwd());

  return (
    <>
      <div>test</div>
    </>
  );
}
