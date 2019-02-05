<template lang="pug">
  - 
    var lists = [
      { h2: 'КОНТАКТЫ', p: 'email@email.kz \n+70707007745 \ntopsecurity.kz' },
      { h2: 'АДРЕС', p: 'г. Алматы ул. \Улица' },
      { h2: 'ПРОЕКТЫ', p: 'promo.topsecurity.kz \napp.topsecurity.kz' },
    ]
    var copyright = 'Copyright © 2019 Top Security KZ. All Rights Reserved.'

  <footer>
    .footer-menu
      <footer-logo/>
      ul
        each list in lists
          li
            h2= list.h2
            article
              .line
              p= list.p     
    .footer-copyright= copyright      
  </footer>  
</template>

<script>
import FooterLogo from "./svg-components/FooterLogo";

export default {
  components: {
    FooterLogo
  }
};
</script>
