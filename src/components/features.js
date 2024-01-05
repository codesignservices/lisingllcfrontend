
import React from "react";
import {
  PencilIcon,
  CashIcon,
  DocumentIcon,
  TranslateIcon,
  PencilAltIcon,
  SearchIcon,
} from "@heroicons/react/solid";
import FeaturesBg from "../assets/featuresbg.jpg";

const Features = () => {
  const featuresData = [
    {
      icon: (
        <PencilIcon className="w-16 h-16 text-yellow-600 mx-auto border border-white rounded-full p-3" />
      ),
      title: "Experience a top-notch recovery service that simplifies and streamlines the funds reclaiming process!",
      content:
        "Top tier recovery experience making the process to reclaim funds simple and easy!",
    },
    {
      icon: (
        <CashIcon className="w-16 h-16 text-yellow-600 mx-auto border border-white rounded-full p-3" />
      ),
      title: "No Out-Of-Pocket Costs",
      content: "At Legacy Rising, we are committed to delivering our services without imposing any financial strain on our clients. To uphold this commitment, we do not require any upfront fees. Our operating model is built on a contingency basis, where our payment is contingent upon successfully recovering funds on your behalf. This ensures a mutual alignment of interests, assuring you that we will exert every effort to optimize your claim with diligence and trustworthiness. And should any Legal fees arise, those too will be taken care of by Legacy Rising and our licensed legal team.",
    },
    {
      icon: (
        <SearchIcon className="w-16 h-16 text-yellow-600 mx-auto border border-white rounded-full p-3" />
        // <DocumentIcon className="w-16 h-16 text-yellow-600 mx-auto border border-white rounded-full p-3" />
      ),
      title: "Devoted Research Specialists and Private Investigators ",
      content: " At Legacy Rising, our success is driven by a committed team of research specialists and private investigators. Their expertise is instrumental in identifying individuals potentially entitled to unclaimed funds. Upon identification we engage with these individuals, outlining our process and furnishing the essential information for them to kickstart their claims. ",
    },
    {
      icon: (
        // <TranslateIcon className="w-16 h-16 text-yellow-600 mx-auto border border-white rounded-full p-3" />
        <PencilAltIcon className="w-16 h-16 text-yellow-600 mx-auto border border-white rounded-full p-3" />
      ),
      title: "Claim Retrieval",
      content: "We hold a license and collaborate directly with the county to aid clients in submitting claims. Our responsibilities include conducting audits on county records, and they furnish us with information and regular updates on the status of claims, streamlining the process.",
    },
  ];

  const bgStyle = {
    backgroundImage: `url(${FeaturesBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0.1, 0.1, 0.1, 0.3)",
  };

  return (
    <div className="bg-cover bg-center py-16" style={bgStyle}>
      <div style={overlayStyle}></div>
      <div className="container mx-auto text-center p-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {featuresData.map((feature, index) => (
            <div key={index} className="text-white">
              <div key={index} className="mb-4 text-center">
                {feature.icon}
                <h2 className="text-yellow-600 text-2xl font-bold mt-2" style={{ textShadow: "1px 1px 1px rgba(0,0,0,20)" }}>
                  {feature.title}
                </h2>
              </div>
              <h3 className="text-lg font-semibold text-yellow-600" style={{ textShadow: "1px 1px 1px rgba(0,0,0,20)" }}>
                {feature.content}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;







// import React from "react";
// import {
//   PencilIcon,
//   CashIcon,
//   DocumentReportIcon,
//   TranslateIcon,
// } from "@heroicons/react/solid";
// import FeaturesBg from "../assets/featuresbg.jpg";

// const Features = () => {
//   const featuresData = [
//     {
//       icon: (
//         <PencilIcon className="w-16 h-16 text-yellow-600 mx-auto border border-white rounded-full p-3" />
//       ),
//       title: "White Collar Service",
//       content:
//         "Top tier recovery experience making the process to reclaim funds simple and easy!",
//     },
//     {
//       icon: (
//         <CashIcon className="w-16 h-16 text-yellow-600 mx-auto border border-white rounded-full p-3" />
//       ),
//       title: "$440,108",
//       content: "Recovered in our largest net to client",
//     },
//     {
//       icon: (
//         <DocumentReportIcon className="w-16 h-16 text-yellow-600 mx-auto border border-white rounded-full p-3" />
//       ),
//       title: "Record Results",
//       content: "Weekly case reviews with the State ensure claims move forward",
//     },
//     {
//       icon: (
//         <TranslateIcon className="w-16 h-16 text-yellow-600 mx-auto border border-white rounded-full p-3" />
//       ),
//       title: "Bilingual",
//       content: "Contact to inquire",
//     },
//   ];

//   const bgStyle = {
//     backgroundImage: `url(${FeaturesBg})`,
//   };

//   return (
//     <div className="bg-cover bg-center py-16" style={bgStyle}>
//       <div className="container mx-auto text-center p-20">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
//           {featuresData.map((feature, index) => (
//             <div key={index} className="text-white">
//               <div key={index} className="mb-4 text-center">
//                 {feature.icon}
//                 <h2 className="text-yellow-600 text-2xl font-bold mt-2">
//                   {feature.title}
//                 </h2>
//               </div>
//               <h3 className="text-lg font-semibold text-yellow-600">
//                 {feature.content}
//               </h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Features;
