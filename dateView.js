import View from './View.js'
import * as model from './model.js'
class DateView extends View {
   _parentEl = document.querySelector('.dateWrapper');


   _getDatee(n = 0) {
      const curren = new Date();
      let d = new Date(curren.getFullYear(), curren.getMonth(), curren.getDate() + n)
      return Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(d)
   }
   
   dateHandler(handler){
      let daysEl = this._parentEl.querySelectorAll('.day')
      let datesEl = this._parentEl.querySelectorAll('.date')
     this._parentEl.addEventListener('click',(e)=>{
        let dayEl = e.target.closest('.days')
        if(!dayEl) return 
        daysEl.forEach((d,i)=>{
          d.classList.remove('glow')
          datesEl[i].classList.remove('glow')
        })
        let currentDayEl =dayEl.querySelector('.day')
        currentDayEl.classList.add('glow')
        let dateEl =dayEl.querySelector('.date')
        dateEl.classList.add('glow')
        model.state.currentDate = +dateEl.textContent
        handler(+dateEl.textContent,model.state.day.todayMonth)
     })
     
   }
   
   markup() {
      console.log(this._data)
      return `
      <div class="dataContainer">
         <span class="days">
            <p class="day" data-day=${0}>${this._getDatee(-3).slice(0,1)}</p>
            <p class="date">${this._data.day.todayDate-3}</p>
         </span>
         <span class="days">
            <p class="day" data-day=${1}>${this._getDatee(-2).slice(0,1)}</p>
            <p class="date">${this._data.day.todayDate-2}</p>
         </span>
         <span class="days">
            <p class="day" data-day=${this._getDatee(-1)}>${this._getDatee(-1).slice(0,1)}</p>
            <p class="date">${this._data.day.todayDate-1}</p>
         </span>
         <span class="days ">
            <p class="day glow" data-day=${this._data.day.todayDay}>${this._data.day.todayDay.slice(0,1)}</p>
            <p class="date glow">${this._data.day.todayDate}</p>
         </span>
         <span class="days">
            <p class="day" data-day=${this._getDatee(1)}>${this._getDatee(1).slice(0,1)}</p>
            <p class="date">${this._data.day.todayDate+1}</p>
         </span>
         <span class="days">
            <p class="day" data-day=${this._getDatee(2)}>${this._getDatee(2).slice(0,1)}</p>
            <p class="date">${this._data.day.todayDate+2}</p>
         </span>
         <span class="days">
            <p class="day" data-day=${this._getDatee(3)}>${this._getDatee(3).slice(0,1)}</p>
            <p class="date">${this._data.day.todayDate+3}</p>
         </span>
      </div>
      `
   }

}

export default new DateView()