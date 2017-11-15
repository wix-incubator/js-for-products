/**
 *  This task should be done on example.com website
 *
 */
const COLORS = ['gold', 'bisque', 'crimson', '#00ffff', 'violet', 'powderblue', 'deeppink']
const getRandomColor = () => {
    const colorIndex = Math.floor(Math.random() * COLORS.length)
    return COLORS[colorIndex]
}

const changeColor = (domElement) => {
    const newColor = getRandomColor()
    domElement.style.color = newColor
}

const title = document.getElementsByTagName('h1')[0]
title.onclick = function() {
    changeColor(title)
}
