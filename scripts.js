
var quotes = [
'The loneliest moment in someone’s life is when they are watching their whole world fall apart and all they can do is stare blankly – F. Scott Fitzgerald, 1925',
'Life is too deep for words, so don’t try to describe it, just live it – C. S. Lewis',
'Nobody thinks about you nearly as much as they do themselves',
'A society grows great when old men plant trees whose shade they know they shall never sit in – Anonymous Greek Proverb ',
'When I was a child, my mother said to me, "If you become a soldier, you’ll be a general. If you become a monk, you’ll end up as the pope." Instead I became a painter and wound up as Picasso – Pablo Picasso',
'At the end of the game, the king and the pawn go back in the same box',
'You’re not perfect, sport, and let me save you the suspense: this girl you’ve met, she’s not perfect either.  But the question is whether or not you’re perfect for each other – Sean Maguire, 1997',
'No matter what people tell you, words and ideas can change the world. - Robin Williams',
'Who says life is fair, where is that written? ― William Goldman, 1987',
'Never grow up, just learn to be an adult',
'Time doesn’t change everything.  That’s what people say. It’s not true. Doing things changes things. Not doing things leaves things exactly as they were – Gregory House',
'Practice isn’t the thing you do once you’re good. It’s the thing you do that makes you good – Malcom Gladwell, 2008',
'Love isn’t a perfect state of caring. It’s an active noun, like "struggle." – Fred Rogers',
'It is possible to make no mistakes and still lose.  That is not failure; that is life – Jean-Luc Picard',
'We are always works in progress. You will hurt people you love, and help people you detest. This is called being a human and it happens to everyone – Adam Savage',
'Men marry women with the hope they will never change. Women marry men with the hope they will change. Invariably they are both disappointed – Albert Einstein',
'The average dog is a nicer person than the average person – Andy Rooney',
'I drink to make other people more interesting – Ernest Hemingway'
]
function randomQuotes() {
    var id = Math.floor(Math.random() * quotes.length)
    document.getElementById('quote').innerHTML = quotes[id]
}

function myFunction() {
    var x = document.querySelector(".menu");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }