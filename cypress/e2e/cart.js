import cart_pom from "../support/POM/cart_pom";
import homepage_pom from "../support/POM/homepage_pom";
import login_pom from "../support/POM/login_pom";
import signup_pom from "../support/POM/signup_pom";
import header_pom from "../support/POM/header_pom";
import footer_pom from "../support/POM/footer_pom";
/// <reference types="cypress" />


describe("Validate Cart Tab",()=>{
    const home_page_pom =new homepage_pom();
    const signupForm_pom =new signup_pom();
    const header_page_pom =new header_pom();
    const footer_page_pom =new footer_pom();
    let randomString = Math.random().toString(36).substring(2);
    let signup_username = "User" + randomString;
    const loginForm_pom =new login_pom();
    const cart_tab_pom =new cart_pom();
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
    it("Should be able to view Product Store in the Header",()=>{ 
        cart_tab_pom.goto_cartPage(path.cart_tab_selector)
        header_page_pom.header_data(path.header_id,data.header_data1)

    })
    it("Should be able to view Home Tab in the Header",()=>{
        cart_tab_pom.goto_cartPage(path.cart_tab_selector)
        header_page_pom.header_data(path.header_id_tab,data.header_data2)
    })

    it("Should be able to view Contact Tab in the Header",()=>{
        cart_tab_pom.goto_cartPage(path.cart_tab_selector)
        header_page_pom.header_data(path.header_id_tab,data.header_data3)
    })
    it("Should be able to view About Us Tab in the Header",()=>{
        cart_tab_pom.goto_cartPage(path.cart_tab_selector)
        header_page_pom.header_data(path.header_id_tab,data.header_data4)
    })
    it("Should be able to view Cart Tab in the Header",()=>{
        cart_tab_pom.goto_cartPage(path.cart_tab_selector)
        header_page_pom.header_data(path.header_id_tab,data.header_data5)
    })
    it("Should be able to view Log in Tab in the Header",()=>{
        cart_tab_pom.goto_cartPage(path.cart_tab_selector)
        header_page_pom.header_data(path.header_id_tab,data.header_data6)
    })
    it("Should be able to view Sign up Tab in the Header",()=>{
        cart_tab_pom.goto_cartPage(path.cart_tab_selector)
        header_page_pom.header_data(path.header_id_tab,data.header_data7)
    })

    it("Should be able to add products in Cart from Phone tab",()=>{
        home_page_pom.homepage_search(data.categories_txt,path.categories_selector)
        home_page_pom.device_search(path.phone_tab_selector,path.device_list_selector,data.phone_txt,data.phone_list_txt)
        cart_tab_pom.addto_cart(data.buying_device,path.add_to_cart_selector)
        cart_tab_pom.cart_alerts(data.product_added)
        cart_tab_pom.delete_device(path.cart_tab_selector,data.buying_device,path.added_cart_item_selector,path.delete_btn_tag_selector,path.parent_row_item_selector)

        
    })

    it("Should be able to add products in Cart from Laptop tab",()=>{
        home_page_pom.homepage_search(data.categories_txt,path.categories_selector)
        home_page_pom.device_search(path.laptop_tab_selector,path.device_list_selector,data.laptop_txt,data.laptop_list_txt)
        cart_tab_pom.addto_cart(data.buying_laptop,path.add_to_cart_selector)
        cart_tab_pom.cart_alerts(data.product_added)
        cart_tab_pom.delete_device(path.cart_tab_selector,data.buying_laptop,path.added_cart_item_selector,path.delete_btn_tag_selector,path.parent_row_item_selector)

        
    })
    it("Should be able to add products in Cart from Monitors tab",()=>{
        home_page_pom.homepage_search(data.categories_txt,path.categories_selector)
        home_page_pom.device_search(path.monitor_tab_selector,path.device_list_selector,data.monitor_txt,data.monitor_list_txt)
        cart_tab_pom.addto_cart(data.buying_monitor,path.add_to_cart_selector)
        cart_tab_pom.cart_alerts(data.product_added)
        cart_tab_pom.delete_device(path.cart_tab_selector,data.buying_monitor,path.added_cart_item_selector,path.delete_btn_tag_selector,path.parent_row_item_selector)

        
    })

    
    it("Should be able to delete added product in Cart",()=>{
       
        home_page_pom.homepage_search(data.categories_txt,path.categories_selector)
        home_page_pom.device_search(path.phone_tab_selector,path.device_list_selector,data.phone_txt,data.phone_list_txt)
        cart_tab_pom.addto_cart(data.buying_device,path.add_to_cart_selector)
        cart_tab_pom.cart_alerts(data.product_added)
        cart_tab_pom.delete_device(path.cart_tab_selector,data.buying_device,path.added_cart_item_selector,path.delete_btn_tag_selector,path.parent_row_item_selector)

        

    })
    it("Should be able to place an order of added product in Cart",()=>{
       
        home_page_pom.homepage_search(data.categories_txt,path.categories_selector)
        home_page_pom.device_search(path.phone_tab_selector,path.device_list_selector,data.phone_txt,data.phone_list_txt)
        cart_tab_pom.addto_cart(data.buying_device,path.add_to_cart_selector)
        cart_tab_pom.cart_alerts(data.product_added)

        cart_tab_pom.total_price(path.cart_tab_selector,path.total_price_selector,data.buying_device)
        cart_tab_pom.cart_purchase(path.place_order_selector,path.buyer_name_selector,path.buyer_country_selector,path.buyer_city_selector,path.buyer_creditCard_selector,path.card_month_selector,path.card_year_selector,path.purchase_btn_selector,
            data.buyer_name,data.buyer_country,data.buyer_city,data.buyer_creditCard,data.card_month,data.card_year)
         cart_tab_pom.purchase_data_validation(path.buyer_info_selector,data.buyer_creditCard,data.buyer_name,data.buying_date,path.purchase_ok_btn_selector)
       
        

    })
    it("Should not be able to place an order without Name and Credit Card",()=>{
       
        home_page_pom.homepage_search(data.categories_txt,path.categories_selector)
        home_page_pom.device_search(path.phone_tab_selector,path.device_list_selector,data.phone_txt,data.phone_list_txt)
        cart_tab_pom.addto_cart(data.buying_device,path.add_to_cart_selector)
        cart_tab_pom.cart_alerts(data.product_added)

        cart_tab_pom.total_price(path.cart_tab_selector,path.total_price_selector,data.buying_device)
        cart_tab_pom.cart_purchase(path.place_order_selector,path.buyer_name_selector,path.buyer_country_selector,path.buyer_city_selector,path.buyer_creditCard_selector,path.card_month_selector,path.card_year_selector,path.purchase_btn_selector,
            ' ',data.buyer_country,data.buyer_city,' ',data.card_month,data.card_year)
            cart_tab_pom.cart_alerts(data.missing_info_alert)
            
        

    })
    it("Should be able to place order for multiple products in different categories",()=>{
       
        home_page_pom.homepage_search(data.categories_txt,path.categories_selector)
        home_page_pom.device_search(path.phone_tab_selector,path.device_list_selector,data.phone_txt,data.phone_list_txt)
        cart_tab_pom.addto_cart(data.buying_device,path.add_to_cart_selector)
        cart_tab_pom.cart_alerts(data.product_added)
        cart_tab_pom.total_price(path.cart_tab_selector,path.total_price_selector,data.buying_device)
        cy.visit(path.link)
        home_page_pom.homepage_search(data.categories_txt,path.categories_selector)
        home_page_pom.device_search(path.monitor_tab_selector,path.device_list_selector,data.monitor_txt,data.monitor_list_txt)
        cart_tab_pom.addto_cart(data.buying_monitor,path.add_to_cart_selector)
        cart_tab_pom.cart_alerts(data.product_added)
        

        
        cart_tab_pom.total_price(path.cart_tab_selector,path.total_price_selector,data.buying_monitor)
        cart_tab_pom.cart_purchase(path.place_order_selector,path.buyer_name_selector,path.buyer_country_selector,path.buyer_city_selector,path.buyer_creditCard_selector,path.card_month_selector,path.card_year_selector,path.purchase_btn_selector,
            data.buyer_name,data.buyer_country,data.buyer_city,data.buyer_creditCard,data.card_month,data.card_year)
         cart_tab_pom.purchase_data_validation(path.buyer_info_selector,data.buyer_creditCard,data.buyer_name,data.buying_date,path.purchase_ok_btn_selector)
       
         
        

    })
    it("Should be able to place an order after Login",()=>{
        loginForm_pom.Login_submission(data.email,data.password,path.loginTab_selector,path.username_selector,path.password_selector,path.login_btn_selector)
        loginForm_pom.Login_validation(path.login_validator_selector,data.email)  
        home_page_pom.homepage_search(data.categories_txt,path.categories_selector)
        home_page_pom.device_search(path.phone_tab_selector,path.device_list_selector,data.phone_txt,data.phone_list_txt)
        cart_tab_pom.addto_cart(data.buying_device,path.add_to_cart_selector)
        cart_tab_pom.cart_alerts(data.product_added)

        cart_tab_pom.total_price(path.cart_tab_selector,path.total_price_selector,data.buying_device)
        cart_tab_pom.cart_purchase(path.place_order_selector,path.buyer_name_selector,path.buyer_country_selector,path.buyer_city_selector,path.buyer_creditCard_selector,path.card_month_selector,path.card_year_selector,path.purchase_btn_selector,
            data.buyer_name,data.buyer_country,data.buyer_city,data.buyer_creditCard,data.card_month,data.card_year)
         cart_tab_pom.purchase_data_validation(path.buyer_info_selector,data.buyer_creditCard,data.buyer_name,data.buying_date,path.purchase_ok_btn_selector)
       
        

    })
   
    it("Should be able to cancel purchase in Cart",()=>{
       
        home_page_pom.homepage_search(data.categories_txt,path.categories_selector)
        home_page_pom.device_search(path.phone_tab_selector,path.device_list_selector,data.phone_txt,data.phone_list_txt)
        cart_tab_pom.addto_cart(data.buying_device,path.add_to_cart_selector)
        cart_tab_pom.cart_alerts(data.product_added)

        cart_tab_pom.total_price(path.cart_tab_selector,path.total_price_selector,data.buying_device)
        cart_tab_pom.cart_purchase(path.place_order_selector,path.buyer_name_selector,path.buyer_country_selector,path.buyer_city_selector,path.buyer_creditCard_selector,path.card_month_selector,path.card_year_selector,path.purchase_close_btn_selector,
            data.buyer_name,data.buyer_country,data.buyer_city,data.buyer_creditCard,data.card_month,data.card_year)
        
            cart_tab_pom.delete_device(path.cart_page_selector,data.buying_device,path.added_cart_item_selector,path.delete_btn_tag_selector,path.parent_row_item_selector)


    })
  

    it("Should be able to view footer on the Cart screen",()=>{
        cart_tab_pom.goto_cartPage(path.cart_tab_selector)
        footer_page_pom.footer_body(path.footer_body_selector)
       
    })
    it("Should be able to view About Us in footer on the Cart screen",()=>{
        cart_tab_pom.goto_cartPage(path.cart_tab_selector)
        footer_page_pom.footer_data(path.footer_body_selector,path.footer_Aboutus_selector)
        footer_page_pom.footer_more_info(path.footer_tag_selector,data.About_us_paragraph)

    })
    it("Should be able to view Get In Touch in footer on the Cart screen",()=>{
        cart_tab_pom.goto_cartPage(path.cart_tab_selector)
        footer_page_pom.footer_data(path.footer_body_selector,path.footer_getInTouch_selector)
        footer_page_pom.footer_more_info(path.footer_tag_selector,data.footer_address)
        footer_page_pom.footer_more_info(path.footer_tag_selector,data.footer_Phone)
        footer_page_pom.footer_more_info(path.footer_tag_selector,data.footer_email)
       

    })

    it("Should be able to view Product Store in footer on the Cart screen",()=>{
        cart_tab_pom.goto_cartPage(path.cart_tab_selector)
        footer_page_pom.footer_data(path.footer_body_selector,path.footer_store_selector)
        

    })
    it("Should be able to view Copyrights in footer on the Cart screen",()=>{
        cart_tab_pom.goto_cartPage(path.cart_tab_selector)
        footer_page_pom.footer_data(path.footer_body_selector,path.footer_copyright_selector)
        
        

    })
    

})