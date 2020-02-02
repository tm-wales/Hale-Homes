<template>
    <div class="search__results">
        <div class="search__results__list">
            <transition-group name="search__transition" class="search__results__list__flex">
                <div
                    v-for="type in getResults"
                    :key="type.id"
                    class="search__results__item"
                >
                    <HomeCard :type="type" />
                </div>
            </transition-group>
        </div>
    </div>
</template>

<script>
import HomeCard from '~/components/search/card'
export default {
    components: {
        HomeCard
    },
    props: {
        bedrooms: {
            type: Number,
            required: false,
            default: 1
        },
        development: {
            type: String,
            required: false,
            default: ''
        },
        minPrice: {
            type: Number,
            required: false,
            default: 0
        },
        maxPrice: {
            type: Number,
            required: false,
            default: 10000000000
        }
    },
    computed: {
        getResults() {
            let count = 0
            const data = this.$store.getters['types/search']({
                beds: this.bedrooms,
                development: this.development,
                minPrice: this.minPrice,
                maxPrice: this.maxPrice
            })

            data.forEach(element => {
                count += element.numberAvailable
            })
            this.$emit('available', count)
            return data
        }
    }
}
</script>
