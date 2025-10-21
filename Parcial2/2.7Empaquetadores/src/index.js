// ...existing code...
window.addEventListener('DOMContentLoaded', () => {
  const img = document.querySelector('img');
  const btnWash = document.getElementById('btn_wash');
  //if (!img || !btnWash) return;

  btnWash.addEventListener('click', () => {
    img.src = 'https://pbs.twimg.com/media/G2Lk2_TW4AARolD.png';
    img.alt = 'Pibble lavado';
  });
});

window.addEventListener('DOMContentLoaded', () => {
    const img=document.querySelector('img');
    const btnClean=document.getElementById('btn_clean');
    if (!img || !btnClean) return;
    btnClean.addEventListener('click', () => {
        img.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2qYs-1186MQ8jVRgaA8jTNIVxRa_MQqTcgVv5wyzzP4rO2NjT6k_E2vT5GABPkRSx94I&usqp=CAU';
        img.alt='Pibble sucio';
    }
)});

import { say } from 'cowsay';

let vk=say({ text: 'grazing in the browser' });
document.getElementById('vaka').innerText=vk;
