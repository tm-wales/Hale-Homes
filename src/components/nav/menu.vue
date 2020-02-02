<template>
    <nav
        class="navigation__nav"
        :class="{open: open, full: nav.full, bar: smallNav, subopen: nav.subOpen}"
    >
        <ul class="navigation__menu">
            <li
                v-for="(link, index) in nav.links"
                :key="index"
                :class="{navigation__menu__group: link.group, navigation__menu__link: !link.group, open: isGroupOpen(index)}"
            >
                <span v-if="link.group" @click="toggleSub(index)">{{ link.name }}</span>
                <nuxt-link v-else :to="link.to" @click.native="$emit('toggle')">
                    <span>{{ link.name }}</span>
                </nuxt-link>
                <ul
                    v-if="link.group"
                    class="navigation__menu__sub"
                    :style="link.sub.style"
                >
                    <li
                        v-for="(sub, subIndex) in link.sub.links"
                        :key="subIndex"
                        class="navigation__menu__sub__link"
                    >
                        <nuxt-link :to="sub.to" @click.native="$emit('toggle')">
                            <span>{{ sub.name }}</span>
                        </nuxt-link>
                    </li>

                </ul>
            </li>
        </ul>
        <div class="navigation__message">
            Copyright Hale Homes 2019
        </div>
    </nav>
</template>

<script>
export default {
    props: {
        open: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            nav: {
                full: true,
                subOpen: false,
                links: [
                    {
                        name: 'Search',
                        to: '/search',
                        group: false
                    },
                    {
                        name: 'Developments',
                        group: true,
                        sub: {
                            open: false,
                            style: '',
                            links: []
                        }
                    },
                    {
                        name: 'About Us',
                        to: '/aboutus',
                        group: true,
                        sub: {
                            open: false,
                            style: '',
                            links: [
                                {
                                    name: 'Hale',
                                    to: '/aboutus/hale'
                                },
                                {
                                    name: 'Legal',
                                    to: '/aboutus/legal'
                                }
                            ]
                        }
                    },
                    {
                        name: 'Past',
                        group: true,
                        sub: {
                            open: false,
                            style: '',
                            links: []
                        }
                    },
                    {
                        name: 'Contact Us',
                        to: '/contactus',
                        group: false
                    }
                ]
            }
        }
    },
    computed: {
        getContacts() {
            const data = Object.values(this.$store.getters['settings/contacts'])
            data.forEach((element, i) => {
                if (typeof element !== 'object') {
                    data.splice(i, 1)
                }
            })
            return data.sort((a, b) => {
                return a.order - b.order
            })
        },
        smallNav() {
            return this.$mq !== 'md'
        }
    },
    watch: {
        open: 'navOpen'
    },
    mounted() {
        const current = this.$store.getters['developments/byFinished'](false)

        const previous = this.$store.getters['developments/byFinished'](true)
        let dev = [] //eslint-disable-line
        let prev = [] //eslint-disable-line
        current.forEach(element => {
            dev.push({
                name: element.name,
                to: '/developments/' + element.route
            })
        })
        previous.forEach(element => {
            prev.push({
                name: element.name,
                to: '/developments/' + element.route
            })
        })

        this.nav.links[1].sub.links = dev
        this.nav.links[3].sub.links = prev

        // auto open after 3 seconds (if not open)
    },
    methods: {
        exists(val) {
            return typeof val !== 'undefined'
        },
        toggleSub(index) {
            this.nav.links[index].sub.open = !this.nav.links[index].sub.open

            if (this.nav.links[index].sub.open) {
                this.nav.subOpen = true
            } else {
                setTimeout(() => {
                    this.nav.subOpen = false
                }, 500)
            }

            this.nav.links[index].sub.style =
                'max-height: ' +
                (this.nav.links[index].sub.open
                    ? this.nav.links[index].sub.links.length * 8 + 'rem'
                    : '0rem')

            this.nav.links.forEach((el, i) => {
                if (i !== index && typeof el.sub !== 'undefined') {
                    el.sub.open = false
                    el.sub.style = 'max-height: 0'
                }
            })
        },
        isGroupOpen(index) {
            if (typeof this.nav.links[index].sub === 'undefined') {
                return false
            } else {
                return this.nav.links[index].sub.open
            }
        },
        navOpen() {
            if (this.open) {
                this.nav.subOpen = false
                this.nav.links.forEach((el, i) => {
                    if (typeof el.sub !== 'undefined') {
                        el.sub.open = false
                        el.sub.style = 'max-height: 0'
                    }
                })
            }
        }
    }
}
</script>
