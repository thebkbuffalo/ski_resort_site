$(document).ready(function(){

  $('.start').on('click', function(){
    $('.home').fadeOut(500);
    // $('.home').removeClass('active');
    // $('.home').addClass('inactive');
    $('.travel_with').removeClass('inactive');
    $('.travel_with').addClass('active');
    $('.travel_with').fadeIn(500);
  });

  $('.friends').on('click', function(){
    $('.travel_with').fadeOut(500);
    // $('.travel_with').removeClass('active');
    // $('.travel_with').addClass('inactive');
    $('.friends_experience').removeClass('inactive');
    $('.friends_experience').addClass('active');
  });

  $('.family').on('click', function(){
    $('.travel_with').fadeOut(500);
    // $('.travel_with').removeClass('active');
    // $('.travel_with').addClass('inactive');
    $('.family_experience').removeClass('inactive');
    $('.family_experience').addClass('active');
  });

  $('.so').on('click', function(){
    $('.travel_with').fadeOut(500);
    // $('.travel_with').removeClass('active');
    // $('.travel_with').addClass('inactive');
    $('.so_experience').removeClass('inactive');
    $('.so_experience').addClass('active');
  });




});
