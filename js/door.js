const door = document.getElementById('door');
const doorLeft = document.querySelector('.door-left');
const doorRight = document.querySelector('.door-right');

let isDoorOpen = false;

const openDoor = () => {
  if (!isDoorOpen) {
    door.classList.add('door-open'); 
      setTimeout(() => {
        window.location.href = 'https://jb991001.github.io/portfoliomain/'; 
      }, 1800);
    isDoorOpen = true;
  }
};

// 문에 마우스를 올리면 열림
doorLeft.addEventListener('mouseenter', openDoor);
doorRight.addEventListener('mouseenter', openDoor);
