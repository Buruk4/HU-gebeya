import userModal from "../modals/userModels.js";

// Add item to cart
const addToCart = async (req, res) => {
  try {
    const { userId, itemId, size } = req.body;
    const userData = await userModal.findById(userId); // Corrected to findById
    let cartData = userData.cartData || {};

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    await userModal.findByIdAndUpdate(userId, { cartData });
    res.status(200).send("Item added to cart");
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong");
  }
};

// Update cart item
const updateCart = async (req, res) => {
  try {
    const { userId, itemId, quantity, size } = req.body;
    const userData = await userModal.findById(userId); // Corrected to findById
    let cartData = userData.cartData;

    cartData[itemId][size] = quantity;

    await userModal.findByIdAndUpdate(userId, { cartData });
    res.status(200).send("Cart updated");
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong");
  }
};

// Get user cart
const getUserCart = async (req, res) => {
  try {
    const { userId } = req.body;
    const userData = await userModal.findById(userId); // Corrected to findById
    let cartData = userData.cartData || {};

    res.json({ success: true, cartData });
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong");
  }
};

export { addToCart, updateCart, getUserCart };
