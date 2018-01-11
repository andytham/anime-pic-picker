$("#stop-redirect").submit(function(event) {
  event.preventDefault();

  /* get the action attribute from the <form action=""> element */
  let $form = $( this ),
      url = $form.attr( 'action' );

  /* Send the data using post with element id name and name2*/
  let posting = $.post( url, { name: $('#name').val(), name2: $('#name2').val() } );
 
