

function clock() {
    const hour = document.getElementById("hour") ;
    const minutes = document.getElementById("minutes") ;
    const second = document.getElementById("second") ;
    
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    if (h < 10){
        h = `0${h}`;
    }
    if (m < 10) {
        m = `0${m}`;
    }
    if (s < 10) {
        s = `0${s}`;
    }
  
    hour.innerHTML = h;
    minutes.innerHTML = m;
    second.innerHTML = s;
}


let internal = setInterval(clock,1000)