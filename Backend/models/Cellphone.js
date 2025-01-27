const mongoose = require("mongoose");

const CellphoneSchema = new mongoose.Schema({
    model: {
        type: String,
    },
    year: {
        type: String,
    },
    color: {
        type: String,
    },
});

const Cellphone = mongoose.model("Cellphone", CellphoneSchema);

module.exports = Cellphone;

