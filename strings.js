const sentence = "  javascript — это просто!  ";
const trimmed = sentence.trim()
const resultSentence = trimmed[0].toUpperCase() + trimmed.slice(1);
console.log(resultSentence);
