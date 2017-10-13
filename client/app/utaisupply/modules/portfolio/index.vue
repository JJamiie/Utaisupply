<template lang="pug">
div 
    section.hero.is-medium.header-portfolio
        .hero-body
            img(src="~images/portfolio.jpg" v-parallax="0.2")
            .container.has-text-centered
                h3.title.is-size-1.is-text-white <strong>ผลงาน</strong>
                h4.subtitle.is-size-5.is-text-white รังสรรค์ผลิตภัณฑ์ด้วย ♥

   
    section.hero
        .hero-body
            .container
                .columns
                    .column.is-3
                        .card
                            .card-image
                                figure.image.is-4by3
                                    img(src="http://placehold.it/300x225" alt="")
                            .card-content
                                .content
                                    span.tag.is-dark Deverhood
                                    strong.timestamp.is-pulled-right 2d
                    .column.is-3
                        .card
                            .card-image
                                figure.image.is-4by3
                                    img(src="http://placehold.it/300x225" alt="")
                            .card-content
                                .content
                                    span.tag.is-dark Deverhood
                                    strong.timestamp.is-pulled-right 2d
                    .column.is-3
                        .card
                            .card-image
                                figure.image.is-4by3
                                    img(src="http://placehold.it/300x225" alt="")
                            .card-content
                                .content
                                    span.tag.is-dark Deverhood
                                    strong.timestamp.is-pulled-right 2d
                    .column.is-3
                        .card
                            .card-image
                                figure.image.is-4by3
                                    img(src="http://placehold.it/300x225" alt="")
                            .card-content
                                .content
                                    span.tag.is-dark Deverhood
                                    strong.timestamp.is-pulled-right 2d
                .columns
                    .column.is-3
                        .card
                            .card-image
                                figure.image.is-4by3
                                    img(src="http://placehold.it/300x225" alt="")
                            .card-content
                                .content
                                    span.tag.is-dark Deverhood
                                    strong.timestamp.is-pulled-right 2d
                    .column.is-3
                        .card
                            .card-image
                                figure.image.is-4by3
                                    img(src="http://placehold.it/300x225" alt="")
                            .card-content
                                .content
                                    span.tag.is-dark Deverhood
                                    strong.timestamp.is-pulled-right 2d
                    .column.is-3
                        .card
                            .card-image
                                figure.image.is-4by3
                                    img(src="http://placehold.it/300x225" alt="")
                            .card-content
                                .content
                                    span.tag.is-dark Deverhood
                                    strong.timestamp.is-pulled-right 2d
                    .column.is-3
                        .card
                            .card-image
                                figure.image.is-4by3
                                    img(src="http://placehold.it/300x225" alt="")
                            .card-content
                                .content
                                    span.tag.is-dark Deverhood
                                    strong.timestamp.is-pulled-right 2d

</template>

<script>
    
</script>

<style lang="scss" scoped>
    .header-portfolio {
        position: relative;
        overflow: hidden;
        img {
            width: 100%;
            object-fit: cover;
            position: absolute;
            left: 0px;
            top: -200px;
            @media screen and (max-width: 768px) {
                top:-100px;
            }
            filter: brightness(0.5);
        }
    }
</style>
