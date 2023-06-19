const li_elements = document.querySelectorAll(".wrapper_left ul li");
const item_elements = document.querySelectorAll(".item");
for(let i = 0; i < li_elements.length; i++){
    li_elements[i].addEventListener("click", function(){
        li_elements.forEach(function(li){
            li.classList.remove("active");
        })
        this.classList.add("active");
        const li_value = this.getAttribute("data-li");
        item_elements.forEach(function(item){
          item.style.display = "none";
        })

        if(li_value == "maybelline"){
            document.querySelector("." + li_value).style.display = "block";

        }
        else if(li_value == "loreal"){
            document.querySelector("." + li_value).style.display = "block";

        } else{
            console.log("");
        }
    
    })
}

// #fetch the API and after that the promises arise 
fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
    .then(response => {
        if (response.ok) {
            console.log('Succesfully connected to API');
            return response.json();
        } else {
            console.log('Unable to find API');
        }
    })
    .then(makeupdata => {
        const container = document.querySelector('.container1');
        const maybellineProduct = container.querySelector('.maybelline');

        const wantedProductId = [452, 468];

        for (let i = 0; i < makeupdata.length; i++) {
            const product = makeupdata[i];
            if (wantedProductId.includes(product.id)) {
                const { id, name, price, image_link} = product;

                const makeupItem = document.createElement('div');
                makeupItem.classList.add('item');
                makeupItem.innerHTML = `
                            <img src="${image_link}" alt="Productafbeelding" width="110" height="110">
                        </div>
                        <p>ID: ${id}</p>
                        <p>Productnaam: ${name}</p>
                        <p>Prijs: ${price}</p>
                    </div>
                `;

                maybellineProduct.appendChild(makeupItem);
            }
        }
    })
    .catch(error => console.log('Fout: ', error));

    // 2nd fetch for the second brand l'oreal

    fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=l%27oreal')
    .then(response => {
        if (response.ok) {
            console.log('Succesfully connected to API');
            return response.json();
        } else {
            console.log('Unable to find API');
        }
    })
    .then(makeupdata => {
        const container1 = document.querySelector('.container1');
        const lorealItem = container1.querySelector('.loreal');

        const wantedProductId = [400, 350];

        for (let i = 0; i < makeupdata.length; i++) {
            const product = makeupdata[i];
            if (wantedProductId.includes(product.id)) {
                const { id, name, price, image_link} = product;

                const makeupItem = document.createElement('div');
                makeupItem.classList.add('item');
                makeupItem.innerHTML = `
                            <img src="${image_link}" width="110" height="110">
                        </div>
                        <p>ID: ${id}</p>
                        <p>Productnaam: ${name}</p>
                        <p>Prijs: ${price}</p>
                    </div>
                `;
                lorealItem.appendChild(makeupItem);
            }
        }
    })
    .catch(error => console.log('Fout: ', error));
;
