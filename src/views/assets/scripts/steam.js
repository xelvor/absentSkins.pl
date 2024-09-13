function loginWithSteam() {
    const isModalShowed = document.querySelector('.modal');
    if (isModalShowed) return;

    const modalBG = document.createElement('div');
    modalBG.classList.add('modal-bg');

    const modal = document.createElement('div');
    modal.classList.add('modal');

    const modalHeader = document.createElement('img');
    modalHeader.src = 'https://www.absentskins.pl/assets/logo2.png';
    modalHeader.classList.add('modal-header');

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    
    const checkbox = document.createElement('div');
    checkbox.classList.add('modal-checkbox');
  
    const checkboxInput = document.createElement('input');
    checkboxInput.type = 'checkbox';
    checkboxInput.id = 'modal-input-checkbox';
    checkboxInput.classList.add('modal-input-checkbox');
    
    const checkboxText = document.createElement('span');
    checkboxText.innerHTML = 'I agree to the <span class="modal-link">Terms of Service</span> and <span class="modal-link">Privacy Policy</span>'
    checkboxText.classList.add('modal-checkbox-text');

    const checkbox2 = document.createElement('div');
    checkbox2.classList.add('modal-checkbox');
  
    const checkboxInput2 = document.createElement('input');
    checkboxInput2.type = 'checkbox';
    checkboxInput2.id = 'modal-input-checkbox';
    checkboxInput2.classList.add('modal-input-checkbox');
    
    const checkboxText2 = document.createElement('span');
    checkboxText2.innerHTML = "I'm 18 years of age or older"
    checkboxText2.classList.add('modal-checkbox-text');

    function tryRedirect() {
      if (!checkboxInput.checked) {
        return iziToast.error({
            title: 'Błąd',
            message: 'Musisz zaakceptować regulamin',
            position: 'bottomRight'
          });
      }

      if (!checkboxInput2.checked) {
        return iziToast.error({
            title: 'Błąd',
            message: 'Musisz mieć ukończone 18 lat',
            position: 'bottomRight'
          });
      }

      if (checkboxInput.checked && checkboxInput2.checked) {
        window.location.href = '/exchange/auth/steam';
      }
    }

    const modalButton = document.createElement('button');
    modalButton.classList.add('modal-button');
    modalButton.innerHTML = '<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="steam-symbol" width="20px" height="20px"role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="LoginButton_icon svg-inline--fa fa-steam-symbol"><path fill="#ffffff" d="M395.5 177.5c0 33.8-27.5 61-61 61-33.8 0-61-27.3-61-61s27.3-61 61-61c33.5 0 61 27.2 61 61zm52.5.2c0 63-51 113.8-113.7 113.8L225 371.3c-4 43-40.5 76.8-84.5 76.8-40.5 0-74.7-28.8-83-67L0 358V250.7L97.2 290c15.1-9.2 32.2-13.3 52-11.5l71-101.7c.5-62.3 51.5-112.8 114-112.8C397 64 448 115 448 177.7zM203 363c0-34.7-27.8-62.5-62.5-62.5-4.5 0-9 .5-13.5 1.5l26 10.5c25.5 10.2 38 39 27.7 64.5-10.2 25.5-39.2 38-64.7 27.5-10.2-4-20.5-8.3-30.7-12.2 10.5 19.7 31.2 33.2 55.2 33.2 34.7 0 62.5-27.8 62.5-62.5zm207.5-185.3c0-42-34.3-76.2-76.2-76.2-42.3 0-76.5 34.2-76.5 76.2 0 42.2 34.3 76.2 76.5 76.2 41.9.1 76.2-33.9 76.2-76.2z" class=""></path></svg> Zaloguj przez Steam';
    modalButton.onclick = () => tryRedirect();

    modal.appendChild(modalHeader);
    modal.appendChild(modalContent);
    modal.appendChild(modalButton);
    modalContent.appendChild(checkbox);
    checkbox.appendChild(checkboxInput);
    checkbox.appendChild(checkboxText);
    modalContent.appendChild(checkbox2);
    checkbox2.appendChild(checkboxInput2);
    checkbox2.appendChild(checkboxText2);

    modalBG.appendChild(modal);
    document.body.appendChild(modalBG);
}