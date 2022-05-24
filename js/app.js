let drop_icon = document.querySelector('.drop_icon');
let icon = document.querySelector('.fa-arrow-up-from-bracket');
let dropdiv = document.querySelector('.dropdiv');
let table = document.querySelector('.table');
let input = document.querySelector('.drop_icon input');



icon.onclick = () => input.click();

input.onchange = function (e) {
    e.preventDefault();
    uploadImg(e.target.files);
}


drop_icon.ondragover = e => e.preventDefault();
let counter = 1;

drop_icon.ondrop = function (e) {
    e.preventDefault();
    uploadImg(e.dataTransfer.files);
}




function uploadImg(files) {
    [...files].forEach(file => {
        let reader = new FileReader();
        reader.onloadend = function (e) {

            if (file) {
                let tr = ` <tr>
                            <th scope="row">${counter++}</th>
                             <td>
                                  <img src="${e.target.result}" alt="image" class="image" width="200px">
                             </td>
                             <td>${file.name} </td>
                             <td>${file.size}</td>
                        </tr>`
                dropdiv.lastElementChild.innerHTML += tr;
            } 
            else {
                // if (table.lastElementChild.innerText.value == null) {
                    document.querySelector(".table").style.display = "none";
                // }
            }
        }
        reader.readAsDataURL(file);
    });

}


// const image_input = document.querySelector('#image_input');
// const display_image = document.querySelector('.display_image');
// const previewImage = display_image.querySelector('.previewImage');

// image_input.addEventListener('change', function (file) {
//     // const file = this.files[0]; //
//     console.log(file); //
//     if (file) {
//         let reader = new FileReader(); //file ni oxuyur

//         // reader.addEventListener('load', function(file){//onload function
//         //     console.log(this);
//         //     previewImage.setAttribute('src',this.result);
//         //     // uploaded_image = reader.result;
//         //     // document.querySelector('.display_image').style.backgrounImage = `URL(${img})`
//         //     document.body.appendChild(img);
//         // });
//         reader.onload = function () { //
//             const img = new Image();
//             img.src = reader.result;
//             // document.body.appendChild(img);
//             document.querySelector('.display_image').style.backgroundImage = `URL(${img})`
//         }
//         reader.readAsDataURL(file);
//         // reader.readAsDataURL(); //read edenden sonra onload callback functionunu cagiririg.Bu bize faylin resultini verir.

//     }
// });