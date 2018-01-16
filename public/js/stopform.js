$(document).ready(() => {
  // console.log('bitches')

const $add = $('.add')
console.log('CURRENT $ADD', $add)
$add.submit(function(event){
  // console.log(event.target.value)
  //https://stackoverflow.com/questions/4038567/prevent-redirect-after-form-is-submitted
  event.preventDefault()
  console.log("FORM HAS",$(this)[0].image.value, $(this)[0].count.value);
  $.ajax({
    url: '/saved',
    type: 'POST',
    data: { //data becomes req.body
          image: $(this)[0].image.value,
          tags: $(this)[0].tags.value
          }
  })
  return false;
})


}); //end of line
