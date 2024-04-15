// Ques 3 functionality js code
$("#accordion").accordion({
    collapsible: true,
    heightStyle: "fill"
})
//!XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// Ques 2 functionality js code
function openAddMenuModail(){
  $("#form-container").css("transform" , "scale(1)")
 
}
function closeModel(){
  $("#form-container").css("transform" , "scale(0)")
}

$(document).ready(function() {
  let navData = JSON.parse(localStorage.getItem("NavData")) || [];

function generateMenuRecursive(menuItems, parentElement) {
  menuItems.forEach(item => {
    let menuItem = $(`<li><a class="btn" href="#" title="${item.links}">${item.links}</a></li>`);
    if (item.submenus && item.submenus.length > 0) {
      let submenu = $(`<ul class='list-wrapper'></ul>`);
      generateMenuRecursive(item.submenus, submenu); // Recursive call for nested menus
      menuItem.append(submenu);
    }
    parentElement.append(menuItem);
  });
}

$(document).ready(function() {
  function generateMenu() {
    let parentLink = $("#parent-link");
    parentLink.empty(); // Clear existing menu items
    generateMenuRecursive(navData, parentLink);
    
    // Populate the select dropdown based on existing links in navData
    let selectDropdown = $("#addto");
    selectDropdown.empty();
    selectDropdown.append(`<option value="" selected>CHOOSE...</option>`);
    selectDropdown.append(`<option value="PARENT">PARENT</option>`);
    generateSelectOptions(navData, selectDropdown);
  }

  function generateSelectOptions(menuItems, selectElement) {
    menuItems.forEach(item => {
      selectElement.append(`<option value="${item.links}">${item.links}</option>`);
      if (item.submenus && item.submenus.length > 0) {
        generateSelectOptions(item.submenus, selectElement); // Recursive call for nested items
      }
    });
  }

  // Function to append a new menu item
  function appendMenu(item) {
    let parentLink = $("#parent-link");
    let menuItem = $(`<li><a class="btn" href="#" title="${item.links}">${item.links}</a></li>`);
    if (item.submenus && item.submenus.length > 0) {
      let submenu = $(`<ul class='subnav'></ul>`);
      generateMenuRecursive(item.submenus, submenu); // Generate nested menus
      menuItem.append(submenu);
    }
    parentLink.append(menuItem);
  }

  // Form submission handling
  $('.form-wrapper').submit((e) => {
    e.preventDefault();
    let addto = $("#addto").val().toUpperCase();
    let menuData = $('#AddMenu').val().toUpperCase();

    if (addto === 'PARENT' || !addto) {
      let data = {
        links: menuData,
        submenus: [] // Initialize submenus array
      };
      navData.push(data);
      appendMenu(data); // Append the new menu item
    } else {
      let parent = findMenuItem(navData, addto);
      if (parent) {
        parent.submenus.push({ links: menuData, submenus: [] }); // Push to appropriate submenus array
        generateMenu(); // Regenerate the entire menu
      }
    }
    alert("Link added successfully");
    localStorage.setItem("NavData", JSON.stringify(navData));
    $('.form-wrapper')[0].reset();
    closeModel()
  });

  // Initial menu generation
  generateMenu();
});

// Helper function to find a menu item by its link value recursively
function findMenuItem(menuItems, link) {
  for (let i = 0; i < menuItems.length; i++) {
    if (menuItems[i].links === link) {
      return menuItems[i];
    }
    if (menuItems[i].submenus && menuItems[i].submenus.length > 0) {
      let found = findMenuItem(menuItems[i].submenus, link);
      if (found) return found;
    }
  }
  return null;
}
});
// !XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX



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
          // alert("Data saved to localStorage. Please reload the page.");
          showData();
        }
      };
      reader.readAsDataURL(files[i]);
    }
  }
}

// Show all cards in the gallery
function showData() {
  $("#gallery-container").empty();
  let html = "";

  ImageGalleryDatabase.forEach((img, index) => {
    html += createCard(img, index);
  });

  $("#gallery-container").append(html); // Append existing images

  // Add default image card at the end
  html = `<div class="column add-image-card">
            <form action="#" enctype="multipart/form-data">
              <label for="chooseImage" class="chooseImage-label">
                <span class="circle-box">
                  <span class="line"></span>
                  <span class="line vertical-line"></span>
                </span>
                <input class="chooseImage-input" type="file" accept="image/*" title="Add Image" id="chooseImage" multiple>
              </label>
            </form>
          </div>`;
  
  $("#gallery-container").append(html); // Append default image card
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

//! xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx



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


