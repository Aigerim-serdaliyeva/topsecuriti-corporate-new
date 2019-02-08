<template lang="pug">
div
    //- Чтобы не создавать новый компонент для aside я создаю пропс "type"
        и проверяю на название пропса
    div(v-if="type === 'main'" )
      h2 {{ blok.title }}
      <div class="line line-primary line-yellow"></div>
      p {{ blok.primary_content }}
      div(class="full-line full-line-primary line-yellow")
      img(:src="blok.image")
      div(class="full-line full-line-secondary line-yellow")
      p {{ blok.secondary_content }}  
      div(class="line line-secondary line-brown")
        span 3 января, 2018

    div.df(v-if="type === 'aside'" v-editable="blok")
        img( :src="blok.aside_image") 
        .content
            h3 {{ blok.aside_title }}
            p {{ blok.aside_preview }}
            .line.line-brown                    
            div 
                span 3 января, 2018 
                a Подробнее                                           

    div(v-else v-editable="blok")
        img(src="~@/assets/images/component-personal.jpg")
        article
            h3 {{blok.title}} 
            .line
            p {{ text }}                  
            .end-line
            .content
                span 3 января, 2018                
                span Подробнее       
                                                                                                              
</template>

<script>
export default {
  props: ["blok", "type", "number"],
  computed: {
    text() {
      return this.blok.primary_content
        .split(" ")
        .splice(0, 30)
        .join(" ");
    }
  }
};
</script>
