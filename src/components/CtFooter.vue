<template lang="pug">
  - 
    var lists = [
      { h2: 'КОНТАКТЫ', p: 'info@topsecurity.kz \n+7 (727) 346-76-57 \ntopsecurity.kz' },
      { h2: 'АДРЕС', p: 'Казахстан, г.Алматы, \nмкр.Алатау, \nул.Асемтау 58' },
      { h2: 'ПРОЕКТЫ', a1: 'promo.topsecurity.kz' , a2: 'app.topsecurity.kz' },
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
              a= list.p     
              a(href="http://promo.topsecurity.kz" target="_blank")= list.a1
              <br>
              a(href="http://app.topsecurity.kz" target="_blank")= list.a2
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
