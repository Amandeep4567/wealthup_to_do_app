import Image from "next/image";

const MiddleSection = () => {
  return (
    <div className="middle_section bg-[#0A5783]">
      <div className="pt-10">
        <h1 className="flex justify-center text-white text-3xl font-bold">
          Transforming Lives - Financially!
        </h1>

        <div className="flex justify-around">
          <div className="w-[700px] flex align-bottom pt-[80px] text-white">
            <div>
              <Image src="/person.png" width={250} height={70} alt="person" />
            </div>
            <div>
              <h1 className="">Simrin Sirur</h1>
              <p className="font-extralight pt-[3px]">
                Journalist <br /> The Print, Gurugram
              </p>
              <p className=" font-extralight text-[16px] pt-[4px]">
                "I was afraid to learn about investments and savings because it
                seemed to fly over my head, but Ankit was extremely patient and
                walked me through everything... I now feel more confident to
                handle my own money."
              </p>
            </div>
          </div>
          <div className="">
            <Image src="/people.png" width={300} height={300} alt="people" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
