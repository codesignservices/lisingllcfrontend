import React from "react";
import Tax from "../assets/tax.jpg";
import Calculator from "../assets/calculator.jpg";
import House from "../assets/house.jpg";
import Meeting from "../assets/meeting.jpg";

const servicesData = [
  {
    title: "Unclaimed State Funds",
    image: Calculator,
    content:
      "The State holds property that has not been claimed by the rightful owner. In some cases the property is only held for a certain period of time before the funds/property become the states for Governmental use. We ensure diligent and accurate filing of our clients’ claims, streamlining the process.",
  },
  {
    title: "Bankruptcy Surplus Recovery",
    image: Meeting,
    content:
      "In cases of bankruptcy filings, there may be funds that have not been disbursed to you. We promptly take steps to recover these funds on your behalf.",
  },
  {
    title: "Recovering Funds After Home Foreclosure",
    image: House,
    content:
      "A significant aspect of our practice centers around retrieving funds following the auction of foreclosed properties. We want to emphasize that home foreclosure does not mark the conclusion.",
  },
  {
    title: "Assisting in Tax Foreclosure Surplus Recovery",
    image: Tax,
    content:
      "We assist in the retrieval of surplus funds resulting from the auction of your foreclosed property. These funds rightfully belong to you as the homeowner, not the lender.",
  },
];

const Services = () => {
  return (
    <div className="bg-black py-16" id="services">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-yellow-600 mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <div key={index} className="text-white">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover"
              />
              <h3 className="text-xl font-semibold mt-4 text-yellow-600">
                {service.title}
              </h3>
              <p className="text-gray-400 mt-2">{service.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
