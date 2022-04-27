// apply active state to a specific rating 

//define a rating container
let rateCont = document.getElementById("rateContainer")

//get all ratings in container
let ratings = rateCont.getElementsByClassName("rate")

//loop to get current rating and apply active class
for(let i = 0; i < ratings.length; i++){

  ratings[i].addEventListener("click", function(){

    let current = document.getElementsByClassName("active")

    //check if there is already an active class and replace it
    if(current.length > 0){

      current[0].className = current[0].className.replace(" active", "")

    }

    //append active class to rating
    this.className += " active"

  })
}

//get the id of rating when clicked and passed it to submitRate()


 
const onClick = function(){
    
    const btnSubmit = document.getElementById('submitBtn')

    // function to check if submit button is clicked before   
    btnSubmit.addEventListener("click", () =>{
        
     submitRate(this.id) 

    })
   
   }
   
   // to get rating id to pass to onClick function
   document.getElementById('1').onclick = onClick
   document.getElementById('2').onclick = onClick
   document.getElementById('3').onclick = onClick
   document.getElementById('4').onclick = onClick
   document.getElementById('5').onclick = onClick


   function submitRate(rate){
     
     document.getElementsByClassName('icon')[0].style.display = 'none'
     document.getElementsByClassName('beforeSubmit')[0].style.display = 'none'
     document.getElementsByClassName('afterSubmit')[0].style.display = 'flex'

     let sel = rate.toString()

     
     document.getElementById('selected').innerHTML = sel
   } 