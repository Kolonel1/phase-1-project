let button = document.querySelector('.btn')
button.addEventListener('click',handleList)

let animeServer = 'https://pure-island-78558.herokuapp.com/anime'
function handleList(){
    let ul=document.querySelector('.list')
    if(ul.textContent ===''){
    
    fetch(animeServer)
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
    
