const express = require('express');
const router = express.Router();
const {
    EducationModel,
    StackModel,
    StackItemsModel,
    BioModel,
    WorkModel,
    ImageModel,
    ProjectModel,
    ContactModel,
    SocialModel,
    EmailModel
} = require('./models')

router.get('/api', async (req, res) => {
    bioModel = await BioModel.findOne()
    educationModel = await EducationModel.findAll()
    workModel = await WorkModel.findAll()
    projects = await ProjectModel.findAll({
        include: [{
            model: ImageModel
        }]
    })

    contacts = await ContactModel.findOne({
        include: [{
                model: SocialModel
            },
            {
                model: EmailModel
            }
        ]
    })
    stackModel = await StackModel.findAll({
        include: [{
            model: StackItemsModel,

        }]
    })
    res.json({
        bioModel,
        educationModel,
        workModel,
        projects,
        contacts,
        stackModel
    })

})

module.exports = router