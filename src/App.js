import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [imageUrl, setImageUrl] = useState(
    "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg"
  );
  const [errorMessage, setErrorMessage] = useState("");

  const getRandomImage = () => {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        setImageUrl(response.data.message);
      })
      .catch((error) => {
        setErrorMessage(<section>{error.response.data.message}</section>);
      });
  };

  const onButtonClick = () => {
    getRandomImage();
  };

  useEffect(() => getRandomImage, []);

  return (
    <div>
      <h1>My Dog Log</h1>
      {errorMessage}
      <div>
        <button onClick={onButtonClick}>Get New Random Dog</button>
        <img src={imageUrl} alt="A random dog" />
      </div>
    </div>
  );
}

export default App;
