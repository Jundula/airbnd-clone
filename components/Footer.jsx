import Image from "next/image";
import Link from "next/link";
import React from "react";
import FooterCol from "./FooterCol"

function Footer() {
  return (
    <footer className="relative grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 pt-14 pb-24 bg-gray-100 text-gray-600 just mb5">
      <div className=" space-y-4 text-xs text-gray-800">
        <h5 className=" font-bold">SUPPORT</h5>
        <p>Help Center</p>
        <p>AirCover</p>
        <p>Safety information</p>
        <p>Supporting people with disabilities</p>
        <p>Cancellation options</p>
        <p>Report a neighbourhood concern</p>
      </div>
      <div className=" space-y-4 text-xs text-gray-800">
        <h5 className=" font-bold">COMMUNITY</h5>
        <p>Airbnb.org: disaster relief housing</p>
        <p>Support Afghan refugees</p>
        <p>Combating discrimination</p>
      </div>
      <div className=" space-y-4 text-xs text-gray-800">
        <h5 className=" font-bold">HOSTING</h5>
        <p>Try hosting</p>
        <p>AirCover for Hosts</p>
        <p>Explore hosting resources</p>
        <p>Visit our community forum</p>
        <p>How to host responsibly</p>
      </div>
      <div className=" space-y-4 text-xs text-gray-800">
        <h5 className=" font-bold">AIRBNB</h5>
        <p>Newsroom</p>
        <p>Learn about new features</p>
        <p>Letter from our founders</p>
        <p>Careers</p>
        <p>Investors</p>
        <p>Gift cards</p>
      </div>
      <div className="absolute bottom-8 w-full  h-10 cursor-pointer fex ">
        <Link href="/">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_Bélo.svg/2560px-Airbnb_Logo_Bélo.svg.png"
          layout="fill"
          objectFit="contain"
          objectPosition="center"
          
          />
          </Link>
      </div>
    </footer>
  );
}

export default Footer;
