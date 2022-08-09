import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";

function Search({ searchResult }) {
  const router = useRouter();

  //ES6 destructuring
  const { location, startDate, endDate, noOfGuests } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd MMMM yyyy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yyyy");
  const range = ` ${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />
      <main className="flex">
        <section className=" flex-grow pt-14 px-6">
          <p className=" text-xs">
            300+ Stays{" "}
            <span className=" text-red-400 font-semibold">{range}</span> for{" "}
            <span className=" font-semibold text-red-400">{noOfGuests}</span>{" "}
            guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}{" "}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="btn">Cancellation Flexibility</p>
            <p className="btn">Type of Place</p>
            <p className="btn">Price</p>
            <p className="btn">Rooms and Beds</p>
            <p className="btn">More filters</p>
          </div>

          <div className="flex flex-col">
          {searchResult.map((item) => (
            <InfoCard
              key={item.img}
              img={item.img}
              location={item.location}
              description={item.description}
              star={item.star}
              price={item.price}
              title={item.title}
              total={item.total}
            />
          ))}
          </div>
          
        </section>
        <section className="hidden xl:inline-flex xl:min-w-[600px]" >
          <Map searchResult={searchResult}/>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResult = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );
  return {
    props: {
      searchResult,
    },
  };
}
