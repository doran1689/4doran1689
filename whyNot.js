function checkAnswers() {
    var DoneWorking = 1;
    var score = 0;
    var feedback = [];
    var Q1answer = document.quiz.a1.value.toLowerCase();
    if (Q1answer === 'link')
    {
        score++;
        feedback.push("Question 1 is correct!");
    }   else if (Q1answer === '') {
        var DoneWorking = 0;
        alert('Please Enter an Answer for Question 1');
    }   else if (Q1answer === 'zelda') {
        feedback.push('Question 1 is incorrect! That is Link, NOT ZELDA. THE GAME IS NOT NAMED AFTER THE MAIN CHARACTER!');
    }   else {

        feedback.push("Question 1 is incorrect! Question 1 was LINK");
    }

    if (document.quiz.a2.value === 'Doom Guy') {
        score++;
        feedback.push("Question 2 is correct");
    }   else if (document.quiz.a2.value === '') {
        var DoneWorking = 0;
        alert('Please Enter an Answer for Question 2');
    }   else {
        feedback.push("Question 2 is incorrect!! Question 2 was Doom Guy!");
    }

    if (document.quiz.a3A.checked === true && document.quiz.a3C.checked === true
        && document.quiz.a3D.checked === true && document.quiz.a3B.checked === false
        && document.quiz.a3E.checked === false) {
        score++;
        feedback.push("Question 3 is correct!");
    }   else if (document.quiz.a3A.checked === false && document.quiz.a3C.checked === false
        && document.quiz.a3D.checked === false && document.quiz.a3B.checked === false
        && document.quiz.a3E.checked === false) {
        var DoneWorking = 0;
        alert('Please Enter an Answer for Question 3');
    }   else {
        feedback.push("Question 3 is incorrect! Question 3 was Team Fortress 2, Portal 2, and Half-Life 2");
    }

    var Q4answer = document.quiz.a4.value.toLowerCase();

    if (Q4answer === 'ubisoft') {
        score++;
        feedback.push("Question 4 is correct!");
    }   else if (Q4answer === '') {
        var DoneWorking = 0;
        alert('Please Enter an Answer for Question 4');
    }   else {
        feedback.push("Question 4 is incorrect!! Question 4 was Ubisoft!");
    }

    if (document.quiz.a5.value === 'Electronic Arts') {
        score++;
        feedback.push("Question 5 is correct");
    }   else if (document.quiz.a5.value === '') {
        var DoneWorking = 0;
        alert('Please Enter an Answer for Question 5');
    }   else {
        feedback.push("Question 5 is incorrect!! Question 5 was Electronic Arts! But all those companies are terrible.");
    }

    if (document.quiz.a6A.checked === true && document.quiz.a6B.checked === false
        && document.quiz.a6C.checked === false && document.quiz.a6D.checked === true
        && document.quiz.a6E.checked === false && document.quiz.a6F.checked === true
        && document.quiz.a6G.checked === true && document.quiz.a6H.checked === false
        && document.quiz.a6I.checked === true && document.quiz.a6J.checked === false
        && document.quiz.a6K.checked === true && document.quiz.a6L.checked === false
        && document.quiz.a6M.checked === false && document.quiz.a6N.checked === false
        && document.quiz.a6O.checked === true && document.quiz.a6P.checked === false
        && document.quiz.a6Q.checked === false && document.quiz.a6R.checked === true
        && document.quiz.a6S.checked === false) //This question was the death of me
    {
        score++;
        feedback.push("Question 6 is correct!")
    }   else if (document.quiz.a6A.checked === false && document.quiz.a6B.checked === false
        && document.quiz.a6C.checked === false && document.quiz.a6D.checked === false
        && document.quiz.a6E.checked === false && document.quiz.a6F.checked === false
        && document.quiz.a6G.checked === false && document.quiz.a6H.checked === false
        && document.quiz.a6I.checked === false && document.quiz.a6J.checked === false
        && document.quiz.a6K.checked === false && document.quiz.a6L.checked === false
        && document.quiz.a6M.checked === false && document.quiz.a6N.checked === false
        && document.quiz.a6O.checked === false && document.quiz.a6P.checked === false
        && document.quiz.a6Q.checked === false && document.quiz.a6R.checked === false
        && document.quiz.a6S.checked === false) {
        var DoneWorking = 0;
        alert('Please Enter an Answer for Question 6');
    }   else {
        feedback.push("Question 6 is incorrect!! Question 6 was Mario, Yoshi, Donkey Kong, Link, Samus," +
            " Kirby, Pikachu, and Fox")
    }

    if (document.quiz.a7.value === 'Sub-Zero') {
        score++;
        feedback.push("Question 7 is correct!")
    }   else if (document.quiz.a7.value === '') {
        var DoneWorking = 0;
        alert('Please Enter an Answer for Question 7');
    }   else if (document.quiz.a7.value === 'Scorpion') {
        feedback.push("Question 7 is incorrect!! Question 7 was Sub-Zero, Scorpion missed only 1 Game!")
    }   else {
        feedback.push("Question 7 is incorrect!! Question 7 was Sub-Zero")
    }

    if (document.quiz.a8A.checked === false && document.quiz.a8B.checked === true
        && document.quiz.a8C.checked === false && document.quiz.a8D.checked === true
        && document.quiz.a8E.checked === false && document.quiz.a8F.checked === true)
    {
        score++;
        feedback.push("Question 8 is correct!!")
    }   else if (document.quiz.a8A.checked === false && document.quiz.a8B.checked === false
        && document.quiz.a8C.checked === false && document.quiz.a8D.checked === false
        && document.quiz.a8E.checked === false && document.quiz.a8F.checked === false)  {
        alert('Please Enter an Answer for Question 8')
    }   else {
        feedback.push("Question 8 is incorrect! Question 8 is Smoke, Jade, and Noob Saibot")
    }

    if (document.quiz.a9A.checked === true && document.quiz.a9B.checked === false
        && document.quiz.a9C.checked === true && document.quiz.a9D.checked === false
        && document.quiz.a9E.checked === false && document.quiz.a9F.checked === true
        && document.quiz.a9G.checked === false && document.quiz.a9H.checked === true
        && document.quiz.a9I.checked === false)
    {
        score++;
        feedback.push("Question 9 is correct!!")
    }   else if (document.quiz.a9A.checked === false && document.quiz.a9B.checked === false
        && document.quiz.a9C.checked === false && document.quiz.a9D.checked === false
        && document.quiz.a9E.checked === false && document.quiz.a9F.checked === false
        && document.quiz.a9G.checked === false && document.quiz.a9H.checked === false
        && document.quiz.a9I.checked === false)   {
        alert('Please Enter an Answer for Question 9')
    }   else if (document.quiz.a9I.checked === true)    {
        feedback.push("Question 9 is incorrect! Mewtwo is NOT a starter. He is a legendary.")
    }   else {
        feedback.push("Question 9 is incorrect! Question 9 is Charmander, Bulbasaur, Squirtle, and Pikachu!")
    }

        if (DoneWorking === 1)
    {
        alert(score);
        alert(feedback);
    }
}