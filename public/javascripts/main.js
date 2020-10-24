//prevent invalid url input
const urlInputField = document.querySelector('#original-url-input')
const submitBtn = document.querySelector('#submit-url')

function isValidUrl(url) {
  const expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
  const regex = new RegExp(expression)
  return regex.test(url)
}

submitBtn.addEventListener('click', (e) => {
  const urlInputValue = urlInputField.value
  if (!isValidUrl(urlInputValue)) {
    e.preventDefault()
    urlInputField.value = null
    return alert('Invalid url input')
  }
})

//clipboard
const shortenUrlField = document.querySelector('#shorten-url-output')
const copyBtn = document.querySelector('#copy-btn')
copyBtn.addEventListener('click', (e) => {
  shortenUrlField.select()
  document.execCommand('copy')
  copyBtn.innerText = 'copied'
  copyBtn.className = 'btn btn-danger'
})