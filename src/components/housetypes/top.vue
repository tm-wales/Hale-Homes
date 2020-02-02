<template>
    <div class="housetypes__top" :style="backgroundStyle(background)">
        <div class="housetypes__top__title">
            <div class="housetypes__top__title__text">
                {{ title }}
            </div>
            <div class="housetypes__top__title__dimensions">
                <div class="housetypes__top__title__dimensions__bedrooms">
                    {{ bedrooms }} bedrooms
                </div>
                <div class="housetypes__top__title__dimensions__areas">
                    {{ aream2 }}m<sup>2</sup> | {{ convertFeetsq(aream2) }}ft<sup>2</sup>
                </div>
            </div>
        </div>
        <div class="housetypes__top__development">
            <img :src="developmentLogo" class="housetypes__top__development__logo">
            <div class="housetypes__top__development__title">
                {{ developmentTitle }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        bedrooms: {
            type: Number,
            required: true
        },
        aream2: {
            type: Number,
            required: true
        },
        developmentLogo: {
            type: String,
            required: true
        },
        developmentTitle: {
            type: String,
            required: true
        },
        background: {
            type: String,
            required: true
        }
    },
    methods: {
        convertFeet(metres) {
            const feet = Math.floor(metres * 3.281)
            // const inches = Math.round(((metre * 3.281) % 1) * 12).toFixed(2)

            // return feet + '.' + inches
            return feet.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        },
        convertFeetsq(metres) {
            const feet = Math.floor(metres * 10.7639)
            return feet.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        },
        backgroundStyle(imagePath) {
            return {
                backgroundImage:
                    "linear-gradient(45deg, rgba(18, 18, 18, 0.3), rgba(18, 18, 18, 0.3)), url('" +
                    imagePath +
                    "')"
            }
        }
    }
}
</script>
