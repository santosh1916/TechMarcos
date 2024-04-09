$("#accordion").accordion({
    collapsible: true,
    heightStyle: "fill"
})

$( function() {
    $( ".row" ).sortable({
        items: $(".gallery-img")
    });
  });


  $(".btn[title='PHILOSOPHY']").click(function() {
    $(this).next(".subnav").toggleClass("scale-up" ,  "scale-down");
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

