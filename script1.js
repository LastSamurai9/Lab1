alert('Варіант: 13\nПІБ: Корсіков Олександр Анатолійович');
function area() {
    const N=13;
    const r=3*N-5;
    const h=N-2;
    const S=2*Math.PI*r*(r + h);
    document.getElementById('radius').textContent = r;
    document.getElementById('height').textContent = h;
    document.getElementById('result').textContent = S;
}
