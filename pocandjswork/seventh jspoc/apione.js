const api_url = 
      "https://randomuser.me/api/?results=12&gender=male";
  
// Defining async function
async function getapi(url) {
        // Storing response
    const response = await fetch(url);
        // Storing data in form of JSON
        debugger;
    var data = await response.json();
    console.log(data);
}

getapi(api_url);