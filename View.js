import * as model from './model.js'
export default class View {
   _data;
   render(data) {
      if (!data || (Array.isArray(data) && data.length === 0)) return 
      this._data = data
      this._parentEl.innerHTML = ''
      let  markup = this.markup()
      this._parentEl.insertAdjacentHTML('afterbegin', markup)
   }
   clear(){
      this._parentEl.innerHTML = ''
   }
}