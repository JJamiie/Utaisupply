<template lang="pug">
.field
    .columns
        .column
            .file.has-name.is-fullwidth.is-right
                label.file-label
                    input.file-input(type="file" @change="fileSelected")
                    span.file-cta
                        span.file-icon
                            i.fa.fa-upload
                        span.file-label Choose a file…
                    span.file-name {{filename}}
        .column.is-narrow(v-if="filename || isRemove")
            a.button.is-danger.is-outlined(@click="removeFile")
                span.icon.is-small
                    i.fa.fa-times
                span Remove
    img(:src="image" v-if="image")
</template>

<script>
export default {
    props: {
        intialIsRemove: {
            type: Boolean
        },
        value: {
            type: Object
        }
    },
    data: function() {
        return {
            isRemove: false,
            image: "",
            filename: ""
        };
    },
    watch: {
        value(value) {
            this.setValue(value);
        }
    },
    methods: {
        setValue(value) {
            if (value.type === 0) {
                this.image = value.url;
            } else {
                if (value.file !== undefined) {
                    var reader = new FileReader();
                    reader.onload = (event) => {
                        this.image = event.target.result;
                    };
                    reader.readAsDataURL(value.file);
                    this.filename = value.file.name;
                }
            }
        },
        fileSelected(event) {
            var files = event.target.files || event.dataTransfer.files;
            if (!files.length)
                return;
            this.createImage(files[0]);
        },
        createImage(fileImage) {
            let img = {
                type: 1,
                file: fileImage,
            };
            this.$emit('input', img);
        },
        removeFile() {
            if (this.isRemove) {
                this.$emit('remove');
            } else {
                this.filename = "";
                this.image = "";
                let img = {
                    type: 1,
                    file: undefined
                };
                this.$emit('input', img);
            }
        },
        init() {
            if (this.value) {
                this.setValue(this.value)
            }
        }
    },
    mounted() {
        this.init();
    },
    created() {
        if (this.intialIsRemove !== undefined) {
            this.isRemove = this.intialIsRemove;
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
