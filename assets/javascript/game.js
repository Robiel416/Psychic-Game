var letterChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

        var wins = 0;
        var losses = 0;
        var guesses = 9;
        var guessesLeft = 9;
        var guessedLetters = [];
        var letterToGuess = null;

        var computerGuess = letterChoices[Math.floor(Math.random() * letterChoices.length)];


        var updateGuessesLeft = function () {
            document.querySelector('#remaining').innerHTML = "Guesses Left: " + guessesLeft;
        };

        var updateletterToGuess = function () {
            this.letterToGuess = this.letterChoices[Math.floor(Math.random() * this.letterChoices.length)];
        };

        var updateGuessesSoFar = function () {
            document.querySelector('#guessed').innerHTML = "Your guesses so far: " + guessedLetters.join(", ");
        };

        var reset = function () {
            guessesLeft = 9;
            totalGuesses = 9;
            guessedLetters = [];

            updateletterToGuess();
            updateGuessesSoFar();
            updateGuessesLeft();

        };

        updateGuessesLeft();
        updateletterToGuess();



        document.onkeyup = function (event) {
            guessesLeft--;
            var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        

            guessedLetters.push(userGuess);
            updateGuessesLeft();
            updateGuessesSoFar();

            if (guessesLeft > 0) {
                if (userGuess === letterToGuess) {
                    wins++;
                    document.querySelector('#win').innerHTML = 'Wins: ' + wins;
                    alert("Whoa I think you're a psychic!");
                    reset();
                }
            } else if (guessesLeft == 0) {
                losses++;
                document.querySelector('#lose').innerHTML = 'Losses: ' + losses;
                alert("Sorry, you are not a psychic!");

                reset();
            }
        }