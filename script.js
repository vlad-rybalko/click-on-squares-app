let $start = document.querySelector('#start')
let $game = document.querySelector('#game')
let $time = document.querySelector('#time')
let $timeHeader = document.querySelector('#time-header')
let $resultHeader = document.querySelector('#result-header')
let $result = document.querySelector('#result')
let $input = document.querySelector('#game-time')
let score = 0
let cwe = 0

$input.addEventListener('input', setGameTime)

$game.addEventListener('click', handleBoxClick)

$start.addEventListener('click', startGame)

function show($el) {
    $el.classList.remove('hide')
}

function hide($el) {
    $el.classList.add('hide')
}

function startGame() {
   hide($start)
   $game.style.backgroundColor = '#fff'
   playGame = true
   setGameTime()
   $input.setAttribute('disabled', 'true')
   score = 0 

    let interval = setInterval(function() {
        let time = parseFloat($time.textContent)
         if (time <= 0) {
             clearInterval(interval)
             endGame()
         } else {
             $time.textContent = (time - 0.1).toFixed(1)
         }

    }, 100)

   renderBox()
}

function outputResult() {
    $result.textContent = score
}

function endGame() {
    playGame = false
    show($start)
    $game.style.backgroundColor = '#ccc'
    $game.innerHTML = ''
    hide($timeHeader)
    show($resultHeader)
    $input.removeAttribute('disabled')
    outputResult()
}

function handleBoxClick () {
    if (!playGame) {
        return
    }

    if (event.target.dataset.box) {
        score++
        renderBox()
    } 
    
}

function setGameTime() {
    hide($resultHeader)
    show($timeHeader)
    time = +$input.value
    $time.textContent = time.toFixed(1)
}

function renderBox() {
    $game.innerHTML = ''

    let box = document.createElement('div')

    let boxSize = getRandom(30, 100)
    let gameSize = $game.getBoundingClientRect()
    let maxTop = gameSize.height - boxSize 
    let maxLeft = gameSize.width - boxSize

    box.style.height = box.style.width = boxSize + 'px'
    box.style.position = 'absolute'
    box.style.backgroundColor = qwe = randomColor()
    box.style.top = getRandom(0, maxTop) + 'px'
    box.style.left = getRandom(0, maxLeft) + 'px'
    box.style.cursor = 'pointer'
    box.setAttribute('data-box', 'true')

    console.log(qwe)

    $game.insertAdjacentElement('afterbegin', box)
}

function getRandom (min, max) {
    return Math.floor(Math.random() * (max-min) + min)
}

function randomColor() {
    rgb = (Math.floor(Math.random()*16777215).toString(16) + '000000').substring(0, 6) 
    return '#' + rgb
}
