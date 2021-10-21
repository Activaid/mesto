const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close-btn');
const editButton = document.querySelector('.profile__edit-btn');
const popupForm = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_type_name');
const profileName = document.querySelector('.profile__name');
const aboutInput = document.querySelector('.popup__input_type_about');
const profileAbout = document.querySelector('.profile__about');

function openPopup() {
    popup.classList.add('popup_opened')
    nameInput.value = profileName.textContent;
    aboutInput.value = profileAbout.textContent;
}

function closePopup() {
    popup.classList.remove('popup_opened')
}

editButton.addEventListener('click', openPopup);

popupCloseButton.addEventListener('click', closePopup);

function submitForm(event) {
    event.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = aboutInput.value;
    closePopup();
}

popupForm.addEventListener('submit', submitForm);