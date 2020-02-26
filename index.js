// Härifrån startar vi upp vår webshop
const mongoose = require("mongoose");
const dbUrl =
  process.env.MONGO_ATLAS_URL || require("./config/config").databaseURL; // the right way!
const { app, port } = require("./src/server");

// Kicka igång servern
const dbOptions = { useUnifiedTopology: true, useNewUrlParser: true };
mongoose.connect(dbUrl, dbOptions).then(() => {
  app.listen(port, () => console.log(`App listening on port ${port}!`));
});

module.exports = { app, port };
