let angleX = 0;  // Sudut rotasi pada sumbu X
let angleY = 0;  // Sudut rotasi pada sumbu Y
let angleZ = 0;  // Sudut rotasi pada sumbu Z

function setup() {
  createCanvas(600, 600, WEBGL);
  normalMaterial();  // Menambahkan efek shading standar
}

function draw() {
  background(200);

  // Rotasi objek
  rotateX(angleX);  // Rotasi pada sumbu X
  rotateY(angleY);  // Rotasi pada sumbu Y
  rotateZ(angleZ);  // Rotasi pada sumbu Z

  // Membuat sebuah box 3D dengan warna pada setiap sisi
  drawColoredBox(150);  // Panggil fungsi untuk menggambar box berwarna

  // Memperbarui sudut rotasi setiap frame
  angleX += 0.01;  // Rotasi sedikit pada sumbu X
  angleY += 0.02;  // Rotasi sedikit lebih cepat pada sumbu Y
  angleZ += 0.03;  // Rotasi lebih cepat pada sumbu Z
}

// Fungsi untuk menggambar box dengan warna berbeda pada setiap sisi
function drawColoredBox(size) {
  push();
  
  // Sisi depan
  fill(255, 0, 0);  // Merah
  beginShape();
  vertex(-size/2, -size/2, size/2);
  vertex(size/2, -size/2, size/2);
  vertex(size/2, size/2, size/2);
  vertex(-size/2, size/2, size/2);
  endShape(CLOSE);

  // Sisi belakang
  fill(0, 255, 0);  // Hijau
  beginShape();
  vertex(-size/2, -size/2, -size/2);
  vertex(size/2, -size/2, -size/2);
  vertex(size/2, size/2, -size/2);
  vertex(-size/2, size/2, -size/2);
  endShape(CLOSE);

  // Sisi kiri
  fill(0, 0, 255);  // Biru
  beginShape();
  vertex(-size/2, -size/2, -size/2);
  vertex(-size/2, -size/2, size/2);
  vertex(-size/2, size/2, size/2);
  vertex(-size/2, size/2, -size/2);
  endShape(CLOSE);

  // Sisi kanan
  fill(255, 255, 0);  // Kuning
  beginShape();
  vertex(size/2, -size/2, -size/2);
  vertex(size/2, -size/2, size/2);
  vertex(size/2, size/2, size/2);
  vertex(size/2, size/2, -size/2);
  endShape(CLOSE);

  // Sisi atas
  fill(255, 165, 0);  // Oranye
  beginShape();
  vertex(-size/2, -size/2, size/2);
  vertex(size/2, -size/2, size/2);
  vertex(size/2, -size/2, -size/2);
  vertex(-size/2, -size/2, -size/2);
  endShape(CLOSE);

  // Sisi bawah
  fill(75, 0, 130);  // Indigo
  beginShape();
  vertex(-size/2, size/2, size/2);
  vertex(size/2, size/2, size/2);
  vertex(size/2, size/2, -size/2);
  vertex(-size/2, size/2, -size/2);
  endShape(CLOSE);

  pop();
}

