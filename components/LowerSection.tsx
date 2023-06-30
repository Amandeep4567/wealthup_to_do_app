import Image from "next/image";

const LowerSection = () => {
  return (
    <div className="lower_section bg-gradient-to-r from-[#159C98] to-[#138F9E]">
      <div className="flex pt-5 pl-10">
        <h1 className="font-bold text-2xl text-gray-300">
          Trusted By <br /> Clients From <br /> 50+ Companies
        </h1>
        <div className="h-[100px] w-[2px] bg-white ml-10"></div>
        <Image
          src="/logo.png"
          width={800}
          height={100}
          alt="logos"
          className="ml-20"
        />
      </div>
    </div>
  );
};

export default LowerSection;
