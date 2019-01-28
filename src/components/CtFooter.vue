<template lang="pug">
  - 
    var lists = [
      { h2: 'Контакты', p: 'email@email.kz \n+70707007745 \nsynapsed.com' },
      { h2: 'Адрес', p: 'г. Алматы ул. \nавафыв' },
      { h2: 'Проекты', p: 'promo.topsecuritu.kz \napp.topsecuritu.kz' },
    ]
    var copyright = 'копирайт атата копирайт атата копирайт атата копирайт атата копирайт атата \nкопирайт атата копир (С)'

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
