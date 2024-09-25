let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById('submitGuess').addEventListener('click', function() {
    const userGuess = document.getElementById('guessInput').value;
    attempts++;
    
    if (userGuess == randomNumber) {
        document.getElementById('result').textContent = `Selamat! Anda menebak angka dengan benar dalam ${attempts} percobaan!`;
        document.getElementById('submitGuess').style.display = 'none';
        document.getElementById('restartGame').style.display = 'inline';
    } else if (userGuess < randomNumber) {
        document.getElementById('result').textContent = 'Terlalu rendah! Coba lagi.';
    } else {
        document.getElementById('result').textContent = 'Terlalu tinggi! Coba lagi.';
    }
});

document.getElementById('restartGame').addEventListener('click', function() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('guessInput').value = '';
    document.getElementById('result').textContent = '';
    document.getElementById('submitGuess').style.display = 'inline';
    document.getElementById('restartGame').style.display = 'none';
});