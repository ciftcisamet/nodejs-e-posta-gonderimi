var nodemailer = require('nodemailer');

var gonderici = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'gonderici-mail-adresi@gmail.com',
    pass: 'mail-sifreniz'
  }
});

var mailBilgileri = {
  from: 'gonderici-mail-adresi@gmail.com',
  to: 'alici-mail-adresi@yahoo.com',
  subject: 'Node.js Kullanarak E-posta Gönderimi',
  text: 'Node.js kullanarak ilk e-postamızı gönderdik!'
};

gonderici.sendMail(mailBilgileri, function(error, info){
  if(error) {
    console.log(error);
  } else {
    console.log('Mail gönderildi: ' + info.response);
  }
});
