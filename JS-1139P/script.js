function increaseScore(team) {
  const scoreId = `score${team}`  
  const scoreElement = document.getElementById(scoreId)
  let score = parseInt(scoreElement.textContent)
  scoreElement.textContent = ++score
}


function decreaseScore(team) {
  const scoreId = `score${team}`  
  const scoreElement = document.getElementById(scoreId)
  let score = parseInt(scoreElement.textContent)
  scoreElement.textContent = --score
}

document.getElementById("resetButtonA").addEventListener("click" , function (deletebtn) {
  document.getElementById("scoreA").innerHTML = "0"
})

document.getElementById("resetButtonB").addEventListener("click" , function (deletebtn) {
  document.getElementById("scoreB").innerHTML = "0"
})


function setScorePrompt(team) {
  const score = prompt("Yeni gol sayısı giriniz:")
  if (score !== null && !isNaN(score)) {
  const scoreNum = parseInt(score) 
  document.getElementById(`score${team}`).textContent = scoreNum 
  } else {
    alert("Giriş iptal edldi veya geçersiz bir değer girildi.")
  }
}



