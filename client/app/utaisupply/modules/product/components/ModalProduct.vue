<template lang="pug">
.product
    .product-container
        .btn-close(@click="$emit('close')")
            i.fa.fa-times.is-text-grey
</template>



<script>
import info_stainless from "../info/stainless.json";
import info_steel from "../info/steel.json";
import info_zinc from "../info/zinc.json";

export default {

    props: {
        product: {
            Number
        }
    },
    data: function() {
        return {};
    },
    computed: {
        getTitleProduct: function() {
            if (this.$i18n.locale == 'en') {
                return this.initialProduct.translations.find(obj => obj.language === "en").title;
            } else if (this.$i18n.locale == 'th') {
                return this.initialProduct.translations.find(obj => obj.language === "th").title;
            }
        },
        getDescProduct: function() {
            if (this.$i18n.locale == 'en') {
                return this.initialProduct.translations.find(obj => obj.language === "en").detail;
            } else if (this.$i18n.locale == 'th') {
                return this.initialProduct.translations.find(obj => obj.language === "th").detail;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.product {
    top: 0px;
    left: 0px;
    position: fixed;
    z-index: 1000;
    width: 100vw;
    height: 100vh;
    padding: 40px;
    background: rgba(0, 0, 0, 0.59);
    .product-container {
        position: relative;
        overflow: auto;
        background: white;
        width: 100%;
        height: 100%;
        .btn-close{
            position: absolute;
            right: 0px;
            margin: 10px;
            cursor: pointer;
        }
    }
}
</style>
