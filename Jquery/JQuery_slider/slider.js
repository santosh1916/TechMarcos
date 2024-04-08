// Slick slider code
$(document).ready(() => {
  $(".slider-wrapper").slick({
    nextArrow:$("#next"),
    prevArrow:$("#previous"),
    infinite: false,
    speed: 500,
    slidesToShow:3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1520,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

// ==========================================================================================================================


// drag drop functionalities
let allImageArray = JSON.parse(localStorage.getItem("images")) || [];
$(document).ready(function() {
  let filesSelected;
  $('#inputFile').on('drop', function(event) {
    event.preventDefault();
    let files = event.originalEvent.dataTransfer.files;
    filesSelected = files;
  });

  $('#inputFile').on('change', function() {
    let files = $('#inputFile')[0].files;
    filesSelected = files;
  });

  $("#myForm").submit(function(event) {
    event.preventDefault();
    if (filesSelected) {
      handleFiles(filesSelected);
    }
  });
});

// Function selected files
function handleFiles(files) {
  if (files.length > 0) {
    for(let i = 0; i < files.length; i++){
      let reader = new FileReader();
      let inputFileName = files[i].name;

    reader.onload = function() {
      let fileData = {
        name: inputFileName,
        dataURL: reader.result
      };
      allImageArray.push(fileData);
      localStorage.setItem("images", JSON.stringify(allImageArray));
      // alert here! for sucessfull compilation the all code
    };
    reader.readAsDataURL(files[i]);
    }
  }
  displayData();
}

// ++++++++++++++++++++++++++++++
// show all images form array 

function displayData() {
  allImageArray.forEach((image, index) => {
    let SlideCard = createSlideCard(image, index);
    $("#card-container").prepend(SlideCard);
  });
}

function createSlideCard(image, index) {
  let card = $("<div>" , {
      class : "slide"
    }).html(`<div class="card">
    <div class="card-content">
      <h3>Santorini</h3>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
    <img class="imgFix" src=${image.dataURL}> 
  </div>`);
    
  return card;
}

displayData();



