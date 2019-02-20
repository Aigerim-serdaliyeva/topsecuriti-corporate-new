<template lang="pug">
- 
    var path = '~@/assets/images/index-description/'

.description-list  
    .description-list__bg
    .description-list__block.description-list__first(v-for="(item,index) in listFirst" :key="100")     
        article(@mouseover="descriptionMouseover(item.leftId)", @mouseleave="descriptionMouseleave")
            img(src=path + "description-0.svg", alt="")      
            p {{item.leftTitle}}
                transition(name="description-list__span")
                    span(v-show="dsc === item.leftId") {{item.leftText}}                 
    .description-list__block(v-for="(item,index) in list" :key="index")     
        article(@mouseover="descriptionMouseover(item.leftId)", @mouseleave="descriptionMouseleave")
            p {{item.leftTitle}}
                transition(name="description-list__span")
                    span(v-show="dsc === item.leftId") {{item.leftText}}
            img(src=path + "description-1.svg", alt="")                   

        article(@mouseover="descriptionMouseover(item.rightId)", @mouseleave="descriptionMouseleave") 
            img(src=path + "description-2.svg", alt="")                   
            p   {{item.rightTitle}}
                transition(name="description-list__span")
                    span(v-show="dsc === item.rightId") {{item.rightText}}
                
</template>

<script>
export default {
  data() {
    return {
      dsc: null,
      listFirst: [
        {
          leftTitle: "Опытные телохранители и охранники",
          leftText:
            "Бойцы TOP SECURITY KZ прошли качественную огневую и техническую подготовку. Каждый сотрудник имеет опыт использования спец. средств и способен оказать первую медицинскую помощь. Мы проводим жесткий отбор кадров, ведь только настоящие профессионалы сумеют обеспечить вам стабильное, настоящее и надежное будущее. ",
          leftId: 6
        }
      ],
      list: [
        {
          leftTitle: "Пристальное наблюдение \nв режиме 24/7",
          leftText:
            "Круглосуточный мониторинг доверенных нам территорий предотвратит возможность несанкционированного вторжения. Мы защитим вашу собственность от внешних посягательств, оградим вас и ваших близких от нападений. Почувствуйте себя в безопасности в режиме 24/7.",
          leftId: 0,
          right: 1,
          rightTitle: "Полный боевой арсенал",
          rightText:
            "В арсенале наших сотрудников – лучшая экипировка, мощное оружие и свежие скоростные иномарки. Таким образом, для бойцов групп быстрого реагирования созданы все условия для превосходного результата."
        },
        {
          leftTitle: "Регулярная аттестация",
          leftText:
            "Мы заинтересованы в профессиональном росте собственных сотрудников. Регулярные мероприятия по аттестации позволяют нашим охранникам всегда пребывать в отличной физической и умственной форме.",
          leftId: 2,
          rightId: 3,
          rightTitle: "Отлаженная система быстрого реагирования",
          rightText:
            "При поступлении тревожного сигнала наш диспетчер оперативно отправляет на выезд группу быстрого реагирования. Бойцы TOP SECURITY KZ прибывают на объект в течение 5-15 минут."
        },
        {
          leftTitle: "Мобильная тревожная кнопка",
          leftText:
            "Защитите себя и своих близких с помощью приложения “Тревожная кнопка”. Оказавшись в сложной, угрожающей жизни ситуации, одним касанием пальца вы активируете мобильный отряд оперативного реагирования.",
          leftId: 4,
          rightId: 5,
          rightTitle: "Высокотехнологичное оборудование",
          rightText:
            "В нашей работе задействованы самые современные беспроводные охранные системы, подходящие как для частных территорий, так и для различных бизнес-объектов."
        }
      ]
    };
  },
  methods: {
    descriptionMouseover(index) {
      this.dsc = index;
    },
    descriptionMouseleave() {
      this.dsc = null;
    }
  }
};
</script>
