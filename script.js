function hangman() {



    var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];



    var puzzle = [];
    var countDown = 7;
    var stickman = document.getElementsByClassName('stickman')[0];


    // Array of wordbank;

    var wordBank = [ "javascript", "internet", "google", "dog", "airplane", "apple", "network", "sleep", "friend", "bootcamp", "function", "element", "class", "object", "pencil", "telephone", "monitor", "battery"];

    // chose random puzzle word
    var randomIndex = Math.floor(Math.random() * wordBank.length);
    puzzle = wordBank[randomIndex].split('');

    // display blanks for puzzle
    var gameSpace = document.getElementById('gamespace');
    var gameSpaceHTML = '';

    for (var i = 0; i < puzzle.length; i++) {
        gameSpaceHTML += "<span class='" + puzzle[i] + "'> _ </span>";
    }
    gameSpace.innerHTML = gameSpaceHTML;

    // display letters of alphabet
    var userInterface = document.getElementById('buttons');
    var interfaceHTML = '';

    for (var j = 0; j < abc.length; j++) {
        interfaceHTML += '<button class="click btn btn-info btn-sm">' + abc[j] + '</button>';
    }
    userInterface.innerHTML = interfaceHTML;

    // when the user clicks a letter
    var abcButtons = document.getElementsByClassName('click');

    for (var k = 0; k < abcButtons.length; k++) {
        abcButtons[k].addEventListener('click', function(evt) {
            var btn = evt.target;
            var letter = btn.innerText;
            btn.disabled = true;

            if (puzzle.indexOf(letter) === -1) {
                countDown--;
                // update hangman pic. according to countdown state
                stickman.src = './assets/images/' + countDown + '.jpg';

                if (countDown === 0) {
                    var puzzleJoin = puzzle.join('');
                    alert("Game Over!!! The answer was " + puzzleJoin + " Try again?");
                    hangman();
                    //reset photo src here
                    stickman.src = './assets/images/8.jpg';
                }
            } else {
                var solvePuzzle = document.getElementsByClassName(letter);

                for (var l = 0; l < solvePuzzle.length; l++) {
                    solvePuzzle[l].innerText = letter;
                }
                // if puzzle solved, show 'you won' and reset game.
                checkPuzzle()
            }

        })

    }

    function checkPuzzle() {
        var spans = document.getElementById("gamespace").getElementsByTagName("span");
        var spanLetters = '';
        for (var z = 0; z < spans.length; z++) {
            spanLetters += spans[z].innerText;
        }
        if ( spanLetters.indexOf('_') === -1 ) {
            setTimeout(function() {
                alert("CONGRATULATIONS, YOU SURVIVED!!\nPlay Again?");
                hangman();
                stickman.src = './assets/images/8.jpg';
            }, 800);
        }
    }

}



hangman();
