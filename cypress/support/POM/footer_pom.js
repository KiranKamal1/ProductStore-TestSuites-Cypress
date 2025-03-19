class footer_pom {
    footer_body(footer_body_s) {
    
        cy.get(footer_body_s).should('be.visible');
    };
    footer_data(footer_body_s,footer_data_s){
        cy.get(footer_body_s).should('be.visible');
        cy.xpath(footer_data_s).should('be.visible');
       
    }
   
    footer_more_info(footer_tag,footer_info){
        cy.get(footer_tag).contains(footer_info).should('be.visible'); 
    }
  


}export default footer_pom;  




