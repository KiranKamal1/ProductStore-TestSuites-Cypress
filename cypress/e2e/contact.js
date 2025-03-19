/// <reference types="cypress" />
import contact_pom from "../support/POM/contact_pom";

describe("Validate Contact Screen",()=>{
    const contactForm_pom =new contact_pom();
    before(function(){
        cy.fixture('data_file').then(function(data){
            globalThis.data=data;
        })
        cy.fixture('selectors').then(function(path){
            globalThis.path=path;
        })
        
    })
    beforeEach(function(){
        cy.visit("/")
      
    })
    it("Should be able to submit complete contact form on Contact tab",()=>{

        contactForm_pom.contact_submission(data.username, data.email,data.message,path.contactTab_selector,path.contact_name_selector,path.contact_email_selector,path.message_selector,path.send_message_btn_selector)
        contactForm_pom.contact_alerts(data.contact_alert_txt)
    })


    it("Should be able to submit Contact form without email address",()=>{
        contactForm_pom.contact_submission(data.username, " ",data.message,path.contactTab_selector,path.contact_name_selector,path.contact_email_selector,path.message_selector,path.send_message_btn_selector)
        contactForm_pom.contact_alerts(data.contact_alert_txt)

    })

    it("Should be able to submit Contact form without username",()=>{
        contactForm_pom.contact_submission(" ", data.email,data.message,path.contactTab_selector,path.contact_name_selector,path.contact_email_selector,path.message_selector,path.send_message_btn_selector)
        contactForm_pom.contact_alerts(data.contact_alert_txt)
    
    })
    it("Should be able to submit Contact form without a message",()=>{
        contactForm_pom.contact_submission(data.username, data.email," ",path.contactTab_selector,path.contact_name_selector,path.contact_email_selector,path.message_selector,path.send_message_btn_selector)
        contactForm_pom.contact_alerts(data.contact_alert_txt)
    

    })
    it("Should be able to close completed contact form",()=>{

        contactForm_pom.contact_submission(data.username, data.email,data.message,path.contactTab_selector,path.contact_name_selector,path.contact_email_selector,path.message_selector,path.close_btn_selector)
 
        
    })
    it("Should be able to close Contact form without email address",()=>{
        contactForm_pom.contact_submission(data.username, " ",data.message,path.contactTab_selector,path.contact_name_selector,path.contact_email_selector,path.message_selector,path.close_btn_selector)
 

    })

    it("Should be able to close Contact form without username",()=>{
        contactForm_pom.contact_submission(" ", data.email,data.message,path.contactTab_selector,path.contact_name_selector,path.contact_email_selector,path.message_selector,path.close_btn_selector)
 

    })
    it("Should be able to close Contact form without a message",()=>{
        contactForm_pom.contact_submission(data.username, data.email," ",path.contactTab_selector,path.contact_name_selector,path.contact_email_selector,path.message_selector,path.close_btn_selector)
 

    })
    
    it("Should be able to cross completed contact from",()=>{
        contactForm_pom.contact_submission(data.username, data.email,data.message,path.contactTab_selector,path.contact_name_selector,path.contact_email_selector,path.message_selector,path.contact_cross_btn_selector)
    })


})