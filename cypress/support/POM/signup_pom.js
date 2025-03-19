class signup_pom {
    signup_submission(username_, password_, signupTab_s,username_s,password_s,signup_btn_s) {
        cy.get(signupTab_s).click()
        cy.get(username_s).should('be.visible').focus().type(username_)
        cy.get(password_s).should('be.visible').wait(1000).focus().type(password_)

        cy.xpath(signup_btn_s).click()
       
    };

    signup_alerts(message){
        cy.on("window:alert", (str) => {
            expect(str).to.equal(message);
            return true;
          });
    };



}export default signup_pom;  




