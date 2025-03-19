class login_pom {
    Login_submission(username_, password_, loginTab_s,username_s,password_s,login_btn_s) {
        cy.get(loginTab_s).click()
        cy.get(username_s).should('be.visible').focus().type(username_)
        
        cy.get(password_s).should('be.visible').wait(1000).focus().type(password_)
        cy.xpath(login_btn_s).click()
       
    };

    Login_validation(uservalidation_s,username_){
        cy.get(uservalidation_s).as('loginValidator');
        cy.get('@loginValidator').should('be.visible');
        cy.get('@loginValidator').should('contain.text', 'Welcome ' + username_);
            
   
    };

    Login_alerts(message){
        cy.on("window:alert", (str) => {
            expect(str).to.equal(message);
            return true;
          });
    };
       
    Logout_user(logout_s,loginTab_s){
        cy.get(logout_s).click()
        cy.get(loginTab_s).should('contain.text', 'Log in')
    }


}export default login_pom;  




