<template>
    <div
        class="search__card"
        :class="{gone: type.numberAvailable ===0}"
    >
        <div :style="'background-image: url(\'' + type.cardImage + '\')'" class="search__card__image" />
        <div class="search__card__available">
            {{ type.numberAvailable }} available
        </div>
        <div
            :class="type.development"
            :style="detailsColor"
            class="search__card__details"
        >
            <nuxt-link :to="'/developments/' + type.development" class="search__card__development">
                <span> {{ getDevelopment.name }} </span>
            </nuxt-link>
            <div
                :style="'color: ' + getDevelopment.colors.mainText"
                class="search__card__title written"
            >
                <span> {{ type.name }} </span>
            </div>
            <div
                :style="'color: ' + getDevelopment.colors.mainText"
                class="search__card__price"
            >
                <span> {{ type.minPrice | currency }} </span>
            </div>
            <div class="search__card__keyfacts">
                <div
                    v-for="fact in type.keyFacts"
                    :key="fact"
                    class="search__card__keyfact"
                >
                    {{ fact }}
                </div>
            </div>
            <nuxt-link
                :to="'/developments/' + type.development + '/' + type.id"
                class="search__card__link"
            >
                <span>View Property</span>
            </nuxt-link>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        type: {
            type: Object,
            required: true
        }
    },
    computed: {
        getDevelopment() {
            const data = this.$store.getters['developments/byId'](
                this.type.development
            )[0]
            return data
        },
        detailsColor() {
            return {
                backgroundColor: this.getDevelopment.colors.background,
                color: this.getDevelopment.colors.subText
            }
        }
    }
}
</script>
