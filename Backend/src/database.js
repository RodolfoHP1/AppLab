const mongoose = require('mongoose');


//console.log(process.env.MONGODB_URI);
const URI = process.env.MONGODB_URI;
//console.log(mongoose.connection.readyState);
mongoose.connect(URI,
    err => {
        //console.log(mongoose.connection.readyState);
        if(err) throw err;
        console.log('connected to MongoDB')
    });

//console.log(mongoose.connection.readyState);

