$('.open-cart').on('click', function(){
    // alert('Окно ');
    var myModal = new bootstrap.Modal($('#cart'), {
        keyboard: true
      })
      myModal.toggle()
    //   myModal.show()
   
});
// $('#cart').on('show.bs.modal', function (e) {
//     alert('Окно будет открыто');
// });
// $('#cart').on('shown.bs.modal', function (e) {
//     alert('Окно уже открыто');
// });
// $('#cart').on('hidePrevented.bs.modal', function (e) {
//     alert('Хотитте закрыть окно');
// });
// $('#cart').on('hidden.bs.modal', function (e) {
//     alert('Окно  будет закрыто');
// });
// $('#cart').on('hidden.bs.modal', function (e) {
//     alert('Окно уже закрыто');
// });