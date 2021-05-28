const form = document.querySelector('#SearchForm')
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = this.elements.query.value;
    //Make API call
    const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`);
    //Remember to execute your function and actually pass data in. I forgot at first
    makeImages(res.data);
    form.elements.query.value = "";
})

//This function gets the image url from the API response and appends it to the body of our document
const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img)
        }
    }
}