<template>
    <section class="page page--legal">
        <Header :headers="headerInfo" :links="[{ name: 'Privacy', link:'#privacy'}, { name: 'Cookies', link:'#cookie' }]" />
        <ul class="legal__links">
            <li
                v-for="policy in policies"
                :key="policy.id"
                class="legal__link"
            >
                <a
                    v-scroll-to="'#' + policy.id"
                    href="#"
                    class="legal__link__a"
                >
                    <span> {{ policy.title }} </span>
                </a>
            </li>
        </ul>
        <div
            v-for="policy in policies"
            :id="policy.id"
            :key="policy.id"
            class="legal__block"
        >
            <h2 class="legal__block__title">
                {{ policy.title }}
            </h2>
            <div class="legal__block__html" v-html="policy.html" /> <!-- eslint-disable-line -->
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
                    image: '/compliance.jpg',
                    title: 'Legal',
                    subtitle: {
                        text: 'Compliance requirements & policies',
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
            const page = this.$store.getters['pages/page']('legal')[0]
            return page
        },
        policies() {
            const page = this.$store.getters['policies/policies']
            return page
        }
    }
}
</script>
