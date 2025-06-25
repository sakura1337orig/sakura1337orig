function AddHud() {
    window.bayok = window.bayok || {};
    function formatNumberWithDots(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    
    bayok.addLabel = function() {};
    const hudScript = document.currentScript;
    const hudElements = [];
const bayokNewHudConfig = {
    icons: {
        "active_wanted": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAARCAMAAAAIRmf1AAAAS1BMVEVHcEzq6urf39/z8/PCwsL+/v75+fn////8/Pz9/f3s7Oz39/f6+vrZ2dn39/f4+Pj+/v77+/uVlZXy8vIAAAD5+fnw8PDq6ur///8xJKkbAAAAGHRSTlMAOh9+CejI/PT3UK/bFqOWsborjg3RZybLK1RnAAAAcElEQVQY02WPVwKDMAxDBWQCgU7Q/U/KcKBxqi/7ecgGLrX2gVqRNBV6kuw16nbE4aPYgTi+JDF9NzlLkf0O7wWYWQtwNYr78KiId+fGUDJTekrXfcfd6Ft9W7b8PfrHZEyxJgafgBQLCxPWXAyNBBvC4w3rDzt/hQAAAABJRU5ErkJggg==",
        "armour": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAADFBMVEV8gPR8gPRwdN58gPSyMfNQAAAAAnRSTlMiAaYmu44AAABESURBVHicfcQxDcAgFEXR27kzJtoBC00l/GCow/fSsGCJEQmE5YEClsMT0sHl9hPdOrGei1EWUueWGq/0YZJvyNlJECa0QCW9jIhgGgAAAABJRU5ErkJggg==",
        "breath": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAKCAMAAABR24SMAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA2UExURUdwTP////////////////////////z8/P///////////////////////////////////////wdyTIIAAAARdFJOUwA0B1H4hm0Y3l99wR7t6nTkEyPDfgAAAD9JREFUCNdNjEEOgCAQxIoKCyjo/P+zukqCPTWZTIEj1XXhoW6SrgBFL83InykyRPvP5joe3SB5JQcPWjm9fAPNigQTikfk5AAAAABJRU5ErkJggg==",
        "cash": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbBAMAAAB/+ulmAAAAKlBMVEVHcEwAAAAAAAAAAAACAgIBAQEAAAAFBQUICAgLCwsEBAQKCgoMDAwCAgLHl9ehAAAADnRSTlMA/ezKpbjbYksleTQSkj1Og4sAAAEoSURBVHichdC9S8NAGAbwd5BW2jqcZywEMrSpVvyARoxLEDxd7NZWEIQOpbRU0SEGxLUEESUOYlpbMhkXUToIFSm6CH7gEmhQcPGP8S6ttVvvph8Px3vvAzDwOHK5TwGEuOeehiNlwxT+FFppfwCY8S73MNjHn9/aTodpDKE0Xv0hWY8LV5cBLnXIBxdVxo1W/jR2i2bBh+8o1wu12KM0t6/6UIpSdvjKNMCLei4nKEmpOtWkY4b4N8bChXKk6FER1yPLLE1q9Nqjxvx9jqV2w71xD3bdBvFSI3OSMaRoUvtib/24JdZFa+ZB0dkgGBmzBGuyGK8WE943zXAl/Co4/Huus4W+1VwqTdS4s+6S9qY+/pRXexWQ623S/q8rKKFsf5n+tcGFwy++NEmsliJ1MQAAAABJRU5ErkJggg==",
        "circle": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAKCAMAAABR24SMAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAzUExURUdwTO/v7/39/f7+/v////7+/vz8/P////////39/fT09P///////////////////////5HNQPQAAAAQdFJOUwAOQXlXSSz6718UwKfgpN/6tDiHAAAAPElEQVQI10WMQQ6AIBDEiqDLCsr8/7UKEuypyWQKBI9+8rJnSdnhMHVso+qjcE0z2rJ7rf9jVlIPhjTKD7vyA7m88iAoAAAAAElFTkSuQmCC",
        "health": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAFVBMVEVHcEy/fH29eXmrUlLAfn+xX1+rUlJJF7zJAAAABnRSTlMAsLryp+mCfnY3AAAAUklEQVR4nGWOywmAMBBER0kBiehdA1YQ8G4J2oLw+i9B8iEhZC77YHdnRpIJwSpqhj3BNICBeHO7DR63iiJdeX4N6mrxJ7z+aO/J0PbONTTX+AG7CBfyGL6wPgAAAABJRU5ErkJggg==",
        "hunger": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAZCAMAAAAGyf7hAAAATlBMVEVHcEwHBwcAAAAAAAAAAAAvLy8+Pj5VVVUAAACNjY0AAAAAAAAAAACzs7OhoaEAAADg4OAAAABubm65ubnn5+c8PDz///8jIyPz8/P6+vrJWVCaAAAAFnRSTlMA/ou/VPz+/hL92qno/f1p/jP9/f79GYYcmQAAAMVJREFUeJx9kVkWgyAMAAmirGpdGuT+F22SYou+vs6HwpCEAEr9Y9HXuTb0MYGHcf7ItFRpwJzShe4tXWhqLMkpE2mha6u62/83sbsiW6Xct4A0FTy2ZImMeWgBzaEzDPZLDwDUrEsTlgexc/YTvE98yuxBWAt6mNAHOSXYiSAxwoqj7K9hpDzKt5ncxiVVpAzEI3MBW3aIjh3HYdlG4th7dgq2pvMyJLkTiTsqlq+b4PU1V6pj6UFXzsfA4r8Pc0Jx8929AKhHDdhRLBF0AAAAAElFTkSuQmCC",
        "inactive_wanted": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAARBAMAAADNtor0AAAAFVBMVEVaWlpHcExaWlpaWlpaWlpaWlpaWlrD4X7lAAAAB3RSTlNNAEAJMxQlFsSx+QAAAFpJREFUCNdjEAQCYRUgIcAgCCMhTAeGQChTjIHBES7FoAwiRVOUGIBAJU2AwYEBCgQYFBBMIShLEagNwmIEmSAAZgrCmcwIJiOYyYCNKQpUZwAVBeoQDAC5DACiVQkHoV31IgAAAABJRU5ErkJggg==",
        "wanted_back": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjAQMAAAAkFyEaAAAABlBMVEVHcEzuhBR5Y/DJAAAAAnRSTlMABHH+CSEAAAAYSURBVAjXYzBgGHjQAMQKGCQDyWQCiAAASxEG8Q/hyUwAAAAASUVORK5CYII=",
        "weapon_back": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjAQMAAAAkFyEaAAAABlBMVEVHcEzuhBR5Y/DJAAAAAnRSTlMABHH+CSEAAAAYSURBVAjXYzBgGHjQAMQKGCQDyWQCiAAASxEG8Q/hyUwAAAAASUVORK5CYII=",
        "zone": "data:image/png;base64,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"
    },
    weapon: {
        "0": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAACKCAMAAABCWSJWAAAAS1BMVEVHcEz////////////////////////////////////////////////////////////////////////////////////////////////ScsZwAAAAGHRSTlMAdw764epL8xmQWgeezGnBqyxAhTbXI7bFXe0eAAAFT0lEQVR42u1b6ZazKhAMyOICIijq+z/pTWZGRcMiSsx37rF+jk4s6e7qBXw8bty4cePGjRs3bvyvkSswIPqCHkCXf4+IBHo0wev+O0RgS8ctEKi+wETx0QahLmcC6GgHLa9mMroB/hkm41hfyKRc+yoXHJt/yIhxb5W/8CkmvfFgDUhfPaAsC2SQmx6tABOac82bovxEoFfN/EwMlvft24UL+412kRlrpRuSPoyXyO1WF4g2TFQB9BZcm/vPL8owM9m6QD9rDWqtskNbmJJKN1vn3foSjwEImZBKYYsTe2zZgBJymRyisV4VQS44mcP0f4pP7cmGWJ6tN+uSKqzLvwDljgpmHTe4KWWf97I243qo0mp+47jemAFTzDFWdSJ5Zpi8tnVcN4ROK0cyR3lSKq5aoF6YbB9IZi7tJVSAk4kR6qi6wkBskh3luZjGW6a3HgIRxKxKgAJOfyiYNfSnhc67ZjqlxDmcpfYHyeS5OIn8TylX2FwPzhZwOCbyJLBotD7XAyG//KswsiR9gZy1tHOu/ziqQIClaQtmaUdbLmQpV8glVJaCEq0fWBptGgm8R6JmiRn19LIwiu3pyya31qV64nS5YBYClNWq6zoCmmxVHTgiyKg4n/dnSBTluRygVg0zxRhnbwW1DOXteRRyrvSug2WjPUflyFrunspIIAtRsS5L4bi5OVPAlOE2AwYMa0KfSQTdEM1FomQ9iQSsNfSi1gEufB2rJfL2JBFccvayScYXMnkZIIMANP59/WTBmFgZme8OJDgZhBKTXsB9daFyCGGuGF61JCSH1QPmnfnnIjohj8ikX/NQLFEuNvc0huF6o1nZO1HELlEvxkhsVKSef3nYScX4rcFaYR5kYlYWJJrKWr3aOCbAo91DNJX1z8UZqPFVDnif6FKXhYYoKlb16GhUe7RqyztL2b0LjiGCiGqPakfa7XAMFUd1XfsnJb4xm2FUFsMkc0ycJgtpGG2hRRlVVChrh19WKGogtZ74tdW2xt8DAf0lL90nuHCd+0QppSoi5c21KpFU4hXe4iuOSiDHcRNDSc9zcUg7yaLcduO4x9D6F5zvrRO67DQVu7TPbsj219boNBfgk8+Y+QJkZ/3FskexLAqKas6IPeXQ7IS0NGO0fX5fwbKty4FStTjIpVpSR/RGhNxG0vDji3Cv7vCVuEgxHlyUn/co7V3DXi547kmqvMVhKQ70RNRWrO7WY9zUqu8J03g80Hy43bdPlBvQ4eMMYHqjPFWeMvZsDrovSZcz9eFx7q/6Dgnzd3Z46pP/FCwgJZfjW0UdT8xlPD7nrl7ue5wLEk0xCLSjFN+1MM22l9rLBRX1r/L2ZtrQZyaWT/c9si5MmgpOT2vdn/tu6rMdXOgmWCT3FRJR6gtgHJc398x5og1X2K5H5CEurWdIrs8eLcmrCBtZh4DtmHIPbeeIwV7FTu1Qoi1xw318i3Jo5/j83qsFjnidtoZxaio40j7LzghNTEV5NMUh7nAS3cRUhn+FSuUL5mupeE98uoRjopKlddrVacEMCdaCInSWZgq65BG0bLIKAl9SXInA3LqMHW7sLx70ZnxQBpxFHO8TgzlyW/syb1NKPnp4WA2rp1bc47jzcAN/5hA+rKX1xd9NtBxZZY8rUHHXOY/lRHFGLqFi5Gu0qrXk4N+o+cSyGPmgIVMB1RkDJCovorIcSPsRnKIuSd0O2XfO3hP/aJE9LoT3nEdz7QcswL0u7OpPaYhjFk3bx+XIrZtrnDy+AfK2ecHr6vElKPOzA8zIFz9Fe5pJkrZ4oq27r/K4cePGjRs3bty4kRT/AeUMp+OBZAYjAAAAAElFTkSuQmCC",
        "24": "",        
        "25": "",
        "31": ""
     },
    logo: {
        "1": "",
        "2": "",
        "3": "",
        "4": "",
        "5": "",
        "6": "",
        "7": "",
        "8": "",
        "9": "",
        "10": "",
        "11": "",
        "12": "",
        "13": "",
        "14": "",
        "15": "",
        "16": "",
        "17": "",
        "18": "",
        "19": "",
        "20": "",
        "21": ""
    },
};
    function createHud() {
        hudStyleElement = document.createElement("style");
        hudStyleElement.id = "hudStyles";
        hudStyleElement.innerHTML = `
@font-face{font-family:'GothamPro Light';src:url('https://raw.githubusercontent.com/user123123333333/fonts/refs/heads/main/gothampro_light.ttf') format('truetype');font-weight:300;font-style:normal}@font-face{font-family:'GothamPro Light Italic';src:url('https://raw.githubusercontent.com/user123123333333/fonts/refs/heads/main/gothampro_lightitalic.ttf') format('truetype');font-weight:300;font-style:italic}@font-face{font-family:'GothamPro Regular';src:url('https://raw.githubusercontent.com/user123123333333/fonts/refs/heads/main/gothampro.ttf') format('truetype');font-weight:400;font-style:normal}@font-face{font-family:'GothamPro Italic';src:url('https://raw.githubusercontent.com/user123123333333/fonts/refs/heads/main/gothampro_italic.ttf') format('truetype');font-weight:400;font-style:italic}@font-face{font-family:'GothamPro Medium';src:url('https://raw.githubusercontent.com/user123123333333/fonts/refs/heads/main/gothampro_medium.ttf') format('truetype');font-weight:500;font-style:normal}@font-face{font-family:'GothamPro Medium Italic';src:url('https://raw.githubusercontent.com/user123123333333/fonts/refs/heads/main/gothampro_mediumitalic.ttf') format('truetype');font-weight:500;font-style:italic}@font-face{font-family:'GothamPro Bold';src:url('https://raw.githubusercontent.com/user123123333333/fonts/refs/heads/main/gothampro_bold.ttf') format('truetype');font-weight:700;font-style:normal}@font-face{font-family:'GothamPro Bold Italic';src:url('https://raw.githubusercontent.com/user123123333333/fonts/refs/heads/main/gothampro_bolditalic.ttf') format('truetype');font-weight:700;font-style:italic}@font-face{font-family:'GothamPro Black';src:url('https://raw.githubusercontent.com/user123123333333/fonts/refs/heads/main/gothampro_black.ttf') format('truetype');font-weight:900;font-style:normal}@font-face{font-family:'GothamPro Black Italic';src:url('https://raw.githubusercontent.com/user123123333333/fonts/refs/heads/main/gothampro_blackitalic.ttf') format('truetype');font-weight:900;font-style:italic}
      .Old-Fixed-Hud,
      .Old-Fixed-HudTop,
      .Old-Fixed-Logo,
      .Old-Fixed-Main,
      .Old-Fixed-Params,
      .Old-Fixed-Cash,
      .Old-Fixed-Params__all,
      .Old-Fixed-Param,
      .Old-Fixed-Weapon,
      .Old-Fixed-Wanted,
      .Old-Fixed-HudBottom{
      z-index: -1;
      }
      #app .hud-radmir-wanted {
        display: none;
      }
      body #app .hud-radmir-info {display: none}
      .hud-hassle-map .map-mask{
       display: none;
      }
      .Old-Fixed-Logo img,.Old-Fixed-HudTop{
       transform-origin:top right
      }
      .Ammo-in-clip{
       font-family:'GothamPro Bold Italic';
       font-weight:900;
       font-style:italic
      }
      .Old-Fixed-HudTop{
       position:absolute;
       right:1.4vw;
       top:3.4vh;
       display:flex;
       flex-direction:column;
       align-items:flex-end
      }
      .Old-Fixed-Logo{
       position:relative;
       margin-bottom:3vh
      }
      .Old-Fixed-Logo img{
       width:18.52vh;
       height:6.2vh;
       margin-right:2vh
      }
      .Old-Fixed-Bonus{
       background: radial-gradient(93.1% 93.1% at 126.72% 6.9%, #eb00ff 0, #eb00ff00 100%), linear-gradient(129.39deg, #f5be09 30.88%, #e9651b 98.06%);
       width: 32px;
       height: 32px;
       display: flex;
       align-items: center;
       justify-content: center;
       font-size: 16px;
       color: #fff;
       font-weight: 700;
       position: absolute;
       bottom: -5px;
       right: -2px;
       border-radius: 50%;
       font-family:'GothamPro Bold Italic';
       font-weight:900;
       font-size:1.3vh
      }
      .Old-Fixed-Main,.Old-Fixed-Cash,.Wanted_row{
       align-items:center;
       display:flex
      }
      .Old-Fixed-Main{
       margin-top:.46vh;
       margin-right:3.46vh
      }
      .Old-Fixed-Weapon{
       width:16.6vh;
       height:16.6vh;
       position:relative;
       display:flex;
       justify-content:flex-end;
       margin-left:-.93vh;
       margin-right:.46vh
      }
      .Ammo-in-clip,.old-param__icon{
       margin-right:1.11vh
      }
      .Old-Fixed-Weapon_back{
       position:absolute;
       right:-1.4vh;
       top:-1.6vh;
       z-index:-1
      }
      .Old-Fixed-Weapon_icon{
       width:37vh;
       height:16.6vh
      }
      .Old-Fixed-Weapon_ammo{
       position:absolute;
       bottom:3.6vh;
       right:5vh;
       display:flex;
       align-items:flex-end;
       color: #fff;
      }
      .Ammo-in-clip{
       font-size:2.31vh;
       line-height:1;
       text-shadow:0 0 .46vh #00000080
      }
      .Ammo-full{
       font-family:'GothamPro Light Italic';
       font-weight:300;
       font-style:italic;
       font-size:1.67vh;
       text-shadow:0 0 .46vh #000000b3
      }
      .Old-Fixed-Params{
       height:13.5vh;
       position:relative;
       z-index:1
      }
      .Old-Fixed-Cash{
       justify-content:flex-end;
       color: white;
       font-family:"GothamPro Black Italic";
       font-style:italic;
       font-size:2.59vh;
       text-shadow:0 0 .46vh #00000080
      }
      .Old-Fixed-Cash img{
       margin-right: 13px;
       margin-top: 1px
      }
      .Old-Fixed-Params__all{
       margin-top:1vh
      }
      .Old-Fixed-Param{
       display:flex;
       align-items:center;
       margin-top:.95vh
      }
      .Old-Fixed-Param.health{
        margin-top:0;
        margin-left:1.85vh
      }
      .Old-Fixed-Param.armour,.Old-Param-Values{
       margin-left:1vh
      }
      .Old-Param-Progress,.Old-Progress__Values{
       width:9.40vh;
       height:.46vh;
       background-color:#0000004d;
       border-radius:.46vh
      }
      .Old-Progress__Values{
       display:flex;
       justify-content:flex-end
      }
      .Old-Progress__Values .circle{
       width:.85vh;
       height:.93vh;
       margin-top:-.25vh;
       margin-right:-.28vh
      }
      .Old-Param-Values{
       font-family:"GothamPro Light Italic";
       font-weight:300;
       font-style:italic;
       color: white;
       width:3.24vh;
       font-size:1.67vh;
       text-shadow:0 0 .46vh #000000b3
      }
      .Old-Fixed-Freeze_text{
        margin-right:1vh;
      }
      .Old-Fixed-Freeze_value, .Old-Fixed-Freeze_text{
       font-family:"GothamPro Bold";
       font-weight:900;
       color:#c0ccec;
       font-size:2vh;
       text-shadow:0 0 2vh #000
      }
      .Old-Fixed-Param.hunger{
       margin-left:.09vh
      }
      .Old-Fixed-Param.breath{
       margin-left: 3px
      }
      .Old-Fixed-Param.health .Old-Progress__Values{
       background-color:#ed2e2e;
       box-shadow:#ed2e2e80 0 0 .46vh 0
      }
      .Old-Fixed-Param.armour .Old-Progress__Values{
       background-color:#526ee6;
       box-shadow:#526ee680 0 0 .46vh 0
      }
      .Old-Fixed-Param.hunger .Old-Progress__Values{
       width: 50%;
       box-shadow: hsl(26deg 100% 59% / 30%) 0 0 5px 0;
       background-color: #ff872e
      }
      .Old-Fixed-Param.breath .Old-Progress__Values{
        width: 99%;
        background-color: #fff;
        box-shadow: rgba(255, 255, 255, .5) 0 0 5px 0
      }
      .Old-Fixed-Param.health .old-param__icon{
       margin-left: 20px
      }
      .Old-Fixed-Param.armour .old-param__icon{
       margin-left: 14px
      }
      .Old-Fixed-Param.hunger .old-param__icon{
       margin-left: 1px
      }
      .Old-Fixed-Param.breath .old-param__icon{
       width:1.7vh;
       height:1.7vh
      }
      .Old-Fixed-Wanted{
       position:relative;
       margin-right:6vh;
       margin-top:-1.6vh
      }
      .Old-Fixed-Wanted_back{
       position:absolute;
       right:-1.2vh;
       top:-.66vh;
       z-index:-1
      }
      .Wanted_row img{
       width: 3.3vh;
       height:3.3vh;
       padding:.19vh .28vh
      }
      .Old-Fixed-HudBottom{
        transform-origin: right bottom;
        position: absolute;
        right: 0;
        top: 20px;
      }
      .Old-Fixed-ZZ{
       position:absolute;
       left:21.3vh;
       bottom:-98.9vh
      }
      .Old-Fixed-ZZ_icon{
       width:4.5vh;
       height:4.5vh
      }
      .Old-Fixed-Freeze {
        position: absolute;
        background: hsl(190deg 63% 66% / 40%);
        width: 26.1111vh;
        height: 0.65vh;
        border-radius: 1vh;
        outline: hsl(0deg 0% 0% / 20%) 0.2vh solid;
        outline-offset: 0.1vh;
        overflow: hidden;
        left: 11.1620vh;
        bottom: 2.7778vh;
      }
      #app .hud-radmir-wanted{display:none}#app .hud-radmir-radar__radar-border{display:none}#app .hud-radmir-radar__radar-border_new-year{display:none}#app .hud-radmir-radar__radar-border_helloween {display:none}#app .hud-radmir-radar__radar-bats {display:none}#app .vignette {display:none}
      body .OLD-RADMIR-logo__bonus {
    background: #000000c5
}
body .authorization{background:0 0}#app .authorization{background-image:url();background-size:auto 100vh}
      `;
      document.head.appendChild(hudStyleElement);
      const hudElement = document.createElement("div");
      hudElement.id = 'OldHudContainer';
      hudElement.innerHTML = `
      <div class="Old-Fixed-Hud">
      <div class="Old-Fixed-HudTop">
        <div class="Old-Fixed-Logo">
           <img src="${bayokNewHudConfig.logo[1]}">
           <div class="Old-Fixed-Bonus">x3</div>
        </div>
        <div class="Old-Fixed-Main">
           <div class="Old-Fixed-Params">
              <div class="Old-Fixed-Cash"><img src="${bayokNewHudConfig.icons.cash}"><span>0</span></div>
              <div class="Old-Fixed-Params__all">
                 <div class="Old-Fixed-Param health">
                    <img src="${bayokNewHudConfig.icons.health}" class="old-param__icon">
                    <div class="Old-Param-Progress">
                       <div class="Old-Progress__Values" style="width:100%"><img src="${bayokNewHudConfig.icons.circle}" class="circle"></div>
                    </div>
                    <span class="Old-Param-Values">100</span>
                 </div>
                 <div class="Old-Fixed-Param armour">
                    <img src="${bayokNewHudConfig.icons.armour}" class="old-param__icon">
                    <div class="Old-Param-Progress">
                       <div class="Old-Progress__Values" style="width:100%"><img src="${bayokNewHudConfig.icons.circle}" class="circle"></div>
                    </div>
                    <span class="Old-Param-Values">100</span>
                 </div>
                 <div class="Old-Fixed-Param hunger">
                    <img src="${bayokNewHudConfig.icons.hunger}" class="old-param__icon">
                    <div class="Old-Param-Progress">
                       <div class="Old-Progress__Values" style="width:100%"><img src="${bayokNewHudConfig.icons.circle}" class="circle"></div>
                    </div>
                    <span class="Old-Param-Values">100</span>
                 </div>
                 <div class="Old-Fixed-Param breath">
                    <img src="${bayokNewHudConfig.icons.breath}" class="old-param__icon">
                    <div class="Old-Param-Progress">
                       <div class="Old-Progress__Values" style="width:100%"><img src="${bayokNewHudConfig.icons.circle}" class="circle"></div>
                    </div>
                    <span class="Old-Param-Values">100</span>
                 </div>
              </div>
           </div>
           <div class="Old-Fixed-Weapon">
              <img src="${bayokNewHudConfig.icons.wanted_back}" class="Old-Fixed-Weapon_back"> <img src="${bayokNewHudConfig.weapon[0]}" class="Old-Fixed-Weapon_icon">
              <div class="Old-Fixed-Weapon_ammo"><span class="Ammo-in-clip">1</span><span class="Ammo-full">1</span></div>
           </div>
        </div>
        <div class="Old-Fixed-Wanted">
           <img src="${bayokNewHudConfig.icons.weapon_back}" class="Old-Fixed-Wanted_back">
           <div class="Wanted_row"><img src="${bayokNewHudConfig.icons.inactive_wanted}" class="wanted-innactive"> <img src="${bayokNewHudConfig.icons.inactive_wanted}" class="wanted-innactive"> <img src="${bayokNewHudConfig.icons.inactive_wanted}" class="wanted-innactive"> <img src="${bayokNewHudConfig.icons.active_wanted}" class="wanted-active"> <img src="${bayokNewHudConfig.icons.active_wanted}" class="wanted-active"> <img src="${bayokNewHudConfig.icons.active_wanted}" class="wanted-active"></div>
        </div>
      </div>
      <div class="Old-Fixed-HudBottom">
      <div class="Old-Fixed-ZZ"><img src="${bayokNewHudConfig.icons.zone}" class="Old-Fixed-ZZ_icon"></div>
      <div class="Old-Fixed-Freeze">
      <span class="Old-Fixed-Freeze_text">Freeze:</span>
      <span class="Old-Fixed-Freeze_value">100</span>
      </div></div>
      `;
      document.body.appendChild(hudElement);
      hudElements.push(OldHudContainer);
    }
    const updateFunctions = {
        show: (value) => {
            const hudEl = document.querySelector(".Old-Fixed-Hud");
            if (hudEl) hudEl.style.display = +value >= 1 ? "" : "none";
        },
        showBars: (value) => {
            updateFunctions.show(value);
        },
        weapon: (value) => {
            const weaponIcon = document.querySelector(".Old-Fixed-Weapon_icon");
            if (weaponIcon) {
                const weaponSrc = bayokNewHudConfig.weapon[value];
                if (weaponSrc) {
                    weaponIcon.src = weaponSrc;
                }
            }
            const ammoEls = document.querySelectorAll(".Old-Fixed-Weapon_ammo span");
            ammoEls.forEach(el => {
                if (el) el.style.display = value >= 16 ? "" : "none";
            });
        },
        health: (value) => {
            updateParam("health", value);
        },
        armour: (value) => {
            updateParam("armour", value);
        },
        hunger: (value) => {
            updateParam("hunger", value);
        },
        breath: (value) => {
            const breathWrapper = document.querySelector(".Old-Fixed-Param.breath .Old-Param-Progress")?.parentElement;
            if (breathWrapper) breathWrapper.style.display = value < 99 ? "" : "none";
            updateParam("breath", value);
        },
        bonus: (bonusValue) => {
            const bonusEl = document.querySelector(".Old-Fixed-Bonus");
            if (bonusEl) {
                if (bonusValue <= 1) {
                    bonusEl.style.display = "none";
                } else {
                    bonusEl.style.display = "";
                    bonusEl.textContent = `x${bonusValue}`;
                }
            }
        },
        server: (serverId) => {
            const serverWrapper = document.querySelector(".Old-Fixed-Logo img");
            if (serverWrapper) {
                if (serverId <= 0) {
                    serverWrapper.style.display = "none";
                } else {
                    serverWrapper.style.display = "";
                    const serverLogo = bayokNewHudConfig.logo[serverId];
                    if (serverLogo) {
                        serverWrapper.src = serverLogo;
                    }
                }
            }
        },
        money: (value) => {
            const moneyEl = document.querySelector(".Old-Fixed-Cash span");
            if (moneyEl) moneyEl.textContent = formatNumberWithDots(value);
        },
        wanted: (value) => {
            updateWanted(value);
            const wantedWrapper = document.querySelector(".Old-Fixed-Wanted");
            if (wantedWrapper) {
                if (value === 0 && !bayokNewHudConfig.wantedAlwaysShow) {
                    wantedWrapper.style.display = "none";
                    return;
                }
                wantedWrapper.style.display = "";
            }
            const wantedEls = document.querySelectorAll(".Wanted_row img");
            wantedEls.forEach((el, index) => {
                if (el) {
                    if ((5 - index) / value >= 1 || (5 - index === 0 && value === 0)) {
                        el.src = bayokNewHudConfig.icons.inactive_wanted;
                        el.className = "wanted-innactive";
                    } else {
                        el.src = bayokNewHudConfig.icons.active_wanted;
                        el.className = "wanted-active";
                    }
                }
            });
        },
        ammoInClip: (value) => {
            const inClipEl = document.querySelector(".Ammo-in-clip");
            if (inClipEl) inClipEl.textContent = value;
        },
        totalAmmo: (value) => {
            const totalAmmoEl = document.querySelector(".Ammo-full");
            if (totalAmmoEl) totalAmmoEl.textContent = "/" + value;
        },
        freeze: (value) => {
            const freezeValueEl = document.querySelector(".Old-Fixed-Freeze_value");
            if (freezeValueEl) {
                const formattedValue = String(value).padStart(3, '0');
                freezeValueEl.textContent = formattedValue;
            }
        },
        /*freeze2: () => {
            const freezeEl = document.querySelector(".Old-Fixed-Freeze");
            const isVisible = window.interface("Hud").isNewYear;
            if (freezeEl) {
                freezeEl.style.display = isVisible ? "" : "none";
            }
        },*/
        greenZone: (isVisible) => {
            const greenZoneEl = document.querySelector(".Old-Fixed-ZZ");
            if (greenZoneEl) {
                greenZoneEl.style.display = isVisible ? "" : "none";
            }
        },
    };
    function onInfoChange(type, value) {
        setTimeout(() => {
            loadingNotification.style.opacity = '0';
            setTimeout(() => {
                if (loadingNotification) {
                    loadingNotification.remove();
                }
            }, 2500);
        }, 1000);
        if (updateFunctions[type]) {
            updateFunctions[type](value);
        }
        const hudInfo = window.interface("Hud").info;
        Object.entries(updateFunctions).forEach(([key, func]) => {
            if (typeof func === "function" && hudInfo.hasOwnProperty(key)) {
                func(hudInfo[key]);
            }
        });
    }
    function updateParam(paramClass, value) {
        const paramElement = document.querySelector(`.Old-Fixed-Param.${paramClass}`);
        if (paramElement) {
            const progressBar = paramElement.querySelector(".Old-Progress__Values");
            const valueText = paramElement.querySelector(".Old-Param-Values");
            progressBar.style.width = `${value}%`;
            valueText.textContent = value;
        }
    }
    function updateWanted(level) {
        const wantedIcons = document.querySelectorAll(".Wanted_row img");
        wantedIcons.forEach((icon, index) => {
            if (index < level) {
                icon.classList.remove("wanted-innactive");
                icon.classList.add("wanted-active");
            } else {
                icon.classList.remove("wanted-active");
                icon.classList.add("wanted-innactive");
            }
        });
    }
    function initializeHudProxy() {
        const checkInterval = setInterval(() => {
            if (typeof window.interface === "function" && window.interface("Hud").info) {
                clearInterval(checkInterval);
                const hudInfo = window.interface("Hud").info;
                const clonedHudInfo = JSON.parse(JSON.stringify(hudInfo));
                window.interface("Hud").info = new Proxy(clonedHudInfo, {
                    set(target, prop, value) {
                        if (target[prop] !== value) {
                            target[prop] = value;
                            onInfoChange(prop, value);
                        }
                        return Reflect.set(target, prop, value);
                    }
                });
                window.interface("Hud").setServer = (serverId) => {
                    onInfoChange("server", serverId);
                    window.interface("Hud").server = serverId;
                };
                window.interface("Hud").setBonus = (bonusValue) => {
                    onInfoChange("bonus", bonusValue);
                    window.interface("Hud").bonus = bonusValue;
                };
                window.interface("Hud").showGreenZoneTab = () => {
                    onInfoChange("greenZone", true);
                };
                window.interface("Hud").hideGreenZoneTab = () => {
                    onInfoChange("greenZone", false);
                };
            }
        }, 100);
    }
    initializeHudProxy();
    createHud();
    window.onInfoChange = onInfoChange;
    setTimeout(() => {
        hudElements.forEach(el => el.remove());
        if (hudScript) {
            hudScript.remove();
        }
        if (hudStyleElement) {
            hudStyleElement.remove();
        }
    });
  };
AddHud();
