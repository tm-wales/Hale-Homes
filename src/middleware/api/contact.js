import express from 'express'
import xssFilters from 'xss-filters'
import validator from 'validator'
import nodemailer from 'nodemailer'
import bodyParser from 'body-parser'
import Mailchimp from 'mailchimp-api-v3'
import config from './config.js'

const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/', (req, res) => {
    const attributes = [
        'firstname',
        'surname',
        'email',
        'telephone',
        'developments',
        'mailchimpList',
        'message',
        'subscribe'
    ]
    // Map each attribute name to the validated and sanitized equivalent (false if validation failed)
    const sanitizedAttributes = attributes.map(n =>
        validateAndSanitize(n, req.body.data[n])
    )

    // True if some of the attributes new values are false -> validation failed
    const someInvalid = sanitizedAttributes.some(r => {
        if (r !== '') {
            return !r
        } else {
            return false
        }
    })

    if (someInvalid) {
        // Throw a 422 with a neat error message if validation failed
        return res
            .status(422)
            .json({ error: 'Ugh.. That looks unprocessable!' })
    }
    // mailchimp register
    const mailchimp = new Mailchimp(config.other.mcApi)
    const newList = []
    const data = req.body.data

    if (data.mailchimpList.length > 0) {
        data.mailchimpList.forEach(list => {
            console.log('list') // eslint-disable-line
            newList.push({
                method: 'post',
                path: '/lists/' + list + '/members',
                body: {
                    email_address: data.email,
                    merge_fields: {
                        FNAME: data.firstname,
                        LNAME: data.surname,
                        PHONE: data.telephone,
                        MMERGE5: data.firstname + ' ' + data.surname
                    },
                    status:
                        data.subscribe === 'true'
                            ? 'subscribed'
                            : 'unsubscribed'
                }
            })
        })
    } else {
        newList.push({
            method: 'post',
            path: '/lists/' + '6e9fb906b9' + '/members',
            body: {
                email_address: data.email,
                merge_fields: {
                    FNAME: data.firstname,
                    LNAME: data.surname,
                    PHONE: data.telephone,
                    MMERGE5: data.firstname + ' ' + data.surname
                },
                status:
                    data.subscribe === 'true' ? 'subscribed' : 'unsubscribed'
            }
        })
    }
    mailchimp.batch(newList, {
        wait: true,
        interval: 2000,
        unpack: true
    })

    // send mail
    console.log('sending email') // eslint-disable-line
    const result = sendMail(...sanitizedAttributes)

    if (result) {
        res.status(200).json({ message: 'Success' })
    } else {
        res.status(422).json({ message: 'Failed!' })
    }
})

const rejectFunctions = new Map([
    ['firstname', v => v.length < 2],
    ['surname', v => v.length < 2],
    ['email', v => !validator.isEmail(v)],
    ['telephone', v => false],
    ['developments', v => false],
    ['mailchimpList', v => false],
    ['message', v => false],
    ['subscribe', v => false]
])
const validateAndSanitize = (key, value) => {
    // If map has key and function returns false, return sanitized input. Else, return false
    return (
        rejectFunctions.has(key) &&
        !rejectFunctions.get(key)(value) &&
        xssFilters.inHTMLData(value)
    )
}

const sendMail = (
    firstname,
    surname,
    email,
    telephone,
    developments,
    mailchimpList,
    message,
    subscribe
) => {
    const transporter = nodemailer.createTransport(config.email)

    const subject = `${firstname} ${surname}` + ' wishes to make contact!'

    const text = `Dear Hale Homes,\r\n
    email: ${email}\r\n
    ${telephone === '' ? '' : 'Tel: ' + telephone}\r\n
    ${developments === '' ? '' : 'Developments: ' + developments}\r\n
    ${message === '' ? '' : 'Message: ' + message}\r\n`

    const html =
        'Dear Hale Homes,<br><br>' +
        '<b>' +
        `${firstname} ${surname}` +
        ' wishes to make contact!</b><br><br>' +
        `<b>Email: </b><a href="emailto:${email}">${email}</a><br>` +
        (telephone === ''
            ? ''
            : `<b>Tel: </b><a href="tel:${telephone}">${telephone}</a><br>`) +
        (developments === ''
            ? ''
            : `<b>Developments: </b>${developments}<br>`) +
        (message === '' ? '' : `<b>Message: </b>${message}<br>`)

    const emailDetails = {
        from: config.email.auth.user,
        to: config.other.deliverEmail,
        subject: subject,
        text: text,
        html: html
    }

    return transporter
        .sendMail(emailDetails)
        .then(response => {
            return true
        })
        .catch(e => {
            return false
        })
}

export default {
    path: '/api/contact',
    handler: app
}
