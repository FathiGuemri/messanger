var soket = io();

$('form').submit(() => {
    let m = $('#m');
    let name = $('#name');
    let date = new Date();
    soket.emit('chat message', { msg: m.val(), user: name.val() });

    m.val('');
    return false;

});

soket.on('message', (msg, name, date) => {

    $('#msg').append('<div class="msg"><li id="messages" class="msg_cotainer d-block"> <p class="name">' + name + '</p>' +
        msg + '<span class="msg_time">' + date.slice(11, 16) + '</span></li><div>');

    $('.msg_card_body').scrollTop($('#msg:last-child').height());
});