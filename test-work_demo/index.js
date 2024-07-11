document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const demoButton = document.querySelector('.demo-button');
  const closeModalButton = document.querySelector('.close');

  // Функция для открытия модального окна
  const openModal = () => {
    modal.style.display = 'flex';
  };

  // Функция для закрытия модального окна
  const closeModal = () => {
    modal.style.display = 'none';
  };

  // Открытие модального окна при нажатии на кнопку
  demoButton.addEventListener('click', () => {
    openModal();
  });

  // Закрытие модального окна при клике на крестик
  closeModalButton.addEventListener('click', () => {
    closeModal();
  });

  // Обработка отправки формы входа
  document.getElementById('loginForm').addEventListener('submit', (event) => {
    event.preventDefault();

    closeModal(); // Закрываем модальное окно после отправки формы
  });
});
