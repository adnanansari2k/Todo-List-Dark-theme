import * as model from './model.js'
import DateView from './dateView.js'
import CurrentDateView from './currentDateView.js'
import * as TaskButton from './addTaskButton.js'
import AllTaskView from './allTaskView.js'

function taskSaprate(date){
   model.state.tasks = []
   model.state.allTasks.forEach(task => {
      let d = +task.date.slice(-2)
      if (d === date) model.state.tasks.push(task)
   })
}

function showApp(){
   CurrentDateView.render(model.state)
   DateView.render(model.state)
   DateView.dateHandler(dateController)
   taskSaprate(model.state.day.todayDate)
   AllTaskView.render(model.state.tasks)
}

const storeTask = function (){
   localStorage.setItem('Tasks',JSON.stringify(model.state.allTasks))
}

const dateController =function(date,todayMonth){
   if(date===model.state.day.todayDate){
      model.state.dayStatus = `Today's`
   }
   if(date <model.state.day.todayDate){
      model.state.dayStatus = `Previes`
   }
   if (date > model.state.day.todayDate) {
      model.state.dayStatus = `Next`
   }
   CurrentDateView.render(model.state)
   AllTaskView.clear()
   taskSaprate(date)
   AllTaskView.render(model.state.tasks)
  
}

const optionsController=function (id){
   let index = model.state.allTasks.findIndex(task=>id===task.id)
   model.state.allTasks.splice(index,1)
   storeTask()
   AllTaskView.render(model.state.tasks)
}

const statusController=function (id){
   let index = model.state.allTasks.findIndex(task=>id===task.id)
  if(model.state.allTasks[index].status) {
     model.state.allTasks[index].status = false
  }else{
     model.state.allTasks[index].status = true
  }
   storeTask()
   AllTaskView.render(model.state.tasks)
}

const editBtnController = function(id,name,time){
   let index = model.state.allTasks.findIndex(task=>id===task.id)
   model.state.allTasks[index].name = name
   model.state.allTasks[index].time = time
   AllTaskView.render(model.state.tasks)
}

function init(){
   TaskButton.AddTaskButtonHandler()
   AllTaskView.optionHandler(optionsController)
   AllTaskView.statusHandler(statusController)
   AllTaskView.editBtnHandler(editBtnController)
}
init()
showApp()