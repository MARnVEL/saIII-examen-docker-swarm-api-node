const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

const port = process.env.PORT || 3000;
// const port = 81;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "public")));

// Carpeta pública para archivos estáticos
app.use(express.static("public"));

// Ruta principal
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Ruta para obtener el pronóstico del tiempo
app.get("/weather", async (req, res) => {
  try {
    const cityName = req.query.city;

    // Cambia 'your_api_key' por tu clave de API de OpenWeatherMap
    const apiKey = process.env.API_KEY;
    // const apiKey = "632009ee31ca65e493e6bc49720e15ea";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;

    const weatherResponse = await fetch(url);
    const data = await weatherResponse.json();

    // const temperature = await weatherResponse.data.main.temp;
    const temperature = data.main.temp;
    // console.log("La data es: ", data);
    // console.log("La supuesta temperatura: ", temperature);

    res.json({ temperature });
  } catch (error) {
    res.status(500).json({ error: "Hubo un error al obtener la temperatura." });
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(
    `Servidor escuchando en el puerto ${port}. Ir a http://localhost:${port}`
  );
});
