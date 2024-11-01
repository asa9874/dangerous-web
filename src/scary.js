import $ from 'jquery'
$('.scary-button').on("click",scarything)
function scarything(){
    $('body').html('<div class="god"></div>');
    const $god =$('.god');
    $god.css('background-image', 'url("./img/god.png');
    let scale = 1;
    let redValue = 0;
    const intervalId = setInterval(()=>{
        if (redValue < 100) {
            redValue += 0.1; 
            scale += 0.001;
            $god.css('transform', `scale(${scale})`); 
            $('body').css('background-color', `rgb(${redValue}, 0, 0)`);
        }
        else{
            $god.remove();
            clearInterval(intervalId);
            location.reload();
        }
    }, 0.1);
}
