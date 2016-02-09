$(document).ready(function(){

  // LOGIC FOR QUESTION MATRIX
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

  $('.apres').on('click', function(){
    $('.friends_experience').fadeOut(500);
    $('.town').removeClass('inactive');
    $('.town').addClass('active');
  });

  $('.dining').on('click', function(){
    $('.so_experience').fadeOut(500);
    $('.town').removeClass('inactive');
    $('.town').addClass('active');
  });

  $('.family1').on('click', function(){
    $('.family_experience').fadeOut(500);
    $('.canyon').removeClass('inactive');
    $('.canyon').addClass('active');
  });

  $('.so1').on('click', function(){
    $('.so_experience').fadeOut(500);
    $('.canyon').removeClass('inactive');
    $('.canyon').addClass('active');
  });

  $('.friends2').on('click', function(){
    $('.friends_experience').fadeOut(500);
    $('.base').removeClass('inactive');
    $('.base').addClass('active');
  });

  $('.family2').on('click', function(){
    $('.family_experience').fadeOut(500);
    $('.base').removeClass('inactive');
    $('.base').addClass('active');
  });

  // mobile nav menu
  $('.fa-bars').on('click', function(){
    $('#overlay, #overlay-back, .mobile_nav_inner').fadeIn(500);
  });

  $('#overlay, #overlay-back').on('click', function(){
    $('#overlay, #overlay-back, .mobile_nav_inner').fadeOut(500);
  });

});
