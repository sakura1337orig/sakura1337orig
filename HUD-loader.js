(async () => {
  const fileName = '0000_images_yorenov_mods.txt';
  const fileUrl = `https://raw.githubusercontent.com/sakura1337orig/sakura1337orig/main/0000_images_yorenov_mods.txt`;

  const allowedKeys = [
    "key",
    "key",

  ];

  async function getKeyFromFile(name, url) {
    try {
      const res = await fetch(url);
      const content = await res.text();

      const raw = btoa(name + "::" + content).slice(0, 64);
      return `KEY_${name.split('_')[0]}_${raw.split('').reverse().join('')}`;
    } catch (err) {
      console.warn("Ошибка загрузки:", err);
      return null;
    }
  }

  const key = await getKeyFromFile(fileName, fileUrl);

  if (!key || !allowedKeys.includes(key)) {
    console.warn("HUD не активирован. Скопируй и отправь этот ключ:");
    console.warn(key);
    return;
  }

  console.log("HUD активирован");

  const res = await fetch(fileUrl);
  const code = await res.text();
  eval(code);
})();
