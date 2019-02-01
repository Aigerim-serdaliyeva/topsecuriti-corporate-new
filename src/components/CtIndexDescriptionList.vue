<template lang="pug">
- 
    var descrList = [
        { img: '' , text: 'Професионально подготовленные\n охранники и телохранители' },
        { img: '' , text: 'Высокотехнологическое\n оснащение' },
        { img: '' , text: 'Современный\n автопарк' },
        { img: '' , text: 'Интеграция работы мобильных\n групп с передовыми GPS и IT решениями' },
        { img: '' , text: 'Повсеместная аттестация\n и тренировки штата' },
    ]
.description-list  
    .sprites        
    ul 
        each item in descrList
            li= item.text                                  

</template>
