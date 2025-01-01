fetch("https://tailtwiststudios.github.io/TTS-VRC-Public-Resources/universal/adMetadata.json")
    .then(function (response) {
        //wait for the promise to be fufilled
        return response.json();
    })
    .then(function(data) {
        let adMetadata = data.adMetadata;
        let randomIndex = Math.floor(Math.random() * adMetadata.length);


        let imageElement = document.getElementById(`ad-image`);
        imageElement.src = "https://tailtwiststudios.github.io/TTS-VRC-Public-Resources/universal/Image" + (randomIndex + 1) + ".png"
        imageElement.alt = adMetadata[randomIndex].imageAltText;

        let linkElement = document.getElementById(`ad-link`);
        linkElement.href = adMetadata[randomIndex].linkDestination;

        let adDisclaimer = document.getElementById('ad-disclaimer');
        adDisclaimer.textContent = adMetadata[randomIndex].imageAltText;
        
        console.log("Successfully loaded advertisments. If you're looking to block them, block divs with the class 'ad'.")
    })
    .catch(function (err) {
        console.log(err);
    });