const quiz = [
  {
    question: "ゲーム市場最も売れたゲーム機は次のうちどれ？",
    answers: [
      "スーパーファミコン",
      "プレイステーション2",
      "ニンテンドースイッチ",
      "ニンテンドーDS",
    ],
    correct: "ニンテンドーDS",
  },
  {
    question: "糸井重里が企画に関わった、任天堂の看板ゲームといえば？",
    answers: [
      "MOTHER2",
      "スーパーマリオブラザーズ3",
      "スーパードンキーコング",
      "星のカービィ",
    ],
    correct: "MOTHER2",
  },
  {
    question: "ファイナルファンタジーⅣの主人公の名前は？",
    answers: ["フリオニール", "クラウド", "ティーダ", "セシル"],
    correct: "セシル",
  },
  {
    question: "初期スマッシュブラザーズのキャラクター数は??",
    answers: ["8体", "10体", "12体", "6体"],
    correct: "12体",
  },
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;
const $button = document.getElementsByTagName("button");

const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  let buttonLength = $button.length;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
};
setupQuiz();
const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert("正解!");
    score++;
  } else {
    window.alert("不正解");
  }
  quizIndex++;
  if (quizIndex < quizLength) {
    setupQuiz();
  } else {
    if (score === quizIndex) {
      alert(
        "よくできました。あなたのスコアは" + score + "/" + quizLength + "です!!"
      );
    } else if (score === quizIndex - 1) {
      alert("もっと頑張れるはず!!。あなたのスコアは" +score +"/" +quizLength +"です!!"
      );
    } else {
      alert(
        "もっともっと勉強しよう!あなたのスコアは" +score +"/"+quizLength +"です!!"
      );
    }
  }
};
let handlerIndex = 0;
const buttonLength = $button.length;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener("click", (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}
