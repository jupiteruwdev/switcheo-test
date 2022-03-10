import fetch from "node-fetch";

function Connector() {
  this.getPrices = async function () {
    return new Promise(function (resolve, reject) {
      fetch("https://static.ngnrs.io/test/prices")
        .then(function (res) {
          return res.json();
        })
        .then(function (res) {
          resolve(
            res.data.prices.map(function (price) {
              return {
                ...price,
                mid: function () {
                  return (price.buy + price.sell) / 2 / 100;
                },
                quote: function () {
                  return price.pair.slice(3);
                },
              };
            })
          );
        })
        .catch(function (error) {
          reject(error);
        });
    });
  };
}

const ds = new Connector();

ds.getPrices()
  .then((prices) => {
    prices.forEach((price) => {
      console.log(
        `Mid price for ${price.pair} is ${price.mid()} ${price.quote()}.`
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });
