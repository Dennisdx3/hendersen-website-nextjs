/* eslint-disable @next/next/no-img-element */
export const Header = () => {
  return (
    <div className="header flex justify-between border-b border-slate-600 items-baseline">
      <span>Hendersen AI Assistant</span>
      <img src="/azure.svg" alt="azure logo" className="flex items-end" />
    </div>
  );
};
