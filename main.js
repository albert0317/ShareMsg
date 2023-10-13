var liffID = '1656659206-AK0oVV6g';

// 寄送訊息
if (liff.isApiAvailable('shareTargetPicker')) {
  liff.shareTargetPicker([
    {
      type: "text",
      text: "Hello, World!"
    }
  ])
  .then(function(res) {
    if (res) {
      // succeeded to send message in TargetPicker
      console.log(`[${res.status}] Message [${this.msgType}] is sent!`)
    } else {
      // canceled to send message
      console.log('TargetPicker was closed!')
    }
  }).catch(function(error) {
    // something wrong happened before sending message properly
    console.log('something wrong happen')
  })
}

liff.init({
  liffId: liffID
}).then(function() {
  console.log('LIFF init');
  
  if(!isLoggedIn) {
    liff.login({
      redirectUri: 'https://albertfan317.github.io/ShareMsg'
    });
  }
  
}).catch(function(error) {
  console.log(error);
});
