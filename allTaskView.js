import View from './View.js'
class AllTaskView extends View {
   _parentEl = document.querySelector('.taskConatiner');

   markup() {
      return this._data.map(this.markup1).join('')
   }

   optionHandler(handler) {
      this._parentEl.addEventListener('click', (e) => {
         let btnEl = e.target.closest('.delete')
         if (!btnEl) return
         handler(btnEl.dataset.id)
      })
   }

   statusHandler(handler) {
      this._parentEl.addEventListener('click', (e) => {
         let btnEl = e.target.closest('.check')
         if (!btnEl) return
         handler(btnEl.dataset.id)
      })
   }

   editBtnHandler(handler) {
      let btnEl
      this._parentEl.addEventListener('click', (e) => {
         btnEl = e.target.closest('.edit')
         if (!btnEl) return
         let editPage = document.querySelector('.editPage')
         let overlay = document.querySelector('.overlay')
         editPage.classList.remove('hidden')
         overlay.classList.remove('hidden')
         overlay.addEventListener('click', () => {
            editPage.classList.add('hidden')
            overlay.classList.add('hidden')
         })
           let name = document.querySelector('.editName')
           let time = document.querySelector('.addTime2')
           let doneBtn = document.querySelector('.done')
           doneBtn.addEventListener('click', (e) => {
              e.preventDefault()
              handler(btnEl.dataset.id,name.value,time.value)
           })

      })
      
   }


   markup1(result) {
      return `
          <div class="taskItem ${result.status? 'checks' :''}" data-id=${result.id}>
            <p class="time">${result.time}</p>
            <p class="taskName">${result.name}</p>
            <span class="optionWrap">
             <span class="material-symbols-outlined check" data-id=${result.id}>
             check
             </span>
              <span class="material-symbols-outlined edit" data-id=${result.id}>
             edit 
             </span>
              <span class="material-symbols-outlined delete" data-id=${result.id}>
                          delete
                          </span>
         </div>
      `
   }
}
export default new AllTaskView()