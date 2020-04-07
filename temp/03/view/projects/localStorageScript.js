  let tasks = [];

function getTasks(){
  if (localStorage.getItem("testJSON")===null) {
    console.log("local storage is empty");
  }
  else {
    tasks = JSON.parse(localStorage.getItem("testJSON"));
    return tasks;
  }
};

function setTasks(obj){
  myJSON = JSON.stringify(obj);
  localStorage.setItem("testJSON", myJSON);
};

function deleteTask(obj){
  let item="item"+obj;
  if (obj==0){
    tasks.shift();
    $(item).hide();
    setTasks(tasks);
  }
  else if (obj==tasks.length-1){
    tasks.pop();
    $(item).hide();
    setTasks(tasks);
  }
  else {
    delete tasks[obj];
    for (i=obj; i<tasks.length-1; i++){
      tasks[i]=tasks[i+1];
    }
    tasks.pop();
    $(item).hide();
    setTasks(tasks);
  }
  location.reload();
};

function printList(){
  tasks.forEach(function(value, index, array){
    $("ul").append('<li class="list-group-item" id="item'
    +index
    +'"><span class="float-left">'
    +(index+1)+ ". "+value
    +'</span><span class="float-right close" onClick="deleteTask('+index+')">&times;</span></li>');
  });
};

// Check localStorage browser support
if (typeof(Storage) !== "undefined") {
  // Code for localStorage/sessionStorage.
  getTasks();
  printList();
  $("#taskBtn").click(function(){
    if ($("#taskInput").val()===""){
      alert("You cannot input an empty task");
    }
    else {
      tasks.push($("#taskInput").val());
      setTasks(tasks);
      $("ul").append('<li class="list-group-item"><span class="float-left">'
      +tasks[tasks.length-1]
      +'</span><span class="float-right close" onClick="$(this).parent().hide()">&times;</span></li>');
      location.reload();
    }
  });
} else {
  // Sorry! No Web Storage support..
  alert("Sorry! No Web Storage support.");
};
