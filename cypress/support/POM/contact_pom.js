class contact_pom {
    contact_submission(username_, email_,message, contactTab_s,username_s,email_s,message_s,send_message_btn_s) {
        cy.xpath(contactTab_s).click();
        cy.get(email_s).should('be.visible').focus().type(email_)
        cy.get(username_s).should('be.visible').wait(1000).focus().type(username_)
        cy.get(message_s).should('be.visible').focus().type(message)
        cy.xpath(send_message_btn_s).click()   
       
    };


    contact_alerts(alert_txt){
        cy.on("window:alert", (str) => {
            expect(str).to.equal(alert_txt);
            return true;
          });
    };

  


}export default contact_pom;  




