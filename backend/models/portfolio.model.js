const mongoose = require('mongoose');

const introSchema = new mongoose.Schema({
    welcomeText: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
});

const aboutSchema = new mongoose.Schema({
    lottieUrl: {
        type: String,
        required: true
    },
    description1: {
        type: String,
    },
    description2: {
        type: String,
    },
    description3: {
        type: String,
    },
    description4: {
        type: String,
    },
});

const skillSchema = new mongoose.Schema({
    skillName: {
        type: Array,
        required: true
    },
    
});

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    projectUrl: {
        type: String,
        required: true
    },
    githubUrl: {
        type: String,
        required: true
    },
    techStack: {
        type: Array,
        required: true
    },
});

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
});

module.exports = {
    Intro: mongoose.model('Intros', introSchema),
    About: mongoose.model('Abouts', aboutSchema),
    Skill: mongoose.model('Skils', skillSchema),
    Project: mongoose.model('Projects', projectSchema),
    Contact: mongoose.model('Contacts', contactSchema),
}