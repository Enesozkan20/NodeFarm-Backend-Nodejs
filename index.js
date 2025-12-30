const http = require("http");
const fs = require("fs");
const url = require("url");

const replaceTemplate = require("./modules/replaceTemplate");

/*
* createServer (), verdiğimiz dinleyiciyi fonksiyona her geldiğinde tetikler.
* Bu fonksiyon 2 parametre alır.
* 1) request > istek ile alakalı verileri içeren nesne.
* 2) response > cevap göndermemmizi sağlayacak nesne.


* Bu foksiyon içeriisnde gelen isteğe göre cevap gönderilir.

*/

// html sablonuna eris
let tempOverview = fs.readFileSync("./templates/overview.html", "utf-8");
let tempProduct = fs.readFileSync("./templates/product.html", "utf-8");
let tempCard = fs.readFileSync("./templates/card.html", "utf-8");

// JSON dosyasina eris ve oku
let jsonData = fs.readFileSync("./dev-data/data.json", "utf-8");

const data = JSON.parse(jsonData);

//Server olusturma
const server = http.createServer((req, res) => {
  console.log("😀 API'YE İSTEK GELDİ .", req.url);

  const { query, pathname } = url.parse(req.url, true);

  switch (pathname) {
    case "/overview":
      // ürünler dizinde ki eleman sayisi kadar kart olustur
      const cards = data.map((item) => replaceTemplate(tempCard, item));

      tempOverview = tempOverview.replace("{%PRODUCT_CARDS%}", cards);
      return res.end(tempOverview);

    case "/product":
      const item = data.find((item) => item.id == query.id);

      const output = replaceTemplate(tempProduct, item);

      return res.end(outputg);
    default:
      return res.end("<h1>Tanimlanmayan yol</h1>");
  }
});

// Bir dinleyici oluşturup hangi porta gelen isteklerin dinleneceğini söylemeliyiz.
server.listen(4300, "127.0.0.1", () => {
  console.log("sklfelkfvkj");
});
