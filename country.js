class Country {
    constructor(name, lang, greeting, colors, flagImg) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
        this.flagImg = flagImg;
    }
}
const usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"],"https://cdn.britannica.com/33/4833-050-F6E415FE/Flag-United-States-of-America.jpg");
const mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["#Color1", "white", "green"],"https://cdn.britannica.com/73/2573-050-C825CE68/Flag-Mexico.jpg");
const algeria = new Country("Algeria", "Arabic", "Marhaban Bialealam", ["red","white","green"], "https://cdn.britannica.com/34/3034-004-1A765B57/Flag-Algeria.jpg")
const brazil = new Country("Brazil", "Portuguese", "Olá Mundo", ["green", "yellow"],"https://cdn.britannica.com/47/6847-050-075C3C65/Flag-Brazil.jpg");
const ireland = new Country("Ireland", "Celtic", "'Dia duit ar domhan", ["green","white", "orange"],"https://cdn.britannica.com/33/1733-050-04264811/FLAG-Ireland.jpg");

function SwitchCountry() {
    const input = document.getElementById("CountryList").value;

    if (input === "USA") {
        //set country to usa 
        country = usa;
        document.getElementById("CountryName").innerText = country.name;
        document.getElementById("OfficialLanguage").innerText = country.lang;
        document.getElementById("HelloWorld").innerText = country.greeting;
        document.getElementById("Color1").style.backgroundColor = country.colors[0];
        document.getElementById("Color2").style.backgroundColor = country.colors[1];
        document.getElementById("Color3").style.backgroundColor = country.colors[2];
        document.getElementById("flagImg").src = country.flagImg;

    }
    else if (input === "Mexico") { 
        country = mexico;
        document.getElementById("CountryName").innerText = country.name;
        document.getElementById("OfficialLanguage").innerText = country.lang;
        document.getElementById("HelloWorld").innerText = country.greeting;
        document.getElementById("Color1").style.backgroundColor = country.colors[0];
        document.getElementById("Color2").style.backgroundColor = country.colors[1];
        document.getElementById("Color3").style.backgroundColor = country.colors[2];
        document.getElementById("flagImg").src = country.flagImg;

     }
    else if (input === "Algeria") {
        country = algeria;
        document.getElementById("CountryName").innerText = country.name;
        document.getElementById("OfficialLanguage").innerText = country.lang;
        document.getElementById("HelloWorld").innerText = country.greeting;
        document.getElementById("Color1").style.backgroundColor = country.colors[0];
        document.getElementById("Color2").style.backgroundColor = country.colors[1];
        document.getElementById("Color3").style.backgroundColor = country.colors[2];
        document.getElementById("flagImg").src = country.flagImg;
    }
    else if (input === "Brazil") {
        country = brazil;
        document.getElementById("CountryName").innerText = country.name;
        document.getElementById("OfficialLanguage").innerText = country.lang;
        document.getElementById("HelloWorld").innerText = country.greeting;
        document.getElementById("Color1").style.backgroundColor = country.colors[0];
        document.getElementById("Color2").style.backgroundColor = country.colors[1];
        document.getElementById("Color3").style.backgroundColor = country.colors[2];
        document.getElementById("flagImg").src = country.flagImg;

    }
    else if (input === "Ireland") {
        country = ireland;
        document.getElementById("CountryName").innerText = country.name;
        document.getElementById("OfficialLanguage").innerText = country.lang;
        document.getElementById("HelloWorld").innerText = country.greeting;
        document.getElementById("Color1").style.backgroundColor = country.colors[0];
        document.getElementById("Color2").style.backgroundColor = country.colors[1];
        document.getElementById("Color3").style.backgroundColor = country.colors[2];
        document.getElementById("flagImg").src = country.flagImg;

    }

}

