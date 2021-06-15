window.onload = function() {
         
    function onModifyClick() {
        document.querySelector('.modal_wrap').style.display ='block';
        document.querySelector('.black_bg').style.display ='block';
    }   
    function offModifyClick() {
        document.querySelector('.modal_wrap').style.display ='none';
        document.querySelector('.black_bg').style.display ='none';
    }
    function onCreateClick() {
        document.querySelector('.modal_wrap_2').style.display ='block';
        document.querySelector('.black_bg_2').style.display ='block';
    }   
    function offCreateClick() {
        document.querySelector('.modal_wrap_2').style.display ='none';
        document.querySelector('.black_bg_2').style.display ='none';
    }
    function onSecondModifyClick() {
        document.querySelector('.second_modal_wrap').style.display ='block';
        document.querySelector('.second_black_bg').style.display ='block';
    }
    function offSecondModifyClick() {
        document.querySelector('.second_modal_wrap').style.display ='none';
        document.querySelector('.second_black_bg').style.display ='none';
    }
    function onSecondCreateClick() {
        document.querySelector('.second_modal_wrap_2').style.display ='block';
        document.querySelector('.second_black_bg_2').style.display ='block';
    }
    function offSecondCreateClick() {
        document.querySelector('.second_modal_wrap_2').style.display ='none';
        document.querySelector('.second_black_bg_2').style.display ='none';
    }
    function onDeleteClick() {
        document.querySelector('.delete_modal_wrap').style.display ='block';
        document.querySelector('.delete_black_bg').style.display ='block';
    }
    function offDeleteClick() {
        document.querySelector('.delete_modal_wrap').style.display ='none';
        document.querySelector('.delete_black_bg').style.display ='none';
    }
    document.getElementById('modal_btn').addEventListener('click', onModifyClick);
    document.getElementById('modal_btn_2').addEventListener('click', onCreateClick);
    //개발시 코드를 줄이기 위해 getElementsByClassName으로 받고, foreach의 숫자를 넣어[0] 그 위치를 파악.온클릭시 해당 게시물의 번호도 넘겨야 함. 
    document.getElementById('second_modal_btn').addEventListener('click',onSecondModifyClick);
    document.getElementById('second_modal_btn_2').addEventListener('click',onSecondCreateClick);
    document.getElementById('delete_modal_btn').addEventListener('click',onDeleteClick);

    document.querySelector('.modal_close').addEventListener('click', offModifyClick);
    document.querySelector('.modal_close_button').addEventListener('click', offModifyClick);
    document.querySelector('.modal_close_2').addEventListener('click', offCreateClick);
    document.querySelector('.modal_close_button_2').addEventListener('click', offCreateClick);
    document.querySelector('.second_modal_close').addEventListener('click', offSecondModifyClick);
    document.querySelector('.second_modal_close_button').addEventListener('click', offSecondModifyClick);
    document.querySelector('.second_modal_close_2').addEventListener('click', offSecondCreateClick);
    document.querySelector('.second_modal_close_button_2').addEventListener('click', offSecondCreateClick);
    document.querySelector('.delete_modal_close').addEventListener('click', offDeleteClick);
    document.querySelector('.delete_modal_close_button').addEventListener('click', offDeleteClick);
};