let data = JSON.parse(localStorage.getItem("ads"));

function createId(id){
  localStorage.setItem("adId", JSON.stringify(id))
  window.location.href = "/details.html"
}

  function showAd(){  
    for (let i = 0; i < data.length; i++) {
      var container = document.getElementById("fluid-container");
      
      var ddiv = document.createElement("div");
      // export let id = data[i].id
      ddiv.innerHTML = `
      <div class="card" style="width: 18rem;">
        <img src="${data[i].image}" alt="...">
        <div class="card-body">
        <h5 id="title" class="card-title">${data[i].adTitle}</h5>
        <p class="card-text">${data[i].description}</p>
        <p class="card-text"><b>${data[i].price}</b></p>
        <a onclick="createId(${data[i].id})" class="btn btn-primary">View Details</a>
      </div>`;
      container.appendChild(ddiv)
    }
  }
 
  if(window.location.href == "http://127.0.0.1:5501/index.html"){
    showAd()
  }


// href="file:///home/shoaib97/Desktop/sir-kashif-saylani/assignments/olx-application/details.html"