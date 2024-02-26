
const express = require("express");
const app = express();
const voitures = require('./routes/voitures');

app.listen(9000,()=>{console.log("listen on port 9000")
})

app.use(express.json());
app.use('/voitures',voitures);
