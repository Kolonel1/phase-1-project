let button = document.querySelector('.btn')
button.addEventListener('click',handleList)

function handleList(){
    let ul=document.querySelector('.list')
    if(ul.textContent ===''){
    
    fetch('http://localhost:3000/anime')
    .then(response => response.json())
    .then((data) =>{modifyList(data)})
    
    function modifyList(array){   
    let ul = document.querySelector('.list')
       
        for( let element of array){
            let li = document.createElement('li')
    li.textContent = element.name
    ul.appendChild(li)
        }
       }
      }
      else {ul.textContent = ''}
    } 
    
