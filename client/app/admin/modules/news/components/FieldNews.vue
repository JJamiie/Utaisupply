<template lang="pug">
.fieldNews
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
            initialNews:{
                type: Object
            },
            index: {
                type: Number,
                required: true
            }
        },
        data: function() {
            return {
                title: this.initialNews.title,
                detail: this.initialNews.detail,
            };
        },
        methods: {
            update: function(news) {
                var translation = {};
                translation['language'] = this.initialNews.language;
                translation['title'] = this.title;
                translation['detail'] = this.detail;
                this.$emit('update-value', this.index, translation);
            }
        },
    
    }
</script>

<style lang="scss" scoped>
    .fieldNews{
        margin-bottom: 10px;
    }
</style>
