//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

document.querySelector('h2').innerText = localStorage.getItem('books');

function getFetch(){
  const choice = document.querySelector('input').value

  console.log(choice)
  const url = `https://openlibrary.org/isbn/${choice}.json`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.title)
        //
        if (data.title === undefined){
          document.querySelector('h2').innerText = "Enter an ISBN."
        } else if (!localStorage.getItem('books')){
          localStorage.setItem('books', data.title)
        } else {
          let books = localStorage.getItem('books') + "; " + data.title;
          localStorage.setItem('books', books);
        }
        //put title in localStorage
        // let books = localStorage.getItem('books') + "; " + data.title;
        // localStorage.setItem('books', books);
        document.querySelector('h2').innerText = localStorage.getItem('books');

        // document.querySelector('img').src = data.hdurl;
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

document.getElementById('clear').addEventListener('click', clearList)

function clearList(){
  localStorage.clear();
  location.reload();
}

//9780765397362