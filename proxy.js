var proxy = require("http-proxy-middleware");
var app = require("express")();

const comics = require("./comics.json");

// app.use("/", proxy(""));

app.use("/api", (req, res, next) => {
  const { results } = comics;
  const { search = "" } = req.query;

  res.set("Access-Control-Allow-Origin", "http://localhost:4200");

  if (!search) {
    return res.json(results);
  }

  const filtered = results.filter(({ name }) =>
    name.toLowerCase().includes(search.toLowerCase())
  );

  res.json(filtered);
});

// proxy({ target: 'http://www.example.org', changeOrigin: true })
app.listen(3000, () => console.log("listen at 3000"));
