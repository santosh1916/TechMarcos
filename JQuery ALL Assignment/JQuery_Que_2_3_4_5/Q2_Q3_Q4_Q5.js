// Ques 3 functionality js code
$("#accordion").accordion({
    collapsible: true,
    heightStyle: "fill"
})
//!XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// Ques 2 functionality js code
function openAddMenuModail(){
  $("#form-container").css("transform" , "scale(1)")
 
}
function closeModel(){
  $("#form-container").css("transform" , "scale(0)")
}

$(document).ready(function() {
  let navData = JSON.parse(localStorage.getItem("NavData")) || [];

  function generateMenu() {
    let parentLink = $("#parent-link");
    parentLink.empty(); // Clear existing menu items
    
    navData.forEach(item => {
      let menuItem = $(`<li class = "parent-li"><a class="btn" href="#" title="${item.links}">${item.links}</a></li>`);
      if (item.sublinks && item.sublinks.length > 0) {
        let submenu = $(`<ul class='subnav'></ul>`);
        item.sublinks.forEach(sublink => {
          submenu.append(`<li><a class="btn" href="#">${sublink}</a></li>`);
        });
        menuItem.append(submenu);
      }
      parentLink.append(menuItem);
    });

    // Populate the select dropdown based on existing links in navData
    let selectDropdown = $("#addto");
    selectDropdown.empty();
    selectDropdown.append(`
    <option value="" selected>CHOOSE...</option>
                <option value="PARENT">PARENT</option>
    `)
    navData.forEach(elem => {
      selectDropdown.append(`<option value="${elem.links}">${elem.links}</option>`);
      });
    }

  // Function to append a new menu item
  function appendMenu(item) {
    let parentLink = $("#parent-link");
    let menuItem = $(`<li><a class="btn" href="#" title="${item.links}">${item.links}</a></li>`);
    if (item.sublinks && item.sublinks.length > 0) {
      let submenu = $(`<ul class='subnav'></ul>`);
      item.sublinks.forEach(sublink => {
        submenu.append(`<li><a class="btn" href="#">${sublink}</a></li>`);
      });
      menuItem.append(submenu);
    }
    parentLink.append(menuItem);
    
  }

  // Show child elem on click parent link
  $("#parent-link").on("click", ".btn", function() {
    $(".subnav").removeClass("scale-up");
    $(this).next(".subnav").toggleClass("scale-up");
  });

  // Form submission handling
  $('.form-wrapper').submit((e) => {
    e.preventDefault();
    let addto = $("#addto").val().toUpperCase();
    let menuData = $('#AddMenu').val().toUpperCase();

    if (addto === 'PARENT' || !addto) {
      let data = {
        links: menuData,
        sublinks: []
      };
      navData.push(data);
      appendMenu(data); // Append the new menu item
    } else {
      let parent = navData.find(item => item.links === addto);
      if (parent) {
        parent.sublinks.push(menuData);
        generateMenu(); // Regenerate the entire menu
      }
    }
    alert("link add successFull")
    localStorage.setItem("NavData", JSON.stringify(navData));
  });

  // Initial menu generation
  generateMenu();
});
// !XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX



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

//! xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx



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


