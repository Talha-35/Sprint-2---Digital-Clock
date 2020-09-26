

function clock() {
    const hour = document.getElementById("hour") ;
    const minutes = document.getElementById("minutes") ;
    const second = document.getElementById("second") ;
    
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

  
    hour.innerHTML = h;
    minutes.innerHTML = m;
    second.innerHTML = s;
}


let internal = setInterval(clock,1000)