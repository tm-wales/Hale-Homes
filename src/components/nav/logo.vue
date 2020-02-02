<template>
    <div class="navigation__logo" :class="{open: open}">
        <div class="navigation__logo__block" />
        <nuxt-link to="/" class="navigation__logo__image" @click.native="$emit('toggle')">
            <div class="navigation__logo__image__container">
                <img src="/logo.gif" alt="logo">
            </div>
        </nuxt-link>
    </div>
</template>

<script>
export default {
    props: {
        open: {
            type: Boolean,
            required: true
        }
    }
}
</script>
