function tinggi(x,y,z) {
  var x;
  var y;
  var z;

  urut ="Urutan paling tinggi :";
  x1=" Siswa X";
  y1=" Siswa Y";
  z1=" Siswa Z";

if (x>y && x>z) {
  if (y>z) {
    return console.log(urut, x1, x, y1, y, z1, z);
  }
  else {
    return console.log(urut, x1, x, z1, z, y1, y);
  }
}

if (y>x && y>z) {
  if (x>z) {
    return console.log(urut, y1, y, x1, x, z1, z);
  }
  else {
    return console.log(urut, y1, y, z1, z, x1, x);
  }
}

if (z>x && z>y) {
  if (x>y) {
    return console.log(urut, z1, z, x1, x, y1, y);
  }
  else {
    return console.log(urut, z1, z, y1, y, x1, x);
  }
}

}

tinggi(160,140,170);
