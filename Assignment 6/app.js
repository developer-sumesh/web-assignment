const inp = document.getElementById('inp');
const btn = document.getElementById('addTodo');
// console.log(btn);
// const str = '''<i class="fas fa-edit"></i><i class="fas fa-trash"></i>''';
const list = document.getElementById('list');

btn.onclick = function(e){
    const todoText = inp.value;
    const li = document.createElement('li');
    const button = document.createElement('button');
    // const i1 = document.createElement('i');
    const i2 = document.createElement('i');
    // i1.classList.add("fas","fa-edit");
    i2.classList.add("fas","fa-trash","fa-2x");
    li.innerText = todoText;
    if(todoText!=""){
        list.append(li);
        li.append(button);
        button.onclick = function(e){
            console.log(e);
            li.remove();
        }
        button.append(i2);
        // li.append(button);
        // button.append(i2);
    }
    inp.value="";
    console.log(li);
}