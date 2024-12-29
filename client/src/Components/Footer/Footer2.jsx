import React from "react";

const categoriesData = [
  {
    id: 1,
    name: "True Wireless Earbuds",
    sections: [
      {
        subheading: "Shop by Features",
        items: [
          "Noise Cancellation Earbuds",
          "Gaming Earbuds",
          "Large Playback Earbuds",
        ],
      },
      {
        subheading: "Shop by Price",
        items: [
          "Earbuds Under 1000",
          "Earbuds Under 2000",
          "Earbuds Under 3000",
          "Earbuds Under 4000",
          "Earbuds Under 5000",
          "Earbuds Above 5000",
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Wireless Speakers",
    sections: [
      {
        subheading: "Shop by Features",
        items: [
          "Portable Speakers",
          "Long Playback Speakers",
          "Waterproof Bluetooth Speaker",
          "Party Speaker with RGB Lights",
          "Speaker with Karaoke Mic",
        ],
      },
      {
        subheading: "Shop by Price",
        items: [
          "Bluetooth Speakers Under 1000",
          "Bluetooth Speakers Under 2000",
          "Bluetooth Speakers Under 3000",
          "Bluetooth Speakers Under 5000",
          "Bluetooth Speakers Under 8000",
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Trimmers",
    sections: [
      {
        subheading: "Shop by Features",
        items: ["Trimmer for Men", "Trimmers with Grooming Kit for Men"],
      },
      {
        subheading: "Shop by Price",
        items: ["Trimmer Under 1000", "Trimmer Under 2000"],
      },
    ],
  },
  {
    id: 4,
    name: "Chargers",
    sections: [
      {
        subheading: "Shop by Features",
        items: [
          "Wireless Charger",
          "Type C Charger",
          "Fast Charger",
          "USB Charger",
          "Micro USB Charger",
          "Type C Adapter",
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Wireless Earphones",
    sections: [
      {
        subheading: "Shop by Features",
        items: [
          "Noise Cancellation Earphone",
          "Long Playback Earphone",
          "Clear Calling Earphone",
        ],
      },
      {
        subheading: "Shop by Price",
        items: [
          "Neckbands Under 1000",
          "Neckbands Under 2000",
          "Neckbands Under 3000",
        ],
      },
    ],
  },
  {
    id: 6,
    name: "Soundbars",
    sections: [
      {
        subheading: "Shop by Features",
        items: [
          "Soundbar with Wireless Subwoofer",
          "Dolby Soundbars",
          "Soundbar with Wired Subwoofer",
          "Alexa Enabled Soundbar",
        ],
      },
      {
        subheading: "Shop by Price",
        items: [
          "Soundbars Under 10000",
          "Soundbars Under 20000",
          "Soundbars Under 3000",
          "Soundbars Under 5000",
          "Soundbars Above 20000",
        ],
      },
    ],
  },

  {
    id: 7,
    name: "Limited Editions",
    sections: [
      {
        subheading: "Shop by Features",
        items: [
          "Limited Editions Headphones",
          "Limited Editions Smart Watch",
          "Limited Editions Earphone",
          "Limited Edition Speakers",
        ],
      },
    ],
  },
  {
    id: 8,
    name: "Cables",
    sections: [
      {
        subheading: "Shop by Features",
        items: [
          "Micro USB Cable",
          "C Type Cable",
          "Lightning Cable",
          "USB C to C Cable",
          "Smart Watch Charging Cable",
        ],
      },
    ],
  },
  {
    id: 9,
    name: "Wired Earphones",
    sections: [
      {
        subheading: "Shop by Features",
        items: [
          "Wired Headphones with Mic",
          "Wired Headphones with Mic",
          "Headphones with Mic for PC",
        ],
      },
      {
        subheading: "Shop by Price",
        items: [
          "Wired Headphones Under 1000",
          "Wired Headphones Under 2000",
          "Wired Headphones Under 3000",
        ],
      },
    ],
  },

  {
    id: 10,
    name: "Smart Watches",
    sections: [
      {
        subheading: "Shop by Features",
        items: [
          "Bluetooth Calling Smartwatches",
          "Fitness Tracker Smartwatch",
          "Big Display Smartwatch",
          "Sports Tracker Smartwatch",
        ],
      },
      {
        subheading: "Shop by Identity",
        items: ["Smartwatches For Women/Girls", "Smartwatches For Men/Boys"],
      },
      {
        subheading: "Shop by Price",
        items: [
          "Smartwatch Under 1000",
          "Smartwatch Under 2000",
          "Smartwatch Under 3000",
          "Smartwatch Under 4000",
          "Smartwatch Under 5000",
          "Smartwatch Above 5000",
        ],
      },
    ],
  },
  {
    id: 11,
    name: "Car Accessories",
    sections: [
      {
        subheading: "Shop by Features",
        items: ["Car Charger", "Aux Cable for Car"],
      },
      {
        subheading: "Shop by Price",
        items: ["Car Charger Under 500", "Car Charger Above 500"],
      },
    ],
  },
  {
    id: 12,
    name: "Wireless Headphones",
    sections: [
      {
        subheading: "Shop by Features",
        items: [
          "Noise Cancelling Headphones",
          "Wireless Gaming Headphone",
          "Long Playback Headphones",
        ],
      },
      {
        subheading: "Shop by Price",
        items: [
          "Wireless Headphones Under 1000",
          "Wireless Headphones Under 3000",
          "Wireless Headphones Under 2000",
          "Wireless Headphones Under 4000",
          "Wireless Headphones Above 4000",
        ],
      },
    ],
  },
  {
    id: 13,
    name: "Gaming Headphones",
    sections: [
      {
        subheading: "Shop by Features",
        items: [
          "Gaming Headphones with Mic",
          "Low Latency Headphone",
          "RGB Light Headphones",
          "Headphone for PC Gaming",
        ],
      },
    ],
  },
  {
    id: 14,
    name: "Trebel Range",
    sections: [
      {
        subheading: "Shop by Features",
        items: [
          "Smartwatch for Women",
          "Earbuds for Women",
          "Neckband for Women",
          "Earphone for Women",
          "Headphone for Women",
        ],
      },
    ],
  },
  {
    id: 15,
    name: "Wired Headphones",
    sections: [
      {
        subheading: "Shop by Features",
        items: [
          "Wired Headphones with Mic",
          "Wired Headphones with Mic",
          "Headphones with Mic for PC",
        ],
      },
      {
        subheading: "Shop by Price",
        items: [
          "Wired Headphones Under 1000",
          "Wired Headphones Under 2000",
          "Wired Headphones Under 3000",
        ],
      },
    ],
  },
  {
    id: 16,
    name: "Powerbanks",
    sections: [
      {
        subheading: "Shop by Features",
        items: [
          "Power Bank 10000mah",
          "Power Bank 20000mah",
          "Mobile Power Bank",
          "Fast Charging Power Bank",
          "Power Bank for iPhone",
        ],
      },
      {
        subheading: "Shop by Price",
        items: [
          "Power Bank Under 1000",
          "Power Bank Under 1500",
          "Power Bank Under 2000",
        ],
      },
    ],
  },
];

const Footer2 = () => {
  return (
    <div className="grid grid-cols-4 gap-8 px-16 py-8">
    {categoriesData.map((category) => (
      <div key={category.id} className="space-y-4">
        {/* Category Title */}
        <p className="font-extrabold text-[15px]">{category.name}</p>
        {category.sections.map((section, index) => (
          <div key={index} className="space-y-2">
            {/* Subheading */}
            <h4 className="font-thin text-black text-sm">{section.subheading}</h4>
            {/* Items */}
            <ul className="text-xs text-[#868C91] space-y-1">
              {section.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}   
            </ul>
          </div>
        ))}
      </div>
    ))}
  </div>
);
};

export default Footer2;
