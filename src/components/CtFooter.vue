<template lang="pug">
  - 
    var lists = [
      { h2: 'КОНТАКТЫ', p: 'info@topsecurity.kz \n+7 (727) 346-76-57 \ntopsecurity.kz' },
      { h2: 'АДРЕС', p: 'Казахстан, г.Алматы, \nмкр.Алатау, \nул.Асемтау 58' },
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
