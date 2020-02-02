<template>
    <section class="page page--about">
        <Header :headers="headerInfo" :links="[{ name: 'Why Hale Homes', link:'#why'}, { name: 'Eco Friendly', link:'#eco' }]" />
        <div class="about">
            <section v-for="content in pageInfo.content" :id="content.id" :key="content.id" class="about__block">
                <div class="about__block__title">
                    {{ content.title }}
                </div>
                <div class="about__block__text" v-html="content.text"/> <!-- eslint-disable-line -->
            </section>
            <div class="about__h">
                <img src="/logophoto.png" alt="H logo photo">
            </div>
        </div>
    </section>
</template>
<script>
import Header from '~/components/header/header'

export default {
    components: {
        Header
    },
    data() {
        return {
            headerInfo: [
                {
                    image: '/trees.jpg',
                    title: 'Hale Homes',
                    subtitle: {
                        text:
                            'The highest quality build, with eco friendly materials',
                        link: ''
                    },
                    logo: '',
                    class: 'article--left'
                }
            ]
        }
    },
    head() {
        const page = this.pageInfo
        return {
            titleTemplate: page.pageTitle,
            meta: page.meta
        }
    },
    computed: {
        pageInfo() {
            const page = this.$store.getters['pages/page']('about')[0]
            return page
        }
    }
}
</script>
