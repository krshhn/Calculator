let string = "";
buttons = document.querySelectorAll('.button');
const del = () => {
  string = string.toString().slice(0, -1);
  document.querySelector('input').value = string;
}
delBtn = document.querySelector('.btn-del');
delBtn.addEventListener('click', del);

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => { 
    if (e.target.innerText == '='){
      string = eval(string)
      document.querySelector('input').value = string}
    else if (e.target.innerText == 'AC'){
      string = ""
      document.querySelector('input').value = string}
    else if (e.target.innerText == '÷'){
      string = string + "/"
      document.querySelector('input').value = string}
    else if (e.target.innerText == 'yx'){
      string = string + "**"
      document.querySelector('input').value = string}
    else if (e.target.innerText == '%'){
      string = string/100
      document.querySelector('input').value = string}
    else if (e.target.innerText == '×'){
      string = string + "*"
      document.querySelector('input').value = string}
    else if (e.target.innerHTML.toString().includes("<i")){
      return
    }
    else{
      string = string + e.target.innerText
      document.querySelector('input').value = string
    }
})})