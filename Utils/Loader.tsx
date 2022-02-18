import { TailSpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <TailSpin height={80} width={80} color="#1f2937" ariaLabel="loading" />
      <h1 className="text-slate-50 text-lg font-medium mt-4">
        Loading Content...
      </h1>
    </div>
  );
};

export default Loader;
