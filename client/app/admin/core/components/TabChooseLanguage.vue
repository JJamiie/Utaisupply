<template lang="pug">
.tabs.is-toggle.is-fullwidth
    ul
        li(v-for="(lang,index) in languages" v-bind:class="{'is-selected' : isSelected(index)}" @click="$emit('select-language', index)")
            a
                span {{lang.name}} 
</template>

<script>
export default {
    props: {
        indexLanguage: {
            type: Number,
            required: true
        }
    },
    data: function() {
        return {
            languages: this.$store.state.global.languages
        };
    },
    methods: {
        isSelected: function(index) {
            return index === this.indexLanguage;
        },
    }
}
</script>

<style lang="scss" scoped>
.is-selected {
    background-color: #f9f9f9;
    z-index: 1;
}
</style>
