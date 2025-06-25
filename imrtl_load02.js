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
        "active_wanted": "",
        "armour": "",
        "breath": "",
        "cash": "",
        "circle": "",
        "health": "",
        "hunger": "",
        "inactive_wanted": "",
        "wanted_back": "",        
        "weapon_back": "",
        "zone": ""
    },
    weapon: {
        "0": "",
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
        "22": "",
        "23": "",
        "24": "",
        "25": "",
        "26": "",
        "27": "",
        "28": "",
        "29": "",
        "31": "",
        "32": "",
        "33": "",
        "34": "",
        "35": "",
        "36": "",
        "37": "",
        "38": "",
        "39": "",
        "40": "",
        "41": "",
        "42": "",
        "43": "",
        "44": "",
        "45": "",
        "46": ""
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
    style: {
        "authorization": "body .authorization{background:0 0;}#app .authorization{background-image:url()}"
    }
};

    function createHud() {
        hudStyleElement = document.createElement("style");
        hudStyleElement.id = "hudStyles";
        hudStyleElement.innerHTML = `
@font-face{font-family:'GothamPro Light';src:url('https://raw.githubusercontent.com/Teatonea/arachid/main/gothampro_light.ttf') format('truetype');font-weight:300;font-style:normal}@font-face{font-family:'GothamPro Light Italic';src:url('https://raw.githubusercontent.com/Teatonea/arachid/main/gothampro_lightitalic.ttf') format('truetype');font-weight:300;font-style:italic}@font-face{font-family:'GothamPro Regular';src:url('https://raw.githubusercontent.com/Teatonea/arachid/main/gothampro.ttf') format('truetype');font-weight:400;font-style:normal}@font-face{font-family:'GothamPro Italic';src:url('https://raw.githubusercontent.com/Teatonea/arachid/main/gothampro_italic.ttf') format('truetype');font-weight:400;font-style:italic}@font-face{font-family:'GothamPro Medium';src:url('https://raw.githubusercontent.com/Teatonea/arachid/main/gothampro_medium.ttf') format('truetype');font-weight:500;font-style:normal}@font-face{font-family:'GothamPro Medium Italic';src:url('https://raw.githubusercontent.com/Teatonea/arachid/main/gothampro_mediumitalic.ttf') format('truetype');font-weight:500;font-style:italic}@font-face{font-family:'GothamPro Bold';src:url('https://raw.githubusercontent.com/Teatonea/arachid/main/gothampro_bold.ttf') format('truetype');font-weight:700;font-style:normal}@font-face{font-family:'GothamPro Bold Italic';src:url('https://raw.githubusercontent.com/Teatonea/arachid/main/gothampro_bolditalic.ttf') format('truetype');font-weight:700;font-style:italic}@font-face{font-family:'GothamPro Black';src:url('https://raw.githubusercontent.com/Teatonea/arachid/main/gothampro_black.ttf') format('truetype');font-weight:900;font-style:normal}@font-face{font-family:'GothamPro Black Italic';src:url('https://raw.githubusercontent.com/Teatonea/arachid/main/gothampro_blackitalic.ttf') format('truetype');font-weight:900;font-style:italic}
.Old-Fixed-Cash,.Old-Fixed-Hud,.Old-Fixed-HudBottom,.Old-Fixed-HudTop,.Old-Fixed-Logo,.Old-Fixed-Main,.Old-Fixed-Param,.Old-Fixed-Params,.Old-Fixed-Params__all,.Old-Fixed-Wanted,.Old-Fixed-Weapon{z-index:-1}#app .hud-radmir-wanted{display:none}body #app .hud-radmir-info{display:none}.hud-hassle-map .map-mask{display:none}.Old-Fixed-HudTop,.Old-Fixed-Logo img{transform-origin:top right}.Ammo-in-clip{font-family:'GothamPro Bold Italic';font-weight:900;font-style:italic}.Old-Fixed-Hud{position:fixed;top:20px;right:20px;display:flex;flex-direction:row;align-items:center;gap:15px}.Old-Fixed-HudTop{display:flex;flex-direction:row;align-items:center;gap:15px}.Old-Fixed-Logo{position:relative;margin-bottom:0}.Old-Fixed-Logo img{width:120px;height:40px}.Old-Fixed-Bonus{background:radial-gradient(93.1% 93.1% at 126.72% 6.9%,#eb00ff 0,#eb00ff00 100%),linear-gradient(129.39deg,#f5be09 30.88%,#e9651b 98.06%);width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-size:12px;color:#fff;font-weight:700;position:absolute;bottom:-5px;right:-2px;border-radius:50%;font-family:'GothamPro Bold Italic'}.Old-Fixed-Main{display:flex;flex-direction:row;align-items:center;gap:15px;margin:0}.Old-Fixed-Params{height:auto;display:flex;flex-direction:row;align-items:center;gap:15px}.Old-Fixed-Cash{display:flex;align-items:center;color:#fff;font-family:"GothamPro Black Italic";font-style:italic;font-size:18px;text-shadow:0 0 3px #00000080}.Old-Fixed-Params__all{display:flex;flex-direction:row;align-items:center;gap:10px;margin:0}.Old-Fixed-Param{display:flex;align-items:center;margin:0}.Old-Param-Progress{width:60px;height:4px;background-color:#0000004d;border-radius:2px}.Old-Progress__Values{height:100%}.Old-Param-Values{font-family:"GothamPro Light Italic";font-weight:300;font-style:italic;color:#fff;width:30px;font-size:12px;text-shadow:0 0 3px #000000b3}.Old-Fixed-Weapon{width:80px;height:40px;position:relative;display:flex;justify-content:flex-end}.Old-Fixed-Weapon_icon{width:80px;height:40px}.Old-Fixed-Weapon_ammo{position:absolute;bottom:5px;right:15px;display:flex;align-items:flex-end;color:#fff}.Ammo-in-clip{font-size:14px}.Ammo-full{font-size:10px}.Old-Fixed-Wanted{position:relative;margin:0}.Wanted_row{display:flex;flex-direction:row;align-items:center;gap:2px}.Wanted_row img{width:16px;height:16px}.Old-Fixed-HudBottom{display:none}#app .hud-radmir-wanted{display:none}#app .hud-radmir-radar__radar-border{display:none}#app .hud-radmir-radar__radar-border_new-year{display:none}#app .hud-radmir-radar__radar-bats{display:none}#app .vignette{display:none}body .OLD-RADMIR-logo__bonus{background:#000000c5}

${bayokNewHudConfig.style.authorization}`;document.head.appendChild(hudStyleElement);const hudElement=document.createElement("div");hudElement.id='OldHudContainer';hudElement.innerHTML=`<div class="Old-Fixed-Hud"><div class="Old-Fixed-Wanted"><img src="${bayokNewHudConfig.icons.weapon_back}" class="Old-Fixed-Wanted_back"><div class="Wanted_row"><img src="${bayokNewHudConfig.icons.inactive_wanted}" class="wanted-innactive"><img src="${bayokNewHudConfig.icons.inactive_wanted}" class="wanted-innactive"><img src="${bayokNewHudConfig.icons.inactive_wanted}" class="wanted-innactive"><img src="${bayokNewHudConfig.icons.active_wanted}" class="wanted-active"><img src="${bayokNewHudConfig.icons.active_wanted}" class="wanted-active"><img src="${bayokNewHudConfig.icons.active_wanted}" class="wanted-active"></div></div><div class="Old-Fixed-Weapon"><img src="${bayokNewHudConfig.icons.wanted_back}" class="Old-Fixed-Weapon_back"><img src="${bayokNewHudConfig.weapon[0]}" class="Old-Fixed-Weapon_icon"><div class="Old-Fixed-Weapon_ammo"><span class="Ammo-in-clip">1</span><span class="Ammo-full">1</span></div></div><div class="Old-Fixed-Params"><div class="Old-Fixed-Cash"><img src="${bayokNewHudConfig.icons.cash}"><span>0</span></div><div class="Old-Fixed-Params__all"><div class="Old-Fixed-Param health"><img src="${bayokNewHudConfig.icons.health}" class="old-param__icon"><div class="Old-Param-Progress"><div class="Old-Progress__Values" style="width:100%"><img src="${bayokNewHudConfig.icons.circle}" class="circle"></div></div><span class="Old-Param-Values">100</span></div><div class="Old-Fixed-Param armour"><img src="${bayokNewHudConfig.icons.armour}" class="old-param__icon"><div class="Old-Param-Progress"><div class="Old-Progress__Values" style="width:100%"><img src="${bayokNewHudConfig.icons.circle}" class="circle"></div></div><span class="Old-Param-Values">100</span></div><div class="Old-Fixed-Param hunger"><img src="${bayokNewHudConfig.icons.hunger}" class="old-param__icon"><div class="Old-Param-Progress"><div class="Old-Progress__Values" style="width:100%"><img src="${bayokNewHudConfig.icons.circle}" class="circle"></div></div><span class="Old-Param-Values">100</span></div><div class="Old-Fixed-Param breath"><img src="${bayokNewHudConfig.icons.breath}" class="old-param__icon"><div class="Old-Param-Progress"><div class="Old-Progress__Values" style="width:100%"><img src="${bayokNewHudConfig.icons.circle}" class="circle"></div></div><span class="Old-Param-Values">100</span></div></div></div><div class="Old-Fixed-Logo"><img src="${bayokNewHudConfig.logo[1]}"><div class="Old-Fixed-Bonus">x3</div></div></div>`;document.body.appendChild(hudElement);hudElements.push(hudElement);}const updateFunctions={show:value=>{const hudEl=document.querySelector(".Old-Fixed-Hud");if(hudEl)hudEl.style.display=+value>=1?"":"none"},showBars:value=>{updateFunctions.show(value)},weapon:value=>{const weaponIcon=document.querySelector(".Old-Fixed-Weapon_icon");if(weaponIcon){const weaponSrc=bayokNewHudConfig.weapon[value];if(weaponSrc){weaponIcon.src=weaponSrc}}const ammoEls=document.querySelectorAll(".Old-Fixed-Weapon_ammo span");const noAmmoWeapons=[0];const shouldShowAmmo=!noAmmoWeapons.includes(value);ammoEls.forEach(el=>{if(el)el.style.display=shouldShowAmmo?"":"none"})},health:value=>{updateParam("health",value)},armour:value=>{updateParam("armour",value)},hunger:value=>{updateParam("hunger",value)},breath:value=>{const breathWrapper=document.querySelector(".Old-Fixed-Param.breath .Old-Param-Progress")?.parentElement;if(breathWrapper)breathWrapper.style.display=value<99?"":"none";updateParam("breath",value)},bonus:bonusValue=>{const bonusEl=document.querySelector(".Old-Fixed-Bonus");if(bonusEl){if(bonusValue<=1){bonusEl.style.display="none"}else{bonusEl.style.display="";bonusEl.textContent=`x${bonusValue}`}}},server:serverId=>{const serverWrapper=document.querySelector(".Old-Fixed-Logo img");if(serverWrapper){if(serverId<=0){serverWrapper.style.display="none"}else{serverWrapper.style.display="";const serverLogo=bayokNewHudConfig.logo[serverId];if(serverLogo){serverWrapper.src=serverLogo}}}},money:value=>{const moneyEl=document.querySelector(".Old-Fixed-Cash span");if(moneyEl)moneyEl.textContent=formatNumberWithDots(value)},wanted:value=>{updateWanted(value);const wantedWrapper=document.querySelector(".Old-Fixed-Wanted");if(wantedWrapper){if(value===0&&!bayokNewHudConfig.wantedAlwaysShow){wantedWrapper.style.display="none";return}wantedWrapper.style.display=""}const wantedEls=document.querySelectorAll(".Wanted_row img");wantedEls.forEach((el,index)=>{if(el){if((5-index)/value>=1||(5-index===0&&value===0)){el.src=bayokNewHudConfig.icons.inactive_wanted;el.className="wanted-innactive"}else{el.src=bayokNewHudConfig.icons.active_wanted;el.className="wanted-active"}}})},ammoInClip:value=>{const inClipEl=document.querySelector(".Ammo-in-clip");if(inClipEl)inClipEl.textContent=value},totalAmmo:value=>{const totalAmmoEl=document.querySelector(".Ammo-full");if(totalAmmoEl)totalAmmoEl.textContent="/"+value},freeze:value=>{const freezeValueEl=document.querySelector(".Old-Fixed-Freeze_value");if(freezeValueEl){const formattedValue=String(value).padStart(3,'0');freezeValueEl.textContent=formattedValue}},greenZone:isVisible=>{const greenZoneEl=document.querySelector(".Old-Fixed-ZZ");if(greenZoneEl){greenZoneEl.style.display=isVisible?"":"none"}}};function onInfoChange(type,value){setTimeout(()=>{loadingNotification.style.opacity='0';setTimeout(()=>{if(loadingNotification){loadingNotification.remove()}},2500)},1000);if(updateFunctions[type]){updateFunctions[type](value)}const hudInfo=window.interface("Hud").info;Object.entries(updateFunctions).forEach(([key,func])=>{if(typeof func==="function"&&hudInfo.hasOwnProperty(key)){func(hudInfo[key])}})}function updateParam(paramClass,value){const paramElement=document.querySelector(`.Old-Fixed-Param.${paramClass}`);if(paramElement){const progressBar=paramElement.querySelector(".Old-Progress__Values");const valueText=paramElement.querySelector(".Old-Param-Values");progressBar.style.width=`${value}%`;valueText.textContent=value}}function updateWanted(level){const wantedIcons=document.querySelectorAll(".Wanted_row img");wantedIcons.forEach((icon,index)=>{if(index<level){icon.classList.remove("wanted-innactive");icon.classList.add("wanted-active")}else{icon.classList.remove("wanted-active");icon.classList.add("wanted-innactive")}})}function initializeHudProxy(){const checkInterval=setInterval(()=>{if(typeof window.interface==="function"&&window.interface("Hud").info){clearInterval(checkInterval);const hudInfo=window.interface("Hud").info;const clonedHudInfo=JSON.parse(JSON.stringify(hudInfo));window.interface("Hud").info=new Proxy(clonedHudInfo,{set(target,prop,value){if(target[prop]!==value){target[prop]=value;onInfoChange(prop,value)}return Reflect.set(target,prop,value)}});window.interface("Hud").setServer=serverId=>{onInfoChange("server",serverId);window.interface("Hud").server=serverId};window.interface("Hud").setBonus=bonusValue=>{onInfoChange("bonus",bonusValue);window.interface("Hud").bonus=bonusValue};window.interface("Hud").showGreenZoneTab=()=>{onInfoChange("greenZone",true)};window.interface("Hud").hideGreenZoneTab=()=>{onInfoChange("greenZone",false)}}},100)}initializeHudProxy();createHud();window.onInfoChange=onInfoChange;setTimeout(()=>{hudElements.forEach(el=>el.remove());if(hudScript){hudScript.remove()}if(hudStyleElement){hudStyleElement.remove()}});

