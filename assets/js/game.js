	var gameOptions = [{
	    hint: "Language for adding functions to site or application",
	    answer: "javascript"
	}, {
	    hint: "Language for creating markup",
	    answer: "html"
	}];
	var answer;
	var placeHolder = [];
	var hint = document.getElementById('hmGame-hint');
	var gameStarted = false;
	//selects game
	var game = Math.floor(Math.random() * gameOptions.length);
	console.log(game);
	var key;
	var tries;
	var title = document.getElementById('hmGame-title');

	function clearData() {
	    hint.innerHTML = " ";
	    placeHolder = [];
	    document.getElementById('hmGame-guessSpace').innerHTML = " ";
	    document.getElementById('hmGame-tries').innerHTML = " ";
	    document.getElementById('hmGame-usedLetters').innerHTML = " ";
	    document.getElementById('hmGame-attemptedHeader').innerHTML = " ";
	    gameStarted = false;
	}

	document.onkeydown = function(event) {
	    //game is active
	    if (gameStarted === true) {
	        console.log("gamestarted");
	        //capture keyinput
	        key = event.key;
	        console.log(key);
	        //print attempted keys
	        if (document.getElementById('hmGame-usedLetters').innerHTML.includes(key) === false) {
	            document.getElementById('hmGame-usedLetters').append(key + " ");
	        }
	        //print attempt header
	        document.getElementById('hmGame-attemptedHeader').innerHTML = "Attempted Letters";
	        //print tries remaining
	        document.getElementById('hmGame-tries').innerHTML = "Attempts Remaining: " + tries;
	        //check if input is in the game
	        if (answer.includes(key) === false) {
	            tries--;
	            console.log("lost point");
	        }
	        //replace _ with correct letter
	        for (i = 0; i < answer.length; i++) {
	            if (key === answer.charAt(i)) {
	                placeHolder[i] = key;
	                guessPlaceHolder.innerHTML = placeHolder.join("");
	                console.log("you got it right");
	            } else { console.log("nope thats wrong"); }
	        }

	        console.log(tries);
	    }
	    //start new game
	    if (gameStarted === false) {
	        console.log("game not started")
	            //change title text to Hint
	        title.innerHTML = "HINT";
	        //prints hint
	        console.log(game);
	        hint.innerHTML = gameOptions[game].hint;
	        //set answer value
	        answer = gameOptions[game].answer;
	        console.log(answer);
	        //set amount of tries
	        tries = 5;
	        //print space for guesses
	        for (i = 0; i < answer.length; i++) {
	            placeHolder.push("_ ");
	        }
	        guessPlaceHolder = document.getElementById('hmGame-guessSpace');
	        guessPlaceHolder.innerHTML = placeHolder.join(" ");
	        console.log(guessPlaceHolder.innerHTML);
	        gameStarted = true;

	    }
	    //end game if player guesses all right letters
	    if (placeHolder.includes("_ ") === false) {
	        //change title to prompt new game
	        title.innerHTML = "You did it!!!! give it another try! Press any key to start a new game"
	        clearData();
	        //selects game
	        game = Math.floor(Math.random() * gameOptions.length);

	    }
	    //end game if tries reaches 0
	    if (tries === 0) {
	        //change title to prompt new game
	        title.innerHTML = "Sorry youre out of tries Press any key to start a new game"
	            //clear all data
	        clearData();
	        //selects game
	        game = Math.floor(Math.random() * gameOptions.length);

	    }
	}
