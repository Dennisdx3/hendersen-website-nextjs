/* eslint-disable @next/next/no-img-element */
export const Header = () => {
  return (
    <div className="header flex justify-between border-b border-slate-600 items-baseline">
      <span>汉森智能助手</span>
      <img src="/azure.svg" alt="azure logo" className="flex items-end" />
    </div>
  );
};
