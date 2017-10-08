<template lang="pug">
.autocomplete
    .field.has-addons
        .control.is-expanded.has-icons-right
            input.input(type="text" placeholder="Search..." v-model="keyword" @input="onTyping")
            span.icon.is-small.is-right
                i.fa.fa-angle-down
        .control
            a.button(@click="$emit('remove')") Remove
       
    ul.menu-list(v-if="isShow")
        li.is-hoverable(v-for="option in options")  
            a(@click="onSelected(option)") {{option.title}}
</template>

<script>
    export default {
        props: {
            value: {
                type: Object
            },
            options: {
                type: Array,
                required: true
            },
    
        },
        data: function() {
            return {
                _id: "",
                keyword: "",
                isShow: false
            };
        },
        methods: {
            onSelected: function(option) {
                this.keyword = option.title;
                this._id = option._id;
                this.isShow = false;
                let inventorSelected = {
                    title: option.title,
                    _id: this._id
                }
                this.$emit('input', inventorSelected);
            },
            onTyping: function() {
                this.isShow = true;
                this.$emit('reload', this.keyword);
            }
        },
        created(){
            this.keyword = this.value.title;
        }
    }
</script>

<style lang="scss" scoped>
    .autocomplete {
        margin-bottom: 10px;
    }
</style>
