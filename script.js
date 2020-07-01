
/* creation counter*/

var nombMessages = $('.card_avatar').length;
var message = "Messages total : " + nombMessages;
$('#Compter-Message').text(message);

/*New avatar */
$('#btn-add').click(
function()
{
  /*CARD NEW AVATAR */
  $("body").append("<div class = card_avatar></div>");
  /* Append Image*/
  $(".card_avatar:last").append("<img src = avatar-1.jpg alt =avatar class = size-avatar >");

  /* append card_text_avatar 2 div*/
  $(".card_avatar:last").append("<div class = card-text-avatar ></div>");


  /* append Nom prenom h6*/
  $(".card-text-avatar:last").append("<h6>Henry Dupont</h6>");

/*  append new text saisie p*/
var newMessage = $("#new-message").val();
$(".card-text-avatar:last-child").append("<p></p>");
$("p:last").text(newMessage);







/* append Image Trush*/
$(".card_avatar:last-child").append("<img  src =trash.png alt =supprimer class =size-trash >");


/* remove capture input new message*/
$('#new-message').val('');

/*comter global*/
  var nombMessages = $('.card_avatar').length;
  var message = "Messages total : " + nombMessages;
  $("#Compter-Message").text(message);

/*compter And remove  new message


$(".size-trash").on('click',
function(){
    $(this).parent().remove();
    message = "Messages total : " + nombMessages;
    $("#Compter-Message").text(message);
});
*/

});

/* remove ALL message */
$("body").on('click','.size-trash',
function(){
    $(this).parent().remove();
    message = "Messages total : " + nombMessages;
    $("#Compter-Message").text(message);
});

/* supprimer commentaire
$(".size-trash").click(
function(){
  $(this).parent().remove();
  nombMessages = nombMessages - 1;
  message = "Messages total : " + nombMessages;
   $("#Compter-Message").text(message);

}); */

/*function search*/
$("body").on('click','#btn-search',
  function(){
    var $inputSearch = $('#searchMessage').val();
    $('h6').each(
        function(){
          if ( $(this).text() != $inputSearch)
          {
            $(this).parent().parent().fadeOut()

          }
          else {
            $(this).parent().parent().show();

          }
  $('#searchMessage').val('');
    });
  });
