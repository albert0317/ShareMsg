var liffID = '1656659206-AK0oVV6g';

liff.init({
  liffId: liffID
}).then(function() {
  console.log('LIFF init');
  
  if(!isLoggedIn) {
    liff.login({
      redirectUri: 'https://albert0317.github.io/ShareMsg/'
    });
  }

  // 寄送訊息
  function ShareText(){
    const msg = document.querySelector(".mytext");

    liff.shareTargetPicker([
      {
        type: "text",
        text: msg
      }
    ])
      .then(
        alert("ShareTargetPicker was launched")
      ).catch(function(res) {
        alert("Failed to launch ShareTargetPicker")
      })
}
  
}).catch(function(error) {
  console.log(error);
});