
var galleryCont = document.getElementById("gallery");

// function createImages() {
//     imgFile.forEach(function(element) {
//         let img = document.createElement('img');
//         img.className = "galleryImage p-2 border-0 img-fluid";
//         img.src = element;
//         img.alt = element;
//         img.id = element[7];
//         galleryCont.appendChild(img);
//     });
// };


function aboutEdit() {
    var child = document.getElementById('about');
    child.style.paddingRight = child.offsetWidth - child.clientWidth + "px";
}


// let x = document.getElementById("content");
// let y = document.getElementById("navbar");
// function changeDisplay() {

//     if (x.style.display === "none") {
//       x.style.display = "block";
//       y.style.display = "none";
//     } else if (x.style.display === "") {
//       x.style.display = "none";
//       y.style.display = "block";
//   }
//       else {
//       x.style.display = "none";
//       y.style.display = "block";
//     }
//   } 