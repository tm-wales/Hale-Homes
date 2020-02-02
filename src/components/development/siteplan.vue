<template>
    <section class="development__siteplan">
        <Legend />
        <div id="siteplan" class="development__siteplan__svg" v-html="sitemap" @click="card.showCard = false" /> <!-- eslint-disable-line -->
        <div class="development__siteplan__card" :class="{show: card.showCard}" :style="{top: card.top + 'px', left: card.left + 'px'}">
            <Card :plot="card.plotName" :house-type-name="card.name" :price="card.price" :bedrooms="card.bedrooms" :status="card.status" />
        </div>
    </section>
</template>

<script>
import Card from '~/components/development/card'
import Legend from '~/components/development/legend'

export default {
    components: {
        Card,
        Legend
    },
    props: {
        siteplan: {
            type: String,
            required: true
        },
        developmentId: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            sitemap: '',
            selectedPlot: {},
            card: {
                plotId: '1',
                showCard: false,
                top: 0,
                left: 0,
                plotName: '',
                name: '',
                price: '',
                bedrooms: 0,
                status: ''
            }
        }
    },
    computed: {
        type() {
            return this.$store.getters['types/byId'](this.developmentId)[0]
        }
    },
    mounted() {
        this.loadSvg()
    },
    methods: {
        loadSvg() {
            fetch(this.siteplan)
                .then(response => response.text())
                .then(svg => (this.sitemap = svg))
                .then(this.markSvg())
        },
        markSvg() {
            const houseTypes = this.$store.getters['types/development'](
                this.developmentId
            )
            // wait 1 second to allow the laod to finish and dom to catch up
            setTimeout(() => {
                houseTypes.forEach(house => {
                    house.plots.forEach(plot => {
                        const id = plot.id
                        const el = document.getElementById('plot' + id)
                        if (el) {
                            el.classList.add(plot.status.toLowerCase())
                            el.addEventListener('click', () => {
                                const bb = el.getBBox()
                                const svg = document.getElementById('siteplan')
                                const offset = svg.getBoundingClientRect()
                                const matrix = el.getScreenCTM()
                                const x =
                                    matrix.a * bb.x +
                                    matrix.c * bb.y +
                                    matrix.e -
                                    offset.left

                                const y =
                                    matrix.b * bb.x +
                                    matrix.d * bb.y +
                                    matrix.f -
                                    offset.top

                                let timeDelay = 0
                                if (this.card.showCard) {
                                    this.card.showCard = false
                                    timeDelay = 350
                                }

                                setTimeout(() => {
                                    this.card.top = y
                                    this.card.left = x
                                }, timeDelay)
                                setTimeout(() => {
                                    this.card.plotId = plot.id
                                    this.card.plotName = plot.plot
                                    this.card.name = house.name
                                    this.card.price = plot.price
                                    this.card.bedrooms = house.bedrooms
                                    this.card.status = plot.status
                                    this.card.showCard = true
                                }, timeDelay + 150)
                            })
                        }
                    })
                })
            }, 1000)
        }
    }
}
</script>
