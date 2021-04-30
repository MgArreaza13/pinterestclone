import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header";
import MainBoard from "./components/mainBoard";
import unplash from "./api/unplash";

function App() {
  const [pins, setNewPins] = useState([]);

  const getImages = (term) => {
    let url = `https://api.unsplash.com/search/collections?page=1&query=${term}&client_id=BAo6eX0_JWEMb6_TYJRZJaoxe_XHKk-yyRdidyjE7vg`;
    return unplash.get(url, {
      headers: {
        "Accept-Version": "v1",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    });
  };

  const onSearchSubmit = (term) => {
    getImages(term)
      .then((res) => {
        let results = res.data.results;

        let newPins = [...results, ...pins];

        newPins.sort(function (a, b) {
          return 0.5 - Math.random();
        });
        setNewPins(newPins);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getNewPins = () => {
    let promises = [];
    let pinData = [];

    let pins = [
      "dogs",
      "programming",
      "reactjs",
      "computer",
      "bulldog",
      "tech",
      "gamming",
      "gammer",
      "robots",
      "space",
      "drone"
    ];

    pins.forEach((pin) => {
      promises.push(
        getImages(pin)
          .then((res) => {
            let results = res.data.results;
            pinData = pinData.concat(results);
            pinData.sort((a, b) => {
              return 0.5 - Math.random();
            });
          })
          .catch((error) => {
            console.log(error);
          })
      );
    });
    Promise.all(promises)
      .then(() => {
        setNewPins(pinData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getNewPins();
  }, []);

  return (
    <div className="App">
      <Header onSubmit={onSearchSubmit} />
      <MainBoard pins={pins} />
    </div>
  );
}

export default App;
