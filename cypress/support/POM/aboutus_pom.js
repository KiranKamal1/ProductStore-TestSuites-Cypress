class aboutus_pom {
    aboutus_tab(about_us_s,aboutus_validator_s) {
        cy.xpath(about_us_s).click();
        cy.get(aboutus_validator_s).should('be.visible')
       
    };

    aboutus_close(aboutus_close_s){
        cy.wait(500)
        cy.xpath(aboutus_close_s).should("be.visible").click()
    }



}export default aboutus_pom;  




