// $("#menu_checkbox").on('click', function(){
//     // setTimeout(alert("charu"),100000);
//     $('#myModal').modal('show');
// });
// $("#menu_checkbox").on('click', function(){
//     // setTimeout(alert("charu"),100000);
//     $('#myModal').modal('show');
// });
$('.learn_more_btn').on('click',function(){
document.documentElement.scrollTop = 700;
  //  document.body.scrollTop = 60;
});
// $(document).on('mousemove', function(e) {
//     var element = $('#skin_heading');
//     console.log( element.offset() );
// })
const Dark_Circles=
`<div class = "details" >
<h3 class="d_head" > Dark Circles</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quisquam explicabo non nam vel minus maxime dignissimos ex unde facilis ullam ipsa, quia minima assumenda quos temporibus nostrum quasi doloribus voluptates ratione illum laborum! Unde assumenda suscipit enim reiciendis eaque corrupti? Repudiandae voluptate, dignissimos possimus nam illo minus a facere repellendus hic nemo, aliquid iste, ea architecto modi delectus repellat rem fuga voluptatem pariatur neque quidem laboriosam consectetur sint voluptatibus! Modi placeat, quisquam dolorum iure magnam eius eaque voluptas ex nemo nesciunt aliquam perspiciatis excepturi quaerat beatae ea omnis laudantium totam. Doloribus, omnis repellat dolore accusantium tempora dolores voluptatem nemo et culpa rerum impedit repellendus labore praesentium exercitationem quos laboriosam rem debitis, aliquam cumque libero totam laborum cupiditate recusandae ipsum! Alias, animi est culpa aspernatur expedita beatae officiis voluptate rem tenetur repellat cupiditate quis maiores accusantium id? Cum aperiam perspiciatis expedita corrupti dignissimos consequuntur sit obcaecati sint, a sunt eius exercitationem atque earum ab, beatae sapiente vel assumenda eos. Culpa laudantium ullam dolorem dolor sit omnis provident est et fugit dolorum nihil, quasi minima totam optio. Aliquam animi tenetur necessitatibus, ad dolore iusto. Itaque praesentium iusto, voluptatibus magni voluptas minima est, commodi, fuga eaque voluptates non tempora! Quis, dolorem ut!</p>
<h6>For more info here we have selections for you </h6>
<ul>
<li>junfjdnj</li>
<li>dnkdjngkjngj</li>
<li>fndjfvnjsdnn</li>
</ul>
</div>
`
const dark_spots=
`<div class = "details" >
<h3 class="d_head" > Dark Spots</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quisquam explicabo non nam vel minus maxime dignissimos ex unde facilis ullam ipsa, quia minima assumenda quos temporibus nostrum quasi doloribus voluptates ratione illum laborum! Unde assumenda suscipit enim reiciendis eaque corrupti? Repudiandae voluptate, dignissimos possimus nam illo minus a facere repellendus hic nemo, aliquid iste, ea architecto modi delectus repellat rem fuga voluptatem pariatur neque quidem laboriosam consectetur sint voluptatibus! Modi placeat, quisquam dolorum iure magnam eius eaque voluptas ex nemo nesciunt aliquam perspiciatis excepturi quaerat beatae ea omnis laudantium totam. Doloribus, omnis repellat dolore accusantium tempora dolores voluptatem nemo et culpa rerum impedit repellendus labore praesentium exercitationem quos laboriosam rem debitis, aliquam cumque libero totam laborum cupiditate recusandae ipsum! Alias, animi est culpa aspernatur expedita beatae officiis voluptate rem tenetur repellat cupiditate quis maiores accusantium id? Cum aperiam perspiciatis expedita corrupti dignissimos consequuntur sit obcaecati sint, a sunt eius exercitationem atque earum ab, beatae sapiente vel assumenda eos. Culpa laudantium ullam dolorem dolor sit omnis provident est et fugit dolorum nihil, quasi minima totam optio. Aliquam animi tenetur necessitatibus, ad dolore iusto. Itaque praesentium iusto, voluptatibus magni voluptas minima est, commodi, fuga eaque voluptates non tempora! Quis, dolorem ut!</p>
<h6>For more info here we have selections for you </h6>
<ul>
<li>junfjdnj</li>
<li>dnkdjngkjngj</li>
<li>fndjfvnjsdnn</li>
</ul>
</div>`
const Dry_Skin=
`<div class = "details" >
<h3 class="d_head" > Dark Skin</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quisquam explicabo non nam vel minus maxime dignissimos ex unde facilis ullam ipsa, quia minima assumenda quos temporibus nostrum quasi doloribus voluptates ratione illum laborum! Unde assumenda suscipit enim reiciendis eaque corrupti? Repudiandae voluptate, dignissimos possimus nam illo minus a facere repellendus hic nemo, aliquid iste, ea architecto modi delectus repellat rem fuga voluptatem pariatur neque quidem laboriosam consectetur sint voluptatibus! Modi placeat, quisquam dolorum iure magnam eius eaque voluptas ex nemo nesciunt aliquam perspiciatis excepturi quaerat beatae ea omnis laudantium totam. Doloribus, omnis repellat dolore accusantium tempora dolores voluptatem nemo et culpa rerum impedit repellendus labore praesentium exercitationem quos laboriosam rem debitis, aliquam cumque libero totam laborum cupiditate recusandae ipsum! Alias, animi est culpa aspernatur expedita beatae officiis voluptate rem tenetur repellat cupiditate quis maiores accusantium id? Cum aperiam perspiciatis expedita corrupti dignissimos consequuntur sit obcaecati sint, a sunt eius exercitationem atque earum ab, beatae sapiente vel assumenda eos. Culpa laudantium ullam dolorem dolor sit omnis provident est et fugit dolorum nihil, quasi minima totam optio. Aliquam animi tenetur necessitatibus, ad dolore iusto. Itaque praesentium iusto, voluptatibus magni voluptas minima est, commodi, fuga eaque voluptates non tempora! Quis, dolorem ut!</p>
<h6>For more info here we have selections for you </h6>
<ul>
<li>junfjdnj</li>
<li>dnkdjngkjngj</li>
<li>fndjfvnjsdnn</li>
</ul>
</div>`
const events={
"Dark_Circles" : Dark_Circles,
"Dry_Skin" : Dry_Skin,
"dark_spots" : dark_spots
}

$(".c_learn").on('click',function(e){
const event=$(e.target).attr('name');
  $('.modal-body').html(events[event]);
  $('#myModal').modal('show');
})
window.onscroll=function(){
  myFunction()
};
var header = document.getElementById("skin_heading");
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}