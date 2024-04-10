// Ques 3 functionality js code
$("#accordion").accordion({
    collapsible: true,
    heightStyle: "fill"
})

// ----------------------------------------------------------------------------------------------------------------

// Ques 2 functionality js code-
// console.log(navData)
let navDataBase = JSON.parse(localStorage.getItem("NavData")) || [];
function openAddMenuModail(){
  $("#form-container").css("transform" , "scale(1)")
 
}
function closeModel(){
  $("#form-container").css("transform" , "scale(0)")
}

// navData = [
//   { 
//     name: 'PHILOSOPHY',
//     data: { 
//       description: 'This is the philosophy section.',
//       relatedLinks: ['link1', 'link2', 'link3']
//     }
//   },
// ];
navDataBase.forEach((elem)=>{
  $("#addto").append(`<option value="${elem.name}">${elem.name}</option>`)
})

$('.form-wrapper').submit((e)=>{
  e.preventDefault()
  let setNavData = { 
    name: $("#addto")[0].value.toUpperCase(),
    data: { 
      description: $('#AddMenu')[0].value.toUpperCase(),
      relatedLinks: []
    }
  }
  navDataBase.push(setNavData);
  localStorage.setItem("NavData", JSON.stringify(navDataBase));
})

// --------------------------------------------------------------------------------------------------------------------------

// Ques 5 functionality js code
$( function() {
    $( ".row" ).sortable({
        items: $(".gallery-img")
    });
  });

//   Handle add image from
let ImageGalleryDatabase = JSON.parse(localStorage.getItem("Gallery")) || [];

$(document).ready(function() {
  $('#chooseImage').on('drop', function(event) {
    event.preventDefault();
    handleFiles(event.originalEvent.dataTransfer.files);
  });

  $('#chooseImage').on('change', function() {
    handleFiles($('#chooseImage')[0].files);
  });
});

// Function to handle selected files
function handleFiles(files) {
  if (files.length > 0) {
    let fragment = document.createDocumentFragment();
    for (let i = 0; i < files.length; i++) {
      let reader = new FileReader();
      let inputFileName = files[i].name;

      reader.onload = function() {
        let fileData = {
          name: inputFileName,
          dataURL: reader.result
        };
        ImageGalleryDatabase.push(fileData);
        localStorage.setItem("Gallery", JSON.stringify(ImageGalleryDatabase));
        if (i === files.length - 1) {
          $('#chooseImage').val(""); // Reset file input field
          alert("Data saved to localStorage. Please reload the page.");
        }
      };
      reader.readAsDataURL(files[i]);
    }
  }
}

// Show all cards in the gallery
function showData() {
  let html = "";
  ImageGalleryDatabase.forEach((img, index) => {
    html += createCard(img, index);
  });
  $("#gallery-container").prepend(html);
}

// Function to create a single card
function createCard(img, index) {
  return `<div class="column gallery-img">
            <div class="card">
              <div class="card-content"></div>
              <img class="card-img" src="${img.dataURL}"> 
            </div>
          </div>`;
}

// Initial display of data
showData();
// ----------------------------------------------------------------------------------------------------




// Que 4 Load more functionalities

$(document).ready(function() {
  let page = 1;
  let perPage = 5;

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
                      class: 'column'
                  }).html(`<img class="card-img" src="${photo.urls.regular}" alt="${photo.user.bio}">`)
                  $('#content').append(card);
              });
              page++;
          },
          error: function(xhr, status, error) {
              console.error('Error loading content:', error);
          }
      });
  }

  loadmore();

  $(window).scroll(function() {
      if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
          loadmore(); 
      }
  });
});


