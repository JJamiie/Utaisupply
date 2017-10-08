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
            initialProduct:{
                type: Object
            },
            index: {
                type: Number,
                required: true
            }
        },
        data: function() {
            return {
                title: this.initialProduct.title,
                detail: this.initialProduct.detail,
            };
        },
        methods: {
            update: function(event) {
                var translation = {};
                translation['language'] = this.initialProduct.language;
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
