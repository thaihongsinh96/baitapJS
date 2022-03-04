/**
 * Input: So co 2 chu so
 * 
 * Cac buoc xu ly:
 * B1: var hangDonVi, hangChuc, so, tong;
 * B2: Nhap so
 * 
 * Output: Tong 2 ky so
 */

 var hangDonVi, hangChuc, so, tong;

 so = 54;

 var hangDonVi = so % 10;
 var hangChuc  = Math.floor(so / 10);
 
 var tong = hangDonVi + hangChuc;

 console.log("tong2KySo", tong);
