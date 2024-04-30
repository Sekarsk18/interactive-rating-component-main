var SubmitButton = document.querySelector('.btn-submit');
var RateButton = document.querySelector('.btn-rate');
var MainContainer = document.querySelector('.Main-page')
var ResponseContainer = document.querySelector('.Response-page');
var Ratings = document.querySelectorAll('.btn');
var Rates = document.querySelector('.rate');

SubmitButton.addEventListener('click', function() {
    MainContainer.classList.add('hidden');
    ResponseContainer.classList.remove('hidden');
});

RateButton.addEventListener('click', function() {
    ResponseContainer.classList.add('hidden');
    MainContainer.classList.remove('hidden');
});

Ratings.forEach( (rate) => {
    rate.addEventListener('click', () => {
        Rates.innerHTML = rate.innerHTML;
    })
})
