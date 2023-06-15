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
        websiteURL: "http://www.bealbyandjones.co.uk/",
        whitenPrice: 350,

    },
    {
        name: "Sharrow Vale Dental Care",
        phoneNumber: "0114 268 6076",
        address: "262 Sharrow Vale Road, Hunters Bar, SHEFFIELD, South Yorkshire, S11 8ZH",
        websiteURL: "http://www.sharrowvaledentalcare.co.uk/",
        whitenPrice: 450, 

    }
]

// Sorts the array of dentist objects by their price in ascending order //

dentists.sort((a,b) => {
    return a.whitenPrice - b.whitenPrice
})

// Looping through the array to create a listing for each object in the array //


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
            <a href="${websiteURL}"><button class="cta website">
                <h4>Go to Website</h4>
            </button></a>
            <button class="cta telephone">
                <p>Call</p>
                <h4>${phoneNumber}</h4>
            </button>
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

createListing("Etienne's dentist","11111111", "her is address","https//www.youtube.com",100)

