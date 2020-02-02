<template>
    <section class="development__details__houseTypes">
        <Search :development="developmentId" />
    </section>
</template>

<script>
import Search from '~/components/search/main'
export default {
    components: {
        Search
    },
    props: {
        developmentId: {
            type: String,
            required: true
        }
    }
}
</script>
