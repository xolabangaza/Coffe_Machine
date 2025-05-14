// db.js
import espressoImage from './assets/espresso.png';
import latteImage from './assets/Latte.png';
import cappucino from './assets/cappucino.png'
import hotchoc from './assets/hotchoc.jpeg'
const products = [
  {
    id: 1,
    name: "Espresso",
    image: espressoImage,
    description: "Rich espresso shot with intense flavor.",
    price: 4.20,
    options: {
      chocolate: ["White Chocolate", "Milk Chocolate", "Dark Chocolate"],
      size: ["S", "M", "L"]
    }
  },
  {
    id: 2,
    name: "Latte",
    image: latteImage,
    description: "Smooth and creamy latte topped with milk foam.",
    price: 4.50,
    options: {
      size: ["S", "M", "L"]
    }
  },
  {
    id: 3,
    name: "Cappuccino",
    image: cappucino,
    description: "Classic cappuccino with a rich layer of foam.",
    price: 4.75,
    options: {
      chocolate: ["White Chocolate", "Milk Chocolate", "Dark Chocolate"],
      size: ["S", "M", "L"]
    }
  },
  {
    id: 4,
    name: "Hot_Chocolate",
    image: hotchoc,
    description: "Rich and warm hot chocolate made with real cocoa.",
    price: 3.50,
    options: {
      chocolate: ["White Chocolate", "Milk Chocolate", "Dark Chocolate"],
      size: ["S", "M", "L"]
    }
  },
  {
    id: 5,
    name: "Espresso",
    image: espressoImage,
    description: "Rich espresso shot with intense flavor.",
    price: 4.20,
    options: {
      chocolate: ["White Chocolate", "Milk Chocolate", "Dark Chocolate"],
      size: ["S", "M", "L"]
    }
  },
  {
    id: 6,
    name: "Latte",
    image: latteImage,
    description: "Smooth and creamy latte topped with milk foam.",
    price: 4.50,
    options: {
      size: ["S", "M", "L"]
    }
  },
  {
    id: 7,
    name: "Cappuccino",
    image: espressoImage,
    description: "Classic cappuccino with a rich layer of foam.",
    price: 4.75,
    options: {
      chocolate: ["White Chocolate", "Milk Chocolate", "Dark Chocolate"],
      size: ["S", "M", "L"]
    }
  },
  {
    id: 8,
    name: "Hot_Chocolate",
    image: hotchoc,
    description: "Rich and warm hot chocolate made with real cocoa.",
    price: 3.50,
    options: {
      chocolate: ["White Chocolate", "Milk Chocolate", "Dark Chocolate"],
      size: ["S", "M", "L"]
    }
  },
  {
    id: 9,
    name: "Hot_Chocolate",
    image: hotchoc,
    description: "Rich and warm hot chocolate made with real cocoa.",
    price: 3.50,
    options: {
      chocolate: ["White Chocolate", "Milk Chocolate", "Dark Chocolate"],
      size: ["S", "M", "L"]
    }
  },
  {
    id: 10,
    name: "Hot_Chocolate",
    image: hotchoc,
    description: "Rich and warm hot chocolate made with real cocoa.",
    price: 3.50,
    options: {
      chocolate: ["White Chocolate", "Milk Chocolate", "Dark Chocolate"],
      size: ["S", "M", "L"]
    }
  },
  {
    id: 11,
    name: "Hot_Chocolate",
    image: hotchoc,
    description: "Rich and warm hot chocolate made with real cocoa.",
    price: 3.50,
    options: {
      chocolate: ["White Chocolate", "Milk Chocolate", "Dark Chocolate"],
      size: ["S", "M", "L"]
    }
  },
  {
    id: 8,
    name: "Hot_Chocolate",
    image: hotchoc,
    description: "Rich and warm hot chocolate made with real cocoa.",
    price: 3.50,
    options: {
      chocolate: ["White Chocolate", "Milk Chocolate", "Dark Chocolate"],
      size: ["S", "M", "L"]
    }
  },
];

export default products;
