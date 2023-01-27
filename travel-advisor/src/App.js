
import './App.css';
import Header from "./Header/Header";

function App() {
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '1a45904997msh5953a5178ce4a89p1b1ef1jsn3cdfb66640c7',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    },
    body: '{"contentId":"1451754","startDate":"2022-06-30","endDate":"2022-07-01","pax":[{"ageBand":"ADULT","count":2}]}'
  };

  fetch('https://travel-advisor.p.rapidapi.com/attractions/v2/get-details?currency=USD&units=km&lang=en_US', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  return<div>
<Header/>
  </div>
}

export default App;
