const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const adSchema = new mongoose.Schema({
    owner: {
        type: ObjectId,
        ref: "User"
    },
    price: {
        type: Number,
        required: true
    },

    photo: {
        type: String

    },
    hasToiletPaper: {
        type: Boolean,
        default: false
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    sold: {
        type: Boolean,
        default: false
    }
});


module.exports = mongoose.model("Ad", adSchema, 'ads');