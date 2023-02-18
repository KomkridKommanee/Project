var drop={
    ปริญญาตรี2ปีหลังปกติ:["5020105203505-เทคโนโลยีอุตสาหกรรม(เทคโนโลยีวิศวกรรมการผลิต)",
    "5020105203504-เทคโนโลยีอุตสาหกรรม(เทคโนโลยีอิเล็กทรอนิกส์และคอมพิวเตอร์)",
    "5020105203503-เทคโนโลยีอุตสาหกรรม(เทคโนโลยีโยธา)",
    "5020105203502-เทคโนโลยีอุตสาหกรรม(เทคโนโลยีเครื่องกล)",
    "5020105203310-เทคโนโลยีอุตสาหกรรม(เทคโนโลยีโยธา)",
    "5020105203270-เทคโนโลยีอุตสาหกรรม(เทคโนโลยีวิศวกรรมการผลิต)",
    "5020105203269-เทคโนโลยีอุตสาหกรรม(เทคโนโลยีการจัดการอุตสาหกรรม)"]

}


var main= document.getElementById('main_manu');
var sub = document.getElementById('sub_menu');




main.addEventListener('change',function(){

var selected_option = drop[this.value];

while(sub.options.length > 0){
sub.options.remove(0);

}

Array.from(selected_option).forEach(function(el){
    let options = new Option(el,el);

    sub.appendChild(options);
});
});