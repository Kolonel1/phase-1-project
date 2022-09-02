

function code() {
    let form1 = document.querySelector('.form1')
    console.log(form1)
    fetchData()
    form1.addEventListener('submit', submit)
    function submit(e) {
        e.preventDefault()
        handleAppendAndPost(e)

        form1.reset()
    }

    let form2 = document.querySelector('.form2')
    form2.addEventListener('submit', remove)
    function remove(e) {
        e.preventDefault()
        let id = e.target.deleteNumber.value

       if(id === '' || id<=0){
        alert('please input a valid number')
       } 
       else {

        fetch(`http://localhost:3000/recommendations/${id}`,{
            method:"DELETE"
        })
        .then(response => response.json())
        .then(()=> alert('successful delete'))
        .catch(()=> alert('delete failed.check if you have input valid id'))

       let parentNode = document.getElementById(id).parentNode
       parentNode.remove()
    
       form2.reset()
      
    }}

    function fetchData() {
        fetch('http://localhost:3000/recommendations')
            .then((response) => response.json())
            .then(data => loop(data))

        function loop(array) {
            for (let element of array) {
                let name = element.name
                let recommendation = element.submission
                let rating = element.rating
                let id=element.id


                let ul = document.createElement('ul')
                let li1 = document.createElement('li')
                let li2 = document.createElement('li')
                let li3 = document.createElement('li')
                let li4 = document.createElement('li')
                let li5 = document.createElement('li')

                li5.id = `${id}`
               
                li5.textContent=`ID:${id}`
                li1.textContent = `${name}`
                li2.textContent = `SUBMISSION:${recommendation}`
                li3.textContent = `RATING:${rating}/10`
                li4.innerHTML = '<bold>Thanks for your input </bold>'

                ul.className = 'list'
                ul.appendChild(li5)
                ul.appendChild(li1)
                ul.appendChild(li2)
                ul.appendChild(li3)
                ul.appendChild(li4)
                let listDisplay = document.querySelector('.recommendations-display')
                console.log(listDisplay)
                listDisplay.append(ul)

            }

        }
    }


    function handleAppendAndPost(e) {
        let satisfactionInput = e.target.satisfaction.value
        console.log(satisfactionInput)
        let names = e.target.name.value
        console.log(names)
        let recommendedSection = e.target.sectionToBeAdded.value
        console.log(recommendedSection)



        if (satisfactionInput === '' || names === '' || recommendedSection === '') {
            alert('please input all the categories')
        }
        else if (satisfactionInput <= 0 || satisfactionInput > 10) {
            alert('please input a rating between 1-10')
        }
        else if (names.split(' ').length > 1) {
            alert('please input one name')
        }
        else {

            let formInputObject = {
                name: `${names}`,
                submission: `${recommendedSection}`,
                rating: `${satisfactionInput}`
            }

            let post = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify(formInputObject)
            }

            fetch('http://localhost:3000/recommendations', post)
                .then(response => response.json())
                .then(() => alert(`successful post `))
                .catch(() => alert(`post error `))

                fetchData()
        }

       


    }
 let h3 = document.querySelectorAll('h3')
 for (let element of h3){
    element.addEventListener('mouseover',changeColor)
    element.addEventListener('mouseleave',colorChange)
 }
 function changeColor(e){
    e.target.style.color = 'blue'
 }
 function colorChange(e){
    e.target.style.color = 'green'
 }
 let footer = document.querySelector('.footerLink')
 footer.addEventListener('mouseleave',colorChange)
 footer.addEventListener('mouseover',changeColor)
 let h1 = document.querySelector('h1')
 h1.addEventListener('mouseover',changeColor)
 h1.addEventListener('mouseleave',colorChange)
 
}
document.addEventListener('DOMContentLoaded', code)