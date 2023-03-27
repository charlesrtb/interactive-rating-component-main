const mainCard = document.querySelector('div[data-state="main-card"]');
const thankYou = document.querySelector('div[data-state="thank-you"]');

const radioButtons = document.querySelectorAll('input[name="rating"]');
const btn = document.querySelector('button');

    
function getRating() {
    let checkedRating;


    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            checkedRating = radioButton.value;
            break;
        }
    }

    return checkedRating;
}



btn.addEventListener('click', () => {
    event.preventDefault();
    thankYou.classList.remove('hidden');
    mainCard.classList.add('hidden');

    let rating = document.getElementById('rating');
    let stringVal = getRating().toString();

    rating.innerHTML = stringVal;

    console.log(getRating());
  });
