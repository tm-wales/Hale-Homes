<template>
    <div class="contact-form">
        <div :class="{show: returnMessage !== ''}" class="contact-form__wrapper" v-html="returnMessage" /> <!-- eslint-disable-line -->
        <div class="contact-form__section__title">
            Get in touch<br><span>Complete the form below and we’ll get back to you as soon as we can.</span>
        </div>

        <div class="contact-form__form">
            <div class="contact-form__group" :class="{ 'contact-form__group--error': $v.firstname.$error }">
                <input
                    id="name"
                    v-model.trim="$v.firstname.$model"
                    name="name"
                    placeholder="First Name*"
                    type="text"
                    required
                    class="contact-form__input"
                    title="Your name"
                >
                <label for="name" class="contact-form__label">
                    First Name*
                    <span v-if="$v.firstname.$error"> - </span> <!-- eslint-disable-line -->
                    <span v-if="!$v.firstname.required" class="contact-form__input--error">
                        Field is required
                    </span> <!-- eslint-disable-line -->
                    <span v-if="!$v.firstname.minLength" class="contact-form__input--error">
                        Name must have at least {{ $v.firstname.$params.minLength.min }} letters.
                    </span>
                </label>
            </div>
            <div class="contact-form__group" :class="{ 'contact-form__group--error': $v.surname.$error }">
                <input
                    id="name"
                    v-model.trim="$v.surname.$model"
                    name="name"
                    placeholder="Surname*"
                    type="text"
                    required
                    class="contact-form__input"
                    title="Your name"
                >
                <label for="name" class="contact-form__label">
                    Surname*
                    <span v-if="$v.surname.$error"> - </span> <!-- eslint-disable-line -->
                    <span v-if="!$v.surname.required" class="contact-form__input--error">
                        Field is required
                    </span> <!-- eslint-disable-line -->
                    <span v-if="!$v.surname.minLength" class="contact-form__input--error">
                        Name must have at least {{ $v.surname.$params.minLength.min }} letters.
                    </span>
                </label>
            </div>
            <div class="contact-form__group" :class="{ 'contact-form__group--error': $v.email.$error }">
                <input
                    id="email"
                    v-model.trim="$v.email.$model"
                    name="email"
                    placeholder="Email*"
                    required
                    type="email"
                    class="contact-form__input"
                    title="Your Email"
                >
                <label for="email" class="contact-form__label">
                    Email*
                    <span v-if="$v.email.$error"> - </span> <!-- eslint-disable-line -->
                    <span v-if="!$v.email.required" class="contact-form__input--error">
                        Field is required
                    </span> <!-- eslint-disable-line -->
                    <span v-if="!$v.email.email" class="contact-form__input--error">
                        Must be a valid email address
                    </span> <!-- eslint-disable-line -->
                </label>
            </div>
            <div class="contact-form__group">
                <input
                    id="telephone"
                    v-model.trim="$v.telephone.$model"
                    type="text"
                    name="telephone"
                    placeholder="Telephone"
                    class="contact-form__input"
                    title="Your Telephone number"
                >
                <label for="telephone" class="contact-form__label">
                    Telephone
                </label>
            </div>
            <div class="contact-form__group checkbox">
                <div class="contact-form__group title">
                    Developments
                </div>
                <div class="checkbox flex">
                    <div
                        v-for="(developmentList, index) in getDevelopments"
                        :key="index"
                        class="checkbox item"
                    >
                        <label class="checkbox__container checkbox__label">
                            {{ developmentList.name }}
                            <input
                                :id="developmentList.id"
                                v-model="developments"
                                type="checkbox"
                                :value="developmentList.name"
                            >
                            <span class="checkmark" />
                        </label>
                    </div>
                </div>
            </div>
            <div class="contact-form__group textarea">
                <textarea
                    id="message"
                    v-model.trim="$v.message.$model"
                    rows="4"
                    class="contact-form__input"
                    title="Leave us a message"
                >How can we help you?</textarea>
                <label for="message" class="contact-form__label">
                    Message*
                    <span v-if="$v.message.$error"> - </span> <!-- eslint-disable-line -->
                    <span v-if="!$v.message.required" class="contact-form__input--error">
                        Field is required
                    </span> <!-- eslint-disable-line -->
                    <span v-if="!$v.message.minLength" class="contact-form__input--error">
                        Message must have at least {{ $v.message.$params.minLength.min }} letters.
                    </span>
                </label>
            </div>
            <div class="contact-form__group radio">
                <label class="radio__label">Would you like to receive updates about our upcoming developments?</label>
                <label class="radio__container radio__label" @click="gdpr = true">Yes Please!
                    <input type="radio" name="gdpr">
                    <span class="checkmark" />
                </label>
                <label class="radio__container radio__label" @click="gdpr = false">No Thank you
                    <input type="radio" checked="checked" name="gdpr">
                    <span class="checkmark" />
                </label>
            </div>
        </div>

        <div class="contact-form__enquire" @click="enquire">
            Send Enquiry
        </div>
    </div>
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
    data() {
        return {
            inprogress: false,
            returnMessage: '',
            firstname: '',
            surname: '',
            email: '',
            telephone: '',
            developments: [],
            message: '',
            subscribe: false
        }
    },
    validations: {
        firstname: {
            required,
            minLength: minLength(2)
        },
        surname: {
            required,
            minLength: minLength(2)
        },
        email: {
            required,
            email
        },
        telephone: {},
        message: {
            required,
            minLength: minLength(10)
        }
    },
    computed: {
        getDevelopments() {
            return this.$store.getters['developments/forContact']
        },
        formInvalid() {
            this.$v.$touch()
            return this.$v.$invalid
        },
        getDevelopmentListId() {
            const mailchimpList = []
            this.developments.forEach(selected => {
                const dev = this.$store.getters['developments/byName'](
                    selected
                )[0]
                mailchimpList.push(dev.mailchimp)
            })

            return mailchimpList
        }
    },
    methods: {
        enquire() {
            if (!this.inprogress && !this.formInvalid) {
                const _this = this
                const url =
                    window.location.href.replace(window.location.pathname, '') +
                    '/api/contact'
                this.inprogress = true
                this.$axios
                    .$post(url, {
                        data: {
                            firstname: this.firstname,
                            surname: this.surname,
                            email: this.email,
                            telephone: this.telephone,
                            developments: this.developments,
                            mailchimpList: this.getDevelopmentListId,
                            message: this.message,
                            subscribe: this.subscribe
                        }
                    })
                    .then(response => {
                        if (response.message !== 'Success') {
                            this.returnMessage =
                                'Submission failed!<br>Please contact us directly.'
                        }
                        this.returnMessage =
                            'Sent!<br>We will send a confirmation Soon!'
                        _this.inprogress = false
                    })
                    .catch(err => {
                        this.returnMessage =
                            'Submission failed!<br>Please contact us directly.'
                        _this.inprogress = false
                        console.log(err) //eslint-disable-line
                    })
            }
        }
    }
}
</script>
