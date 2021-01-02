var mongoose = require("mongoose");

var items_Schema = mongoose.Schema({
    cid:String,
    cdur:String,
    cfee:String,
    name:String,
});

const Items = mongoose.model("Items", items_Schema);
module.exports = Items;

