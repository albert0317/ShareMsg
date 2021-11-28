var liffID = '';

liff.init({
  liffId: liffID
}).then(function() {
  console.log('LIFF init');
  
  liff.login();

  // 寄送訊息
  liff.sendMessages([
    {
      type: 'text',
      text: '好喔'
    }
  ])
    .then(() => {
      console.log('message sent');
    })
    .catch((err) => {
      console.log('error', err);
    });
  
}).catch(function(error) {
  console.log(error);
});