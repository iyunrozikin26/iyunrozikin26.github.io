/*
>> ALGORITMA BOUNCE GAME
            1. Deklarasi variabel bounce, titik koordinat (x,y) dan differensialnya;
            2. Mengambil nilai dari html with document.getElementById("bounceGame");
            3. Grafis canvas 2 dimensi;
            4. Oleh karena canvas membutuhkan area untuk menggambarkan bentuk dari objectnya, maka diberi interval batas untuk pergerakaanya;
            5. Value untuk posisi bounce;
            6. Differensial/perpindahan dari (x, y);
            7. Untuk dapat membuat pergerakan tidak dapat ditebak, maka direction harus diramdom;
            8. Kemudian untuk menjalankan setiap value di atas, gunakan fungsi untuk mendapatkan new value sehingga value yang diberikan pada bounce selalu update;
            9. .fillStyle dan .fillRect untuk memberi tampilan akhir yakni menggambar object yang akan diberi value-value di atas;
            10. Setiap clik pada page html akan menampilkan bounce game dan speednya bertambah;
 */

const FPS = 30; // frame per second
var ball = 20;

var x, y;
var dx, dy;
var canvas, kontex;
    canvas = document.getElementById("bounceGame");
    kontext = canvas.getContext("2d");

function show(){
    setInterval(update, 1000 / FPS);
    x = canvas.width / 2;
    y = canvas.height / 2;

    dx = Math.floor(Math.random() * 76 + 15) / FPS;
    dy = Math.floor(Math.random() * 76 + 15) / FPS;

    if (Math.floor(Math.random() * 2) == 0) dx = -dx;
    if (Math.floor(Math.random() * 2) == 0) dy = -dy;

    function update(){
        x += dx;
        y += dy;
        // batas-x
        if (x - ball / 2 < 0 && dx < 0) dx = -dx;
        if (x + ball / 2 > canvas.width && dx > 0) dx = -dx;
        // batas-y
        if (y - ball / 2 < 0 && dy < 0) dy = -dy;
        if (y + ball / 2 > canvas.height && dy > 0) dy = -dy;

        // canvas
        kontext.fillStyle = "black";
        kontext.fillRect(0, 0, canvas.width, canvas.height);
        // bounce
        kontext.fillStyle = "yellow";
        kontext.fillRect(x - ball / 2, y - ball / 2, ball, ball);
        // console.log(x); // nilai x update
    }
    setTimeout(() => {update(), 2000})
}

function tangkap(){
    document.addEventListener("click", (event) => {
        show()
    })
}