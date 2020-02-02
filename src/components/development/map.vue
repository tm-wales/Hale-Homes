<template>
    <section class="development__details__map">
        <div class="development__details__map__details" :style="'background-color: ' + colors.background">
            <div class="development__details__map__headers">
                <div class="development__details__map__subtitle" :style="'color: ' + colors.subText">
                    {{ location }}
                </div>
                <div class="development__details__map__title" :style="'color: ' + colors.mainText">
                    Local Amenities
                </div>
            </div>
            <div class="development__details__map__text" v-html="amenities" /> <!-- eslint-disable-line -->
        </div>
        <iframe
            width="300"
            height="170"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            :src="'https://maps.google.com/maps?q=' + map.latitude + ',' + map.longitude + '&hl=es;z=14&amp;output=embed'"
            class="development__details__map__iframe"
        />
    </section>
</template>

<script>
export default {
    props: {
        map: {
            type: Object,
            required: true
        },
        colors: {
            type: Object,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        amenities: {
            type: String,
            required: true
        }
    }
}
</script>
