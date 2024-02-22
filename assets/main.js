function encryptText() {
  const text = document.getElementById("text").value;
  const key = document.getElementById("key").value;

  const encryptedText = CryptoJS.AES.encrypt(text, key).toString();

  document.getElementById("resultText").textContent = encryptedText;
}

function decryptText() {
  const encryptedText = document.getElementById("encryptedText").value;
  const key = document.getElementById("decryptKey").value;

  try {
    const bytes = CryptoJS.AES.decrypt(encryptedText, key);
    const decryptedText = bytes.toString(CryptoJS.enc.Utf8);
    if (decryptedText) {
      document.getElementById("resultText2").textContent = decryptedText;
    } else {
      document.getElementById("resultText2").textContent = "Ошибка: Ключ или зашифрованный текст неверны.";
    }
  } catch (error) {
    document.getElementById("resultText2").textContent = "Ошибка: Ключ или зашифрованный текст неверны.";
  }
}

document.getElementById("encryptionForm").addEventListener("submit", function(event) {
  event.preventDefault();
  encryptText();
});

document.getElementById("decryptionForm").addEventListener("submit", function(event) {
  event.preventDefault();
  decryptText();
});