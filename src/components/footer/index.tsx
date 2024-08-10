// import axios from "axios";
// import Link from "next/link";
// import { FaFacebook, FaInstagram, FaTelegramPlane } from "react-icons/fa";

// import React from "react";

// const Footer = async ({ locale }: { locale: string }) => {
//   const { data } = await axios.get(`${process.env.NEXT_API}/about/contacts/`);

//   const response = await axios.get(`${process.env.NEXT_API}/about/socials/`);

//   const { id, address_uz, address_ru, phone_1, phone_2, email } = data;

//   return (
//     <div className="w-full divide-y bg-main text-white px-12 py-4">
//       <div className="flex justify-between py-4">
//         <div>{address_uz}</div>
//         <div className="flex gap-5">
//           <span>{phone_1}</span>
//           <span>{phone_2}</span>
//         </div>
//       </div>

//       <div className=" flex justify-between py-4 items-center">
//         <span>© 2024 Faberlic, Inc. All rights reserved.</span>
//         <div className="flex gap-6">
//           <Link href={response.data.instagram}>
//             <FaInstagram size={28} />
//           </Link>
//           <Link href={response.data.facebook}>
//             <FaFacebook size={28} />
//           </Link>
//           <Link href={response.data.telegram}>
//             <FaTelegramPlane size={28} />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import axios from "axios";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import React from "react";

const Footer = async ({ locale }: { locale: string }) => {
  const { data } = await axios.get(`${process.env.NEXT_API}/about/contacts/`);
  const response = await axios.get(`${process.env.NEXT_API}/about/socials/`);

  const { address_uz, phone_1, phone_2 } = data;

  return (
    <footer className="bg-main md:block lg:block hidden text-white">
      <div className="container mx-auto divide-y px-4 py-4 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center py-4">
          <div>{address_uz}</div>
          <div className="flex gap-5 mt-4 lg:mt-0">
            <span>{phone_1}</span>
            <span>{phone_2}</span>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center py-4">
          <span className="mb-4 lg:mb-0">
            © 2024 Faberlic, Inc. All rights reserved.
          </span>
          <div className="flex gap-6">
            <Link href={response.data.instagram}>
              <FaInstagram size={28} />
            </Link>
            <Link href={response.data.facebook}>
              <FaFacebook size={28} />
            </Link>
            <Link href={response.data.telegram}>
              <FaTelegramPlane size={28} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
