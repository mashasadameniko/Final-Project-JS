// კონსოლ აპლიკაცია მოიცავს შემდეგ ფუნქციონალობას:
// 2.1 კალკულატორი
// კალკულატორის ფუნქცია მომხმარებლებს საშუალებას აძლევს შეასრულონ ძირითადი
// არითმეტიკული მოქმედებები (+, -, *, /). მომხმარებლებს შეუძლიათ შეიყვანონ ორი რიცხვი და
// შემდეგ აირჩიონ ოპერაცია შედეგის მისაღებად. კალკულატორი ასევე შეიცავს შეყვანის
// ვალიდაციას არასწორი შეყვანების დასამუშავებლად.

function calculate() {
  const num1 = prompt("გთხოვთ შემოიტანოთ რიცხვი, რომელზეც გსურთ მათემატიკური ოპერაციის ჩატარება: ");
  const num2 = prompt("გთხოვთ შემოიტანოთ მეორე რიცხვი ");
  const operation = prompt("ამოირჩიეთ მათემატიკური ოპერატორი (+, -, *, /): ");

  if (isNaN(num1) || isNaN(num2)) {
      console.log("მოხდა შეცდომა. გთხოვთ დარწმუნდეთ, რომ შემოგყავთ რიცხვი");
      return;
  }

  const number1 = parseFloat(num1);
  const number2 = parseFloat(num2);

  let result;

  switch (operation) {
      case '+':
          result = number1 + number2;
          break;
      case '-':
          result = number1 - number2;
          break;
      case '*':
          result = number1 * number2;
          break;
      case '/':
          if (number2 === 0) {
              console.log("შეცდომა: ნულზე გაყოფა დაუშვებელია");
              return;
          }
          result = number1 / number2;
          break;
      default:
          console.log("არასწორი ოპერაცია. გთხოვთ გამოიყენოთ შემდეგი მათემატიკური ოპერატორებიდან ერთ-ერთი: +, -, *, or /.");
          return;
  }

  console.log(`Result: ${number1} ${operation} ${number2} = ${result}`);
}

calculate();


// 2.2 
// თამაში 1: გამოიცანით რიცხვი
// ამ თამაშში პროგრამა აგენერირებს შემთხვევით რიცხვს მითითებული დიაპაზონიდან.
// მომხმარებლებს სთხოვენ გამოიცნონ რიცხვი. არასწორი რიცხვის შემთხვევაში პროგრამა
// მომხმარებელს აძლევს მინიშნებას (უფრო მაღალი/უფრო დაბალი). თამაში აკონტროლებს
// მცდელობების რაოდენობას და აჩვენებს შედეგს, როდესაც მომხმარებელი გამოიცნობს სწორ
// რიცხვს.

function guessTheNumber() {
  const min = 1; 
  const max = 100; 
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  let guess;
  let attempts = 0;

  console.log(`გამოიცანით რიცხვი ${min}-სა ${max} შორის`);

  do {
      guess = prompt(`ჩაწერეთ რიცხვი (${min}-${max} შორის): `);
      attempts++;

      if (isNaN(guess)) {
          console.log("მოხდა შეცდომა. გთხოვთ დარწმუნდეთ რომ შემოგყავთ რიცხვი");
          continue;
      }

      guess = parseInt(guess);

      if (guess < randomNumber) {
          console.log("მაღალი...");
      } else if (guess > randomNumber) {
          console.log("დაბალი...");
      } else {
          console.log(`გილოცავთ! თქვენ სწორად გამოიცანით რიცხვი ${randomNumber} ${attempts} ცდაში.`);
          break;
      }
  } while (guess !== randomNumber);
}

guessTheNumber();

// 2.3
// თამაში 2: Hangman
// Hangman არის სიტყვების გამოცნობის თამაში. პროგრამა ირჩევს შემთხვევით სიტყვას
// წინასწარ განსაზღვრული სიიდან და აჩვენებს მას ქვედა ტირეების გამოყენებით (რამდენი
// ასოცაა სიტყვაში, იმდენი ქვედა ტირე), რომელიც წარმოადგენს ფარულ ასოებს.
// მომხმარებლებს სთხოვენ გამოიცნონ ასო და პროგრამა ამოწმებს არის თუ არა ასო სიტყვაში.
// ვლინდება სწორად გამოცნობილი ასოები და თამაში გრძელდება მანამ, სანამ მომხმარებელი
// არ გამოიცნობს სიტყვას ან არ ამოიწურება მცდელობები.

function playHangman() {
  const words = ["წყალი", "ლიმონათი", "ღვინო", "ლუდი", "კისელი"];
  const word = words[Math.floor(Math.random() * words.length)];
  let guessedWord = Array(word.length).fill("_");
  let attempts = 6;
  let guessedLetters = [];
  let guess;

  console.log(`გამოიცანით სასმელი: ${guessedWord.join(" ")}`);

  while (guessedWord.includes("_") && attempts > 0) {
      guess = prompt("ჩაწერეთ ასო: ");

      if (guess.length !== 1 || !isNaN(guess)) {
          console.log("შეცდომა: გთხოვთ მიუთითოთ მხოლოდ 1 ასო");
          continue;
      }

      if (guessedLetters.includes(guess)) {
          console.log("თქვენ უკვე გამოიცანით ეს ასო");
          continue;
      }

      guessedLetters.push(guess);

      if (word.includes(guess)) {
          for (let i = 0; i < word.length; i++) {
              if (word[i] === guess) {
                  guessedWord[i] = guess;
              }
          }
          console.log(`სწორია! ${guessedWord.join(" ")}`);
      } else {
          attempts--;
          console.log(`არ არის სწორი! თქვენ დაგრჩათ: ${attempts} მცდელობა`);
      }
  }

  if (!guessedWord.includes("_")) {
      console.log(`გილოცავთ! თქვენ გამოიცანით სიტყვა: ${word}`);
  } else {
      console.log(`ვწუხვარ, მაგრამ თქვენ ვერ გამოიცანით სიტყვა. ჩაფიქრებული სიტყვა იყო: ${word}`);
  }
}

playHangman();

