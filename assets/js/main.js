// =================== HOME ======================== //
function areaSquare(){
    let a = document.getElementById('side').value;

    var P1 = a*4;
    var S1 = Math.pow(a,2);
    if(a >= 0){
        with(document){
            getElementById('peri-square').innerHTML = "Perimeter: a x 4 = " + P1 + " unit";
            getElementById('area-square').innerHTML = "Area: " + `<span>a<sup>2</sup> = </span>` + S1 + " unit";
        }
    }
    else{
        with(document){
            getElementById('peri-square').innerHTML = "Side must be a positive number!";
            getElementById('area-square').innerHTML = "";
        }

    }
}

function areaRectangle(){
    let dai = Number(document.getElementById('long-side').value);
    let rong = Number(document.getElementById('short-side').value);

    var P2 = (dai + rong)*2;
    var S2 = dai*rong;
    if(dai >= rong && dai >= 0 && rong >= 0){
        with(document){
            getElementById('peri-rect').innerHTML = "Perimeter: (a + b) x 2 = " + P2 + " unit";
            getElementById('area-rect').innerHTML = "Area: a x b = " + S2 + " unit";
        }
    }

    else if (dai < 0 || rong < 0){
        with(document)
        {
            getElementById('peri-rect').innerHTML = "Side must be a positive number!";
            getElementById('area-rect').innerHTML = "";
        }
    }

    else if(rong > dai){
        with(document){
            getElementById('peri-rect').innerHTML = "b cannot be longer than a!";
            getElementById('area-rect').innerHTML = "";
        }

    }
}


// =================== ACTIVE TABS ====================== //
const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');


tabs.forEach(tab =>{
    tab.addEventListener('click',()=>{
        // tab.classList.add('open');
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('active');
        })
        target.classList.add('active');
    })
    // tab.classList.remove('open');
})

// ===================  GRAPH ======================== //
var label = [];
var dataChart = [];
for(let i = 0; i <= 29; i++){
    label.push(i);
}
for(let j = 0; j <= 29; j++){
    var a = Math.random();
    dataChart.push(a);
}
const chartdata = {
labels: label,
    datasets: [
    {
        label: 'EUR to GBP in month',
        backgroundColor: 'rgb(23, 155, 206)',
        borderColor: 'rgb(23, 155, 206)',
        data: dataChart
    }]
};
const config = {
    type: 'line',
    data: chartdata,
};

var myChart = new Chart(
    document.getElementById('myChart'),
    config
);

// ================= CALCULATOR ======================= //

let display = document.getElementById('display');
let result = document.getElementById('result');
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button =>{
    button.addEventListener('click', (e) =>{
        const element = e.target.innerText;
        switch(element){
            case 'AC':
                display.innerText = '';
                result.innerText = '';
                break;  
            
            case 'DC':
                display.innerText = display.innerText.slice(0,-1);
                break;    
                      
            case '=':
                try{
                    result.innerText = eval(display.innerText);
                }
                catch{
                    display.innerText = '';
                    result.innerText = ''; 
                    display.innerText = '--Syntax Error--';
                }
                break;
            default:
                display.innerText += element;
                break;
        }
    })
})

// ========================= CLOCK ============================ //
function realTime(){
    var realtime = new Date();
    var hour = realtime.getHours();
    var min = realtime.getMinutes();
    var sec = realtime.getSeconds();

    hour = ("0" + hour).slice(-2);
    min = ("0" + min).slice(-2);
    sec = ("0" + sec).slice(-2);

    document.getElementById('clock').innerHTML = hour + ":" + min + ":" + sec;
    var t = setTimeout(realTime,500);
}