const button = document.querySelector('#joke');
const ul = document.querySelector('ul');


const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const response = await axios.get('https://icanhazdadjoke.com/', config)
        return response.data.joke;
    } catch (e) {
        return "NO JOKES AVAILABLE! SORRY"
    }
}


const addNewJoke = async () => {
    const jokeTxt = await getDadJoke()
    const newLI = document.createElement('LI')
    newLI.append(jokeTxt)
    ul.append(newLI)
}

button.addEventListener('click', addNewJoke)