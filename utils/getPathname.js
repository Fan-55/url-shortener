function getPathname() {
  const engCollection = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const numCollection = '0123456789'
  const fullCollection = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

  //choose one English alphabet, one number, and the rest three characters can be either alphabet or number
  const chars = [sample(engCollection), sample(numCollection)]
  for (let i = 0; i < 3; i++) {
    chars.push(sample(fullCollection))
  }

  //shuffle the five characters and join them to become a random string
  const pathname = shuffleArray(chars).join('')
  return pathname
}

//Fisher-Yates Shuffle 
function shuffleArray(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let randomIndex = Math.floor(Math.random() * (index + 1));
    [array[index], array[randomIndex]] = [array[randomIndex], array[index]]
  }
  return array
}

function sample(collection) {
  const randomIndex = Math.floor(Math.random() * collection.length)
  return collection[randomIndex]
}

module.exports = getPathname