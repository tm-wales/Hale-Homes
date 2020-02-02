<template>
    <div class="legend">
        <div v-for="i in legend" :key="i" class="legend__item">
            <div class="legend__dot" :class="i.toLowerCase()" />
            {{ i }}
        </div>
    </div></template>

<script>
export default {
    data() {
        return {
            legend: ['Available', 'Reserved', 'Sold']
        }
    }
}
</script>

<style lang="scss" scoped>
.legend {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    background-color: rgba(white, 0.8);
    border-radius: 5px;
    padding: 0.5rem 1rem;
    max-width: 30rem;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    font-size: 1rem;
    font-weight: bold;
    vertical-align: middle;
    margin-bottom: 1rem;
    &__dot {
        border-radius: 50%;
        height: 1.7rem;
        width: 1.7rem;
        margin-right: 1rem;
        border: 1px solid grey;

        &.available {
            background-color: rgb(58, 226, 58);
        }
        &.reserved {
            background-color: yellow;
        }
        &.sold {
            background-color: rgb(179, 6, 6);
        }
    }
    &__item {
        display: flex;
        flex-direction: row;
        margin: 0 1rem;
    }
}
</style>
