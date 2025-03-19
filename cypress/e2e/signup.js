import signup_pom from "../support/POM/signup_pom";

/// <reference types="cypress" />


describe("Validate Sign Up",()=>{
    const signupForm_pom =new signup_pom();
    let randomString = Math.random().toString(36).substring(2);
    let signup_username = "User" + randomString;
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
    it("Should be able to Signup User",()=>{

        signupForm_pom.signup_submission(signup_username,data.password,path.signup_tab_selector,path.signup_username_selector,path.signup_password_selector,path.signup_btn_selector)
        signupForm_pom.signup_alerts(data.signup_created_alert)
        
    })
    
    it("Should validate the user is unable to sign up without information",()=>{
        signupForm_pom.signup_submission(" "," ",path.signup_tab_selector,path.signup_username_selector,path.signup_password_selector,path.signup_btn_selector)
        signupForm_pom.signup_alerts(data.signup_empty_form_alert)
        
            
   
    })
    it("Should validate the user is unable to sign up without username",()=>{
        signupForm_pom.signup_submission(" ",data.password,path.signup_tab_selector,path.signup_username_selector,path.signup_password_selector,path.signup_btn_selector)
        signupForm_pom.signup_alerts(data.signup_empty_form_alert)
        
        
            
   
    })

    it("Should validate the user is unable to sign up without password",()=>{
        signupForm_pom.signup_submission(signup_username," ",path.signup_tab_selector,path.signup_username_selector,path.signup_password_selector,path.signup_btn_selector)
        signupForm_pom.signup_alerts(data.signup_empty_form_alert)
        
            
   
    })
    it("Should validate the user already exists",()=>{
        signupForm_pom.signup_submission(data.username,data.password,path.signup_tab_selector,path.signup_username_selector,path.signup_password_selector,path.signup_btn_selector)
        signupForm_pom.signup_alerts(data.signup_user_exist_alert)
        
            
   
    })

    it("Should be able to click on cancel button on sign up popup",()=>{

        signupForm_pom.signup_submission(data.username,data.password,path.signup_tab_selector,path.signup_username_selector,path.signup_password_selector,path.signup_cancel_btn_selector)
    
        
    })
    it("Should be able to click on cross icon on sign up popup",()=>{
       
        signupForm_pom.signup_submission(data.username,data.password,path.signup_tab_selector,path.signup_username_selector,path.signup_password_selector,path.signup_cross_btn_selector)
     

    })
   

})