<template>
    <div class="app theme--standard">
        <nav-logo :open="nav.open" />
        <nav-toggle :open="nav.open" @toggle="toggle" />
        <nav-social :open="nav.open" />
        <nav-menu :open="nav.open" @toggle="toggle" />
        <nuxt />
        <Gackie />
    </div>
</template>

<script>
import navLogo from '~/components/nav/logo'
import navToggle from '~/components/nav/toggle'
import navSocial from '~/components/nav/social'
import navMenu from '~/components/nav/menu'
import Gackie from '~/components/gackie/gackie'

export default {
    components: {
        navLogo,
        navToggle,
        navSocial,
        navMenu,
        Gackie
    },
    data() {
        return {
            nav: {
                open: false,
                auto: true
            }
        }
    },
    mounted() {
        window.addEventListener(
            'load',
            function() {
                const boom = document.getElementsByClassName('app')[0]
                boom.classList.remove('transition')
                boom.classList.add('loaded')
            },
            false
        )
        setTimeout(() => {
            if (this.$mq !== 'md' && this.nav.auto === true) {
                this.nav.open = true
            }
            this.nav.auto = false
        }, 2500)
    },
    methods: {
        toggle() {
            this.nav.open = !this.nav.open
            this.nav.auto = false
        }
    }
}
</script>
