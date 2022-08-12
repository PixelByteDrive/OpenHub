const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    }

});

module.exports = mongoose.model("License", schema);