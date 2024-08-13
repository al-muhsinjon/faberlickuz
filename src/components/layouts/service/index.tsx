import { IService } from "@/types";
import { fetchData } from "@/utils/fetch-data";
import Image from "next/image";
import React from "react";

const Service = async () => {
  const data: IService[] = await fetchData(
    `${process.env.NEXT_API}/about/services/`
  );
  console.log(data);
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
      {data &&
        data.map((service) => (
          <div
            className="flex flex-col items-center gap-1 font-rubik w-full"
            key={service.id}
          >
            <div className="w-10 h-10 md:w-[60px] md:h-[60px] m-1 relative">
              <Image
                className=" w-full h-full  object-contain duration-200 ease-in-out  scale-100  blur-0 grayscale-0 "
                src={service.image}
                alt={service.sub_title_uz}
                fill
              />
            </div>
            <h4 className="font-medium text-center text-darkBlue text-lg md:text-xl">
              {service.title_uz}
            </h4>
            <p className="md:text-lg text-center">{service.sub_title_uz}</p>
          </div>
        ))}
      <div></div>
    </div>
  );
};

export default Service;
