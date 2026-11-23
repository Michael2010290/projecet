let y = Math.floor(Math.random() * 10 + 1);
let guess = 1;
document.getElementById("submitguess").onclick = function () {
    let x = document.getElementById("guessField").value;
    if (x == y) {
        alert("Congradulations you guessed it right in "
            + guess + " guesses ");
    }
    else if (x > y) {
                guess++;
                alert("Try a smaller number");
            }
            else {
                guess++;
                alert("Try a bigger number")
            }
        }