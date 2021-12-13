var liffID = '1656659206-AK0oVV6g';

// 寄送訊息
function ShareText(){
    
  liff.shareTargetPicker([
    {
      "type": "flex",
      "altText": "Flex Message",
      "contents": 
      
      {
        "type": "bubble",
        "size": "kilo",
        "hero": {
          "contents": [
            {
              "backgroundColor": "#6980F1",
              "contents": [
                {
                  "align": "center",
                  "color": "#ffffff",
                  "flex": 1,
                  "gravity": "center",
                  "text": "Just for you!",
                  "type": "text",
                  "wrap": true
                }
              ],
              "height": "160px",
              "layout": "vertical",
              "paddingBottom": "md",
              "paddingEnd": "41px",
              "paddingStart": "41px",
              "paddingTop": "md",
              "type": "box"
            },
            {
              "contents": [
                {
                  "aspectMode": "cover",
                  "aspectRatio": "26:9",
                  "gravity": "center",
                  "size": "full",
                  "type": "image",
                  "url": "https://vos.line-scdn.net/lcp-msg-cdn/202104/1619690561676.png"
                }
              ],
              "layout": "vertical",
              "type": "box",
              "height": "90px"
            }
          ],
          "layout": "vertical",
          "type": "box"
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "box",
                  "layout": "horizontal",
                  "contents": [
                    {
                      "type": "box",
                      "layout": "vertical",
                      "contents": [
                        {
                          "type": "image",
                          "align": "start",
                          "size": "sm",
                          "gravity": "top",
                          "aspectMode": "cover",
                          "margin": "sm",
                          "url": "https://i.imgur.com/JvjkqWI.jpg"
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "contents": [
                        {
                          "type": "text",
                          "text": "(送禮集星)【星巴克】 大杯巧克力可可碎片星冰樂",
                          "size": "15px",
                          "color": "#222222",
                          "wrap": true,
                          "gravity": "center",
                          "flex": 1
                        }
                      ],
                      "width": "160px",
                      "offsetStart": "sm",
                      "paddingStart": "sm",
                      "offsetTop": "1px"
                    }
                  ],
                  "paddingEnd": "4%",
                  "spacing": "sm"
                },
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "box",
                      "layout": "vertical",
                      "contents": [
                        {
                          "type": "text",
                          "text": "打開我的禮物",
                          "color": "#303030",
                          "align": "center",
                          "gravity": "center",
                          "size": "sm",
                          "flex": 1,
                          "action": {
                            "type": "uri",
                            "label": "action",
                            "uri": "https://liff.line.me/1656659206-oYR2MMXv"
                          }
                        }
                      ],
                      "backgroundColor": "#f5f5f5",
                      "height": "42px",
                      "cornerRadius": "5px",
                      "margin": "sm",
                      "action": {
                        "type": "uri",
                        "label": "action",
                        "uri": "https://liff.line.me/1429440178-lwY6XWYD/received"
                      }
                    },
                    {
                      "type": "text",
                      "text": "傳送感謝小卡",
                      "color": "#303030",
                      "size": "sm",
                      "align": "center",
                      "gravity": "center",
                      "margin": "xl",
                      "action": {
                        "type": "uri",
                        "label": "action",
                        "uri": "https://liff.line.me/1656659206-oYR2MMXv"
                      }
                    }
                  ],
                  "margin": "xl"
                }
              ]
            }
          ]
        },
        "footer": {
          "type": "box",
          "layout": "horizontal",
          "contents": [
            {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "image",
                  "url": "https://d.line-scdn.net/lcp-prod-image/front/external/aoa/logo_giftshop_20210525.png",
                  "position": "absolute",
                  "size": "full",
                  "offsetTop": "0px",
                  "offsetBottom": "0px",
                  "offsetStart": "0px",
                  "offsetEnd": "0px"
                }
              ],
              "width": "20px",
              "height": "20px",
              "action": {
                "type": "uri",
                "label": "action",
                "uri": "https://liff.line.me/1429440178-lwY6XWYD"
              }
            },
            {
              "type": "text",
              "text": "LINE 禮物",
              "size": "xxs",
              "color": "#999999",
              "weight": "bold",
              "style": "normal",
              "wrap": false,
              "flex": 10,
              "gravity": "center",
              "action": {
                "type": "uri",
                "label": "action",
                "uri": "https://liff.line.me/1429440178-lwY6XWYD"
              }
            },
            {
              "type": "box",
              "layout": "horizontal",
              "contents": [
                {
                  "type": "image",
                  "url": "https://obs.line-scdn.net/0hfMog2PK-OWJSHhJH65RGNXlfIwEidiwqPCYyRSlBeVp2LnlgPn12Bn9Ob1d8LCw9ZnAmACQeYVorKCw8Pi10BH9MN1F7JnZxbyhwUCJNNQc",
                  "gravity": "center"
                }
              ],
              "width": "12px",
              "action": {
                "type": "uri",
                "label": "action",
                "uri": "https://liff.line.me/1429440178-lwY6XWYD"
              }
            }
          ],
          "spacing": "md",
          "action": {
            "type": "uri",
            "label": "action",
            "uri": "https://liff.line.me/1429440178-lwY6XWYD"
          }
        },
        "styles": {
          "footer": {
            "separator": true
          }
        }
      }
      
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
      redirectUri: 'https://albert0317.github.io/ShareMsg/'
    });
  }
  
}).catch(function(error) {
  console.log(error);
});
