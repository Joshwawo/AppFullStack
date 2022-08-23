const express = require("express");
const cors = require("cors");
const axios = require("axios");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.use(cors());

const PORT = process.env.PORT || 3001;
const API_KEY = process.env.API_KEY;
const URL_CARD = process.env.URL_CARD;
// console.log(URL_CARD)

// console.log(API_KEY)

// console.log(process.env.API_KEY)

const fetchData = async () => {
  return await axios
    .get(URL_CARD, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    })
    //   console.log(respuesta.data);
    .then((respuesta) => respuesta.data)
    .catch((error) => console.log(error));
};

app.get("/getcard", async (req, res) => {
  //   res.json({ message: "Hola desde getCard" });
  const dataCard = await fetchData();

  //   console.log(dataCard)
  res.json(dataCard);
});

app.listen(PORT, () => {
  console.log(`Server Running on port http://localhost:${PORT}`);
});
