const products = [
  { id: 1, name: "iphone12", price: 25000 },
  { id: 2, name: "iphone13", price: 35000 },
  { id: 3, name: "iphone14", price: 45000 },
  { id: 4, name: "iphone15", price: 55000 },
  { id: 5, name: "iphone16", price: 65000 },
];

export const getProducts = (req, res) => {
  try {
    res
      .status(200)
      .json({ message: "Products retrieved successfully", data: products });
  } catch (error) {
    res
      .status(503)
      .json({ message: "Cannot retrieve the products, Error in get products" });
  }
};
