import login_pom from "../support/POM/login_pom";
import header_pom from "../support/POM/header_pom";
import footer_pom from "../support/POM/footer_pom";
/// <reference types="cypress" />


describe("Validate Login User",()=>{
    const loginForm_pom =new login_pom();
    const header_page_pom =new header_pom();
    const footer_page_pom =new footer_pom();
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
    it("Should be able to view Product Store on the Header",()=>{ 
        loginForm_pom.Login_submission(data.email,data.password,path.loginTab_selector,path.username_selector,path.password_selector,path.login_btn_selector)
        loginForm_pom.Login_validation(path.login_validator_selector,data.email)
        header_page_pom.header_data(path.header_id,data.header_data1)

    })
    it("Should be able to view Home Tab on the Header",()=>{
        loginForm_pom.Login_submission(data.email,data.password,path.loginTab_selector,path.username_selector,path.password_selector,path.login_btn_selector)
        loginForm_pom.Login_validation(path.login_validator_selector,data.email)
        header_page_pom.header_data(path.header_id_tab,data.header_data2)
    })

    it("Should be able to view Contact Tab on the Header",()=>{
        loginForm_pom.Login_submission(data.email,data.password,path.loginTab_selector,path.username_selector,path.password_selector,path.login_btn_selector)
        loginForm_pom.Login_validation(path.login_validator_selector,data.email)
        header_page_pom.header_data(path.header_id_tab,data.header_data3)
    })
    it("Should be able to view About Us Tab on the Header",()=>{
        loginForm_pom.Login_submission(data.email,data.password,path.loginTab_selector,path.username_selector,path.password_selector,path.login_btn_selector)
        loginForm_pom.Login_validation(path.login_validator_selector,data.email)
        header_page_pom.header_data(path.header_id_tab,data.header_data4)
    })
    it("Should be able to view Cart Tab on the Header",()=>{
        loginForm_pom.Login_submission(data.email,data.password,path.loginTab_selector,path.username_selector,path.password_selector,path.login_btn_selector)
        loginForm_pom.Login_validation(path.login_validator_selector,data.email)
        header_page_pom.header_data(path.header_id_tab,data.header_data5)
    })
    it("Should be able to view Log out Tab on the Header",()=>{
        loginForm_pom.Login_submission(data.email,data.password,path.loginTab_selector,path.username_selector,path.password_selector,path.login_btn_selector)
        loginForm_pom.Login_validation(path.login_validator_selector,data.email)
        header_page_pom.header_data(path.header_id_tab,data.header_data8)
    })
    it("Should be able to view Sign up Tab on the Header",()=>{
        loginForm_pom.Login_submission(data.email,data.password,path.loginTab_selector,path.username_selector,path.password_selector,path.login_btn_selector)
        loginForm_pom.Login_validation(path.login_validator_selector,data.email)
        header_page_pom.header_userdata(path.header_id_tab,data.email)
       
    })

    it("Should be able to Login User",()=>{

        loginForm_pom.Login_submission(data.email,data.password,path.loginTab_selector,path.username_selector,path.password_selector,path.login_btn_selector)
          
        
    })
    it("Should validate the user logged in",()=>{
       
        loginForm_pom.Login_submission(data.email,data.password,path.loginTab_selector,path.username_selector,path.password_selector,path.login_btn_selector)
        loginForm_pom.Login_validation(path.login_validator_selector,data.email)
      
            
   
    })
    it("Should validate the user is unable to login with invalid Username",()=>{
        loginForm_pom.Login_submission(data.invalid_username,data.password,path.loginTab_selector,path.username_selector,path.password_selector,path.login_btn_selector)
        loginForm_pom.Login_alerts(data.invalid_username_alert)
        
        
            
   
    })
    it("Should validate the user is unable to login with invalid Password",()=>{
        loginForm_pom.Login_submission(data.username,data.invalid_password,path.loginTab_selector,path.username_selector,path.password_selector,path.login_btn_selector)
        loginForm_pom.Login_alerts(data.invalid_password_alert)
        
            
   
    })
    it("Should validate the user is unable to login without information",()=>{
        loginForm_pom.Login_submission(" "," ",path.loginTab_selector,path.username_selector,path.password_selector,path.login_btn_selector)
        loginForm_pom.Login_alerts(data.no_information_alert)
        
            
   
    })

    it("Should be able to Log out user",()=>{
        loginForm_pom.Login_submission(data.email,data.password,path.loginTab_selector,path.username_selector,path.password_selector,path.login_btn_selector)
        loginForm_pom.Login_validation(path.login_validator_selector,data.email)  
        loginForm_pom.Logout_user(path.logout_selector,path.loginTab_selector)
      
            
   
    })
    it("Should be able to click on cancel button on Login popup",()=>{

        loginForm_pom.Login_submission(data.username,data.password,path.loginTab_selector,path.username_selector,path.password_selector,path.cancel_btn_selector)
        
        
    })
    it("Should be able to click on cross icon on Login popup",()=>{
       
        loginForm_pom.Login_submission(data.username,data.password,path.loginTab_selector,path.username_selector,path.password_selector,path.cross_btn_selector)
        

    })

    it("Should be able to view footer on the Login screen",()=>{
        loginForm_pom.Login_submission(data.email,data.password,path.loginTab_selector,path.username_selector,path.password_selector,path.login_btn_selector)
        loginForm_pom.Login_validation(path.login_validator_selector,data.email)
      
        footer_page_pom.footer_body(path.footer_body_selector)
       
    })
    it("Should be able to view About Us in footer on the Login screen",()=>{
        loginForm_pom.Login_submission(data.email,data.password,path.loginTab_selector,path.username_selector,path.password_selector,path.login_btn_selector)
        loginForm_pom.Login_validation(path.login_validator_selector,data.email)
      
        footer_page_pom.footer_data(path.footer_body_selector,path.footer_Aboutus_selector)
        footer_page_pom.footer_more_info(path.footer_tag_selector,data.About_us_paragraph)

    })
    it("Should be able to view Get In Touch in footer on the Login screen",()=>{
        loginForm_pom.Login_submission(data.email,data.password,path.loginTab_selector,path.username_selector,path.password_selector,path.login_btn_selector)
        loginForm_pom.Login_validation(path.login_validator_selector,data.email)
      
        footer_page_pom.footer_data(path.footer_body_selector,path.footer_getInTouch_selector)
        footer_page_pom.footer_more_info(path.footer_tag_selector,data.footer_address)
        footer_page_pom.footer_more_info(path.footer_tag_selector,data.footer_Phone)
        footer_page_pom.footer_more_info(path.footer_tag_selector,data.footer_email)
       

    })

    it("Should be able to view Product Store in footer on the Login screen",()=>{
        loginForm_pom.Login_submission(data.email,data.password,path.loginTab_selector,path.username_selector,path.password_selector,path.login_btn_selector)
        loginForm_pom.Login_validation(path.login_validator_selector,data.email)
      
        footer_page_pom.footer_data(path.footer_body_selector,path.footer_store_selector)
        

    })
    it("Should be able to view Copyrights in footer on the Login screen",()=>{
        loginForm_pom.Login_submission(data.email,data.password,path.loginTab_selector,path.username_selector,path.password_selector,path.login_btn_selector)
        loginForm_pom.Login_validation(path.login_validator_selector,data.email)
      
        footer_page_pom.footer_data(path.footer_body_selector,path.footer_copyright_selector)
        
        

    })

})