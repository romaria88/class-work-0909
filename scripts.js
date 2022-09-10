window.addEventListener("load", function () {

    function sendMessage(e) {
        e.preventDefault()

        
        const content = document.querySelector('.app__content')

        const text = document.createElement('li')
        text.className = 'app__text'

        const time = document.createElement('span')
        time.className = 'app__time'

        const currentTime = new Date();
        
        time.textContent = currentTime.getHours() + ':' + currentTime.getMinutes()

        
        const input = document.querySelector('.app__input')

        text.text = input.value        

        text.appendChild(time)

        content.appendChild(text)

        input.value = ''        
    }
    document.querySelector('.app__form').addEventListener('submit', sendMessage)
});