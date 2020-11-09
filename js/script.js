const input = document.querySelector('input');
const button = document.getElementById('pass');

button.addEventListener('click', () => {
  input.value = GeneratePassword(12);
});

function GeneratePassword(length = 12) {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxwyz01233456789@';
  let password= '';
  for (let i = 0; i < length; i++) {
    let at = Math.floor(Math.random() * (charset.length +1));
    password += charset.charAt(at);
  }
  return password;
}