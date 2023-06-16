// Creating function which will generate and insert the HTML for the listing //

const createListing = function(name, phoneNumber,address, websiteURL, whitenPrice) {
    // Selecting the parent node
    const contentSection = document.querySelector(".content")
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
    // Appending the HTML block to the parent node
    contentSection.appendChild(listing)
}

// Inputting JSON data
let jsonData = `[
    {
     "name": "Taptonville House Dental Practice",
     "address": "1 Taptonville Road, Broomhill, SHEFFIELD, S10 5BQ",
     "phoneNumber": "0114 399 0888",
     "websiteURL": "https:\/\/taptonville.dentalpartners.co.uk\/",
     "whitenPrice": "350"
    },
    {
     "name": "Bealby & Jones",
     "address": "17 Northumberland Road, SHEFFIELD, S10 2TT",
     "phoneNumber": "0114 272 9927",
     "websiteURL": "http:\/\/www.bealbyandjones.co.uk\/",
     "whitenPrice": "350"
    },
    {
     "name": "Sharrow Vale Dental Care",
     "address": "262 Sharrow Vale Road, Hunters Bar, SHEFFIELD, South Yorkshire, S11 8ZH",
     "phoneNumber": "0114 268 6076",
     "websiteURL": "http:\/\/www.sharrowvaledentalcare.co.uk\/",
     "whitenPrice": "350"
    },
    {
     "name": "School Road Dental Practice",
     "address": "257 School Road, Crookes, Sheffield, S10 1GQ",
     "phoneNumber": "0114 266 1335",
     "websiteURL": "https:\/\/www.schoolroaddental.co.uk\/",
     "whitenPrice": "250"
    },
    {
     "name": "LWT Dental Care",
     "address": "719 Ecclesall Road, Ecclesall, SHEFFIELD, South Yorkshire, S11 8TG",
     "phoneNumber": "0114 266 2853",
     "websiteURL": "http:\/\/www.lwtdentalcare.co.uk\/",
     "whitenPrice": "360"
    },
    {
     "name": "Devonshire Quarter Dental Practice",
     "address": "Devonshire Quarter Dental Practice, 1 Convent Walk, SHEFFIELD, S3 7RX",
     "phoneNumber": "0114 276 0483",
     "websiteURL": "http:\/\/www.devonshirequarterdental.co.uk\/",
     "whitenPrice": "350"
    },
    {
     "name": "Sandygate Dental Practice",
     "address": "Sandygate Dental Clinic, 17a Sandygate Road, Crosspool, SHEFFIELD, South Yorkshire, S10 5NG",
     "phoneNumber": "0114 266 1265",
     "websiteURL": "http:\/\/www.sandygatedental.co.uk\/",
     "whitenPrice": "348"
    },
    {
     "name": "mydentist, London Road, Sheffield",
     "address": "240 - 242 London Road, Highfield, Sheffield, South Yorkshire, S2 4LW",
     "phoneNumber": "0114 255 0444",
     "websiteURL": "https:\/\/www.mydentist.co.uk\/sheffield-416",
     "whitenPrice": "250"
    },
    {
     "name": "Abbeydale Road Family Dental Centre",
     "address": "Abbeydale Road Family Dental Centre, 4 - 6 Abbeydale Road, Highfields, SHEFFIELD, Yorkshire, S7 1FD",
     "phoneNumber": "0114 255 4433",
     "websiteURL": "http:\/\/www.abbeydaleroaddental.co.uk\/",
     "whitenPrice": "299"
    },
    {
     "name": "mydentist, South Road, Walkley",
     "address": "263-265 South Road, Walkley, Sheffield, South Yorkshire, S6 3TA",
     "phoneNumber": "0114 233 5332",
     "websiteURL": "https:\/\/www.mydentist.co.uk\/sheffield-289",
     "whitenPrice": "249"
    },
    {
     "name": "Montgomery Dental Care",
     "address": "Montgomery House, 83 Infirmary Road, Netherthorpe, SHEFFIELD, S6 3BZ",
     "phoneNumber": "0114 272 4690",
     "websiteURL": "https:\/\/montgomerydental.uk\/",
     "whitenPrice": "320"
    },
    {
     "name": "mydentist, Shalesmoor, Sheffield",
     "address": "306-310 Shalesmoor, Sheffield, South Yorkshire, S3 8UL",
     "phoneNumber": "0114 321 3814",
     "websiteURL": "https:\/\/www.mydentist.co.uk\/sheffield-474",
     "whitenPrice": "259"
    },
    {
     "name": "Collins & Ball Dental Practice",
     "address": "60 Ecclesall Road South, SHEFFIELD, S11 9PF",
     "phoneNumber": "0114 266 2212",
     "websiteURL": "https:\/\/ecclesalldentalcare.co.uk\/",
     "whitenPrice": "350"
    },
    {
     "name": "Orthodontic Centre (UK) Limited",
     "address": "52 GREEN LANE, SHEFFIELD, Sheffield, South Yorkshire, S3 8SE",
     "phoneNumber": "0114 321 3814",
     "websiteURL": "https:\/\/www.mydentist.co.uk\/dentists\/practices\/england\/south-yorkshire\/sheffield\/52-green-lane",
     "whitenPrice": "259"
    },
    {
     "name": "Parkhill Dental Practice Sheffield",
     "address": "Park Hill Dental Surgery, 112-114 Richards Road, Sheffield, South Yorkshire, S2 3DU",
     "phoneNumber": "0114 250 0122",
     "websiteURL": "http:\/\/sheffielddentalpractice.co.uk\/",
     "whitenPrice": "350"
    },
    {
     "name": "Hillsborough Family Dental Centre",
     "address": "Hillsborough Family Dental Centre, 1 Victor Street, Hillsborough, SHEFFIELD, S6 2SA",
     "phoneNumber": "0114 234 4810",
     "websiteURL": "http:\/\/hillsboroughfamilydental.co.uk\/",
     "whitenPrice": "299"
    },
    {
     "name": "Dee Kay Dental - Sheffield",
     "address": "194 Duke Street, Park Hill, Sheffield, Yorkshire, S2 5QQ",
     "phoneNumber": "0114 272 4409",
     "websiteURL": "https:\/\/www.deekaydental.com\/",
     "whitenPrice": "295"
    },
    {
     "name": "Bupa Dental Care, Malin Bridge",
     "address": "Malin Bridge Dental Practice, 22 Stannington Road, Malin Bridge, SHEFFIELD, South Yorkshire, S6 5FL",
     "phoneNumber": "0114 233 1430",
     "websiteURL": "https:\/\/www.bupa.co.uk\/dental\/dental-care\/practices\/malin-bridge",
     "whitenPrice": "448"
    },
    {
     "name": "mydentist, Spital Hill, Sheffield",
     "address": "197-199 Spital Hill, Burngreave, Sheffield, South Yorkshire, S4 7LF",
     "phoneNumber": "0114 272 8821",
     "websiteURL": "https:\/\/www.mydentist.co.uk\/sheffield-588",
     "whitenPrice": "250"
    },
    {
     "name": "Minto Road Dental Care",
     "address": "1 Minto Road, Hillsborough, SHEFFIELD, S6 4GJ",
     "phoneNumber": "0114 234 3469",
     "websiteURL": "https:\/\/www.mintoroaddentalcare.co.uk\/",
     "whitenPrice": "330"
    },
    {
     "name": "Castle Dental Practice",
     "address": "Castle Dental Practice, 309 City Road, Sheffield, South Yorkshire, S2 5HJ",
     "phoneNumber": "0114 272 1909",
     "websiteURL": "https:\/\/castle.dentalpartners.co.uk\/",
     "whitenPrice": "330"
    },
    {
     "name": "Redmires Dental Care",
     "address": "Redmires Dental Care, 68 Rochester Road, Lodge Moor, SHEFFIELD, S10 4JQ",
     "phoneNumber": "0114 229 5020",
     "websiteURL": "http:\/\/www.redmiresdentalcare.co.uk\/",
     "whitenPrice": "299"
    },
    {
     "name": "Firvale Dental Centre",
     "address": "Firvale Dental Practice, 14 Blyde Road, Firvale, Sheffield, South Yorkshire, S5 7AF",
     "phoneNumber": "0114 242 3111",
     "websiteURL": "https:\/\/www.mydentist.co.uk\/sheffield-109",
     "whitenPrice": "249"
    },
    {
     "name": "Hurlfield Dental Practice",
     "address": "Hurlfield Dental Practice, 49 Hurlfield Road, Manor Top, SHEFFIELD, S12 2SD",
     "phoneNumber": "0114 239 1906",
     "websiteURL": "https:\/\/hurlfield.dentalpartners.co.uk\/",
     "whitenPrice": "275"
    }
   ]`

// Parse the JSON data into a JavaScript object
let parsedData = JSON.parse(jsonData);

// Convert the object into an array of objects
let arrayOfDentits= Object.values(parsedData);

// Converting text of numbers into integers
arrayofDentists = arrayOfDentits.forEach(element => {
    element.whitenPrice = parseInt(element.whitenPrice)
});

// Sorts the array of dentist objects by their price in ascending order //

arrayOfDentits.sort((a,b) => {
    return a.whitenPrice - b.whitenPrice
})

// Looping through the array of dentist objects to add each one to a listing block of HTML
arrayOfDentits.forEach(element => {
    createListing(element.name,element.phoneNumber,element.address,element.websiteURL,element.whitenPrice)
});