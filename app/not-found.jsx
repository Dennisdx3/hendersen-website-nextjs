import Link from "next/link";

const NotFound = () => {
  return (
    <main className="text-center">
      <h2 className="text-3xl">There was a problem.</h2>
      <p>404 | Sorry, we could not find the page you were looking for...</p>
      <p>404 | 我们很抱歉，发生了不可描述的错误......</p>
      <p>
        <Link href="/">Back to Home | 返回主页</Link>
      </p>
    </main>
  );
};
export default NotFound;
