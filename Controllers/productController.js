const products = [
  { id: 1, name: "iphone12", price: 25000 },
  { id: 2, name: "iphone13", price: 35000 },
  { id: 3, name: "iphone14", price: 45000 },
  { id: 4, name: "iphone15", price: 55000 },
  { id: 5, name: "iphone16", price: 65000 },
];

//get all products

export const getProducts = (req, res) => {
  try {
    res
      .status(200)
      .json({ message: "Products retrieved successfully", data: products });
  } catch (error) {
    res.status(503).json({
      message: "Cannot retrieve the products, Error in get all products",
    });
  }
};

//get single product using id

export const getProductById = (req, res) => {
  try {
    const productId = req.params.id;
    //console.log("product id", productId);
    const productDetail = products.find((ele) => ele.id == productId);
    if (!productDetail) {
      return res.status(404).json({ message: "Product Not Found" });
    }
    return res
      .status(200)
      .json({ message: "Product retrieved successfully", data: productDetail });
  } catch (error) {
    res.status(503).json({
      message: "Cannot retrieve the products, Error in get product by id",
    });
  }
};

// Creating a product

export const createProduct = (req, res) => {
  try {
    const { name, price } = req.body;
    const newProduct = {
      id: products.length + 1,
      name: name,
      price: price,
    };
    products.push(newProduct);

    res
      .status(200)
      .json({ message: "Product Created Successfully", data: newProduct });
  } catch (error) {
    res.status(503).json({
      message: "Cannot create the product, Error in create product",
    });
  }
};

//update product

export const updateProduct = (req, res) => {
  try {
    const productId = req.params.id;
    const { name, price } = req.body;
    const index = products.findIndex((ele) => ele.id == productId);
    if (index === -1) {
      return res.status(404).json({ message: "Product Not Found" });
    }
    products[index].name = name;
    products[index].price = price;
    res.status(200).json({
      message: "Products Updated Successfully",
      data: products[index],
    });
  } catch (error) {
    res.status(503).json({
      message: "Cannot update the product, Error in update product",
    });
  }
};

//Delete Product

export const deleteProduct = (req, res) => {
  try {
    const productId = req.params.id;
    const index = products.findIndex((ele) => ele.id == productId);
    if (index === -1) {
      return res.status(404).json({ message: "Product Not Found" });
    }
    products.splice(index, 1);
    res.status(200).json({ message: "Product Deleted Successfully" });
  } catch (error) {
    res.status(503).json({
      message: "Cannot delete the product, Error in delete product",
    });
  }
};
