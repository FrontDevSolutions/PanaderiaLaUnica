const mongoose = require("mongoose");

try{
    mongoose.connect(
        "mongodb+srv://admin_tienda:SCy1N1xUZauzU9oV@cluster0.psksedj.mongodb.net/api_login?retryWrites=true&w=majority",
        {
            useNewUrlParser: true
        }
    )
    console.log('Bases de datos conectada');
} catch (err) {
    console.log(err);
}

