const buttons=document.querySelectorAll('.button');
const body=document.querySelector('body');

buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        console.log(e.target);
        switch(button.id){
            case "grey":document.body.style.backgroundColor='grey';break;
            case "yellow":document.body.style.backgroundColor='yellow';break;
            case "white":document.body.style.backgroundColor='white';break;
            case "blue":document.body.style.backgroundColor='blue';break;
        }
    })
})