<template lang="pug">
.fieldEvent
    .field
        label.label Title
        .control
            input.input(v-model="title" type="text" @input="update")
    .field
        label.label Detail
        .control
            textarea.textarea(v-model="detail" type="text" @input="update")   
    .field
        label.label Place
        .control
            input.input(v-model="place" type="text" @input="update")           
</template>

<script>
    export default {
        props: {
            initialEvent:{
                type: Object
            },
            index: {
                type: Number,
                required: true
            }
        },
        data: function() {
            return {
                title: this.initialEvent.title,
                detail: this.initialEvent.detail,
                place: this.initialEvent.place
            };
        },
        methods: {
            update: function(event) {
                var translation = {};
                translation['language'] = this.initialEvent.language;
                translation['title'] = this.title;
                translation['detail'] = this.detail;
                translation['place'] = this.place;
                this.$emit('update-value', this.index, translation);
            }
        },
    
    }
</script>

<style lang="scss" scoped>
    .fieldEvent{
        margin-bottom: 10px;
    }
</style>
