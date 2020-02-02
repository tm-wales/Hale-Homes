<template>
    <header
        id="header"
        class="header"
        :style="'height: ' + height + 'vh'"
    >
        <article
            v-for="(header, index) in headers"
            :key="index"
            class="header__article"
            :class="header.class"
        >
            <div
                :id="'bg-' + (index + 1)"
                :style="backgroundStyle(header.image)"
                class="header__article__background"
            >
                <div v-show="header.numberHouses <= 5 && header.numberHouses !== 0" class="header__article__relative">
                    <div class="header__article__relative__only">
                        Only {{ header.numberHouses }} left!
                    </div>
                </div>
            </div>
            <div class="header__article__details">
                <img
                    v-if="header.logo !== ''"
                    :id="'lg-' + (index + 1)"
                    :src="header.logo"
                    alt="header logo"
                    class="header__article__logo"
                >
                <h1
                    :id="'h1-' + (index + 1)"
                    class="header__article__title"
                >
                    <span>{{ header.title }}</span>
                </h1>
                <h2 v-if="header.subtitle.text !== ''" :id="'h2-' + (index + 1)" class="header__article__subtitle">
                    <a
                        v-if="header.subtitle.link.charAt(0) === '#'"
                        v-scroll-to="header.subtitle.link"
                        href="#"
                        class="header__article__subtitle__link"
                    >
                        <span> {{ header.subtitle.text }} </span>
                    </a>
                    <nuxt-link
                        v-else-if="header.subtitle.link !== ''"
                        :to="header.subtitle.link"
                        class="header__article__subtitle__link"
                    >
                        <span>{{ header.subtitle.text }}</span>
                    </nuxt-link>
                    <div v-else class="header__article__subtitle__text">
                        <span>{{ header.subtitle.text }}</span>
                    </div>

                </h2>

            </div>
        </article>

        <div v-if="headers.length > 1" class="header__switch">
            <div class="header__switch__button" @click="next(false)">
                <span><font-awesome-icon class="project__link" icon="long-arrow-alt-left" /></span>
            </div>
            <div class="header__switch__button" @click="next(true)">
                <span><font-awesome-icon class="project__link" icon="long-arrow-alt-right" /></span>
            </div>
        </div>

        <div v-if="links !== null" class="header__cta">
            <div
                v-for="(link, index) in links"
                :key="index"
                class="header__cta__link"
            >
                <a
                    v-if="link.link.slice(0, 3) === 'tel' || link.link.slice(0, 7) === 'emailto'"
                    :href="link.link"
                    class="link"
                    :class="index === 0 ? 'left' : ''"
                >
                    <span> {{ link.name }} </span>
                </a>
                <nuxt-link
                    v-else-if="link.link.charAt(0) !== '#'"
                    :to="link.link"
                    class="link"
                    :class="index === 0 ? 'left' : ''"
                >
                    <span> {{ link.name }} </span>
                </nuxt-link>
                <a
                    v-else-if="link.link.charAt(0) === '#'"
                    v-scroll-to="link.link"
                    href="#"
                    class="link"
                    :class="index === 0 ? 'left' : ''"
                >
                    <span> {{ link.name }} </span>
                </a>
            </div>
        </div>
    </header>
</template>

<script>
import { TimelineLite } from 'gsap'
export default {
    props: {
        headers: {
            type: Array,
            required: true
        },
        height: {
            type: String,
            required: false,
            default: '100'
        },
        autoCycle: {
            type: Boolean,
            required: false,
            default: true
        },
        links: {
            type: Array,
            required: false,
            default: null
        }
    },
    data() {
        return {
            slide: {
                isRunning: false,
                current: 1,
                max: 0,
                timeTillCycle: 10000,
                counter: 0,
                paused: false
            },
            clientY: 0,
            clientX: 0,
            killCycle: false
        }
    },
    mounted() {
        this.reset()
        this.start()
    },
    beforeDestroy() {
        this.killCycle = true
    },
    destroyed() {
        window.removeEventListener('resize', this.getHeight)
    },
    methods: {
        reset() {
            this.slide.max = document.getElementsByClassName(
                'header__article'
            ).length

            window.addEventListener('resize', this.getHeight)
            this.getHeight()

            // move all slide except current out of the way
            const tl = new TimelineLite()
            // prettier-ignore
            tl
                .to('.header__article__background', 0, { y: 6000 })
                .to('.header__article__logo', 0, { y: 6000 })
                .to('.header__article__title', 0, { y: 6000 })
                .to('.header__article__subtitle', 0, { y: 6000 })
        },
        start() {
            this.slide.current = 1
            const tl = new TimelineLite({ delay: 1 })
            // prettier-ignore
            tl
                .to('#bg-1', 0, { y: this.clientY })
                .to('#lg-1', 0, { y: this.clientY })
                .to('#h1-1', 0, { y: this.clientY })
                .to('#h2-1', 0, { y: this.clientY })
                .to('#bg-1', 1, { y: 0 })
                .to('#lg-1', 1, { y: 0 }, '-=1')
                .to('#h1-1', 1, { y: 0 }, '-=0.9')
                .to('#h2-1', 1, { y: 0 }, '-=0.8')

            if (this.slide.max > 1 && this.autoCycle) {
                this.cycle()
            }
        },
        backgroundStyle(imagePath) {
            return {
                backgroundImage:
                    "linear-gradient(45deg, rgba(18, 18, 18, 0.3), rgba(18, 18, 18, 0.3)), url('" +
                    imagePath +
                    "')"
            }
        },
        getHeight() {
            this.clientX =
                window.innerWidth ||
                document.documentElement.clientWidth ||
                document.getElementsById('header').clientWidth
            this.clientY =
                window.innerHeight ||
                document.documentElement.clientHeight ||
                document.getElementsById('header').clientHeight
        },
        next(forward) {
            if (this.slide.isRunning) {
                return
            }
            let elNew = null
            let elOld = null
            let old = 0
            this.slide.isRunning = true

            // set new current
            if (forward) {
                this.slide.current =
                    this.slide.current + 1 > this.slide.max
                        ? 1
                        : this.slide.current + 1
                old =
                    this.slide.current - 1 === 0
                        ? this.slide.max
                        : this.slide.current - 1
            } else {
                this.slide.current =
                    this.slide.current - 1 === 0
                        ? this.slide.max
                        : this.slide.current - 1

                old =
                    this.slide.current + 1 > this.slide.max
                        ? 1
                        : this.slide.current + 1
            }

            // set all variables
            elNew = {
                bg: '#bg-' + this.slide.current,
                lg: '#lg-' + this.slide.current,
                h1: '#h1-' + this.slide.current,
                h2: '#h2-' + this.slide.current
            }
            elOld = {
                bg: '#bg-' + old,
                lg: '#lg-' + old,
                h1: '#h1-' + old,
                h2: '#h2-' + old
            }

            const tl = new TimelineLite()
            // prettier-ignore
            tl
                .to(elNew.bg, 0, { y: forward ? this.clientY : this.clientY * -1 })
                .to(elNew.bg, 0, { scale: 0.75 })
                .to(elNew.lg, 0, { y: forward ? this.clientY : this.clientY * -1 })
                .to(elNew.h1, 0, { y: forward ? this.clientY : this.clientY * -1 })
                .to(elNew.h2, 0, { y: forward ? this.clientY : this.clientY * -1 })
                .to(elOld.bg, 0.5, { scale: 0.75 })
                .to(elOld.bg, 1, { y: forward ? this.clientY * -1 : this.clientY })
                .to(elOld.lg, 1, { y: forward ? this.clientY * -1 : this.clientY },'-=1')
                .to(elOld.h1, 1, { y: forward ? this.clientY * -1 : this.clientY },'-=0.9')
                .to(elOld.h2, 1, { y: forward ? this.clientY * -1 : this.clientY },'-=0.8')
                .to(elNew.bg, 1, { y: 0 }, '-=1')
                .to(elNew.lg, 1, { y: 0 }, '-=1')
                .to(elNew.h1, 1, { y: 0 }, '-=0.9')
                .to(elNew.h2, 1, { y: 0 }, '-=0.8')
                .to(elNew.bg, 0.5, { scale: 1 })
                .to(elOld.bg, 0, { y: forward ? 6000 * -1 : 6000 })
                .to(elOld.lg, 0, { y: forward ? 6000 * -1 : 6000 })
                .to(elOld.h1, 0, { y: forward ? 6000 * -1 : 6000 })
                .to(elOld.h2, 0, { y: forward ? 6000 * -1 : 6000 })
                .add( () => {
                    this.slide.isRunning = false
                    this.slide.counter = 0
                })
        },
        cycle() {
            // eslint-disable-next-line
            const loopCycle = setInterval(() => {
                if (this.killCycle) {
                    clearInterval(loopCycle)
                }
                if (!this.slide.paused && !this.slide.isRunning) {
                    this.slide.counter += 1000
                }
                if (
                    this.slide.counter >= this.slide.timeTillCycle &&
                    document.hasFocus()
                ) {
                    this.next(true)
                }
            }, 1000)
        }
    }
}
</script>
