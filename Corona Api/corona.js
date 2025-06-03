async function getCovidData() {
    var dateInput = document.getElementById("dateInput").value;

    if (dateInput === "") {
      alert("Please select a date!");
      return;
    }

    var response = await fetch("https://api.rootnet.in/covid19-in/stats/history");
    var result = await response.json();

    var allData = result.data;
    var dataForDate = null;

    for (var i = 0; i < allData.length; i++) {
      if (allData[i].day === dateInput) {
        dataForDate = allData[i];
        break;
      }
    }

    if (!dataForDate) {
      alert("No data found for the selected date!");
      return;
    }

    showData(dataForDate);
  }

  function showData(data) {
    var container = document.getElementById("cardsContainer");
    container.innerHTML = "";

    for (var i = 0; i < data.regional.length; i++) {
      var state = data.regional[i];
      var card = document.createElement("div");
      card.className = "card";

      card.innerHTML = "<h3>" + state.loc + "</h3>" +
                       "<p><strong>Recovered:</strong> " + state.discharged + "</p>" +
                       "<p><strong>Deaths:</strong> " + state.deaths + "</p>";

      container.appendChild(card);
    }
  }