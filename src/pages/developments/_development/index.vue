<template>
    <section class="page page--development development">
        <Header :headers="headerInfo" :links="getNumberHouseTypes > 0 ? links : linksPast " />
        <Section
            v-for="(section, index) in getDevelopment.sections"
            id="learnmore"
            :key="index"
            :media="section.media"
            :h="section.hImage"
            :title="section.title"
            :subtitle="section.subtitle"
            :summary="section.summary"
            :text="section.text"
            :colors="section.colors"
            :brochure="getDevelopment.brochure"
            :name="getDevelopment.header.title"
            class="development__section"
        />
        <img v-if="getDevelopment.sitePlan.image !== ''" id="#siteplan" :src="getDevelopment.sitePlan.image" alt="siteplan">
        <Siteplan v-if="getDevelopment.sitePlan.svg !== ''" id="#siteplan" class="development__details__siteplan" :siteplan="getDevelopment.sitePlan.svg" :development-id="$route.params.development" />
        <HouseTypes v-if="getNumberHouseTypes > 0" id="homes" class="development__details__houseTypes" :development-id="getDevelopment.id" />

        <Map
            v-if="typeof getDevelopment.amenities !== 'undefined'"
            class="development__details__map"
            :style="'background-color: ' + getDevelopment.colors.background"
            :map="getDevelopment.map"
            :location="getDevelopment.location"
            :amenities="getDevelopment.amenities"
            :colors="getDevelopment.colors"
        />
        <div id="media" class="development__media">
            <div
                v-for="(media, index) in getDevelopment.media"
                :key="index"
                v-in-viewport.once="-200"
                class="development__media__item"
            >
                <div
                    v-if="media.type ==='vimeo'"
                    class="development__media__item__vimeo"
                >
                    <iframe
                        :src="media.src"
                        frameborder="0"
                        webkitallowfullscreen
                        mozallowfullscreen
                        allowfullscreen
                    />
                </div>
                <div
                    v-if="media.type ==='image'"
                    v-lazy:background-image="media.src"
                    class="development__media__item__image"
                />
            </div>
        </div>

    </section>
</template>

<script>
import Header from '~/components/header/header'
import Section from '~/components/section/section'
import Siteplan from '~/components/development/siteplan'
import HouseTypes from '~/components/development/housetypes'
import Map from '~/components/development/map'
export default {
    components: {
        Header,
        Section,
        Siteplan,
        HouseTypes,
        Map
    },
    data() {
        return {
            links: [
                {
                    name: 'Siteplan',
                    link: '#siteplan'
                },
                {
                    name: 'Homes',
                    link: '#homes'
                }
            ],
            linksPast: [
                {
                    name: 'Learn more',
                    link: '#learnmore'
                },
                {
                    name: 'Media',
                    link: '#media'
                }
            ]
        }
    },
    head() {
        const page = this.pageInfo
        return {
            titleTemplate: this.getDevelopment.name + ' | ' + page.pageTitle,
            meta: page.meta
        }
    },
    computed: {
        pageInfo() {
            const page = this.$store.getters['pages/page']('developments')[0]
            return page
        },
        headerInfo() {
            const _this = this
            return [
                {
                    image: _this.getDevelopment.header.background.src,
                    title: _this.getDevelopment.header.title,
                    class: _this.getDevelopment.header.class,
                    logo: _this.getDevelopment.header.logo,
                    subtitle: {
                        text: _this.getDevelopment.header.subTitle,
                        link: ''
                    },
                    numberHouses: _this.getDevelopment.housesAvailable
                }
            ]
        },
        getDevelopment() {
            return this.$store.getters['developments/byId'](
                this.$route.params.development
            )[0]
        },
        getNumberHouseTypes() {
            return this.$store.getters['types/development'](
                this.$route.params.development
            ).length
        }
    },
    mounted() {
        console.log(this.getDevelopment.numberAvailable + ' is available') //eslint-disable-line
    }
}
</script>
