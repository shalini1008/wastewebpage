import Layout from "../Component/Layout";
import React, { useState } from "react";

function Edu() {
  const [expandedIndex, setExpandedIndex] = useState(null); // To track the expanded flashcard

  const flashcards = [
    {
      img: "/edu11.png",
      text: "Why Waste Segregation Matters",
      subText: "Discover how small actions can lead to a cleaner, greener planet.",
      detail: [
        "Reduces Landfill Waste: Segregation prevents waste from piling up in landfills, which take years to decompose.",
        "Promotes Recycling: It makes it easier to recycle materials like paper, plastic, glass, and metal.",
        "Prevents Pollution: Prevents hazardous waste from contaminating soil, water, and air."
      ]
    },
    {
      img: "/edu2.png",
      text: "Types of Waste & Segregation Rules",
      subText: "Learn the golden rules of waste segregation to make it effortless.",
      detail: [
        "Biodegradable (Wet Waste): Kitchen waste (vegetable peels, fruit scraps, leftover food) and garden waste. Dispose in a green bin for composting.",
        "Recyclable (Dry Waste): Paper, plastic, metal, glass, and cardboard. Clean and dry, dispose in a blue bin.",
        "Hazardous Waste: Batteries, paints, e-waste, chemicals. Dispose at designated collection points.",
        "General Waste: Sanitary waste, dust, and items not categorized elsewhere. Use a red bin or follow local disposal rules."
      ]
    },
    {
      img: "/edu3.png",
      text: "How to Make Compost at Home",
      subText: "Turn your kitchen waste into gold for your garden!",
      detail: [
        "Materials Needed: Compost bin, wet waste (fruit peels, vegetable scraps, coffee grounds, eggshells), dry waste (leaves, cardboard, shredded newspaper).",
        "Steps: Alternate layers of wet and dry waste; Keep compost moist, adding water if too dry; Turn compost weekly to aerate; Compost will be ready in 6–8 weeks.",
        "Pro Tip: Avoid meat, dairy, or oily scraps to prevent pests."
       ]
    },
    {
      img: "/edu4.png",
      text: "Overcoming Barriers to Segregation",
      subText: "Break down barriers and start segregating waste with ease",
      detail: [
        "Challenge: It takes too much time; Solution: Set up labeled bins in accessible areas for easy segregation.",
        "Challenge: I don’t know how to do it properly; Solution: Use the rule: wet waste in green, dry waste in blue. Add reference charts near bins.",
        "Challenge: I don’t see the impact; Solution: Join local initiatives or recycling programs, and involve family to make it a team effort."
       ]
    },
    {
      img: "/edu5.png",
      text: "Potential Value of Recyclable Waste",
      subText: "Uncover the hidden value in your recyclable waste.",
      detail: [
        "Financial Value: Selling recyclables (paper, plastic, metal) can earn ₹300–₹500/month.",
        "Environmental Impact: Recycling 1 ton of paper saves 17 trees and 7,000 gallons of water. Recycling plastic reduces new plastic production and conserves petroleum.",
        "Circular Economy: Waste becomes raw material for new products, reducing resource depletion and waste.",
        ]
    },
  ];

  const handleAccordionToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index); // Toggle accordion
  };

  return (
    <Layout>
      <div className="p-6 mt-6 px-40">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2  text-green-400">Know Waste Better</h1>
        <div className="h-1 w-20 bg-green-400 rounded mb-10"></div>
        <div className="grid grid-cols-3 gap-6 mx-auto max-w-screen-lg sm:max-w-screen-xl">
          {/* Flashcards */}
          {flashcards.map((flashcard, index) => (
            <div
              key={index}
              className={`p-4 bg-gray-700 rounded-lg shadow-md text-center w-full mx-auto transition-transform transform ${
                expandedIndex === index ? "scale-105" : ""
              }`}
            >
              <div
                className="relative h-48 mb-2 cursor-pointer"
                onClick={() => handleAccordionToggle(index)} // Handle accordion toggle
              >
                <img
                  src={flashcard.img}
                  alt={flashcard.text}
                  className="h-48 w-full object-contain rounded-t-md"
                />
              </div>
              <p className="text-lg font-bold">{flashcard.text}</p>
              <p className="text-sm text-gray-300 mt-1">{flashcard.subText}</p>

              {/* Accordion Panel for Details */}
              {expandedIndex === index && (
                <div className="mt-4 p-4 bg-gray-800 rounded-md text-gray-100">
                  <ol className="list-decimal pl-5 text-left">
                    {flashcard.detail.map((point, i) => (
                      <li key={i} className="mb-2">{point}</li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Edu;
