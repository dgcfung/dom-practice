let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

window.onload =  function(event) {
  
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1
  function a(){
  let lessWordy= document.querySelector('#main-title')
  lessWordy.innerHTML = 'DOM Toretto Homepage'
}
a()
  // console.log(lessWordy)

  // Part 2
  function b(){
  let newColor= document.querySelector('body')
  newColor.style.backgroundColor= 'blue'
}
b()
  // console.log(newColor)

  // Part 3
  function c(){
  let removeLast = document.querySelectorAll('#favorite-things>li')
  console.log(removeLast[5])
  removeLast[removeLast.length-1].remove()
}
c()
    // removeLast.parentNode.removeChild(ul[5])
  // Part 4
  function d(){
  let changeFontSz= document.querySelectorAll('.special-title')
  console.log(changeFontSz)

    for(i=0; i<changeFontSz.length; i++){
       changeFontSz[i].style.fontSize= '2rem'
    }
  }
  d()
 
  // Part 5
function e(){
  let removePastRace= document.querySelectorAll(`#past-races>li`)
  console.log(removePastRace)
  removePastRace[removePastRace.length-3].remove()
}
e()
  // Part 6
function f(){
  let addPastRace= document.querySelector(`#past-races`)
  console.log(addPastRace)
  let item= document.createElement('li')
  item.innerHTML= "Miami"
  addPastRace.append(item)
}
f()
  // Part 7
function g(){
  let newBlogPost = document.querySelector(`.main`)
    console.log(newBlogPost)
    let newBlog= document.createElement('div')
    newBlog.classList.add("blog-post", "purple")
    // newBlog.classList.add("p")
    let city= document.createElement('h1')
    let post= document.createElement('p')
    city.innerHTML= "Miami"
    post.innerHTML= "It was really hot."
    newBlogPost.append(newBlog)
    newBlog.append(city)
    newBlog.append(post)
}
 g()
    //create a div, createn h1 , add two classes to div., then append
}
