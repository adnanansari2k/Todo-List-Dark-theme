const taskBtn = document.querySelector('.addTaskBtn')
const addTaskPage = document.querySelector('.addTaskPage')
const overlay = document.querySelector('.overlay')
const submit = document.querySelector('.submit')
const nameTask = document.querySelector('.nameTask')
const addDate = document.querySelector('.addDate')
const addTime = document.querySelector('.addTime')
import * as model from './model.js'

const storeTask = function (){
   localStorage.setItem('Tasks',JSON.stringify(model.state.allTasks))
}

export const AddTaskButtonHandler=function (){
   taskBtn.addEventListener('click',(e)=>{
      let btn = e.target.closest('.material-symbols-outlined')
      if(!btn) return
      addTaskPage.classList.remove('hidden')
      overlay.classList.remove('hidden')
   })
   
   overlay.addEventListener('click',()=>{
      addTaskPage.classList.add('hidden')
      overlay.classList.add('hidden')
   })
   
   submit.addEventListener('click',(e)=>{
      e.preventDefault()
      let task = {
         name:nameTask.value,
         date:addDate.value,
         time:addTime.value,
         id:(Math.random() + '').slice(-6),
         status:false
      }
      nameTask.innerHTML = ''
      model.state.allTasks.push(task)
      storeTask()
      console.log(model.state);
   })
}