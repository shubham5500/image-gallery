const imagesNodes = document.querySelectorAll(".image_wrapper .main_image");
const imagesArray = Array.prototype.slice.call(imagesNodes);
const imageWrapperNodes = document.querySelectorAll(".image_wrapper");
const imagesWrapperArray = Array.prototype.slice.call(imageWrapperNodes);
const sliderDiv = document.getElementById('slider_wrapper');

var next = document.getElementById('next');
next.addEventListener('click', function(){
    slider('next');
});

var prev = document.getElementById('prev');
prev.addEventListener('click', function(){
    slider('prev');
});

// Image click listening function
for (let i = 0; i < imagesArray.length; i++) {
    const element = imagesArray[i];
    element.addEventListener('click', function(e){
        let parentElement = this.closest('div.image_wrapper');
        if(parentElement.classList.contains('fullscreen')){
            parentElement.classList.remove("fullscreen");
            toggleImage(imagesWrapperArray, parentElement, 'in');
            sliderDiv.style.display = 'none';
        }else{
            toggleImage(imagesWrapperArray);
            parentElement.style.display = "unset";
            parentElement.classList.add("fullscreen");
            sliderDiv.style.display = 'unset';
        }
    });
}


// Zoom-in zoom-out function
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

// Below both function are responsible for the image next and prev navigation.
function slider(data){
    let getFullScreenElement = document.querySelector('.fullscreen');
    let fullscreenIndex;
    imagesWrapperArray.map((element, index)=>{
        if(element == getFullScreenElement){
            fullscreenIndex = index;
        }
    });    
    imagesWrapperArray[fullscreenIndex].classList.remove('fullscreen');
    imagesWrapperArray[fullscreenIndex].style.display = 'none';
    data === 'next' ?  nextPrevToggle('next', fullscreenIndex) :  nextPrevToggle('prev', fullscreenIndex);
}


function nextPrevToggle(data, fullscreenIndex){
    let flag = data === 'next' ? 1 : -1;
    if(fullscreenIndex === imagesWrapperArray.length - 1 && data === 'next'){
        fullscreenIndex = -1;
    }else if(fullscreenIndex === 0 && data === 'prev'){
        fullscreenIndex = imagesWrapperArray.length ;
    }
    imagesWrapperArray[fullscreenIndex + flag].style.display = 'unset';
    imagesWrapperArray[fullscreenIndex + flag].classList.add('fullscreen');
}
