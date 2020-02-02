<template>
    <div
        class="navigation__toggle"
        role="button"
        :class="{open: open, closed: !open, default: trigger}"
        @click="$emit('toggle')"
    >
        <div class="navigation__toggle__bars" />
    </div>
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
            trigger: false
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
