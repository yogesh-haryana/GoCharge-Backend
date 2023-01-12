const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

module.exports = mongoose.connect(process.env.MONGODB_URL , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=> console.log("success"))
.catch((error)=>console.log(error));
