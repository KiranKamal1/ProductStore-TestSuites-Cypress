/// <reference types="cypress" />
import homepage_pom from "../support/POM/homepage_pom";
import footer_pom from "../support/POM/footer_pom";
import header_pom from "../support/POM/header_pom";

describe("Validate home page",()=>{
    const home_page_pom =new homepage_pom();
    const footer_page_pom =new footer_pom();
    const header_page_pom =new header_pom();

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
    it("Should load the Home page",()=>{
        cy.title().should('include', data.url_validator); 
    })
    it("Should be able to view Product Store on the Header",()=>{ 
      
        header_page_pom.header_data(path.header_id,data.header_data1)

    })
    it("Should be able to view Home Tab on the Header",()=>{
        header_page_pom.header_data(path.header_id_tab,data.header_data2)
    })

    it("Should be able to view Contact Tab on the Header",()=>{
        header_page_pom.header_data(path.header_id_tab,data.header_data3)
    })
    it("Should be able to view About Us Tab on the Header",()=>{
        header_page_pom.header_data(path.header_id_tab,data.header_data4)
    })
    it("Should be able to view Cart Tab on the Header",()=>{
        header_page_pom.header_data(path.header_id_tab,data.header_data5)
    })
    it("Should be able to view Log in Tab on the Header",()=>{
        header_page_pom.header_data(path.header_id_tab,data.header_data6)
    })
    it("Should be able to view Sign up Tab on the Header",()=>{
        header_page_pom.header_data(path.header_id_tab,data.header_data7)
    })

    it("Should be able to view Categories on Home page",()=>{

        home_page_pom.homepage_search(data.categories_txt,path.categories_selector)
       
    })
    it("Should be able to click on Phone tab in Categories Section",()=>{
        home_page_pom.homepage_search(data.categories_txt,path.categories_selector)
        home_page_pom.device_search(path.phone_tab_selector,path.device_list_selector,data.phone_txt,data.phone_list_txt)
    

    })
    it("Should be able to navigate to next screen on Phone tab in Categories Section",()=>{
        home_page_pom.homepage_search(data.categories_txt,path.categories_selector)
        home_page_pom.device_search(path.phone_tab_selector,path.device_list_selector,data.phone_txt,data.phone_list_txt)
        home_page_pom.homepage_navigation(path.device_next_selector,data.device_next_txt)
    

    })
    it("Should be able to navigate to previous screen on Phone tab in Categories Section",()=>{
        
        home_page_pom.homepage_search(data.categories_txt,path.categories_selector)
        home_page_pom.device_search(path.phone_tab_selector,path.device_list_selector,data.phone_txt,data.phone_list_txt)
        home_page_pom.homepage_navigation(path.device_next_selector,data.device_next_txt)
        home_page_pom.homepage_navigation(path.device_prev_selector,data.device_prev_txt)
   

    })
    it("Should be able to click on Laptop tab in Categories Section",()=>{
        home_page_pom.homepage_search(data.categories_txt,path.categories_selector)
        home_page_pom.device_search(path.laptop_tab_selector,path.device_list_selector,data.laptop_txt,data.laptop_list_txt)
        
    })
    it("Should be able to navigate to next screen on Laptop tab in Categories Section",()=>{
        home_page_pom.homepage_search(data.categories_txt,path.categories_selector)
        home_page_pom.device_search(path.laptop_tab_selector,path.device_list_selector,data.laptop_txt,data.laptop_list_txt)
        home_page_pom.homepage_navigation(path.device_next_selector,data.device_next_txt)
      

    })
    it("Should be able to navigate to previous screen on Laptop tab in Categories Section",()=>{
        home_page_pom.homepage_search(data.categories_txt,path.categories_selector)
        home_page_pom.device_search(path.laptop_tab_selector,path.device_list_selector,data.laptop_txt,data.laptop_list_txt)
        home_page_pom.homepage_navigation(path.device_next_selector,data.device_next_txt)
        home_page_pom.homepage_navigation(path.device_prev_selector,data.device_prev_txt)

    })
  
    it("Should be able to click on Monitors tab in Categories Section",()=>{
        home_page_pom.homepage_search(data.categories_txt,path.categories_selector)
        home_page_pom.device_search(path.monitor_tab_selector,path.device_list_selector,data.monitor_txt,data.monitor_list_txt)
       
       

    })
    it("Should be able to navigate to next screen on Monitors tab in Categories Section",()=>{
        home_page_pom.homepage_search(data.categories_txt,path.categories_selector)
        home_page_pom.device_search(path.monitor_tab_selector,path.device_list_selector,data.monitor_txt,data.monitor_list_txt)
        home_page_pom.homepage_navigation(path.device_next_selector,data.device_next_txt)

    })
    it("Should be able to navigate to previous screen on Monitors tab in Categories Section",()=>{
        home_page_pom.homepage_search(data.categories_txt,path.categories_selector)
        home_page_pom.device_search(path.monitor_tab_selector,path.device_list_selector,data.monitor_txt,data.monitor_list_txt)
        home_page_pom.homepage_navigation(path.device_next_selector,data.device_next_txt)
        home_page_pom.homepage_navigation(path.device_prev_selector,data.device_prev_txt)

    })
    it("Should be able to click on next frame on the homepage screen",()=>{
        home_page_pom.homepage_carousal_navigation(path.homepage_carousal_next_selector)
    })

    it("Should be able to click on previous frame on the homepage screen",()=>{
        home_page_pom.homepage_carousal_navigation(path.homepage_carousal_previous_selector)
    })


    it("Should be able to view footer on the homepage screen",()=>{
        footer_page_pom.footer_body(path.footer_body_selector)
       
    })
    it("Should be able to view About Us in footer on the homepage screen",()=>{
        footer_page_pom.footer_data(path.footer_body_selector,path.footer_Aboutus_selector)
        footer_page_pom.footer_more_info(path.footer_tag_selector,data.About_us_paragraph)

    })
    it("Should be able to view Get In Touch in footer on the homepage screen",()=>{
        footer_page_pom.footer_data(path.footer_body_selector,path.footer_getInTouch_selector)
        footer_page_pom.footer_more_info(path.footer_tag_selector,data.footer_address)
        footer_page_pom.footer_more_info(path.footer_tag_selector,data.footer_Phone)
        footer_page_pom.footer_more_info(path.footer_tag_selector,data.footer_email)
       

    })

    it("Should be able to view Product Store in footer on the homepage screen",()=>{
        footer_page_pom.footer_data(path.footer_body_selector,path.footer_store_selector)
        

    })
    it("Should be able to view Copyrights in footer on the homepage screen",()=>{
        footer_page_pom.footer_data(path.footer_body_selector,path.footer_copyright_selector)
        
        

    })

    
    
})