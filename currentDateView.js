import View from './View.js'
class CurrentDateView extends View{
   _parentEl = document.querySelector('.currentDateWrapper');
   markup(){
      return `
          <div class="title2">${this._data.dayStatus} Schedule</div>
      <div class="dateNow"> ${this._data.currentMonth} ${this._data.currentDate}</div>
      `
   }
}
export default new CurrentDateView()