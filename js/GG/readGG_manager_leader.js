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
    var personalCtx = document.getElementById('personalChart').getContext('2d');
    var personalChart = new Chart(personalCtx, {
        type: 'line',
        data: {
            datasets:[{
                type: 'line',
                label: 'panda1',
                data : [10,20,10,30,11],
                fill: false,
                borderColor :'rgba(54, 162, 235)'
            },{
                type: 'line',
                label: 'panda3',
                data : [20,10,15,10,40],
                fill: false,
                borderColor :'rgba(255, 206, 86)',
            }],
            labels: ['1st_sprint', '2nd_sprint', '3rd_sprint', '4th_sprint', '5th_sprint'],
        },
        
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    var teamCtx = document.getElementById('teamChart').getContext('2d');
    var teamChart= new Chart(teamCtx, {
        type: 'line',
        data: {
            labels: ['1st_sprint', '2nd_sprint', '3rd_sprint', '4th_sprint', '5th_sprint'],
            datasets:[{
                type: 'line',
                label: 'GG(ActualTime)',
                data: [15,15,13,20,22],
                fill: false,
                borderColor: 'rgba(255, 159, 64)'
            },{
                type: 'line',
                label: 'GG(WorkingHours)',
                data: [18,18,20,22,26],
                fill: false,
                borderColor: 'rgba(153, 102, 255)'
            },{
                type: 'line',
                label: 'GG(BusinessDays)',
                data: [2,2,4,6,8],
                fill: false,
                borderColor: 'rgba(75, 192, 192)'
            }],
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