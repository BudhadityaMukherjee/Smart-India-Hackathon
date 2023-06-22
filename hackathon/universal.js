localStorage.SetItem('key',5);
let bantu=localStorage.getItem('key');
console.log(bantu);

function myFunction2() {
    c=1;
console.log("clicked")
const options=document.getElementsByClassName("grey");

for(let i=0;i<options.length;i++)
{

    options[i].style.backgroundColor="rgb(50,50,50)";
}
return c;
}
function myFunction1() {
    c=0;
    const options=document.getElementsByClassName("grey");
    
    for(let i=0;i<options.length;i++)
    {
    
        options[i].style.backgroundColor="rgb(3,3,61)";
        c=0;

        
    }
    return c;
    }
// function checkColor()
// {
//     let budha=sessionStorage.getItem('key');
//     console.log(budha);
//     if(c===1)
//     {
//         console.log(c);
//         myFunction2();
//     }
//     else
//     myFunction1();
//     console.log(c);

//     }   
