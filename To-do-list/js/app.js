$ = selector => document.querySelector(selector);
const include = $('#addBtn'), text = $('#textValue'), list = $('#ul'), del = document.getElementsByClassName('remove');

fetch('./js/data.json')
.then((res)=> res.json())
.then((data)=>{
  data.forEach(function(item){
    const todo = document.createElement("LI");   // Create a list element
    if (item.state) todo.classList.add('checked');
    todo.innerHTML = `
    <span class="text">${item.item}</span>
    <i class="remove" id="remove" onclick="remove()"></i>
    <hr class="thin" />
    `;
    console.log(item);
    list.appendChild(todo);           // Append item to list
    todo.onclick = function(){this.classList.toggle('checked')};
  })
})
.catch((e)=> console.log(e));

love = () => {
    if(text.value.length === 0) alert ('You must input some text!');
    else {
        const todo = document.createElement("LI");   // Create a list element
        todo.innerHTML = `
            <span class="text">${text.value}</span>
            <i class="remove" id="remove" onclick="remove()"></i>
            <hr class="thin" />
        `;

        list.appendChild(todo);           // Append item to list
        console.log(text.value);
        text.value = ""; //Empty input field
        todo.onclick = function(){this.classList.toggle('checked')};
    }
    // Click on a close button to hide the current list item

    // for (let i = 0; i < del.length; i++) {
    //   del[i].onclick = function() {
    //     const par = this.parentElement;
    //     par.style.display = "none";
    //   };
    // }
};


document.addEventListener('keydown', (e)=>{ if (e.keyCode == 13) love()});
// get keyCode of pushed key
// document.addEventListener('keydown', function(event){
//     console.log(event.which);
// });

// Click on a close button to hide the current list item
function remove(){
  let delbtns = document.getElementsByClassName('remove');
  for(btn of delbtns){
    btn.onclick = function() {
      const par = this.parentElement;
      par.style.display = "none";
    }
  }
}
