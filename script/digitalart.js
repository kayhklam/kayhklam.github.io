function addEnlargeEvent(el){
  el.onclick = function(){
    el.classList.add("digital-large")
    el.classList.remove("digital-small")
    addShrinkEvent(el)
  }
}
function addShrinkEvent(el){
  el.onclick = function(){
    el.classList.remove("digital-large")
    el.classList.add("digital-small")
    addEnlargeEvent(el)
  }
}

window.onload = function(){
  document.querySelectorAll(".digital-small").forEach((el, i, parent)=>{
    addEnlargeEvent(el)
  })
}