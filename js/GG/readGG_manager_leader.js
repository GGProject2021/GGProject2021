window.onload = function() {


    function limitDate(){
        const firstDate = document.getElementById("first_date").value;
        var secondDate = document.getElementById("second_date");
        var tempDate = firstDate;
        console.log(tempDate);
        if(firstDate == ''){
            alert("最初の日付から選択してください。");
        }else{
            tempDate = changeMonth(tempDate,3);
            secondDate.setAttribute("min", firstDate); 
            secondDate.setAttribute("max", tempDate);
            
        }
    }
    
    function changeMonth(date, num){
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
    
    //chart js
    //내용 바꿔야함 
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}