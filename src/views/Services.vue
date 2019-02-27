<template lang="pug">
    section(class="full-section ct-services")
        h2 Охранные услуги
        .ct-services__items
            article(v-for="(item,index) in servicesItems" :key="index")
                img(:src=`~@/assets/images/services/services-${index}.png`, alt="") 
                p {{item.text}}                     
</template>

<script>
export default {
    data() {
        return {
           servicesItems: [
               { text: 'Тревожная кнопка' },
               { text: 'Охранная система' },
               { text: 'Мобильный телохранитель' }
           ] 
        }
    }
}
</script>