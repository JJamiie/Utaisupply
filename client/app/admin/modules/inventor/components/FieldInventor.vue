<template lang="pug">
.fieldInventor
    .field
        label.label Name
        .control
            input.input(v-model="name" type="text" @input="update")
    .field
        label.label Specialty
        .control
            input.input(v-model="specialty" type="text" @input="update")   
</template>

<script>
    export default {
        props: {
            initialInventor:{
                type: Object
            },
            index: {
                type: Number,
                required: true
            }
        },
        data: function() {
            return {
                name: this.initialInventor.name,
                specialty: this.initialInventor.specialty,
            };
        },
        methods: {
            update: function(event) {
                var translation = {};
                translation['language'] = this.initialInventor.language;
                translation['name'] = this.name;
                translation['specialty'] = this.specialty;
                this.$emit('update-value', this.index, translation);
            }
        },
    
    }
</script>

<style lang="scss" scoped>
    .fieldInventor{
        margin-bottom: 10px;
    }
</style>
