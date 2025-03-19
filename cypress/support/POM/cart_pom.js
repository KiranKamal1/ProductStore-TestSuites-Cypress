class cart_pom {
   addto_cart(device_name,cart_btn_s) {
        cy.contains(device_name).click()
        cy.get(cart_btn_s).click()
    };
    goto_cartPage(cart_tab_s){
      cy.get(cart_tab_s).click()
    }
    cart_alerts(alert_txt){
        cy.on("window:alert", (str) => {
            expect(str).to.equal(alert_txt);
            return true;
          });
        }
    delete_device(cart_tab_s,device_name,added_cart_item_s,delete_btn_tag_s,parent_row_item_s){
        cy.get(cart_tab_s).click()
        cy.contains(device_name).should('be.visible'); 
        cy.get(added_cart_item_s).contains(device_name).parents(parent_row_item_s) 
        .find(delete_btn_tag_s).click();
        cy.contains(device_name).should('not.exist'); 
    }
    total_price(cart_tab_s,total_price_s,device_name){
        cy.get(cart_tab_s).click()
        cy.waitForPageLoad();
        cy.contains(device_name).wait(1000).should('be.visible'); 
      
        cy.get(total_price_s).should('be.visible').invoke('text')         
        .then((amountText) => {
            const extractedAmount = amountText.trim(); 
            cy.log('Extracted Amount:', extractedAmount);
           
            cy.wrap(extractedAmount).as('totalAmount');  
            cy.log(extractedAmount)
            expect(extractedAmount).to.exist; 
        });

    }
    cart_purchase(place_order_s,buyer_name_s,buyer_country_s,buyer_city_s,buyer_creditCard_s,card_month_s,card_year_s,purchase_btn_s,
        buyer_name,buyer_country,buyer_city,buyer_creditCard,card_month,card_year
    ){
        

        cy.get(place_order_s).click()
        cy.get(buyer_name_s).type(buyer_name)
        cy.get(buyer_country_s).type(buyer_country)
        cy.get(buyer_city_s).type(buyer_city)
        cy.get(buyer_creditCard_s).type(buyer_creditCard)
        cy.get(card_month_s).type(card_month)
        cy.get(card_year_s).type(card_year)
        cy.xpath(purchase_btn_s).first().click();
    
    }
    purchase_data_validation(buyer_info_s,buyer_creditCard,buyer_name,buying_date,purchase_ok_btn_s){
        cy.get(buyer_info_s).should('be.visible').invoke('text')
        .then((modalText) => {
          const idMatch = modalText.match(/Id:\s(\d+)/);
          const amountMatch = modalText.match(/Amount:\s(\d+ USD)/);
          const cardNumberMatch = modalText.match(/Card Number:\s(\d+)/);  
          const nameMatch = modalText.match(/Name:\s([A-Za-z\s]+)(?=\s*Date:|$)/);
          const dateMatch = modalText.match(/Date:\s([\d\/]+)/); 
      
            cy.log('Id:' + idMatch[1])
          if (amountMatch) {
            cy.log('Amount:' + amountMatch[1]);
            
            cy.get('@totalAmount').then((amount) => {
            cy.log('Stored Total Amount:', amount);
            expect(amountMatch[1]).to.equal(amount +" USD")
             });
          }
          if (cardNumberMatch) {
            cy.log('Card Number:'+ cardNumberMatch[1]);
            expect(cardNumberMatch[1]).to.equal(buyer_creditCard);
          }
          if (nameMatch) {
            cy.log('Name:'+ nameMatch[1]);
            expect(nameMatch[1]).to.equal(buyer_name); 
          }
    
          if (dateMatch) {
            cy.log('Date:'+ dateMatch[1]);
            expect(dateMatch[1]).to.equal(buying_date);
          }
          
        });
        cy.xpath(purchase_ok_btn_s).click()


    }

}export default cart_pom;  




