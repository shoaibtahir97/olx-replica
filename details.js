let adData = JSON.parse(localStorage.getItem("ads"));

let adId = JSON.parse(localStorage.getItem("adId"))

for (let i = 0; i < adData.length; i++) {
    if (adId == adData[i].id) {
        console.log(adData[i])
        const adDetails = document.getElementById("ad-details");
        let detailsDiv = document.createElement("div");
        detailsDiv.innerHTML = `
        <div class="container">
            <div class="row">
                <div class="detailData-image col-8">
                    <img src="${adData[i].image}" width="100%" />
                </div>
                <div  class="detailData-price col-4">
                    <h2><b>Rs ${adData[i].price}</b></h2> 
                    <h5>${adData[i].adTitle}</h5>
                </div>
                <div class="detailData-description col col-8">
                    <h2><b>Description</b></h2>
                    <p>${adData[i].description}</p>
                </div>
            </div>
        </div>
        `;
        adDetails.appendChild(detailsDiv)
    }
}

