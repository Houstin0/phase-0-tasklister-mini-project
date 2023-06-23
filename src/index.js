document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener('submit',(e)=>{
    e.preventDefault();
    addListItem(e)
 })
});

function addListItem(e){
 //console.log(e.target.new-task-description.value)
  const taskItem=e.target['new-task-description'].value;
 
  let listItem=document.createElement('li')

  listItem.textContent=taskItem
  document.querySelector('#tasks').append(listItem)
   

  let listItemDelete = document.createElement('Button')
  listItemDelete.textContent = "Delete"
    listItem.appendChild(listItemDelete)
    listItemDelete.style.margin = '5px 10px'
    listItemDelete.addEventListener("click", deleteTaskItem)

   
}
 function deleteTaskItem(e){
   e.target.parentNode.remove()
 }
 