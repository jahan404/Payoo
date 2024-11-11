/*

*/

//S-ONE    add event handler in Add Money button
document.getElementById('add-money-button').addEventListener('click',function(event){
    //S-TWO   prevent auto reload 
    event.preventDefault();
    

    //S-THREE    get the money user wants to add
    const toBeAddedAmount = document.getElementById('added-amount').value
    console.log(toBeAddedAmount)
    
    //S-FOUR    get the pin and check if the pin is valid or not
    const pin = document.getElementById('pin-num')
    console.log(pin.value)
    if(pin.value === '1116'){
        
        //S-FIVE    get the user's current balance
        const currAmount = document.getElementById('current-balance').innerText
        console.log(currAmount)
        //S-SIX    add user's current balance and the money to be added
        
        console.log(parseFloat(toBeAddedAmount)+  parseFloat(currAmount))
        
        //S-SEVEN    set the summation in 'current-balance''s innerText
        document.getElementById('current-balance').innerText = parseFloat(toBeAddedAmount)+  parseFloat(currAmount);
    }
    else
    alert('Incorrect pin')

})