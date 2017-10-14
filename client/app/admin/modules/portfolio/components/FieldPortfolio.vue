<template lang="pug">
.fieldProduct
    .field
        label.label Title
        .control
            input.input(v-model="title" type="text" @input="update")
    .field
        label.label Detail
        .control
            textarea.textarea(v-model="detail" type="text" @input="update")   
</template>

<script>
    export default {
        props: {
            initialPortfolio:{
                type: Object
            },
            index: {
                type: Number,
                required: true
            }
        },
        data: function() {
            return {
                title: this.initialPortfolio.title,
                detail: this.initialPortfolio.detail,
            };
        },
        methods: {
            update: function(event) {
                var translation = {};
                translation['language'] = this.initialPortfolio.language;
                translation['title'] = this.title;
                translation['detail'] = this.detail;
                this.$emit('update-value', this.index, translation);
            }
        },
    
    }
</script>

<style lang="scss" scoped>
    .fieldProduct{
        margin-bottom: 10px;
    }
</style>
