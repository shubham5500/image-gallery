const imagesNodes = document.querySelectorAll(".image_wrapper .main_image");
const imagesArray = Array.prototype.slice.call(imagesNodes);
const imageWrapperNodes = document.querySelectorAll(".image_wrapper");
const imagesWrapperArray = Array.prototype.slice.call(imageWrapperNodes);

for (let i = 0; i < imagesArray.length; i++) {
    const element = imagesArray[i];
    element.addEventListener('click', function(e){
        let parentElement = this.closest('div.image_wrapper');
        if(parentElement.classList.contains('fullscreen')){
            parentElement.classList.remove("fullscreen");
            toggleImage(imagesWrapperArray, parentElement, 'in');
        }else{
            toggleImage(imagesWrapperArray);
            parentElement.style.display = "unset";
            parentElement.classList.add("fullscreen");
        }
    });
}


function toggleImage(dataArray, cElement, type){
    let btn = document.querySelector('.close_btn');
    if(type === 'in'){
        for (let j = 0; j < dataArray.length; j++){
            const el = dataArray[j];
            el.style.display = "block";
        }
        cElement.style.display = "block";
    }else{
        for (let j = 0; j < imagesWrapperArray.length; j++){
            const el = imagesWrapperArray[j];
            el.style.display = "none";
        }
    }
}

function slide(element){

}
