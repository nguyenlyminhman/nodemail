const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Parser = bodyParser.urlencoded({ extended: false });
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');


app.set('view engine', 'ejs');
app.set('views', 'views')
app.get('/', (req, res) => res.render('home'));

app.listen('3000', console.log('home'));

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: 'mannlmgt60850@fpt.edu.vn',
        pass: 'Yokk@ichi8'
    }
});

transporter.use('compile', hbs({
    viewPath: 'template',
    extName: '.ejs'
}));


app.post('/sendmail', Parser, (req, res) => {
    const { mailto, title, content } = req.body;
    transporter.sendMail({
        from: 'mannlmgt60850@fpt.edu.vn',
        to: mailto,
        subject: title,
        template: 'mail',
        context: {
            content
        }
    }, (err, res) => {
        if (err) res.send('fail');
        res.send('success');
    });
});
