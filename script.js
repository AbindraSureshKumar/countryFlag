function createCountry(countriesInfo)
  {
    const countrySpec = document.createElement("div");
    countrySpec.setAttribute("class","card");
    countrySpec.innerHTML = ` <img src="${countriesInfo.flags.svg}">
    <h4>${countriesInfo.name.common}</h4>
    <p><span>Population:</span>${countriesInfo.population}</p>
    <p><span>Region:</span>${countriesInfo.region}</p>
    <p><span>Capital:</span>${countriesInfo.capital}</p>`;
    document.body.append(countrySpec);
  }

fetch("https://restcountries.com/v3.1/all")
 .then((data) => data.json())
 .then((countries) => {
    countries.forEach((country)=>{
        console.log(country);
        createCountry(country);
    });
});