const add = () => {
  const ul = document.getElementById('ul');
  let todo = document.getElementById('input').value;
  // create list-item
  const div = document.createElement('DIV');

  div.innerHTML = `
    <input type="checkbox" class="check"/>
    <li class="">${todo}</li>
    <span class="hide">DONE</span>
    <i class="bin">del</i>
  `;

  ul.appendChild(div);
  notify('Item added', 'Successfully added to-do item');
  // todo = '';
  const bins = document.getElementsByClassName('bin');
  for(bin of bins){
    let par = bin.parentElement;
    bin.addEventListener('click', ()=>{
      par.style.display = 'none';
      notify("Deleted successfully", "You removed an item from your to-do list.")
    })
  }

  const checkboxes = document.getElementsByClassName('check');
  for(let checkbox of checkboxes){
    let bro = checkbox.nextElementSibling;
    let bruh = bro.nextElementSibling;
    checkbox.addEventListener('click', ()=>{
      bro.classList.toggle('checked');
      bruh.classList.toggle('done');
    })
  }
}

const forms = document.getElementsByTagName('form');
for(let form of Array.from(forms)){form.onsubmit = (e)=>{ e.preventDefault(); add()}};


function notify (title, message){
  let notifDiv = document.createElement('DIV');
  notifDiv.className = 'batuho';
  notifDiv.innerHTML = `
    <div class="head">
      <span id="title">${title}</span>
      <span id="quit">&times;</span>
    </div>
    <div class="notification-body">
      <p>${message}</p>
    </div>
  `;
  document.getElementById('disp').appendChild(notifDiv);
  setTimeout(()=>{
    notifDiv.style.display = 'none';
  }, 3000)
}
