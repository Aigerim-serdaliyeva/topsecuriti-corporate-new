<template lang="pug">
    -
        var advantages = [
            { title: "Пристальное наблюдение в режиме 24/7", text: "Круглосуточный мониторинг доверенных нам территорий предотвратит возможность несанкционированного вторжения. Мы защитим вашу собственность от внешних посягательств, оградим вас и ваших близких от нападений. Почувствуйте себя в безопасности в режиме 24/7."},
            { title: "Регулярная аттестация", text: "Мы крайне заинтересованы в профессиональном росте собственных сотрудников. Регулярные мероприятия по аттестации, а также упорная работа над собой позволяют нашим охранникам всегда пребывать в отличной физической и умственной форме."},
            { title: "Управление с телефона", text: "Для удобства наших клиентов мы разработали первое в Казахстане мобильное приложение «Тревожная кнопка». Защитить себя, своих близких и свое имущество стало еще проще. Оказавшись в сложной, угрожающей жизни ситуации, одним касанием пальца вы активируете мобильный отряд оперативного реагирования."}
        ]
        
    section(class="full-section ct-about about_advantages")        
        a(class="transition-button transition-button_bottom") Назад
            trans-but-bot.bottom
        .ct-about__advantages            
            section
                each item,index in advantages
                    article
                        p= item.title
                            span= item.text 
                        img(src="~@/assets/images/about/advantages-1.svg", alt="")  
            section                
                .ct-about__advantages__man           
                .ct-about__advantages__images                         
                    img(src="~@/assets/images/about/advantages-4.svg", alt="")
                    img(src="~@/assets/images/about/advantages-5.svg", alt="")
                    img(src="~@/assets/images/about/advantages-6.svg", alt="")
                    .ct-about__advantages__last-img               
</template>

<script>
import TransButBot from "@/components/svg-components/TransitionButtonBottom.vue";

export default {
  components: {
    TransButBot
  }
};
</script>
