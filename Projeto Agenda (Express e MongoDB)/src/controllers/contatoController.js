const Contact = require('../models/ContatoModel');

exports.index = (req, res) => {
    res.render('contato', {
        contact: {}
    });
};

exports.register = async (req, res) => {
    try {
        const contact = new Contact(req.body);
        await contact.register();

        if (contact.errors.length > 0) {
            req.flash('errors', contact.errors);
            req.session.save(function () {
                return res.redirect('index');
            });
            return;
        }

        req.flash('success', 'Contato Criado com Sucesso.');
        req.session.save(function () {
            return res.redirect(`/contato/index/${contact.contact._id}`);
        });
    }
    catch (err) {
        return res.render('404');
    }
};

exports.editIndex = async (req, res) => {
    try {
        if (!req.params.id) return res.render('404');
        const contact = new Contact(req.body);
        const contact_to_edit = await contact.searchById(req.params.id);
    
        if (!contact_to_edit) {
            return res.render('404');
        }
    
        res.render('contato', {
            contact: contact_to_edit
        });
    }
    catch(err) {
        return res.render('404');
    }
};

exports.edit = async (req, res) => {
    try {
        if (!req.params.id) return res.render('404');
        const contact = new Contact(req.body);
        await contact.edit(req.params.id);

        let contact_id = await contact.searchById(req.params.id);
        contact_id = contact_id._id;

        if (contact.errors.length > 0) {
            req.flash('errors', contact.errors);
            req.session.save(function () {
                return res.redirect(`/contato/index/${contact_id}`);
            });
            return;
        }

        req.flash('success', 'Contato Editado com Sucesso.');
        req.session.save(function () {
            return res.redirect(`/contato/index/${contact_id}`); 
        });
    }
    catch (err) {
        return res.render('404'); 
    }
}