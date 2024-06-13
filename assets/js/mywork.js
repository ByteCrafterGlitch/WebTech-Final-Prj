const passSlider = document.getElementById("password-length-slider");
const displayPassSliderValue = document.getElementById("current-slider-value");
const apiBtn = document.getElementById("api-button");
const outputBox = document.getElementById("api-output");
const passCheckBox = document.getElementById("password-gen");
const dadJokeCheckBox = document.getElementById("dad-joke");
const imgTxtCheckBox = document.getElementById("img-to-txt");
const exNums = document.getElementById("exclude-numbers-checkbox");
const exSpecialChar = document.getElementById("exclude-special-characters-checkbox");
const sliderDiv = document.getElementById("slider-div");
const passExtraParams = document.getElementById("passExtraParamsUl");
const outHead = document.getElementById("output-header");
const imgUpload = document.getElementById("img-upload")
const imgUploadHelpText = document.getElementById("img-upload-help")
const imgUploadImageDisplay = document.getElementById("display-img")
const imgDiv = document.getElementById("img-display-div")
const apiKey = "EPvV0Zwbg6X2l9efIkynEAWxwKP5Tih6wGinysoz"

passSlider.addEventListener("input", function() {
    displayPassSliderValue.textContent = (`Length: ${this.value}`);
});

apiBtn.addEventListener("click", async function() {
    let selectedOption = document.querySelector('input[type="checkbox"]:checked');

    if (selectedOption) {
        if (selectedOption.value === "is-password-gen") {
            dadJokeCheckBox.disabled = true;
            passCheckBox.disabled = true;
            imgTxtCheckBox.disabled = true;
            exNums.disabled = true;
            exSpecialChar.disabled = true;

            try {
                outputBox.textContent = await generatePassword();
            } catch (error) {
                console.error('Error:', error);
                outputBox.textContent = 'An error occurred while generating the password.';
            }

            dadJokeCheckBox.disabled = false;
            passCheckBox.disabled = false;
            imgTxtCheckBox.disabled = false;
            exNums.disabled = false;
            exSpecialChar.disabled = false;

        } else if (selectedOption.value === "is-dad-joke") {
            dadJokeCheckBox.disabled = true;
            passCheckBox.disabled = true;
            imgTxtCheckBox.disabled = true;
            exNums.disabled = true;
            exSpecialChar.disabled = true;

            try {
                outputBox.textContent = await generateDadJoke();
            } catch (error) {
                console.error('Error:', error);
                outputBox.textContent = 'An error occurred while generating the password.';
            }

            dadJokeCheckBox.disabled = false;
            passCheckBox.disabled = false;
            imgTxtCheckBox.disabled = false;
            exNums.disabled = false;
            exSpecialChar.disabled = false;

        } else if (selectedOption.value === "is-img-to-txt") {
            dadJokeCheckBox.disabled = true;
            passCheckBox.disabled = true;
            imgTxtCheckBox.disabled = true;
            exNums.disabled = true;
            exSpecialChar.disabled = true;

            try {
                outputBox.textContent = await imgToTxt();
            } catch (error) {
                console.error('Error:', error);
                outputBox.textContent = 'An error occurred while converting image to text.';
            }

            dadJokeCheckBox.disabled = false;
            passCheckBox.disabled = false;
            imgTxtCheckBox.disabled = false;
            exNums.disabled = false;
            exSpecialChar.disabled = false;
        }
    } else {
        outputBox.textContent = "Please Select An Option";
    }
});

document.addEventListener('change', function(event) {
    if (event.target.matches('input[type="checkbox"]')) {
        let selectedOption = event.target;

        switch (selectedOption.value){
            case "is-password-gen":
                dadJokeCheckBox.checked = false;
                imgTxtCheckBox.checked = false;
                outputBox.textContent = "";
                sliderDiv.style.visibility = "";
                sliderDiv.style.display = "";
                passExtraParams.style.visibility = "";
                passExtraParams.style.display = "";
                imgUpload.style.visibility = "hidden";
                imgUpload.style.display = "none";
                imgUploadHelpText.style.visibility = "hidden";
                imgUploadHelpText.style.display = "none";
                imgUploadImageDisplay.style.visibility = "hidden";
                imgUploadImageDisplay.style.display = "none";
                imgDiv.style.visibility = "hidden";
                imgDiv.style.display = "none";
                outHead.textContent = "Password"
                break;
            case "is-dad-joke":
                passCheckBox.checked = false;
                imgTxtCheckBox.checked = false;
                outputBox.textContent = "";
                sliderDiv.style.visibility = "hidden";
                sliderDiv.style.display = "none";
                passExtraParams.style.visibility = "hidden";
                passExtraParams.style.display = "none";
                imgUpload.style.visibility = "hidden";
                imgUpload.style.display = "none";
                imgUploadHelpText.style.visibility = "hidden";
                imgUploadHelpText.style.display = "none";
                imgUploadImageDisplay.style.visibility = "hidden";
                imgUploadImageDisplay.style.display = "none";
                imgDiv.style.visibility = "hidden";
                imgDiv.style.display = "none";
                outHead.textContent = "Random Dad Joke"
                break;
            case "is-img-to-txt":
                passCheckBox.checked = false;
                dadJokeCheckBox.checked = false
                outputBox.textContent = "";
                sliderDiv.style.visibility = "hidden";
                sliderDiv.style.display = "none";
                passExtraParams.style.visibility = "hidden";
                passExtraParams.style.display = "none";
                imgUpload.style.visibility = "";
                imgUpload.style.display = "";
                imgUploadHelpText.style.visibility = "";
                imgUploadHelpText.style.display = "";
                imgUploadImageDisplay.style.visibility = "";
                imgUploadImageDisplay.style.display = "";
                imgDiv.style.visibility = "";
                imgDiv.style.display = "";
                outHead.textContent = "Image In Text"
                break;

        }
    }
});

imgUpload.addEventListener('change', function(evt) {
    const [file] = imgUpload.files;
    if (file) {
        imgUploadImageDisplay.src = URL.createObjectURL(file);
    }
});

async function generatePassword() {
    const length = passSlider.value;
    const exclude_numbers = exNums.checked
    const exclude_special_chars = exSpecialChar.checked
    try {
        const response = await fetch(`https://api.api-ninjas.com/v1/passwordgenerator?length=${length}&exclude_numbers=${exclude_numbers}&exclude_special_chars=${exclude_special_chars}`, {
            method: 'GET',
            headers: { 'X-Api-Key': apiKey },
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        console.log(result);
        return result.random_password;
    } catch (error) {
        console.error('Error:', error);
        return error.message;
    }
}

async function generateDadJoke() {
    try {
        const response = await fetch('https://api.api-ninjas.com/v1/dadjokes', {
            method: 'GET',
            headers: { 'X-Api-Key': apiKey },
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        console.log(result);
        return result[0].joke;
    } catch (error) {
        console.error('Error:', error);
        return error.message;
    }
}

async function imgToTxt() {
    const formData = new FormData();
    formData.append('image', imgUpload.files[0]);
    try {
        const response = await fetch('https://api.api-ninjas.com/v1/imagetotext', {
            method: 'POST',
            headers: { 'X-Api-Key': apiKey },
            body: formData,
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        console.log(result);
        const sentence = result.map(obj => obj.text).join(' ');
        return sentence.length === 0 ? 'No text in image' : sentence;
    } catch (error) {
        console.error('Error:', error);
        return error.message;
    }
}