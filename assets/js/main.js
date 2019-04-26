$(function(){
  var name = $('#name').val();
  var firstName = $('#firstName').val();
  var bornDate = $('#bornDate').val();
  var bornPlace = $('#bornPlace').val();
  var job = $('#job').val();
  var society = $('#society').val();
  var letters = /^[A-Za-z-ÉéàÀèÈêÊîÎ]+$/;
  var jobsLetters = /^[A-Za-z- ÉéàÀèÈêÊîÎ]+$/;
  $('#submit').on('click', function(){
    var nameConfirmed = letters.exec($('#name').val());
    var firstNameConfirmed = letters.exec($('#firstName').val());
    var bornPlaceConfirmed = letters.exec($('#bornPlace').val());
    var jobConfirmed = jobsLetters.exec($('#job').val());
    var societyConfirmed = jobsLetters.exec($('#society').val());
    if (!nameConfirmed){
    // Ici, avec le "!", je lui dis que si mes instructions regex ne sont pas respectées, alors j'applique mon alert.
      alert('Attention, votre nom ne doit contenir que des lettres et des tirets.');
      $('#name').css('border', 'solid red 3px');
    } else if (!firstNameConfirmed){
    // Les else if sont importants. Si je n'avais mis que des if. J'aurais eu deux alert en cas d'échec. Celui de l'erreur et celui du else.
      alert('Attention, votre prénom ne doit contenir que des lettres et des tirets.');
      $('#firstName').css('border', 'solid red 3px');
    } else if (!bornPlaceConfirmed){
      alert('Attention, votre lieu de naissance ne doit contenir que des lettres et des tirets.');
      $('#bornDate').css('border', 'solid red 3px');
    } else if (!jobConfirmed){
      alert('Attention, votre emploi ne doit contenir que des lettres, des tirets et des espaces.');
      $('#job').css('border', 'solid red 3px');
    } else if (!societyConfirmed){
      alert('Attention, votre société ne doit contenir que des lettres, des tirets et des espaces.');
      $('#job').css('border', 'solid red 3px');
    } else {
      alert(firstName + ' ' + name + ' né le ' + bornDate + ' à ' + bornPlace + ', actuellement ' + job + ' à ' + society)
    }
  });
});
