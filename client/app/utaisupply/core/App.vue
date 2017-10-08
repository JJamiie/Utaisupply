<template lang="pug">
    div
        page-header
        .content-main
            transition(name="fade")
                keep-alive
                    router-view
</template>

<script>
import PageHeader from "./components/PageHeader/header"

export default {
    components: {
        PageHeader,
    }
};

</script>

<style lang="scss">
.content-main {
    position: relative;
    top: 4.5rem;
}
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.5s ease;
}
</style>

