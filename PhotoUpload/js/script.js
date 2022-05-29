let input = document.getElementById('input');
let upload = document.querySelector('.fa-arrow-up-from-bracket');
let remove = document.querySelector('.fa-square-xmark');

let table = document.querySelector(".table");
upload.onclick = () => input.click();
console.log(upload);

function onDragOver(event) {
    event.preventDefault();
}

function onDrop(event) {
    event.preventDefault();
    uploadImg(event.dataTransfer.files);
}

input.onchange = function (event) {
    event.preventDefault();
    uploadImg(event.target.files);
}

//row yoxdursa table yoxdu
if (table.lastElementChild.innerText.length == 0) {
    table.style.visibility = "hidden";
}

//removeall 
remove.onclick = () => {
    document.querySelector(".table").remove();
}

let counter = 1;
// span tek tek rowlari silsin
function uploadImg(files) {
    [...files].forEach(file => {
        let reader = new FileReader();
        reader.onloadend = function (event) {
            let tableRow =
                `<tr>
             <th scope="row" class="rowa">${counter++}</th>
             <td>
                  <img src="${event.target.result}" alt="image" class="image" width="200px">
             </td>  
             <td>${file.name} </td>
             <td>${file.size}</td>
             <td>
             <span onclick="this.parentNode.parentNode.style.display='none';"; class="closebtn">X</span>
             </td>
            </tr> `
            table.lastElementChild.innerHTML += tableRow;
            table.style = "visibility:visible";
        }
        reader.readAsDataURL(file);
    });
}








//ondragstart 
// function onDragStart(event) {
//     event.dataTransfer.setData("text/plain", event.target.id);
//     event.currentTarget.style.backgroundColor = 'yellow';
// }
//ondrop
// function onDrop(event) {
//     event.preventDefault();
// const id = event.dataTransfer.getData('file');
// const draggableElement = document.getElementById(id);
// const dropzone = event.target;
// dropzone.appendChild(draggableElement);
// event.dataTransfer.clearData();
//short
// var data = event.dataTransfer.getData("text");
// event.target.appendChild(document.getElementById(id));
// }
//
// let btn = document.getElementById('btn');
// // btn.onclick=function(){
// // this.innerHTML='hello';
// // }
// // console.log(btn);

// btn.addEventListener('click', function () {
//     this.innerHTML = 'hello';
// })