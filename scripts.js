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

fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
    .then(res => {
        if (res.ok) {
            console.log('Succesvol');
            return res.json();
        } else {
            console.log('Niet succesvol');
            throw new Error('Fout bij het laden van de gegevens');
        }
    })
    .then(data => {
        const container = document.querySelector('.container1');
        const maybellineItem = container.querySelector('.maybelline');

        const desiredProductIds = [452, 468]; // Vervang dit met de gewenste product-ID's

        for (let i = 0; i < data.length; i++) {
            const product = data[i];
            if (desiredProductIds.includes(product.id)) {
                const { id, name, price, image_link } = product;

                const newItem = document.createElement('div');
                newItem.classList.add('item');
                newItem.innerHTML = `
                        <div class="img">
                            <img src="${image_link}" alt="Productafbeelding" width="110" height="110">
                        </div>
                        <p>ID: ${id}</p>
                        <p>Productnaam: ${name}</p>
                        <p>Prijs: ${price}</p>
                    </div>
                `;

                maybellineItem.appendChild(newItem);
            }
        }
    })
    .catch(error => console.log('Fout: ', error));

    // 2nd fetch for the second brand l'oreal

    fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=l%27oreal')
    .then(res => {
        if (res.ok) {
            console.log('Succesvol');
            return res.json();
        } else {
            console.log('Niet succesvol');
            throw new Error('Fout bij het laden van de gegevens');
        }
    })
    .then(data => {
        const container = document.querySelector('.container1');
        const lorealItem = container.querySelector('.loreal');

        const desiredProductIds = [400, 350]; // Vervang dit met de gewenste product-ID's

        for (let i = 0; i < data.length; i++) {
            const product = data[i];
            if (desiredProductIds.includes(product.id)) {
                const { id, name, price, image_link } = product;

                const newItem = document.createElement('div');
                newItem.classList.add('item');
                newItem.innerHTML = `
                        <div class="img">
                            <img src="${image_link}" alt="Productafbeelding" width="80" height="110">
                        </div>
                        <p>ID: ${id}</p>
                        <p>Productnaam: ${name}</p>
                        <p>Prijs: ${price}</p>
                    </div>
                `;
                lorealItem.appendChild(newItem);
            }
        }
    })
    .catch(error => console.log('Fout: ', error));
;
