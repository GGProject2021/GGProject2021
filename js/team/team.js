window.onload = function() {
         
    function onClick() {
        document.querySelector('.modal_wrap').style.display ='block';
        document.querySelector('.black_bg').style.display ='block';
    }   
    function offClick() {
        document.querySelector('.modal_wrap').style.display ='none';
        document.querySelector('.black_bg').style.display ='none';
    }
    function onTwiceClick() {
        document.querySelector('.second_modal_wrap').style.display ='block';
        document.querySelector('.second_black_bg').style.display ='block';
    }
    function offSecondClick() {
        document.querySelector('.second_modal_wrap').style.display ='none';
        document.querySelector('.second_black_bg').style.display ='none';
    }
    function onDeleteClick() {
        document.querySelector('.delete_modal_wrap').style.display ='block';
        document.querySelector('.delete_black_bg').style.display ='block';
    }
    function offDeleteClick() {
        document.querySelector('.delete_modal_wrap').style.display ='none';
        document.querySelector('.delete_black_bg').style.display ='none';
    }
    document.getElementById('modal_btn').addEventListener('click', onClick);
    //개발시 코드를 줄이기 위해 getElementsByClassName으로 받고, foreach의 숫자를 넣어[0] 그 위치를 파악.온클릭시 해당 게시물의 번호도 넘겨야 함. 
    document.getElementById('second_modal_btn').addEventListener('click',onTwiceClick);
    document.getElementById('delete_modal_btn').addEventListener('click',onDeleteClick);

    document.querySelector('.modal_close').addEventListener('click', offClick);
    document.querySelector('.modal_close_button').addEventListener('click', offClick);
    document.querySelector('.second_modal_close').addEventListener('click', offSecondClick);
    document.querySelector('.second_modal_close_button').addEventListener('click', offSecondClick);
    document.querySelector('.delete_modal_close').addEventListener('click', offDeleteClick);
    document.querySelector('.delete_modal_close_button').addEventListener('click', offDeleteClick);
};