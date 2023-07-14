const container = document.getElementById('container');
const colors = ['#e74c3c','#8e44ad','#3498bd','#e67e22','#2ecc71'];
const SQUARES = 500; // 

for(let i = 0 ; i < SQUARES ; i++){
    const DIVsquare = document.createElement('div');
    DIVsquare.classList.add('square');

    DIVsquare.addEventListener('mousemove',() => setColor(DIVsquare));

    DIVsquare.addEventListener('mouseout',() => removeColor(DIVsquare));

    container.appendChild(DIVsquare);
    //appendChild bổ sung node vào vị trí cuối cùng bên trong
    // thêm square vào bên trong container ở vị trí cuối 
}

function setColor(element){
    const color = colors[Math.floor(Math.random() * colors.length)]//floor làm tròn
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color},0 0 10px ${color}`;
}

function removeColor(e){
    e.style.background = '#1d1d1d';
    e.style.boxShadow = '0 0 2px #000';
}