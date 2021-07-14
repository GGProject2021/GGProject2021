window.onload = function(){
    //if 두번째 타부서가 이비 비지블이면 세번재 타부서 란을 보여주는방식으로 js짜기-

    function onSupportForm(){
        if(document.querySelector('.support_div').style.display != "table-row" ){
            document.querySelector('.support_div').style.display = "table-row";
            document.querySelector('.support_radio').style.display = "table-row";
        }else if(document.querySelector('.support_div_2').style.display != "table-row"){
            document.querySelector('.support_div_2').style.display = "table-row";
            document.querySelector('.support_radio_2').style.display = "table-row";
        }else{
            alert("他部署は2つまで追加できます。");
        }
        // if(document.querySelector('.support_div_2').style.display == ""){
        //     document.querySelector('.support_div_2').style.display = "table-row";
        //     document.querySelector('.support_radio_2').style.display = "table-row";
        // }
        // else{
        //     document.querySelector('.support_div_3').style.display = "table-row";
        //     document.querySelector('.support_radio_3').style.display = "table-row";
        // }
    }
    function offFirstSupportForm(){
        $("input[name=support_time]").val('');
        $('input[name=support_section]').each(function() {
            $(this).prop('checked', false);
        });
        document.querySelector('.support_div').style.display = "none";
        document.querySelector('.support_radio').style.display = "none";
    }
    function offSecondSupportForm(){
        $("input[name=support_time_2]").val('');
        $('input[name=support_section_2]').each(function() {
            $(this).prop('checked', false);
        });
        document.querySelector('.support_div_2').style.display = "none";
        document.querySelector('.support_radio_2').style.display = "none";
    }

    document.getElementById('check_support_time').addEventListener('click',onSupportForm);
    document.getElementById('close_support_form').addEventListener('click',offFirstSupportForm);
    document.getElementById('close_support_form_2').addEventListener('click',offSecondSupportForm);

}