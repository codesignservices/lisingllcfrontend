import React from "react";
import {
  PencilIcon,
  CashIcon,
  DocumentReportIcon,
  TranslateIcon,
} from "@heroicons/react/solid";
import FeaturesBg from "../assets/featuresbg.jpg";

const Features = () => {
  const featuresData = [
    {
      icon: (
        <PencilIcon className="w-16 h-16 text-yellow-600 mx-auto border border-white rounded-full p-3" />
      ),
      title: "White Collar Service",
      content:
        "Top tier recovery experience making the process to reclaim funds simple and easy!",
    },
    {
      icon: (
        <CashIcon className="w-16 h-16 text-yellow-600 mx-auto border border-white rounded-full p-3" />
      ),
      title: "$440,108",
      content: "Recovered in our largest net to client",
    },
    {
      icon: (
        <DocumentReportIcon className="w-16 h-16 text-yellow-600 mx-auto border border-white rounded-full p-3" />
      ),
      title: "Record Results",
      content: "Weekly case reviews with the State ensure claims move forward",
    },
    {
      icon: (
        <TranslateIcon className="w-16 h-16 text-yellow-600 mx-auto border border-white rounded-full p-3" />
      ),
      title: "Bilingual",
      content: "Contact to inquire",
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
    backgroundColor: "rgba(0, 0, 0, 0.5)",
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
                <h2 className="text-yellow-600 text-2xl font-bold mt-2" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>
                  {feature.title}
                </h2>
              </div>
              <h3 className="text-lg font-semibold text-white" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>
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
