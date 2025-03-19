/// <reference types="cypress" />

import aboutus_pom from "../support/POM/aboutus_pom";


describe("Validate About Us",()=>{
    const aboutus_tab_pom =new aboutus_pom();
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
    it("Should be able to open About Us tab",()=>{
        aboutus_tab_pom.aboutus_tab(path.about_us_selector,path.aboutus_validator_selector)
        aboutus_tab_pom.aboutus_close(path.aboutus_close_selector)
        
        
    })
    it("Should be able to close About Us tab",()=>{
        aboutus_tab_pom.aboutus_tab(path.about_us_selector,path.aboutus_validator_selector)
        aboutus_tab_pom.aboutus_close(path.aboutus_close_selector)
    })

    it("Should be able to cross About Us tab",()=>{
        aboutus_tab_pom.aboutus_tab(path.about_us_selector,path.aboutus_validator_selector)
        aboutus_tab_pom.aboutus_close(path.aboutus_cross_btn_selector)

    })

})