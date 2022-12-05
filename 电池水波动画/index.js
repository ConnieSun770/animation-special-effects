
countUp('num',80,100)
function countUp(id,speed,value){
    let num = document.getElementById(id)
    let percentage = document.getElementsByClassName('percentage')[0]
    if(value>0){
        let count = 0
        let t = setInterval(()=>{
            count++
            num.innerText = count.toString()
            if(count === 80){
                percentage.classList.add('charged')
            }
            if(count === value){
                clearInterval(t)
            }
        },speed)
    }else {
        num.innerText = value
    }
}

