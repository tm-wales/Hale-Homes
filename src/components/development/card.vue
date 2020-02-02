<template>
    <div class="siteplan__card">
        <div class="siteplan__card__plot">
            Plot {{ plot }}
        </div>
        <div class="siteplan__card__house written">
            {{ houseTypeName }}
        </div>
        <div class="siteplan__card__price">
            {{ price | currency }}
        </div>
        <div class="siteplan__card__bedrooms">
            {{ bedrooms }} bedroom{{ bedrooms === 1 ? '' : 's' }}
        </div>
        <div class="siteplan__card__status" :class="status.toLowerCase()">
            {{ status }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        plot: {
            type: String,
            required: true
        },
        houseTypeName: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        },
        bedrooms: {
            type: Number,
            required: true
        },
        status: {
            type: String,
            required: true
        }
    }
}
</script>
