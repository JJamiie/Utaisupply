<template lang="pug">
.container
    .columns
        .column.is-narrow
            a.button.is-info(@click="showModal = true, mode = 0") Add Inventor
        .column
            .field.has-addons
                .control.is-expanded.has-icons-right
                    input.input(type="text" placeholder="Find an inventor" v-model="keyword")
                    span.icon.is-small.is-right(v-if="isLoading")
                        i.fa.fa-circle-o-notch.fa-spin
                .control
                    a.button.is-info Search
    table.table.is-fullwidth
        thead
            tr  
                th #
                th Image
                th Name
                th Specialty
                th Email
                th Phone number
        tbody
            tr(v-for="(inventor,index) in inventors" @click="showModal = true, mode = 1, inventorSelected = index")
                th {{rowNumber(index)}}
                td 
                    img.profile_image(:src="inventor.image")
                td {{inventor.translations[0].name}} </br> {{inventor.translations[1].name}} </br> {{inventor.translations[2].name}} 
                td {{inventor.translations[0].specialty}} </br> {{inventor.translations[1].specialty}} </br> {{inventor.translations[2].specialty}} 
                td {{inventor.email}}
                td {{inventor.phoneno}}
                
    p.has-text-centered(v-if="inventors.length === 0") No inventor found 

    nav.pagination(role="navigation" aria-label="pagination")
        ul.pagination-list
            li(v-for="index in totalPage")
                a.pagination-link(v-bind:class="isCurrentPage(index)" v-on:click="changePage(index)") {{index}}
    ModalInventor(v-if="showModal" @close="showModal = false" v-bind:mode="mode" v-bind:initialInventor='inventors[inventorSelected]' v-on:reload-list="loadInventor(0)")
                                                       
</template>


<script>
import ModalInventor from './components/ModalInventor';
const LIMIT = 10;

export default {
    data: function() {
        return {
            showModal: false,
            inventors: [],
            inventorSelected: -1,
            mode: 0,
            count: 0,
            currentPage: 1,
            totalPage: 0,
            keyword: "",
            isLoading: false
        };
    },
    components: {
        ModalInventor
    },
    methods: {
        loadInventor: _.debounce(function(offset) {
            this.isLoading = true;
            this.axios.get("inventor/?limit=" + LIMIT + "&offset=" + offset + "&keyword=" + this.keyword).then(res => {
                this.count = res.data.count;
                this.inventors = res.data.content;
                this.totalPage = Math.ceil(this.count / LIMIT);
                this.currentPage = offset + 1;
                this.isLoading = false;
            }).catch(function(thrown) {
                console.log(thrown);
            });
        }, 500),
        isCurrentPage: function(index) {
            return {
                'is-current': index === this.currentPage
            }
        },
        changePage: function(index) {
            this.loadInventor(index - 1);
        },
        rowNumber: function(index) {
            return (LIMIT * (this.currentPage - 1)) + index + 1;
        }
    },
    watch: {
        keyword: function(value) {
            this.loadInventor(0);
        }
    },
    created() {
        this.loadInventor(0);
    }
}
</script>

<style lang="scss" scoped>
.container {
    padding-top: 30px;
    padding-bottom: 30px;
    .table {
        margin-top: 20px;
    }
    .profile_image {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        object-fit: cover;
    }
}
</style>
