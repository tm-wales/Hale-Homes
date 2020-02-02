const xssFilters = require('xss-filters');
const validator = require('validator');
const nodemailer = require('nodemailer');
const Mailchimp = require('mailchimp-api-v3');
const config = require('./config.js');

function contact(req, res) {
    // mailchimp register
    const mailchimp = new Mailchimp(config.other.mcApi);
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
    const transporter = nodemailer.createTransport(config.email);

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
        from: config.email.auth.user,
        to: config.other.deliverEmail,
        subject: subject,
        text: text,
        html: html
    };

    transporter
        .sendMail(emailDetails)
        .then(response => {
            return true;
        })
        .catch(e => {
            return false;
        });

    if (result) {
        res.status(200).json({ message: 'Success' });
    } else {
        res.status(422).json({ message: 'Failed!' });
    }
}

export default contact;
