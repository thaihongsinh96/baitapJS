/**
 * Input: Nhap 5 so
 * 
 * Cac buoc xu ly:
 * B1: var tong, soMot, soHai, soBa, soBon, soNam;
 * B2: tinh tong 5 so: var tong = soMot + soHai + soBa + soBon + soNam;
 * B3: tinh trung binh 5 so: var trungBinh = tong / 5;
 * 
 * Output: Gia tri trung binh
 */

 var tong, trungBinh, soMot, soHai, soBa, soBon, soNam;

 soMot = 7;
 soHai = 10;
 soBa  = 4;
 soBon = 9;
 soNam = 20;

 var tong = soMot + soHai + soBa + soBon + soNam;

 var trungBinh = tong / 5;

 console.log("giaTriTrungBinh", trungBinh);