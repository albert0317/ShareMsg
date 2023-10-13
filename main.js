var liffID = '1656659206-AK0oVV6g';

// 寄送訊息
function ShareText(){
    
  liff.shareTargetPicker([
    {
      type: "text",
      text: "Hello, World!"
      
    }
  ]).catch(function(res) {
      alert("傳送失敗")
  })
}

liff.init({
  liffId: liffID
}).then(function() {
  console.log('LIFF init');
  
  if(!isLoggedIn) {
    liff.login({
      redirectUri: 'https://albertfan317.github.io/ShareMsg/'
    });
  }
  
}).catch(function(error) {
  console.log(error);
});
