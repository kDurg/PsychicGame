        
        //Define vars

        var wins = 0;
        var losses = 0;
        var guessesLeft = 9;
        var guessedLetters = [];
        var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
        var userGuess = 0;

        // Randomize the computer guess after user input
        var computerLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

        // User input to guess a randomized letter and convert to lowercase
        // Show letter that was clicked  
         
        document.onkeyup = function (event) {
            userGuess = event.key.toLowerCase ();
            console.log (guessesLeft);  
            guessedLetters.push(userGuess)

            

            

            // set remaining guesses
            // Tally and Display Wins and Losses


            if (userGuess === computerLetter) {
                wins++;
                guessesLeft = 9;
                guessedLetters.length = 0;
                computerLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    
            } else if (guessesLeft === 1) {
                losses++;
                computerLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
                guessesLeft = 9;
                guessedLetters.length = 1;

            } else {
                guessesLeft--; 
            }

            console.log ("my guess: " + userGuess + " | Computer guess: " + computerLetter);
            
            // Display the previous guesses
            document.getElementById ("wins").textContent = wins;
            document.getElementById ("losses").textContent = losses;
            document.getElementById ("guesses-left").textContent = guessesLeft;
            document.getElementById ("guessed-letters").textContent = guessedLetters;


            // Restrict input to letters   
            // RegExp()         

        }
