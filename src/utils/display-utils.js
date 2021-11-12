export function enableForm(form) {
  form.style.display = 'block';
}

export function disalbeForm(form) {
  form.style.display = 'none';
}

export function disableUtils(input, btn) {
  input.disabled = true;
  btn.disabled = true;
}