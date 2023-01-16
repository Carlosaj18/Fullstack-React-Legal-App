const URL =
  "https://geo-battuta.net/api/country/all/?key=dd0fe950948aebe004fe7f39ce43f3c5";
const BATTUTA_KEY = "00000000000000000000000000000000";
const URLTESTING =
  "https://geo-battuta.net/api/country/all/?key=" + BATTUTA_KEY;

async function fetchDatosComboBox() {
  try {
    const response = await fetch(URLTESTING, {
      "Cache-Control": "no-cache",
      Host: "http://localhost:3000/",
      "User-Agent": "http://localhost:3000/",
      Accept: "*/*",
      "Accept-Encoding": "gzip, deflate, br",
      Connection: "keep-alive",
    });
    let jsonResponse = await response.json();
    return jsonResponse;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchDatosComboBoxRegions(countryCode) {
  console.log(countryCode);
  if (countryCode !== "") {
    try {
      const response = await fetch(
        "https://geo-battuta.net/api/region/" +
          countryCode +
          "/all/?key=" +
          BATTUTA_KEY,
        {
          "Cache-Control": "no-cache",
          Host: "http://localhost:3000/",
          "User-Agent": "http://localhost:3000/",
          Accept: "*/*",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
        }
      );
      let jsonResponse = await response.json();
      return jsonResponse;
    } catch (error) {
      console.error(error);
    }
  }
}

export async function fetchDatosComboBoxCiudades(countryCode, region) {
  console.log(region);
  if (region !== "") {
    try {
      const response = await fetch(
        "http://geo-battuta.net/api/city/" +
          countryCode +
          "/search/?region=" +
          region +
          "&key=" +
          BATTUTA_KEY,
        {
          "Cache-Control": "no-cache",
          Host: "http://localhost:3000/",
          "User-Agent": "http://localhost:3000/",
          Accept: "*/*",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
        }
      );
      let jsonResponse = await response.json();
      return jsonResponse;
    } catch (error) {
      console.error(error);
    }
  }
}

export default fetchDatosComboBox;
