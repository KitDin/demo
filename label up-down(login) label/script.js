const labels = document.querySelectorAll('.form-control label');
console.log(labels);

labels.forEach(label => {
    // innerHTML lấy phần tử kể cả cá selection
    // innerText chỉ lấy text của các phẩn tử
    label.innerHTML = label.innerText
        .split('  ')
        .map((letter,idx)=> `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
        // map là phương thức gọi hàm 
        // vd như trong java thì element.function thì trong js thì dùng map để gọi hạm
    });