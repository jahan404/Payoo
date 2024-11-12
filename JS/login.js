console.log('hello')

//step -1 set event handler
document.getElementById('login-button').addEventListener('click',function(event){
    //step - 2 prevent default behavior (prevent reloading page)
    event.preventDefault(); //-->> not beginner friendly
    console.log('login button clicked')

    //step - 3 get phone & pin number
    const phone = document.getElementById('phone-number').value  
    

    const pin = document.getElementById('pin-number').value  

    //console.log(phone,pin)  //newline ashbe na

    //step-4 validate phone and pin

    if(phone === '01820033756' && pin==='1116'){
        console.log('you are logged in')
        //step -5 adding onclick go to another html file
        window.location.href = './home.html'
    }

    else
        alert('wrong pin or phone number')
})

