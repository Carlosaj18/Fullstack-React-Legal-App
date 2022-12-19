const URL = "https://geo-battuta.net/api/country/all/?key=dd0fe950948aebe004fe7f39ce43f3c5&callback=?"

  const fetchDatosComboBox = async () => {
    let dataJSON;
    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/json",
      credentials: "same-origin",
      crossorigin: true,
      origin: "http://localhost:3000/",
      "Access-Control-Allow-Origin": "*",
    };
    try {
      const response = await fetch(`${URL}`, {
        method: "GET",
        headers: headersList,
      });
      dataJSON = await response.json();
      console.log(dataJSON);
    } catch (error) {
      console.log(error);
    }
  };

  export default fetchDatosComboBox;