function displayRandomNumber() 
{ 
    var randomNumber = Math.floor(Math.random() * 41) - 20; document.getElementById('num').textContent = randomNumber; var resultDiv = document.getElementById('result'); if (randomNumber < 0) { resultDiv.textContent = 'Cold'; } else { resultDiv.textContent = 'Hot'; } 
}
