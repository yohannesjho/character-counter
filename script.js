const textAreaEl=document.getElementById('textarea');
const totalCharachtersEl=document.getElementById('tc');
const remainingCharactersEl=document.getElementById('rc');


textAreaEl.addEventListener('keyup',()=>{
    updateCounter();
})

function updateCounter(){
    totalCharachtersEl.innerText=textAreaEl.value.length;
    remainingCharactersEl.innerText=textAreaEl.getAttribute('maxlength')-textAreaEl.value.length;
}