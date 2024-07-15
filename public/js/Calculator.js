function compute() {
  let p = pamt.value;
  let r = roi.value;
  let t = time.value;
  let si = (p * t * r) / 100;
  document.writeln("intrest Amount: &#8377; " + si);
  /*  becouse of this line output is coming in  next new  page if yuou want to get it on same page you ncan use the aler ex */
  alert("intrest Amount: RS" + si);
}
 