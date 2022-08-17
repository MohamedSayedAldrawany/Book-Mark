

var sitName = document.getElementById("sitName")
var sitUrl  = document.getElementById("sitUrl")






var bookmarklist 


if(localStorage.getItem("bookmark")!= null){

    bookmarklist = JSON.parse(localStorage.getItem("bookmark"))

}
else{
    bookmarklist=[]
}

   



display()

function submit(){

    if(validname() &&  validurl()  ){

        var bookmark ={

            name : sitName.value,
            url  : sitUrl.value
    
        }
        
        bookmarklist.push(bookmark)
        localStorage.setItem("bookmark", JSON.stringify(bookmarklist))
    
        display()

        clearform()
        
        console.log(bookmarklist)

    }
    
   
}


function display(){

    var cartona = ""

    for (var i = 0 ; i<bookmarklist.length ; i++){

        cartona+= ` <div class="inner-data py-2">
        <div class="  container py-3">
           <h2 class="d-inline-block  ">`+bookmarklist[i].name +`</h2>
           <a href="`+ bookmarklist[i].url +`" class="btn btn-primary" target="_blank">Visit</a>
           <button class="btn btn-danger" onclick="deleteData(`+i+`)" > Delete</button>
        </div>
     </div>`

     


  

    }

    document.getElementById("data").innerHTML = cartona
    // localStorage.setItem("bookmark", JSON.stringify(bookmarklist))

}   



function deleteData(index){


    bookmarklist.splice(index,1)

    localStorage.setItem("bookmark", JSON.stringify(bookmarklist))
    display()
    
    
    console.log(index)
    console.log(bookmarklist)



}



function validname(){
    var validetest=false 
    var regex = /\w/
    if(regex.test(sitName.value)){
        document.getElementById("alertname").style.display = "none"
        validetest =true
    }
    else{
        document.getElementById("alertname").style.display = "block"
        validetest=false

    }
    console.log(regex.test(sitName.value))

    return validetest

}




function validurl(){
    var validetest = false 
    var regex = /./
    if(regex.test(sitUrl.value)){
        document.getElementById("alerturl").style.display = "none"
        validetest =true
    }
    else{
        document.getElementById("alerturl").style.display = "block"
        validetest = false

    }
    console.log(regex.test(sitUrl.value))

    return validetest


}


function clearform() {


     sitName.value =""
     sitUrl.value = ""


}