<template>
    <section class="page page--housetypes">
        <header class="housetypes__header">
            <div class="housetypes__header__background" :style="backgroundStyle(getHouseType.cardImage)" />
            <houseTypeTop
                :icon="getHouseType.icon"
                :title="getHouseType.name"
                :bedrooms="getHouseType.bedrooms"
                :aream2="aream2"
                :development-logo="getDevelopment.header.logo"
                :development-title="getDevelopment.header.title"
                :background="getDevelopment.header.background.src"
                :class="getDevelopment.header.class"
            />
        </header>
        <div class="housetypes__body">
            <section class="housetypes__details">
                <div class="housetypes__details__description">
                    <div class="housetypes__section__title written">
                        Description
                    </div>
                    <div class="housetypes__details__description__text" v-html="getHouseType.description" /> <!-- eslint-disable-line -->
                </div>
                <div class="housetypes__details__floorplan">
                    <div class="housetypes__section__title written">
                        Floor plan
                    </div>
                    <div
                        v-for="floor in getHouseType.designs"
                        :key="floor.id"
                        class="housetypes__details__floorplan__floor"
                    >

                        <div class="housetypes__details__floorplan__floor__id" :style="'color: ' + getDevelopment.colors.floorplan">
                            {{ floor.id }}
                        </div>
                        <img :src="floor.floorPlan" :alt="floor.name + ' floorplan'" class="housetypes__details__floorplan__floor__image">
                        <div class="housetypes__details__floorplan__floor__details">
                            <div
                                class="housetypes__details__floorplan__floor__name"
                                :style="'color: ' + getDevelopment.colors.floorplan"
                            >
                                {{ floor.name }}
                            </div>
                            <div class="housetypes__details__floorplan__floor__rooms">
                                <div
                                    v-for="(room, index) in floor.areas"
                                    :key="index"
                                    class="housetypes__details__floorplan__floor__room"
                                >
                                    <div class="housetypes__details__floorplan__floor__room__name">
                                        {{ room.name }}
                                    </div>
                                    <div class="housetypes__details__floorplan__floor__room__dimensions">
                                        {{ room.length }}m x {{ room.width }}m | {{ convertFeet(room.length) }} x {{ convertFeet(room.width) }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="housetypes__section__title written">
                    Available Plots
                </div>
                <table class="housetypes__details__plots">
                    <tr>
                        <th>Plot</th>
                        <th>Price</th>
                        <th>Status</th>
                    </tr>
                    <tr
                        v-for="plot in getHouseType.plots"
                        v-show="plot.status === 'Available'"
                        :key="plot.id"
                        class="housetypes__details__plots__item"
                    >
                        <td class="housetypes__details__plots__item__id">
                            {{ plot.id }}
                        </td>
                        <td class="housetypes__details__plots__item__price">
                            {{ plot.price | currency }}
                        </td>
                        <td class="housetypes__details__plots__item__status">
                            {{ plot.status }} <font-awesome-icon class="housetypes__details__plots__item__status__icon" :class="plot.status.toLowerCase()" icon="home" />
                        </td>
                    </tr>
                </table>
                <div class="housetypes__section__title written">
                    Specification
                </div>
                <div class="housetypes__details__specifications">
                    <div
                        v-for="(item, indexSpec) in getHouseType.specification"
                        :key="indexSpec"
                        class="housetypes__details__specifications__item"
                    >
                        <div class="housetypes__details__specifications__item__name" :style="'color: ' + getDevelopment.colors.floorplan">
                            {{ item.name }}
                        </div>
                        <ul class="housetypes__details__specifications__item__details">
                            <li
                                v-for="(details, index) in item.details"
                                :key="index"
                                class="housetypes__details__specifications__item__details__item"
                            >
                                {{ details }}
                            </li>
                        </ul>
                    </div>
                </div>

            </section>
            <section class="housetypes__media" :class="{in: trigger}" :style="'background-color: ' + getDevelopment.colors.floorplan">
                <div
                    v-for="(media, indexMedia) in getHouseType.media"
                    :key="indexMedia"
                    class="housetypes__media__item"
                >
                    <div
                        v-if="media.type ==='vimeo'"
                        class="housetypes__media__item__vimeo"
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
                        class="housetypes__media__item__image"
                    />
                    <div class="housetypes__media__item__title">
                        {{ media.title }}
                    </div>
                </div>
            </section>
        </div>
    </section>
</template>

<script>
import houseTypeTop from '~/components/housetypes/top'
export default {
    components: {
        houseTypeTop
    },
    data() {
        return {
            trigger: false
        }
    },
    head() {
        const page = this.pageInfo
        return {
            // eslint-disable-next-line
            titleTemplate: page.pageTitle
                .replace('#development#', this.getDevelopment.name)
                .replace('#housetype#', this.getHouseType.name),
            meta: page.meta
        }
    },
    computed: {
        pageInfo() {
            const page = this.$store.getters['pages/page']('housetype')[0]
            return page
        },
        getDevelopment() {
            return this.$store.getters['developments/byId'](
                this.$route.params.development
            )[0]
        },
        getHouseType() {
            return this.$store.getters['types/byId'](
                this.$route.params.houseType
            )[0]
        },
        aream2() {
            let area = 0
            area = this.getHouseType.livingArea

            return parseFloat(area.toFixed(2))
        }
    },
    mounted() {
        this.triggerMedia()
        window.addEventListener('scroll', this.triggerMedia)
    },
    destroyed() {
        window.removeEventListener('scroll', this.triggerMedia)
    },
    methods: {
        convertFeet(metres) {
            const feet = Math.floor(metres * 3.281)
            const inches = Math.round(((metres * 3.281) % 1) * 12).toFixed(2)

            return feet + '"' + Math.round(inches) + "'"
            // return feet.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        },
        convertFeetsq(metres) {
            const feet = Math.floor(metres * 10.7639)
            const inches = Math.round(((metres * 10.7639) % 1) * 12).toFixed(2)

            return feet + '"' + Math.round(inches) + "'"
            // return feet.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        },
        backgroundStyle(imagePath) {
            return {
                backgroundImage:
                    "linear-gradient(45deg, rgba(18, 18, 18, 0.0), rgba(18, 18, 18, 0.0)), url('" +
                    imagePath +
                    "')"
            }
        },
        triggerMedia() {
            const elY = window.pageYOffset
            const clientY = Math.max(
                document.documentElement.clientHeight,
                window.innerHeight || 0
            )
            this.trigger = elY >= clientY
        }
    }
}
</script>
