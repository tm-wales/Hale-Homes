const functions = require('firebase-functions');
const express = require('express');
const { Nuxt } = require('nuxt');
const bodyParser = require('body-parser');
const xssFilters = require('xss-filters');
const validator = require('validator');
const nodemailer = require('nodemailer');
const Mailchimp = require('mailchimp-api-v3');
const mailConfig = require('./config');
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const config = {
    dev: false,
    buildDir: 'nuxt',
    build: {
        publicPath: '/'
    }
};
const nuxt = new Nuxt(config);

function handleRequest(req, res) {
    res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
    nuxt.renderRoute(req.path)
        .then(result => {
            res.send(result.html);
        })
        .catch(e => {
            res.send(e);
        });
}

function contactApi(req, res) {
    // mailchimp register
    const mailchimp = new Mailchimp(mailConfig.other.mcApi);
    const newList = [];
    const data = req.body.data;

    if (data.mailchimpList.length > 0) {
        data.mailchimpList.forEach(list => {
            console.log('list'); // eslint-disable-line
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
            });
        });
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
        });
    }
    mailchimp.batch(newList, {
        wait: true,
        interval: 2000,
        unpack: true
    });

    // send mail
    console.log('sending email'); // eslint-disable-line
    const transporter = nodemailer.createTransport(mailConfig.email);

    const subject =
        `${data.firstname} ${data.surname}` + ' wishes to make contact!';

    const text = `Dear Hale Homes,\r\n
    email: ${data.email}\r\n
    ${data.telephone === '' ? '' : 'Tel: ' + data.telephone}\r\n
    ${data.developments === '' ? '' : 'Developments: ' + data.developments}\r\n
    ${data.message === '' ? '' : 'Message: ' + data.message}\r\n`;

    const html =
        'Dear Hale Homes,<br><br>' +
        '<b>' +
        `${data.firstname} ${data.surname}` +
        ' wishes to make contact!</b><br><br>' +
        `<b>Email: </b><a href="emailto:${data.email}">${data.email}</a><br>` +
        (data.telephone === ''
            ? ''
            : `<b>Tel: </b><a href="tel:${data.telephone}">${
                  data.telephone
              }</a><br>`) +
        (data.developments === ''
            ? ''
            : `<b>Developments: </b>${data.developments}<br>`) +
        (data.message === '' ? '' : `<b>Message: </b>${data.message}<br>`);

    const emailDetails = {
        from: mailConfig.email.auth.user,
        to: mailConfig.other.deliverEmail,
        subject: subject,
        text: text,
        html: html
    };

    transporter
        .sendMail(emailDetails)
        .then(response => {
            res.status(200).json({ message: 'Success' });
        })
        .catch(e => {
            res.status(422).json({ message: 'Failed!' });
        });
}
app.post('/api/contact/', contactApi);
app.get('*', handleRequest);
exports.hh = functions.https.onRequest(app);
