
async function appProducts() {
    let product_details = document.querySelector('#product_details');
    let out = '';
    await fetch('https://fakestoreapi.com/products')
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            console.log(result);
            result.map((value, index) => {
                out += `
                <div class="col-md-4" id="${value.id}">
                <div class="card" style="width: 18rem;">
                    <img src="${value.image}" class="card-img-top" alt="" height="300px">
                    <div class="card-body">
                        <h5 class="card-title">${value.title}</h5>
                        <p class="card-text">${value.description}</p>
                    </div>
                </div>
                </div> 
                `;
            });

            product_details.innerHTML = out;
        })
        .catch((error) => {
            console.log(error);
        })
}
appProducts();



