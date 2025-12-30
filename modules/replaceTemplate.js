// card html'ini ve ürün bilgilerini parametre olarak alıcak.
// card html'inin içeirisinde değişken olarak tanımlanan değerlerin yerine ürün bilgilerini ekleyecek bir fonksiyon yazalım.

const replaceTemplate = (html, data) => {
  let output = html.replace("{%PRODUCTNAME%}", data.productName);

  output = output.replace(/{%QUANTITY%}/g, data.quantity);
  output = output.replace(/{%PRICE%}/g, data.price);
  output = output.replace(/{%IMAGE%}/g, data.image);
  output = output.replace(/{%ID%}/g, data.id);
  output = output.replace(/{%NUTRIENTS%}/g, data.id);

  output = output.replace(/{%DESCRIPTION%}/g, data.description);
  output = output.replace(/{%FROM%}/g, data.from);
  //olusturulan yeni güncellenmis card htmli döndür

  if (!data.organic) {
    output = output.replace(/{%NOT_ORGANIC%}/g, "not-organic");
  } else {
    output = output.replace(/{%NOT_ORGANIC%}/g, "");
  }
  return output;
};

//export
module.exports = replaceTemplate;
