	var gameOptions = [{
	    hint: "Language for adding functions to site or application",
	    answer: "javascript"
	}, {
	    hint: "Language for creating markup",
	    answer: "html"
	}];
	var answer;
	var hint = document.getElementById('hmGame-hint');
	var gameStarted = false;
	var game;
	var key;
	var tries;
	var title = document.getElementById('hmGame-title');
	//selects game
	var game = Math.floor(Math.random() * gameOptions.length);

	document.onkeydown = function(event) {
	    //start new game
	    if (gameStarted === false) {
	        //change title text to Hint
	        title.innerHTML = "HINT";
	        //prints hint
	        hint.innerHTML = gameOptions[game].hint;
	        //set answer value
	        var answer = gameOptions[game].answer;
	        console.log(answer);
	        //set amount of tries
	        tries = answer.length + 5;
	        //print attempt header
	        document.getElementById('hmGame-attemptedHeader').innerHTML = "Attempted Letters";
	        //print space for guesses
	        for (i = 0; i < answer.length; i++) {
	            document.getElementById('hmGame-guessSpace').append("_ ");
	        }
	        gameStarted = true;
	    }
	    //game is active
	    if (gameStarted === true) {
	        //set answer value
	        var answer = gameOptions[game].answer;
	        console.log(answer);

	        //capture keyinput
	        key = event.key;
	        console.log(key);
	        //print attempted keys
	        document.getElementById('hmGame-usedLetters').append(key + " ");
	        //print tries remaining
	        document.getElementById('hmGame-tries').innerHTML = "Attempts Remaining: " + tries;
	        //end game if tries reaches 0
	        if (tries < 1) {
	            //change title to prompt new game
	            title.innerHTML = "Sorry youre out of tries Press any key to start a new game"
	            hint.innerHTML = " "
	            gameStarted = false;
	            //selects game
	            var game = Math.floor(Math.random() * gameOptions.length);

	        }
	    }
	}
