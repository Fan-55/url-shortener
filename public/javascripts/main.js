//prevent empty or space-only input
const urlInputField = document.querySelector('#original-url-input')
const submitBtn = document.querySelector('#submit-url')

submitBtn.addEventListener('click', (e) => {
  const urlInputValue = urlInputField.value.trim()
  if (urlInputValue.length === 0) {
    e.preventDefault()
    urlInputField.value = null
    return alert('Url cannot be empty or only spaces')
  }
})