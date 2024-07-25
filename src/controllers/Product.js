import Product from "../models/Product.js";

export const createProduct = async (req, res, next) => {
  try {
    const data = await Product.create(req.body);
    if (data) {
      return res.status("201").json({
        success: true,
        data,
        message: "them thanh cong",
      });
    }
  } catch (error) {
    next(error);
  }
};

export const getAllProducts = async (req, res, next) => {
  try {
    const data = await Product.find();
    if (data) {
      return res.status(200).json({
        success: true,
        data,
        message: "lay danh sach sp thanh cong!!",
      });
    }
  } catch (error) {
    next(error);
  }
};

export const getProductsById = async (req, res, next) => {
  try {
    const data = await Product.findById(req.params.id);
    if (data) {
      return res.status(200).json({
        success: true,
        data,
        message: "lay san pham chi tiet thanh cong!!!!",
      });
    }
  } catch (error) {
    next(error);
  }
};

export const removeProductById = async (req, res, next) => {
  try {
    const data = await Product.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      success: true,
      data,
      message: "xoa thanh cong",
    });
  } catch (error) {
    next(error);
  }
};

export const updateProductById = async (req, res, next) => {
  try {
    const data = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).json({
      success: true,
      data,
      message: "sua thanh cong",
    });
  } catch (error) {
    next(error);
  }
};
