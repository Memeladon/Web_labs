let list = document.createElement('ol');
let kkk = document.getElementById('insert_here')
kkk.appendChild(list);

function createElem() {

    while (true) {
        let content = prompt('Введите содержимое нового элемента списка:', '');
        if (content === null) {
            break;
        }
        let item = document.createElement('li');
        item.innerText = content;
        list.appendChild(item);
    }

    list.addEventListener('click', function (event) {
        let item = event.target;
        if (item.tagName === 'LI') {
            let content = item.innerText;
            if (confirm('Вы уверены, что хотите удалить элемент со следующим содержимым?\n' + content)) {
                item.remove();
            }
        }
    });
}

createElem();