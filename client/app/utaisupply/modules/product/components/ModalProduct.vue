<template lang="pug">
.product
    .product-container
        .btn-close(@click="$emit('close')")
            i.fa.fa-times.is-text-grey
        .has-text-centered
            h1.title {{title}}
        table.table.is-fullwidth
            thead
                tr
                    th(v-for="header in headers") {{header}}
            tbody
                tr(v-for="row in rows")
                    th(v-for="prop in row") {{prop}}

</template>



<script>
import info_stainless from "../info/stainless.js";
import info_steel from "../info/steel.js";
import info_zinc from "../info/zinc.js";

export default {
    props: {
        product: {
            Number
        }
    },
    data: function() {
        return {
            title: "",
            headers: [],
            rows: []
        };
    },
    created() {
        if (this.product === 0) {
            this.title = this.$t("msg.stainless");
            this.headers = info_stainless.headers.find(obj => obj.language === this.$i18n.locale).datas;
            this.rows = info_stainless.rows;
        } else if (this.product === 1) {
            this.title = this.$t("msg.steel");
            this.headers = info_steel.headers.find(obj => obj.language === this.$i18n.locale).datas;
            this.rows = info_steel.rows;
        } else if (this.product === 2) {
            this.title = this.$t("msg.zinc");
            this.headers = info_zinc.headers.find(obj => obj.language === this.$i18n.locale).datas;
            this.rows = info_zinc.rows;
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
    @media screen and (max-width: 768px) {
        padding: 20px;
    }
    background: rgba(0, 0, 0, 0.59);
    .product-container {
        position: relative;
        overflow: auto;
        background: white;
        width: 100%;
        height: 100%;
        padding: 40px;
        @media screen and (max-width: 768px) {
            padding: 20px;
        }
        .title{
            margin-bottom: 20px;
        }
        .btn-close {
            position: absolute;
            right: 0px;
            top: 0px;
            margin: 10px;
            cursor: pointer;
        }
    }
    
}
</style>
