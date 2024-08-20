import React from "react";
import About from "./about";
import { fetchData } from "@/utils/fetch-data";
import Service from "@/components/layouts/service";
import Gravity from "./gravity";

const AboutPage = async () => {
  const [contact, socials] = await Promise.all([
    fetchData(`${process.env.NEXT_API}/about/contacts/`),
    fetchData(`${process.env.NEXT_API}/about/socials/`),
  ]);
  return (
    <div className="px-12">
      <Gravity />
      <About contact={contact} socials={socials} />
      <div className="py-6">
        <Service />
      </div>
    </div>
  );
};

export default AboutPage;
