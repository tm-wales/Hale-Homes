<template>
    <section class="searches">
        <div class="search">
            <div class="search__box">
                <div class="search__label">
                    Bedrooms
                </div>
                <div class="search__options">
                    <div
                        class="search__options__option"
                        :class="{active: selected.bedrooms === 1}"
                        @click="updateBedrooms(1)"
                    >
                        1+
                    </div>
                    <div
                        class="search__options__option"
                        :class="{active: selected.bedrooms === 2}"
                        @click="updateBedrooms(2)"
                    >
                        2+
                    </div>
                    <div
                        class="search__options__option"
                        :class="{active: selected.bedrooms === 3}"
                        @click="updateBedrooms(3)"
                    >
                        3+
                    </div>
                    <div
                        class="search__options__option"
                        :class="{active: selected.bedrooms === 4}"
                        @click="updateBedrooms(4, $event)"
                    >
                        4+
                    </div>
                </div>
            </div>

            <div v-if="development === ''" class="search__box">
                <div class="search__label">
                    Development
                </div>
                <select v-model="selected.development" class="search__select">
                    <option selected value />
                    <option
                        v-for="(eachDev, index) in developments"
                        :key="index"
                        :value="eachDev.id"
                        class="search__select__option"
                    >
                        <span>{{ eachDev.name }}</span>
                    </option>
                </select>
            </div>

            <div class="search__box">
                <div class="search__label">
                    Max Price
                </div>
                <select v-model="selected.maxPrice" class="search__select">
                    <option selected value />
                    <option
                        v-for="(price, index) in prices.max"
                        :key="index"
                        :value="price"
                        class="search__select__option"
                    >
                        <span>{{ price }}</span>
                    </option>
                </select>
            </div>
            <div class="search__results__summary">
                <div class="search__results__count">
                    {{ count }} {{ count === 1 ? 'property' : 'properties' }} found
                </div>
            </div>
        </div>
        <Results
            :bedrooms="Number(selected.bedrooms)"
            :development="selected.development"
            :min-price="Number(selected.minPrice.replace(/[^0-9.-]+/g,''))"
            :max-price="Number(selected.maxPrice.replace(/[^0-9.-]+/g,''))"
            @available="updateCount"
        />
    </section>
</template>

<script>
import Results from '~/components/search/results'

export default {
    components: {
        Results
    },
    props: {
        development: {
            type: String,
            required: false,
            default: ''
        }
    },
    data() {
        return {
            developments: [],
            prices: {},
            selected: {
                bedrooms: 1,
                development: '',
                minPrice: '0',
                maxPrice: '100000000'
            },
            count: 0
        }
    },
    mounted() {
        this.developments = this.$store.getters['developments/byFinished'](
            false
        )
        this.prices = this.$store.getters['settings/prices']
        if (this.development !== '') {
            this.selected.development = this.development
        }
    },
    methods: {
        updateBedrooms(beds) {
            this.selected.bedrooms = beds
        },
        updateCount(e) {
            this.count = e
        }
    }
}
</script>
