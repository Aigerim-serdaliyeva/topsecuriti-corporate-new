<template lang="pug">
    section.siteOff
        h1 Сайт Закрыт на Техническое Обслуживание
        p Приносим извинения за неудобство, но в данный момент сайт находится на техническом обслуживании.
        p Скоро мы вернемся online!
</template>

<style lang="scss" scoped>
.siteOff {
  height: 80vh;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font: 20px Helvetica, sans-serif;
  color: #333;
  h1 {
    font-size: 50px;
    font-weight: bold;
    margin-bottom: 50px;
  }
  p {
    margin-bottom: 25px;
  }
}
</style>

<script>
export default {};
</script>
