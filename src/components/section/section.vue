<template>
    <article class="section">
        <div class="section__H" />
        <div
            v-if="media.type === 'image'"
            :style="'background-image: url(\'' + media.src + '\')'"
            class="section__image"
        />
        <div
            v-if="media.type ==='vimeo'"
            class="section__vimeo"
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
            v-if="media.type ==='youtube'"
            class="section__vimeo"
        >
            <iframe
                width="560"
                height="315"
                :src="media.src"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            />
        </div>
        <div class="section__details" :style="'background-color: ' + colors.background">
            <div class="section__headers">
                <div class="section__subtitle" :style="'color: ' + colors.subText">
                    {{ subtitle }}
                </div>
                <div class="section__title" :style="'color: ' + colors.mainText">
                    {{ title }}
                </div>
            </div>
            <div class="section__info">
                <div class="section__summary">
                    {{ summary }}
                </div>
                <div class="section__text" v-html="text" /> <!-- eslint-disable-line -->
                <a v-show="brochure !== ''" class="section__brochure" :href="brochure" target="_blank">
                    <font-awesome-icon icon="file-pdf" />{{ name }} Brochure
                </a>
            </div>
        </div>
    </article>
</template>

<script>
export default {
    props: {
        media: {
            type: Object,
            required: true
        },
        h: {
            type: String,
            required: false,
            default: ''
        },
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: true
        },
        summary: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        colors: {
            type: Object,
            required: false,
            default: () => {
                return {
                    background: '',
                    mainText: '',
                    subText: ''
                }
            }
        },
        brochure: {
            type: String,
            required: false,
            default: ''
        },
        name: {
            type: String,
            required: true
        }
    },
    mounted() {
        console.log(this.colors) //eslint-disable-line
    }
}
</script>
