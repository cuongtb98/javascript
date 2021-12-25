const item = document.querySelectorAll()
item.forEach(itm=>{
  itm.addEventListener('click', function(){
    item.forEach(itm=>itm.classList.remove('active'))
    this.classList.add('active')
  })
})