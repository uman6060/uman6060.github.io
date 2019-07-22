//event pada saat di click
$('.page-scroll').on('click', function(e){
 
 // ambil isi href
 var href=$(this).attr('href');
 console.log(href)
 //tangkap elemen ybs
 var elemenHref =$(href);

//pindahkan scroll
$('html,body').animate({
	scrollTop: elemenHref.offset().top-70
}, 1000)
e.preventDefault();
});