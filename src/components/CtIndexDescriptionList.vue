<template lang="pug">
- 
    var descrList = [
        { text: 'Професионально подготовленные\n охранники и телохранители' },
        { text: 'Высокотехнологическое\n оснащение' },
        { text: 'Современный\n автопарк' },
        { text: 'Интеграция работы мобильных\n групп с передовыми GPS и IT решениями' },
        { text: 'Повсеместная аттестация\n и тренировки штата' },
    ]
.description-list  
    .sprites        
    ul 
        each item in descrList
            li= item.text                                  

</template>
