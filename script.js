const CountryButton = document.getElementById("country-btn");
CountryButton.addEventListener("click", function () {
  const countryInput = document.getElementById("country-input").value;
  myCountry(countryInput);
});

function myCountry(name) {
  fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    .then((res) => res.json())
    .then((data) => {
      findCountry(data);
    });

  // myCountry();
  // const capital = document.getElementById("capital").innerText;
  // const language = document.getElementById("language").innerText;
  // const currency = document.getElementById("currency").innerText;
  function findCountry(countries) {
    const ul = document.getElementById("myList");
    for (let i = 0; i < countries.length; i++) {
      const country = countries[i];
      console.log(countries);
      let li = document.createElement("li");
      li.innerText = country.name;
      ul.appendChild(li);
      
    }
    document.getElementById("capital").innerText = countries[0].capital;
      document.getElementById("currency").innerText = countries[0].currencies[0].code;
      document.getElementById("language").innerText = countries[0].languages[0].name;
      document.getElementById('population').innerText = countries[0].population;
      document.getElementById("country-input").value= '';
  }
}
