<template>
    <section class="page page--search">
        <Header :headers="newHome" :links="[{ name: 'Get Started', link:'#search' }, { name: 'Contact Us', link:'/contactus' }]" />
        <Search id="search" />
    </section>
</template>

<script>
import Search from '~/components/search/main'
import Header from '~/components/header/header'
export default {
    components: {
        Search,
        Header
    },
    data() {
        return {
            newHome: [
                {
                    image: 'search.jpg',
                    title: 'Find my new home',
                    class: 'article--left',
                    logo: '',
                    subtitle: {
                        text: '',
                        link: ''
                    }
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
            const page = this.$store.getters['pages/page']('search')[0]
            return page
        },
        developments() {
            return this.$store.getters['developments/all']
        },
        prices() {
            return this.$store.getters['settings/prices']
        },
        results() {
            return this.$store.getters['houseTypes/all']
        }
    }
}
</script>
