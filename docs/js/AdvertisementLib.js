fetch("https://tailtwiststudios.github.io/TTS-VRC-Public-Resources/universal/adMetadata.json")
    .then(function (response) {
        //wait for the promise to be fufilled
        return response.json();
    })
    .then(function(data) {
        let adMetadata = data.adMetadata;

        for (let i = 0; i < 3; i++) {
            let imageElement = document.getElementById(`ad-image-${(i+1)}`);
            imageElement.alt = adMetadata[i].imageAltText;

            let linkElement = document.getElementById(`ad-link-${(i+1)}`);
            linkElement.href = adMetadata[i].linkDestination;
        }
    })
    .catch(function (err) {
        console.log(err);
    });