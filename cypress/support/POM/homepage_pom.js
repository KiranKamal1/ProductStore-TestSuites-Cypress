class homepage_pom {
    homepage_search(element_txt,element_s) {
        cy.get(element_s, { timeout: 10000 }).should('be.visible');
        cy.get(element_s).should('include.text', element_txt);
    };

    device_search(device_s,device_list_s,device_txt,device_list){
       // cy.get(device_s).wait(1000).should('include.text', device_txt).click();
       // cy.get(device_list_s).should('include.text', device_list)
        cy.get(device_s).should('be.visible').as('deviceElement'); 
        cy.get('@deviceElement').should('include.text', device_txt).click();
        cy.get(device_list_s).should('include.text', device_list); 
    };


    homepage_navigation(nav_s,nav_txt){
        cy.get(nav_s).should('contain', nav_txt).click()
    }
    homepage_carousal_navigation(carousal_nav_s){
        cy.get(carousal_nav_s).click()
    }



}export default homepage_pom;  




