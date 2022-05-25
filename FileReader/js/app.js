let drop_icon = document.querySelector('.drop_icon');
let table = document.querySelector('.table');
let upload = document.querySelector('.fa-arrow-up-from-bracket');
let input = document.querySelector('.drop_icon input ');
let tbody = table.querySelector("tbody");
let th = tbody.querySelector("th");



upload.onclick = () => input.click();
console.log(upload);

drop_icon.ondragover = e => e.preventDefault();

drop_icon.ondrop = function (e) {
    e.preventDefault();
    uploadImg(e.dataTransfer.files);
}

input.onchange = function (e) {
    e.preventDefault();
    uploadImg(e.target.files);
}






function removeRow(icon) {
    let row = icon.parentNode.parentNode.rowIndex;
    table.deleteRow(row);
    if (table.lastElementChild.innerText.length == 0) {
        table.style.visibility = "hidden";
    }
}

if (table.lastElementChild.innerText.length == 0) {
    table.style.visibility = "hidden";
}

    let counter = 1;

    function uploadImg(files) {
        [...files].forEach(file => {
            let reader = new FileReader();
            reader.onloadend = function (e) {
                let tRow = ` <tr>
                <th scope="row">${counter++}</th>
                 <td>
                      <img src="${e.target.result}" alt="image" class="image" width="200px">
                 </td>  
                 <td>${file.name} </td>
                 <td>${file.size}</td>
                 <td>
                 <button class = "icon" onclick="removeRow(this)"><i class="fa-solid fa-xmark"></i></button>
                   </td>
                
            </tr>`
            table.lastElementChild.innerHTML += tRow;
            table.style = "visibility:visible";

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
    // })