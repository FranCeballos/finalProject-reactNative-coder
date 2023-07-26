export const items = [
  {
    _id: "standardps5",
    title: "PlayStation 5 Standard",
    description:
      "Experience amazing loading times with bigger inmersion thanks to the ultra high-speed SSD, compatible with haptic feedback, adaptive triggers and 3D audio, and a totally new generation of PlayStation games.",
    category: "Consoles",
    price: 499,
  },
  {
    _id: "digitalps5",
    title: "PlayStation 5 Digital ",
    description:
      "Experience amazing loading times with bigger inmersion thanks to the ultra high-speed SSD, compatible with haptic feedback, adaptive triggers and 3D audio, and a totally new generation of PlayStation games.",
    category: "Consoles",
    price: 399,
  },
  {
    _id: "standardps5gow",
    title: "PlayStation 5 Standard - GoW Ragnarok",
    description:
      "Experience amazing loading times with bigger inmersion thanks to the ultra high-speed SSD, compatible with haptic feedback, adaptive triggers and 3D audio, and a totally new generation of PlayStation games.",
    category: "Consoles",
    price: 549,
  },
  {
    _id: "digitalps5gow",
    title: "PlayStation 5 Digital - GoW Ragnarok",
    description:
      "Experience amazing loading times with bigger inmersion thanks to the ultra high-speed SSD, compatible with haptic feedback, adaptive triggers and 3D audio, and a totally new generation of PlayStation games.",
    category: "Consoles",
    price: 449,
  },
  {
    _id: "dualsensewhite",
    title: "Dualsense - White",
    description:
      "Discover a deeper and surrounding experience that makes action come alive on the palm of your hands.The dualsense offers haptic feedback, dinamic adaptive triggers and a bult-in microfone, all incorporated in an iconic and comfortable design.",
    category: "Accesories",
    price: 70,
  },
  {
    _id: "dualsenseblack",
    title: "Dualsense - Midnight Black",
    description:
      "Discover a deeper and surrounding experience that makes action come alive on the palm of your hands.The dualsense offers haptic feedback, dinamic adaptive triggers and a bult-in microfone, all incorporated in an iconic and comfortable design.",
    category: "Accesories",
    price: 70,
  },
  {
    _id: "pulse3dblack",
    title: "PULSE 3D - Midnight Black",
    description:
      "Enjoy a perfect wireless experience with a headset ready for 3D audio in PS5 consoles. The PULSE 3D headset have an elegant design with two noise-canceling microfones, USB Type-C charging and a variarity of easy access controls.",
    category: "Accesories",
    price: 99,
  },
  {
    _id: "pulse3dcamo",
    title: "PULSE 3D - Grey Camouflage",
    description:
      "Enjoy a perfect wireless experience with a headset ready for 3D audio in PS5 consoles. The PULSE 3D headset have an elegant design with two noise-canceling microfones, USB Type-C charging and a variarity of easy access controls.",
    category: "Accesories",
    price: 99,
  },
  {
    _id: "dualsensechargingstation",
    title: "Dualsense Charging Station",
    description:
      "Charge up to two wireless Dualsense controllers without having to connect them to your PlayStation 5.",
    category: "Accesories",
    price: 19,
  },
  {
    _id: "dualsenseedgewhite",
    title: "Dualsense EDGE",
    description:
      "Extremely custom controls. Improve your aiming adjusting the joyticks sensitivity and dead zones. The back buttons are configurable for any other button input, so you'll always have actions that change the game and essential buttons at the reach of your hand.",
    category: "Accesories",
    price: 70,
  },
  {
    _id: "eldenring",
    title: "Elden Ring",
    description:
      "Blend the power of the Elden Ring and become a lord of Medium Ring Lands.",
    category: "Games",
    price: 70,
  },
  {
    _id: "hogwartslegacy",
    title: "Hogwarts Legacy",
    description:
      "Hogwarts Legacy is a single-player role playing action game inmersed in an open world ambiented in the magical world of the 19th century.",
    category: "Games",
    price: 70,
  },
  {
    _id: "granturismo7",
    title: "Gran Turismo 7",
    description: "Feel, hear and see the new generation of Racing Simulation.",
    category: "Games",
    price: 70,
  },
  {
    _id: "forbiddenwest",
    title: "Horizon Forbidden West",
    description:
      "Join Aloy as she challenges the Forbidden West, a majestic fronteer, yet dangerous, where new and mysterious threads hide.",
    category: "Games",
    price: 70,
  },
  {
    _id: "unchartedlegacy",
    title: "Uncharted: Thiefs Legacy Collection",
    description:
      "Are you ready to go find your fortune? Search your legacy and leave your mark on the map.",
    category: "Games",
    price: 70,
  },
  {
    _id: "shirt1",
    title: "PlayStation Logo T-Shirt",
    description: "100% cotton. Hight quality materials.",
    category: "Merchandising",
    price: 10,
  },
  {
    _id: "necessarirexgen",
    title: "Necessarire X-Gen",
    description: "Poliester. Hight quality materials.",
    category: "Merchandising",
    price: 9,
  },
  {
    _id: "pscapjapan",
    title: "Japan PlayStation Cap",
    description: "Hight quality materials.",
    category: "Merchandising",
    price: 9,
  },
  {
    _id: "psbedjapan",
    title: "Japan PlayStation Blanket",
    description: "Hight quality materials.",
    category: "Merchandising",
    price: 19,
  },
];

export const categories = [
  { title: "Consoles", icon: "" },
  { title: "Games", icon: "" },
  { title: "Accesories", icon: "" },
  { title: "Merchandising", icon: "" },
  { title: "View all", icon: "..." },
];

export const cart = [
  {
    _id: "standardps5",
    title: "PlayStation 5 Standard",
    category: "Consoles",
    price: 499,
    quantity: 1,
  },
  {
    _id: "dualsenseedgewhite",
    title: "Dualsense EDGE",
    category: "Accesories",
    price: 70,
    quantity: 1,
  },
  {
    _id: "unchartedlegacy",
    title: "Uncharted: Thiefs Legacy Collection",
    category: "Games",
    price: 70,
    quantity: 1,
  },
  {
    _id: "shirt1",
    title: "PlayStation Logo T-Shirt",
    category: "Merchandising",
    price: 10,
    quantity: 1,
  },
];

export const orders = [
  {
    _id: 1,
    userId: 2,
    createdAt: 1679869276580,
    totalPrice: 649,
    items: [
      {
        _id: "standardps5",
        title: "PlayStation 5 Standard",
        category: "Consoles",
        price: 499,
        quantity: 1,
      },
      {
        _id: "dualsenseedgewhite",
        title: "Dualsense EDGE",
        category: "Accesories",
        price: 70,
        quantity: 1,
      },
      {
        _id: "shirt1",
        title: "PlayStation Logo T-Shirt",
        category: "Merchandising",
        price: 10,
        quantity: 1,
      },
    ],
  },
];
