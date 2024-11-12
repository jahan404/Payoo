document.getElementById('cash-out-button').addEventListener('click',function(event){
    event.preventDefault();

    const cashOutAmount = document.getElementById('cash-out-amount').value
    console.log(cashOutAmount)
    const cashOutPinNum =document.getElementById('cash-out-pin-num').value
    console.log(cashOutPinNum)

    if(cashOutPinNum ==='1116'){
        const currentBalance =document.getElementById('current-balance').innerText
        console.log(currentBalance)

        console.log(parseFloat(currentBalance)-parseFloat(cashOutAmount))


        document.getElementById('current-balance').innerText = parseFloat(currentBalance) - parseFloat(cashOutAmount)
    }

    else
    alert('Incorrect Pin')

})