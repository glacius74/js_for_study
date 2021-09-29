const sendButton = document.getElementById('submit-button')
const inputName = document.getElementById('todo-input')

function ajaxGetReq(r_method, r_path, r_args, r_handler){
    let xmlhttp = new XMLHttpRequest()

    if(!xmlhttp){
        console.log('xmlhttp object does not exist')
        return
    }

    xmlhttp.onreadystatechange = () =>{
        if(xmlhttp.readyState == 4){
            r_handler(xmlhttp)
        }
    }

    if (r_method == "GET" && r_args.length > 0){
        r_path += "?" + r_args;
    }
    
    xmlhttp.open(r_method, r_path, true);

    if(r_method == 'POST'){
        xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8");
        xmlhttp.send()
    }
    else{
        xmlhttp.send(null)
    }
}

function submitText (){
    const changeText = (xmlhttp) =>{
        //let tag = document.createElement('li')
        let arr = JSON.parse(xmlhttp.responseText)
        let liTags = document.getElementsByTagName('li')
        addTodo(liTags, arr)
        //let text = document.createTextNode()
        //tag.append(text)
        //document.getElementById('main-text').appendChild(tag)
    }
    ajaxGetReq('GET', 'http://localhost:3000/form-send', `text=${inputName.value}`, changeText)
}

sendButton.addEventListener('click', submitText)

function addTodo(tags, arr){
    for(i = 0; i < arr.length; i++){
        if(tags.length < arr.length){
            let tag = document.createElement('li')
            let button = document.createElement('button')
            tag.append(button)
            document.getElementById('main-text').appendChild(tag)
            button.addEventListener('click', deleteButton)
        }
        for(k = 0; k < tags.length; k++){
            if(tags[i].innerText !== arr[i].text){
                let text = document.createTextNode(arr[i].text)
                tags[i].children[0].setAttribute('id', `${arr[i].id}`);
                tags[i].append(text)
            }
        }
    }
}

function deleteButton(btn){
    console.log('delete button clicked')
    const deleteTodo = (xmlhttp) =>{
        let buttonId = xmlhttp.responseText
        let button = document.getElementById(buttonId)
        let buttonParent = button.parentNode
        buttonParent.parentNode.removeChild(buttonParent)
    }
    ajaxGetReq('GET', 'http://localhost:3000/delete-todo', `id=${btn.path[0].id}`, deleteTodo)
}




