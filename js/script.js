$('button').click(function() 
{
  if($("#content").val()== null || $("#content").val() ==""){
    alert('Digite a informação que deseja tranformar em QR Code no campo "Conteúdo"');      
    document.dados.txt_conteudo.focus();
    return false;
  } else {
      var conteudo = $('#content').val();
      var GoogleCharts = 'https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl=';
      var imagemQRCode = GoogleCharts + conteudo;
      $('#imageQRCode').attr('src', imagemQRCode);}
});	

let btnDownload = document.querySelector('#download');
let img = document.querySelector('#imageQRCode');

btnDownload.addEventListener('click', () => {
  if($("#content").val()== null || $("#content").val() ==""){
    alert('Impossível baixar, QR Code não gerado');      
    document.dados.txt_conteudo.focus();
    return false;
  } else {
      let imgPath = img.getAttribute('src');
      let fileName = 'your_qr.png';

      saveAs(imgPath, fileName);}
});

document.addEventListener("keypress", function(e) {
  if (e.key === 'Enter') {
    var btn = document.querySelector("#gera");
    btn.click();
    e.preventDefault();
  }
})

$("button").click(function() {
  if($("#content").val()== null || $("#content").val() ==""){
      alert('Digite a informação que deseja tranformar em QR Code no campo "Conteúdo"');      
      textarea.focus()
      return false;
  }
});

/* if (code == 13) {
  var post = $('.status-box').val();
  if (post.length > 0) {
    $('<li>').text(post).prependTo('.posts');
    $('#content').val('');
    $('.counter').text('500');
    $('.btn').addClass('disabled');
    $(this).parents('form').find('.btn').trigger('click');
  }
} */

/* <!-- postando ao pressionar enter -->
  $('.status-box').keypress(function(e){
    var code = (e.keyCode ? e.keyCode : e.which);
    if(code == 13) { 
      var post = $('.status-box').val();
      $('<li>').text(post).prependTo('.posts');
      $('.status-box').val('');
      $('.counter').text('500');
      $('.btn').addClass('disabled');
      $(this).parents('form').find('.btn').trigger('click');
    }
  }); */