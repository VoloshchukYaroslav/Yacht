(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-rent-open]'),
      closeModalBtn: document.querySelector('[data-modal-rent-close]'),
      modal: document.querySelector('[data-modal-rent]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();