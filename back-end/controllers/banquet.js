const banquetModel = require("../models/banquet");

const getBanquet = async (req, res) => {
  try {
    const banquetData = await banquetModel.find({});
    console.log(banquetData);
    res.json(banquetData);
  } catch (error) {
    console.log(error);
  }
};

const createBanquet = async (req, res) => {
  try {
    const { name, desc } = req.body;
    const { destination } = req.file;

    if (name && desc && destination) {
      await banquetModel.create({
        banquet_name: name,
        banquet_description: desc,
        image_location: destination,
      });
    }

    res.send("Image uploaded");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getBanquet, createBanquet };
