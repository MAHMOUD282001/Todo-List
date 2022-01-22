let myInput = document.querySelector(".add-task input");

let addButton = document.querySelector(".add-task .plus");

let tasksContainer = document.querySelector(".tasks-content");

let tasksCount = document.querySelector(".tasks-count span");

let tasksCompleted = document.querySelector(".tasks-completed span");


//Focus On Field

window.onload = function(){

    myInput.focus();
}
    
addButton.addEventListener('click', function(){
    
    if(myInput.value !== ''){
    
        let noTasksMsg = document.querySelector(".no-tasks-message");
        
        if (document.body.contains(document.querySelector(".no-tasks-message"))) {
        
            noTasksMsg.remove();
            
        }
        //Create Main Span
        let mainSpan = document.createElement("span");
        
        //Create Delete Button
        let deleteButton = document.createElement("span");
        
        //Create Main Span Text
        let text = document.createTextNode(myInput.value);
        
        //Create Delete Button Text
        let deleteText = document.createTextNode("Delete");
        
        //Add Text To Main Span
        mainSpan.appendChild(text);
        
        //Add Class To Main Span
        mainSpan.classList.add('task-box');
        
        //Add Text To Delete Button
        deleteButton.appendChild(deleteText);
        
        //Add Class To Delete Button
        deleteButton.classList.add('delete')
        
        // console.log(mainSpan.textContent, text.textContent)
        
        //Add Delete Button To Main Span
        mainSpan.appendChild(deleteButton);
        
        //Add Main Span To Container
        tasksContainer.appendChild(mainSpan);
        
        //Empty The Input Value
        myInput.value = '';
        
        //Focus After Add The Span
        myInput.focus();
        
        calculateTasks()
    }
})



document.addEventListener('click', function(e){
    
    //End Task
    if(e.target.className == 'delete'){
        
        //Remove Current Task
        e.target.parentNode.remove();
        
        if (tasksContainer.childElementCount == 0) {

            createNoTasks();
      
        }
    }
    
    //Finish Task
    if(e.target.classList.contains('task-box')){
        
        //Remove Current Task
        e.target.classList.toggle('finished');
    }
    
    myInput.focus();
    
    calculateTasks()
})

// Function To Create No Tasks Message
function createNoTasks() {

    // Create Message Span Element
    let msgSpan = document.createElement("span");
  
    // Create The Text Message
    let msgText = document.createTextNode("No Tasks To Show");
  
    // Add Text To Message Span Element
    msgSpan.appendChild(msgText);
  
    // Add Class To Message Span
    msgSpan.className = 'no-tasks-message';
  
    // Append The Message Span Element To The Task Container
    tasksContainer.appendChild(msgSpan);
  
  }
  
  
  
  // Function To Calculate Tasks
  function calculateTasks() {
  
    // Calculate All Tasks
    tasksCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;
  
    // Calculate Completed Tasks
    tasksCompleted.innerHTML = document.querySelectorAll('.tasks-content .finished').length;
  
  }