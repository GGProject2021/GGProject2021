window.onload = function(){
    //if 두번째 타부서가 이비 비지블이면 세번재 타부서 란을 보여주는방식으로 js짜기-

    function onSupportForm(){
        if(document.querySelector('.support_div_2').style.display == ""){
            document.querySelector('.support_div_2').style.display = "table-row";
            document.querySelector('.support_radio_2').style.display = "table-row";
        }else{
            document.querySelector('.support_div_3').style.display = "table-row";
            document.querySelector('.support_radio_3').style.display = "table-row";
        }
    }
    function offSecondSupportForm(){

    }
    function offThirdSupportForm(){

    }

    document.getElementById('check_support_time').addEventListener('click',onSupportForm);

}