<template>
    <div class="navigation__social" :class="{open: socialOpen, default: trigger}" @click="socialOpen = !socialOpen">
        <font-awesome-icon class="navigation__social__icon" icon="share-alt" />
        <ul class="navigation__social__links">
            <li
                v-for="(item, index) in getContacts"
                :key="index"
                class="navigation__social__item"
            >
                <a :href="item.link" :target="item.target" class="navigation__social__link">
                    <font-awesome-icon class="navigation__social__icon" :icon="item.icon" />
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            socialOpen: false,
            trigger: false
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
        }
    },
    mounted() {
        this.toggleUpdate()
        window.addEventListener('scroll', this.toggleUpdate)
    },
    destroyed() {
        window.removeEventListener('scroll', this.toggleUpdate)
    },
    methods: {
        toggleUpdate() {
            const elY = window.pageYOffset + 100
            const clientY = Math.max(
                document.documentElement.clientHeight,
                window.innerHeight || 0
            )
            this.trigger = elY >= clientY
        }
    }
}
</script>
