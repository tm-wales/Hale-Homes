<template>
    <section class="page page--contactus">
        <Header :headers="headerInfo" :links="[{ name: '+44 (0)1792 462 877', link:'tel:+441792462877'}, { name: 'info@hale.homes', link:'emailto:info@hale.homes' }]" />

        <div class="contactus" style="background-image: linear-gradient(rgba(255,255,255, .8), rgba(255,255,255, .8)), url('/contactusmap.png')">
            <div id="form" class="contactus__form">
                <ContactForm />
            </div>
            <div class="contactus__details">
                <div class="contactus__details__numbers contactus__details__item">
                    <a href="tel:+441792462877">
                        <font-awesome-icon class="contactus__details__icon" icon="phone-square" />
                        <span>+44 (0) 1792 462 877</span>
                    </a>
                </div>
                <div class="contactus__details__numbers contactus__details__item">
                    <a href="emailto:info@hale.homes">
                        <font-awesome-icon class="contactus__details__icon" icon="envelope-square" />
                        <span>info@hale.homes</span>
                    </a>
                </div>
                <div class="contactus__details__address contactus__details__item">
                    <a href="https://goo.gl/maps/WH8XvALYh5n" target="_blank">
                        <font-awesome-icon class="contactus__details__icon" icon="map-marker-alt" />
                        <span>
                            Hale Homes Wales Ltd<br>
                            Unit 2<br>
                            Milland Road Industrial Estate<br>
                            Neath<br>
                            SA11 1NJ
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import Header from '~/components/header/header'
import ContactForm from '~/components/contact/form'

export default {
    components: {
        ContactForm,
        Header
    },
    data() {
        return {
            headerInfo: [
                {
                    image: 'contact.jpg',
                    title: 'Contact Us',
                    subtitle: {
                        text: 'Contact us directly or fill in our form',
                        link: '#form'
                    },
                    logo: '',
                    class: 'article--left'
                }
            ]
        }
    },
    head() {
        const page = this.pageInfo
        return {
            titleTemplate: page.pageTitle,
            meta: page.meta
        }
    },
    computed: {
        pageInfo() {
            const page = this.$store.getters['pages/page']('contact')[0]
            return page
        }
    }
}
</script>
