var liffID = '1656659206-AK0oVV6g';

liff.init({
  liffId: liffID
}).then(function() {
  console.log('LIFF init');
  
  liff.login();

  // 寄送訊息
  
  
}).catch(function(error) {
  console.log(error);
});