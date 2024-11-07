let secretNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 5;

function makeGuess() {
    const guessInput = document.getElementById("guessInput");
    const message = document.getElementById("message");
    const remaining = document.getElementById("remaining");


    const guess = parseInt(guessInput.value);
    if (isNaN(guess) || guess < 1 || guess > 100) {
        message.textContent = "Masukkan angka antara 1 dan 100!";
        return;
    }


    if (guess === secretNumber) {
        message.textContent = `Selamat! Kamu menebak dengan benar! Angkanya adalah ${secretNumber}.`;
        remaining.textContent = `Kesempatan tersisa: ${attemptsLeft - 1}`;
        disableInput();
    } else if (guess < secretNumber) {
        message.textContent = "Terlalu rendah!";
        attemptsLeft--;
        remaining.textContent = `Kesempatan tersisa: ${attemptsLeft}`;
    } else {
        message.textContent = "Terlalu tinggi!";
        attemptsLeft--;
        remaining.textContent = `Kesempatan tersisa: ${attemptsLeft}`;
    }

    
    
    if (attemptsLeft <= 0) {
      message.textContent = `Maaf, kesempatan habis. Angka yang benar adalah ${secretNumber}.`;
      disableInput();
    }
    guessInput.value = "";
}

function disableInput() {
    document.getElementById("guessInput").disabled = true;
    document.getElementById("guessButton").disabled = true;
}

function resetGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attemptsLeft = 5;
    document.getElementById("message").textContent = "";
    document.getElementById("remaining").textContent = "";
    document.getElementById("guessInput").disabled = false;
    document.getElementById("guessButton").disabled = false;
    document.getElementById("guessInput").value = "";
}
