const {
    Model,
    Sequelize
} = require('sequelize');
const sequelize = require('./db')
const {
    bio,
    work,
    education,
    stack, 
    stack_items,
    contact,
    email
} = require("./data");

class ThemeModel extends Model {}
ThemeModel.init({
    title: Sequelize.STRING,
    iscurrent: Sequelize.BOOLEAN,
    font: Sequelize.STRING,
    font_size: Sequelize.INTEGER,
    background_color: Sequelize.STRING,
    button_background: Sequelize.STRING,
    primary_color: Sequelize.STRING,
    secondary_color: Sequelize.STRING,
    semi_secondary_color: Sequelize.STRING
}, {
    sequelize,
    modelName: "theme"
})


class EducationModel extends Model {}
EducationModel.init({
    school: Sequelize.STRING,
    year: Sequelize.STRING,
    grade: Sequelize.STRING
}, {
    sequelize,
    modelName: 'education'
})

class WorkModel extends Model {}
WorkModel.init({
    location: Sequelize.STRING,
    position: Sequelize.STRING,
    year: Sequelize.STRING
}, {
    sequelize,
    modelName: 'work'
})

class ContactModel extends Model {}
ContactModel.init({
    box: Sequelize.STRING,
    mobile: Sequelize.STRING,
}, {
    sequelize,
    modelName: 'contact'
})


class EmailModel extends Model {}
EmailModel.init({
    title: Sequelize.STRING
}, {
    sequelize,
    modelName: 'email'
})

class SocialModel extends Model {}
SocialModel.init({
    title: Sequelize.STRING,
    ref: Sequelize.STRING,
    logo:Sequelize.STRING
}, {
    sequelize,
    modelName: 'social'
})


class StackModel extends Model {}
StackModel.init({
    title: Sequelize.STRING,
    details: Sequelize.STRING,
    logo:Sequelize.STRING
}, {
    sequelize,
    modelName: 'stack'
})

class StackItemsModel extends Model {}
StackItemsModel.init({
    title: Sequelize.STRING
}, {
    sequelize,
    modelName: 'stack_item'
})


class BioModel extends Model {}
BioModel.init({
    full_name: Sequelize.STRING,
    display_name: Sequelize.STRING,
    dob: Sequelize.STRING,
    about: Sequelize.STRING,
    prof:Sequelize.STRING,
    display:Sequelize.STRING

}, {
    sequelize,
    modelName: 'bio'
})

class ImageModel extends Model {}
ImageModel.init({
    title: Sequelize.STRING,
    path: Sequelize.STRING
}, {
    sequelize,
    modelName: 'image'
})

class ProjectModel extends Model {}
ProjectModel.init({
    repo: Sequelize.STRING,
    hasWebsite: Sequelize.BOOLEAN,
    type: Sequelize.STRING,
    url: Sequelize.STRING
}, {
    sequelize,
    modelName: 'project'
})



//create associations 

ContactModel.hasMany(EmailModel);
ContactModel.hasMany(SocialModel);
StackModel.hasMany(StackItemsModel)
ProjectModel.hasMany(ImageModel)


// emit handling:
// sequelize.drop({
//     force:true
// }).then(() => {
//     sequelize.sync().then(() => loadData())
// }).catch(err => console.error(err))

const loadData = () =>{
    //load bio data
    BioModel.create(bio)

    //load contat data
    ContactModel.create(contact)

    //load education data
    education.forEach(item => EducationModel.create(item))

    //load work data
    work.forEach(item => WorkModel.create(item))

    //load stack data
    stack.forEach(item => StackModel.create(item))

    //load stackitems data
    stack_items.forEach(item => StackItemsModel.create(item))

    //load email iinfo
    email.forEach(item => EmailModel.create(item))
}

const models = {
    ThemeModel,
    EducationModel,
    WorkModel,
    ContactModel,
    EmailModel,
    SocialModel,
    StackModel,
    StackItemsModel,
    BioModel,
    ProjectModel,
    ImageModel

}

module.exports = models;