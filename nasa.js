const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=5cdVpw5czXmnqXNPRR0TJXEza4hLtegtwYqUHExk&count=5`;

const apodElement = document.getElementById("apod");
const startElement = document.getElementById("start");
const afeedElement = document.getElementById("afeed");
const afeedTable = document.getElementById("afeedTable");

sendApiRequest()

//An asynchronous function to fetch data from the API. (setting API)
async function sendApiRequest() {
    let response = await fetch(apiUrl);
    let data = await response.json()
    console.log(data);
    createDOMNodes(data);
}
let media = "";
function createDOMNodes(data) {
    data.forEach(result => {
        console.log(result);
        if (result.media_type === "image") {
            media = `<img class="responsive-img" src="${result.hdurl}">`
        } else {
            media = `<div class="video-container">
                           <iframe src="${result.hdurl}" width="560" height="315"></iframe>
                       </div>`
        }

        apodElement.innerHTML += (`
               <div class="card-image">
                   ${media}
                   <span class="card-title">${result.title}</span>
               </div>
               <div class="card-content">
                   <p>
                       ${result.explanation}
                   </p>
   
                   <p>${(new Date(result.date)).toDateString()}</p>
                   <p>© ${result.copyright}</p>
               </div>
               <div class="card-action">
               <button id="btnh2" class="icon"><i class="far fa-heart"></i></button>
               </div>
           `)
    })
}

window.addEventListener("DOMContentLoaded", contentLoaded)