const button = document.querySelector('#joke');
const ul = document.querySelector('ul');


const getDadJoke = async () => {
    const config = { headers: { Accept: 'application/json' } }
    const response = await axios.get('https://icanhazdadjoke.com/', config)
    console.log(response.data.joke)
    return response.data.joke;
}

const addNewJoke = async () => {
    const jokeTxt = await getDadJoke()
    const newLI = document.createElement('LI')
    newLI.append(jokeTxt)
    ul.append(newLI)
}

button.addEventListener('click', addNewJoke)