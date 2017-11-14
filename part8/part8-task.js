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
    // TODO change the element color here, using the style property
}

// title =
// title.onclick ...

