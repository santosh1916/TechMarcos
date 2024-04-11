// localStorage operations using promise
function writeToLocalStorage(key, data) {
    return new Promise((resolve, reject) => {
        try {
            localStorage.setItem(key, JSON.stringify(data));
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function readFromLocalStorage(key) {
    return new Promise((resolve, reject) => {
        try {
            const data = JSON.parse(localStorage.getItem(key));
            resolve(data);
        } catch (error) {
            reject(error);
        }
    });
}

// Updated handleFiles function using promises
function handleFiles(files) {
    if (files.length > 0) {
        let promises = [];
        for (let i = 0; i < files.length; i++) {
            promises.push(readFile(files[i]));
        }

        Promise.all(promises)
            .then(() => {
                $('#chooseImage').val(""); // Reset file input field
                alert("Data saved to localStorage. Please reload the page.");
            })
            .catch(error => {
                console.error("Error reading files:", error);
            });
    }
}

function readFile(file) {
    return new Promise((resolve, reject) => {
        let reader = new FileReader();
        reader.onload = function () {
            let fileData = {
                name: file.name,
                dataURL: reader.result
            };
            ImageGalleryDatabase.push(fileData);
            writeToLocalStorage("Gallery", ImageGalleryDatabase)
                .then(resolve)
                .catch(reject);
        };
        reader.readAsDataURL(file);
    });
}

// Updated loadmore function using promises for AJAX call
function loadmore() {
    if (page <= maxPages) {
        $.ajax({
            url: 'https://api.unsplash.com/photos/',
            type: 'GET',
            data: {
                client_id: 'zbqpFXTRnAW5i_CiT7asY3n7sCy5dTYisF810tG5iWs',
                page: page,
                per_page: perPage
            }
        })
        .then(response => {
            return new Promise((resolve, reject) => {
                response.forEach(function (photo) {
                    let card = $('<div>', {
                        class: 'column',
                        style: 'display: none;'
                    }).html(`<img class="card-img" src="${photo.urls.regular}" alt="${photo.user.bio}">`)
                    $('#content').append(card);
                    card.fadeIn(2000);
                });
                page++;
                resolve();
            });
        })
        .catch(error => {
            console.error('Error loading content:', error);
        });
    }
}

// Open add menu modal
function openAddMenuModail() {
    $("#form-container").css("transform", "scale(1)");
}

// Close modal
function closeModel() {
    $("#form-container").css("transform", "scale(0)");
}

// Registration form for get premium code
$(document).ready(function() {
    $('#registrationForm').submit(function(event) {
        event.preventDefault();
        const fullName = $('#fullName').val();
        const email = $('#email').val();
        const premiumCode = Math.random().toString(36).substring(2, 10).toUpperCase();

        localStorage.setItem('premiumCode', premiumCode);
        localStorage.setItem('userFullName', fullName);
        localStorage.setItem('userEmail', email);

        alert('Registration successful! Your premium code is: ' + premiumCode);
        $('#registrationForm')[0].reset();
    });
});

// Unlock Premium Button Click Event
$("#uploadImageForm").hide(); // by default  upload image form hide
$('#unlockBtn').click(function() {
    $('#premiumForm').show();
});

// Submit Code Button Click Event
$('#submitCode').click(function() {
    const enteredCode = $('#loginCode').val();
    const correctCode = localStorage.getItem('premiumCode');
    if (enteredCode === correctCode) {
        sessionStorage.setItem('premiumUnlocked', true);
        $('#premiumForm').hide();
        showPremiumGallery();
        $("#uploadImageForm").show();
    } else {
        alert('Incorrect code. Please try again.');
    }
});


$("#accordion").accordion({
    collapsible: true,
    heightStyle: "fill"
});

// Premium feature sections
$(".row").sortable({
    items: $(".column")
});
let defaultImageURLs = [
    "https://example.com/default-image1.jpg",
    "https://example.com/default-image2.jpg",
    "https://example.com/default-image3.jpg"
];
let ImageGalleryDatabase = JSON.parse(localStorage.getItem("Gallery")) || [];

$(document).ready(function() {
    if (ImageGalleryDatabase.length === 0) {
        defaultImageURLs.forEach(function(url) {
            let defaultImage = {
                name: 'Default Image',
                dataURL: url
            };
            ImageGalleryDatabase.push(defaultImage);
        });
        localStorage.setItem("Gallery", JSON.stringify(ImageGalleryDatabase));
    }

    $('#chooseImage').on('drop', function(event) {
        event.preventDefault();
        handleFiles(event.originalEvent.dataTransfer.files);
    });

    $('#chooseImage').on('change', function() {
        handleFiles($('#chooseImage')[0].files);
    });
});

function showPremiumGallery() {
    let html = "";
    ImageGalleryDatabase.forEach((img, index) => {
        html += createCard(img, index);
    });
    $("#gallery-container").prepend(html);
}

function createCard(img, index) {
    return `<div class="column gallery-img">
                <div class="card">
                    <div class="card-content"></div>
                    <img class="card-img" src="${img.dataURL}"> 
                </div>
            </div>`;
}

// Fade in Fade out effect using Ajax() get()
let page = 1;
const maxPages = 10;
let perPage = 3;

function loadmore() {
    if (page <= maxPages) {
        $.ajax({
            url: 'https://api.unsplash.com/photos/',
            type: 'GET',
            data: {
                client_id: 'zbqpFXTRnAW5i_CiT7asY3n7sCy5dTYisF810tG5iWs',
                page: page,
                per_page: perPage
            },
            success: function(response) {
                response.forEach(function(photo) {
                    let card = $('<div>', {
                        class: 'column',
                        style: 'display: none;'
                    }).html(`<img class="card-img" src="${photo.urls.regular}" alt="${photo.user.bio}">`)
                    $('#content').append(card);
                    card.fadeIn(2000);
                });
                page++;
            },
            error: function(xhr, status, error) {
                console.error('Error loading content:', error);
            }
        });
    }
}

loadmore();

$(window).scroll(function() {
    if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
        loadmore(); 
    }
});
