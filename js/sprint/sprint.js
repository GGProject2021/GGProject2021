// 체크박스 전체 선택하는 함수

function selectAll(selectAll)  {
    const checkboxes 
       = document.querySelectorAll('input[type="checkbox"]');
    
    checkboxes.forEach((checkbox) => {
      checkbox.checked = selectAll.checked
    })
  }


//   datepicker 관련 함수
$(function() {
    fn_default_datepicker();
});
    
function fn_default_datepicker()
{
var start = $( "#datepicker_start" ).datepicker({
    dateFormat: 'yy-mm-dd' //Input Display Format 변경
    ,showOtherMonths: true //빈 공간에 현재월의 앞뒤월의 날짜를 표시
    ,showMonthAfterYear:true //년도 먼저 나오고, 뒤에 월 표시
    ,changeYear: true //콤보박스에서 년 선택 가능
    ,changeMonth: true //콤보박스에서 월 선택 가능                
    //,showOn: "both" //button:버튼을 표시하고,버튼을 눌러야만 달력 표시 ^ both:버튼을 표시하고,버튼을 누르거나 input을 클릭하면 달력 표시
    //,buttonImage: "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif" //버튼 이미지 경로
    //,buttonImageOnly: true //기본 버튼의 회색 부분을 없애고, 이미지만 보이게 함
    ,buttonText: "" //버튼에 마우스 갖다 댔을 때 표시되는 텍스트                
    ,yearSuffix: "年" //달력의 년도 부분 뒤에 붙는 텍스트
    ,monthNamesShort: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'] //달력의 월 부분 텍스트
    ,monthNames: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'] //달력의 월 부분 Tooltip 텍스트
    ,dayNamesMin: ['日','月','火','水','木','金','土'] //달력의 요일 부분 텍스트
    ,dayNames: ['日','月','火','水','木','金','土'] //달력의 요일 부분 Tooltip 텍스트
    ,minDate: "-6M" //최소 선택일자(-1D:하루전, -1M:한달전, -1Y:일년전)
    ,maxDate: "+1M" //최대 선택일자(+1D:하루후, -1M:한달후, -1Y:일년후)                
});
    
var end = $( "#datepicker_end" ).datepicker({
    dateFormat: 'yy-mm-dd' //Input Display Format 변경
    ,showOtherMonths: true //빈 공간에 현재월의 앞뒤월의 날짜를 표시
    ,showMonthAfterYear:true //년도 먼저 나오고, 뒤에 월 표시
    ,changeYear: true //콤보박스에서 년 선택 가능
    ,changeMonth: true //콤보박스에서 월 선택 가능                
    //,showOn: "both" //button:버튼을 표시하고,버튼을 눌러야만 달력 표시 ^ both:버튼을 표시하고,버튼을 누르거나 input을 클릭하면 달력 표시  
    //,buttonImage: "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif" //버튼 이미지 경로
    //,buttonImageOnly: true //기본 버튼의 회색 부분을 없애고, 이미지만 보이게 함
    ,buttonText: "" //버튼에 마우스 갖다 댔을 때 표시되는 텍스트                
    ,yearSuffix: "年" //달력의 년도 부분 뒤에 붙는 텍스트
    ,monthNamesShort: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'] //달력의 월 부분 텍스트
    ,monthNames: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'] //달력의 월 부분 Tooltip 텍스트
    ,dayNamesMin: ['日','月','火','水','木','金','土'] //달력의 요일 부분 텍스트
    ,dayNames: ['日','月','火','水','木','金','土'] //달력의 요일 부분 Tooltip 텍스트
    ,minDate: "-6M" //최소 선택일자(-1D:하루전, -1M:한달전, -1Y:일년전)
    ,maxDate: "+1Y" //최대 선택일자(+1D:하루후, -1M:한달후, -1Y:일년후)    
       ,defaultDate: "+1w"
  });

//초기값을 오늘 날짜로 설정
$('#datepicker_start').datepicker('setDate', 'today'); //(-1D:하루전, -1M:한달전, -1Y:일년전), (+1D:하루후, -1M:한달후, -1Y:일년후)
$('#datepicker_end').datepicker('setDate', 'today'); //(-1D:하루전, -1M:한달전, -1Y:일년전), (+1D:하루후, -1M:한달후, -1Y:일년후)
}

function getDate( element ) {
var date;
var dateFormat = "yyyy-mm-dd";
try {
  date = $.datepicker.parseDate( dateFormat, element.value );
} catch( error ) {
  date = null;
}
return date;
}
  


$(document).ready(function(){
                                
  $("#datepicker_start").on("click",function(){
      
  });

   $("#datepicker_start").on("change",function(e){
       var end = $( "#datepicker_end" ).datepicker( "option", "minDate", getDate( e.target ) );
   });
   
   $("#datepicker_end").on("change",function(e){
       
   });
   
   $("#filtering_search").on("click",function(){
       var start = $("#datepicker_start").val();
       var end = $("#datepicker_end").val();
   });    
});
