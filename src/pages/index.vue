<template>
    <section class="page page--home">
        <Header v-if="developments.length > 0" :headers="developments" :links="[{ name: 'Find new home', link:'/search' },{ name: 'Why hale homes', link:'/aboutus/hale' }]" />
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
            developments: []
        }
    },
    mounted() {
        const devs = this.$store.getters['developments/frontList']
        devs.forEach(dev => {
            console.log(dev) //eslint-disable-line
            this.developments.push({
                image: dev.front.src,
                title: dev.name,
                subtitle: {
                    text: dev.futureDevelopment
                        ? 'Register your interest now!'
                        : dev.title,
                    link: dev.futureDevelopment
                        ? '/contactus'
                        : '/developments/' + dev.route
                },
                logo: dev.front.logo,
                class: dev.front.class,
                numberHouses: dev.housesAvailable
            })
        })
    }
}
</script>
