<template lang="pug">
- 
    var descrList = [
        { img: '', text: 'Професионально подготовленные\n охранники и телохранители' },
        { img: '', text: 'Высокотехнологическое оснащение' },
        { img: '', text: 'Современный автопарк' },
        { img: '', text: 'Интеграция работы мобильных групп\n с передовыми GPS и IT решениями' },
        { img: '', text: 'Повсеместная аттестация и тренировки штата' },
    ]

ul 
    each item,index in descrList
        li
            article 
                img(src=`~@/assets/images/index-description/${index}.png`)
                span= item.text
</template>
