window.onload = function() {

    function limitDate(){
        const firstDate = document.getElementById("first_date").value;
        var secondDate = document.getElementById("second_date");
        var tempDate = firstDate;
        console.log(tempDate);
        if(firstDate == ''){
            alert("最初の日付から選択してください。");
        }else{
            tempDate = getFormatDate(tempDate,3);
            secondDate.setAttribute("min", firstDate); 
            secondDate.setAttribute("max", tempDate);
            
        }
    }
    
    function getFormatDate(date, num){
        date = ""+date;
        var yyyy = parseInt(date.substr(0, 4), 10);
	    var mm = parseInt(date.substr(5, 2), 10);
	    var dd = parseInt(date.substr(8, 2), 10);

        d = new Date(yyyy, mm-1 + num, dd);
      
        yyyy = d.getFullYear();
	    mm = d.getMonth() + 1; mm = (mm < 10) ? '0' + mm : mm;
	    dd = d.getDate(); dd = (dd < 10) ? '0' + dd : dd;

        return yyyy + '-' + mm + '-' + dd;
    }

    document.getElementById('second_date').addEventListener('click',limitDate);

}