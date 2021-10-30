const express=require('express');
const router=express.Router();
const fs=require('fs');

const replaceTemplate = (temp, profile) => {
    let output = temp.replace('{%FNAME%}', profile.fname);
    output = output.replace('{%LNAME%}', profile.lname);
    output = output.replace('{%EMAIL%}', profile.email);
    output = output.replace('{%MOBILE%}', profile.mobile);
    output = output.replace('{%DOB%}', profile.dob);
    output = output.replace('{%GENDER%}', profile.gender);
    output = output.replace('{%ADDRESS%}', profile.address);
    output = output.replace('{%INSTITUTE%}', profile.institute);
    output = output.replace('{%DEPARTMENT%}', profile.department);
    output = output.replace('{%SEMESTER%}', profile.semester);
     return output;
}
router.get('/', (req, res) => { 
    res.sendFile('D:\Web-Dev\Form\profile_form\templates\addDetails.html'); 
    }) 

router.post('/add', (req, res) => { 
    const {fname,lname,email,mobile,dob,gender,address,institute,department,semester} = req.body; 
    const tempProfile = fs.readFileSync(`D:\Web-Dev\Form\profile_form\templates\viewDetails.html`,'utf-8'); 
    const profileHtml = replaceTemplate(tempProfile, req.body); 
    res.end(profileHtml); 
    }); 
    module.exports = router;
    
