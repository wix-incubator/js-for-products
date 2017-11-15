const rotateRightImage = 'https://d30y9cdsu7xlg0.cloudfront.net/png/8336-200.png'
const rotateLeftImage = 'https://d30y9cdsu7xlg0.cloudfront.net/png/8337-200.png'

const createRotateButton = (position, elementId, backgroundUrl) => {
  const rotateButton = document.createElement('div')
  rotateButton.style.width = '50px'
  rotateButton.style.height = '50px'
  rotateButton.style.border = '1px solid black'
  rotateButton.style.position = 'fixed'
  rotateButton.style.left = position.x
  rotateButton.style.top = position.y
  rotateButton.setAttribute('id', elementId)
  rotateButton.style.backgroundSize = 'contain'
  rotateButton.style.backgroundImage = `url('${backgroundUrl}')`
  rotateButton.style.cursor = 'pointer'
  return rotateButton
}

const createAndAddRotateButtons = () => {
  const right = createRotateButton({x: '120px', y: '50px'}, 'rotateRight', rotateRightImage)
  const left = createRotateButton({x: '50px', y: '50px'}, 'rotateLeft', rotateLeftImage)
  document.body.appendChild(right)
  document.body.appendChild(left)
}

const getCurrentAngle = function(elm) {
  const transform = elm.style.transform
  if (!transform) {
    return 0
  }

  const angle = transform.substring(transform.indexOf('(') + 1, transform.indexOf('deg'))
  return parseInt(angle)
}

const rotateBy = (element, degrees) => {
  let currentAngle = getCurrentAngle(element)
  if (currentAngle !== 0 && !currentAngle) {
    currentAngle = 0
  }
  element.style.transform = `rotate(${currentAngle + degrees}deg)`
}

function activateRotationGame() {
  createAndAddRotateButtons()
  let speed = 50
  let angleChange = 0

  const logo = document.getElementById('hplogo')

  // TODO: find the rotate right button, it has an id "rotateRight" - const rotateRightButton = ... your code
  // TODO: find the rotate left button, it has an id "rotateLeft" - const rotateLeftButton = ... your code

  rotateLeftButton.onclick = () => {
    angleChange -= 10
  }

  rotateRightButton.onclick = () => {
    angleChange += 10
  }

  window.setInterval(() => {
    // TODO - call the rotateBy function, with the logo and the angleChange variable
  }, speed)
}