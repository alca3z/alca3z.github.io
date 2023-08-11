// Questions that will be asked
const Questions = [{
	q: "What is your girlfriend's full name?",
	a: [{ text: "Alyssa Casey Gintu Ilaga", isCorrect: false },
	{ text: "Alyssa Casey Guintu Ilagha", isCorrect: false },
	{ text: "Alyssa Casey Guintu Ilaga", isCorrect: true },
	{ text: "Alyssa Casey Poopoo Peepee", isCorrect: false }
	]

},
{
	q: "When is your anniversary?",
	a: [{ text: "October 18", isCorrect: false, isSelected: false },
	{ text: "October 19", isCorrect: false },
	{ text: "October 20", isCorrect: false },
	{ text: "October 21", isCorrect: true }
	]

},
{
	q: "What is your girlfriend's favorite anime?",
	a: [{ text: "Made in Abyss", isCorrect: false },
	{ text: "Tokyo Ghoul", isCorrect: false },
	{ text: "Monster", isCorrect: true },
	{ text: "Aggretsuko", isCorrect: false }
	]

},
{
	q: "Who was your favorite Death Note character?",
	a: [{ text: "Mello", isCorrect: true },
	{ text: "N", isCorrect: false },
	{ text: "L", isCorrect: false },
	{ text: "Light", isCorrect: false }
	]

},
{
	q: "What was the first thing you played together?",
	a: [{ text: "Roblox", isCorrect: true },
	{ text: "Minecraft", isCorrect: false },
	{ text: "Wild Rift", isCorrect: false },
	{ text: "Wii Sports", isCorrect: false }
	]

},
{
	q: "What was your favorite day of the week when you were younger?",
	a: [{ text: "Thursday", isCorrect: false },
	{ text: "Friday", isCorrect: true },
	{ text: "Saturday", isCorrect: false },
	{ text: "Sunday", isCorrect: false }
	]

},
{
	q: "Why was that your favorite day of the week when you were younger?",
	a: [{ text: "You rode your bike", isCorrect: false },
	{ text: "Your sister would slap Caellen on the back over and over till he cried", isCorrect: false },
	{ text: "You would play Habbo Hotel in the morning before school", isCorrect: false },
	{ text: "Your dad would get take away food", isCorrect: true }
	]

},
{
	q: "What element would you like to have the most?",
	a: [{ text: "Mercury", isCorrect: false },
	{ text: "Selenium", isCorrect: false },
	{ text: "Iron", isCorrect: false },
	{ text: "Osmium", isCorrect: true }
	]

},
{
	q: "What element would you like to have the most?",
	a: [{ text: "Yes", isCorrect: false },
	{ text: "No", isCorrect: false },
	{ text: "Maybe", isCorrect: false },
	{ text: "I'ma be honest, I think I don't like feet but at the same time I think I should be focusing on something else rather than the feet. I don't know, maybe it's a domination thing but maybe I just need to do it another way. But I don't like feet, I thought I would be into it but when I tried it I realized I didn't like it that much.", isCorrect: true }
	]

},
{
	q: "What is Corey Taylor's number?",
	a: [{ text: "1", isCorrect: false },
	{ text: "2", isCorrect: false },
	{ text: "7", isCorrect: false },
	{ text: "8", isCorrect: true }
	]

}

]

let currQuestion = 0
let score = 0

function loadQues() {
	const question = document.getElementById("ques")
	const opt = document.getElementById("opt")

	question.textContent = Questions[currQuestion].q;
	opt.innerHTML = ""

	for (let i = 0; i < Questions[currQuestion].a.length; i++) {
		const choicesdiv = document.createElement("div");
		const choice = document.createElement("input");
		const choiceLabel = document.createElement("label");

		choice.type = "radio";
		choice.name = "answer";
		choice.value = i;

		choiceLabel.textContent = Questions[currQuestion].a[i].text;

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
}

loadQues();

function loadScore() {
	const totalScore = document.getElementById("score")
	totalScore.textContent = `You scored ${score} out of ${Questions.length}`
	
	const quizImage = document.getElementById("quiz-image");

	// Check the user's score and update the image source accordingly
	if (score === 10) {
	  quizImage.src = "images/Illustration2.png"; // Replace with the correct image path for full score
	} else {
	  quizImage.src = "images/Illustration1.png"; // Replace with the correct image path for other scores
	}

	if (score === 10) {
		// Show the extra content
		const extraContent = document.getElementById("extra-content");
		extraContent.style.display = "block";
	  }
}
  

	

	

function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("btn").remove()
		loadScore();
	}
}

function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[currQuestion].a[selectedAns].isCorrect) {
		score++;
		console.log("Correct")
		nextQuestion();
	} else {
		nextQuestion();
	}
}
