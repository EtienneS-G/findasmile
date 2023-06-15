// Creating the JS object to work from - NOTE prices are made up for testing //

const dentists = [
    {
        name: "Taptonville House Dental Practice",
        phoneNumber: "0114 399 0888",
        address: "1 Taptonville Road, Broomhill, SHEFFIELD, S10 5BQ",
        websiteURL: "https://taptonville.dentalpartners.co.uk/",
        whitenPrice: 250,

    },
    {
        name: "Bealby & Jones",
        phoneNumber: "0114 272 9927",
        address: "17 Northumberland Road, SHEFFIELD, S10 2TT",
        websiteURL: "https://www.bealbyandjones.co.uk/",
        whitenPrice: 350,

    },
    {
        name: "Sharrow Vale Dental Care",
        phoneNumber: "0114 268 6076",
        address: "262 Sharrow Vale Road, Hunters Bar, SHEFFIELD, South Yorkshire, S11 8ZH",
        websiteURL: "https://www.sharrowvaledentalcare.co.uk/",
        whitenPrice: 450, 

    }
]

// Sorts the array of dentist objects by their price in ascending order //

dentists.sort((a,b) => {
    return a.whitenPrice - b.whitenPrice
})

// Creating function which will generate and insert the HTML for the listing //

const createListing = function(name, phoneNumber,address, websiteURL, whitenPrice) {
    // Selecting the parent node
    const contentSection = document.querySelector(".content")
    console.log(contentSection)
    //Creating the div that will contain the HTML
    const listing = document.createElement("div")
    listing.classList.add("dentistListing")

    //Creating the HTML to go inside that div
    let htmlBlock = 
    `<div class="info">
    <div>
        <h2>${name}</h2>
        <p>${address}</p>
    </div>
    <div class="buttons">
        <a href="${websiteURL}" target="_blank" class="cta website"><h4>Go to website</h4></a>
        <a href="tel:${phoneNumber}" class="cta telephone">
            <h4>Call now</h4>
        </a>
    </div>
</div>
<div class="price">
    <p1>From</p1>
    <h3>£${whitenPrice}</h3>
</div>`

    // Putting the HTML inside the div
    listing.innerHTML = htmlBlock
    console.log(listing)
    console.log(contentSection)
    // Appending the HTML block to the parent node
    contentSection.appendChild(listing)
}

// Looping through the array of dentist objects to add each one to a listing block of HTML
dentists.forEach(element => {
    createListing(element.name,element.phoneNumber,element.address,element.websiteURL,element.whitenPrice)
});

