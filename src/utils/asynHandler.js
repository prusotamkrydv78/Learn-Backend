const asyncHandler = (fun) => async (req, res, next) => {
  try {
    await fun(req, res, next);
  } catch (error) {
    res
      .stauts(error.code || 500)
      .json({ success: false, message: error.message });
  }
};

export default asyncHandler;
