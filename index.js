function showFaq (id){
    p = document.getElementById(`faq-description-${id}`)
    icon = document.getElementById(`faq-icon-${id}`)

    if(p.classList.contains("faq-active")){
        p.className = p.classList.value.replace("faq-active", "")
        icon.src = 'assets/images/icon-plus.svg'
    } else {
        p.className += " faq-active"
        icon.src = 'assets/images/icon-minus.svg'


    }
}