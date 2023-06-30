import Image from "next/image";

const UpperSection = () => {
  return (
    <div className="upper_section bg-gradient-to-r from-[#159C98] to-[#138F9E] text-white ">
      <div className="py-6">
        <h1 className="flex justify-center font-semibold text-5xl">
          Backed by the best
        </h1>
        <p className="flex justify-center font-extralight text-2xl pt-3">
          Wealthup is backed and supported by
        </p>
        <div className="flex justify-center pt-4">
          <Image src="/spons.png" width={700} height={80} alt="sponsers" />
        </div>
      </div>
    </div>
  );
};

export default UpperSection;
