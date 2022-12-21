import axios from "axios";

const URL =
  "https://geo-battuta.net/api/country/all/?key=dd0fe950948aebe004fe7f39ce43f3c5";

const fetchDatosComboBox = () => {
  axios
    .get("api/paises")
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default fetchDatosComboBox;
