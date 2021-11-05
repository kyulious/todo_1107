const view = document.getElementById("sun");
var body = document.getElementById("body");
var item = document.getElementById("item");
var btn = document.getElementById("add");
var itemList = [];


//다크모드 구현
view.addEventListener("click", function(){
    if(view.src.match("images/icon-moon.svg")){
        body.style.backgroundImage="url(images/bg-desktop-dark.jpg)";
        body.style.backgroundColor="#111";
        view.src="images/icon-sun.svg";
        item.style.backgroundColor="#111";
        
        
    } 
    else {
        body.style.backgroundImage="url(images/bg-desktop-light.jpg)";
        body.style.backgroundColor ="#fff";
        view.src="images/icon-moon.svg";
        item.style.backgroundColor="#fff";
    }    
})

//추가 버튼 클릭 시 아이템 쌓이기
btn.addEventListener("click", addList);

function addList(){
    var items = document.getElementById("item").value;
    if(items != null){
        itemList.push(items);
        item.value="";
        
    }
    showList();
}
   


function showList(){
    var list = "<ul>";
    for (var i=0; i<itemList.length; i++){ //배열 요소마다 반복
        list += "<li>" + itemList[i] + "<span class='close' id=" + i +">X</span></li>";
    }
    list += "</ul>"; //목록을 끝내는 ul 태그 적용

    document.querySelector("#itemList").innerHTML=list;
    
    var remove = document.querySelectorAll(".close");
    for (var i=0; i<remove.length; i++) {
        remove[i].addEventListener("click", removeList);
    }
}

function removeList(){
    var id = this.getAttribute("id"); //this(누른 삭제 버튼)의 id 값 가져와 id 변수에 저장
    itemList.splice(id, 1); //인덱스 값이 id인 요소 1개 삭제
    showList(); 
}