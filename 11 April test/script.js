// localStorage operations using promise
let ImageGalleryDatabase = JSON.parse(localStorage.getItem("Gallery")) || [];
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


function openAddMenuModail() {
    $("#form-container").css("transform", "scale(1)");
}

function closeModel() {
    $("#form-container").css("transform", "scale(0)");
}

$(document).ready(function() {
    // by default imageUpload button hide
    $("#uploadImageForm").hide();

    if (isPremiumUnlocked()) {
        showPremiumGallery();
        $("#unlockBtn").hide();
        $("#uploadImageForm").show();
    }

    $('#chooseImage').on('drop', function(event) {
        event.preventDefault();
        handleFiles(event.originalEvent.dataTransfer.files);
    });

    $('#chooseImage').on('change', function() {
        handleFiles($('#chooseImage')[0].files);
    });

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

    $('#unlockBtn').click(function() {
        $('#premiumForm').show();
    });

    $('#submitCode').click(function() {
        const enteredCode = $('#loginCode').val();
        const correctCode = localStorage.getItem('premiumCode');
        if (enteredCode === correctCode) {
            sessionStorage.setItem('premiumUnlocked', true);
            $('#premiumForm').hide();
            showPremiumGallery();
            $("#uploadImageForm").show();
            $("#unlockBtn").hide();
        } else {
            alert('Incorrect code. Please try again.');
            $("#uploadImageForm").hide();

        }
    });

    $("#accordion").accordion({
        collapsible: true,
        heightStyle: "fill"
    });

    $(".row").sortable({
        items: $(".column")
    });
    
    let defaultImageURLs = [
        "https://images.unsplash.com/photo-1710170600227-b6c13928f878?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1712414951449-424e662f6e74?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1712514496282-6f3a73aff338?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ];
  

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

    

});

// Define page outside the loadmore function
let page = 1;
let perPage = 3;

function loadmore() {
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

// Initial load
loadmore();

// Load more on scroll
$(window).scroll(function() {
    if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
        loadmore(); 
    }
});


// Check if premium is unlocked
function isPremiumUnlocked() {
    return sessionStorage.getItem('premiumUnlocked') === 'true';
}
