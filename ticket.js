
 const seats  = document.getElementsByClassName("key-button");
 let seatCount =0
 let seatLeft  =40;
 let totalPriceCount=0
 let clickCount =0



 for(let seat of seats){
    seat.addEventListener("click",function(){
     

         //    restricted to buy more than 4 ticket
  
    if(clickCount>3){
      alert("Limit Over");
      return;          
  }
  else{
   clickCount++
  }

        seat.style.backgroundColor = "green"
        seat.setAttribute('disabled', '');
    //    increase the number of Seat
       let seatsAdd= document.getElementById("seat-count");

       let seatText= parseInt(seatsAdd.innerText);
       seatCount = seatCount+1;

       seatsAdd.innerText = seatCount;
    //    decrease the number of seat
       let seatsLeft= document.getElementById("seat-left");

       let seatLeftText= parseInt(seatsAdd.innerText);
       seatLeft = seatLeft-1;

       seatsLeft.innerText = seatLeft;
    //    taking all seat reserve by customers
       let ticketsNumber = document.getElementById("tickets");
       const div = document.createElement("div")
       const h1 = document.createElement("h1");
       const h2 = document.createElement("h1");
       const h3 = document.createElement("h1");

       div.setAttribute("class","flex");
       div.classList.add("justify-between");
       div.classList.add("space-y-3");

       h2.innerText = "Economy";

       h3.innerText = 550;

       let everySeatText = seat.innerText;

       h1.innerText= everySeatText;
       div.appendChild(h1);
       div.appendChild(h2);
       div.appendChild(h3);
       ticketsNumber.appendChild(div);

    


// calculating Total Money
       totalPriceCount =totalPriceCount+550;


       let totalPrice=document.getElementById("total-price");
       let totalPriceText = parseInt(totalPrice.innerText);
       totalPrice.innerText=totalPriceCount;


    //    calculating Grand Total

    let grandTotal =document.getElementById("grand-total");
    grandTotal.innerText =totalPriceCount;


    // active the activeButton
    const applyButton = document.getElementById("apply-button")
    if(clickCount>=4){      
      applyButton.removeAttribute("disabled")
    }
  
        
    })


 }

//  discount Section

 const applyField = document.getElementById("apply-field");
 const applyButton = document.getElementById("apply-button");

 applyButton.addEventListener("click",function(){

   

    const applyFieldValue = applyField.value;
    
    if(applyFieldValue==="NEW15"){

        let discount = totalPriceCount*15/100;

    let fifteenDiscount = totalPriceCount-discount;

        const grandTotal = document.getElementById("grand-total");

        grandTotal.innerText = parseInt(fifteenDiscount);

        const div1 = document.createElement("h1")

        const div2 = document.createElement("h1")


        div2.innerText = "Discount"

        div1.innerText = parseInt(discount);

        const finalDiscount = document.getElementById("discount")

        finalDiscount.setAttribute("class","flex");
       finalDiscount.classList.add("justify-between");
       finalDiscount.classList.add("font-bold");

        finalDiscount.appendChild(div2)
        finalDiscount.appendChild(div1)



        const hideApply = document.getElementById("hide-apply");

       hideApply.setAttribute("class","hidden")
         

        
    }
    else if(applyFieldValue==="Couple 20"){

        let discount = totalPriceCount*20/100;

        let twentyDiscountDiscount = totalPriceCount-discount;

        const grandTotal = document.getElementById("grand-total");

        grandTotal.innerText =parseInt(twentyDiscountDiscount);

        
        const div1 = document.createElement("h1")

        const div2 = document.createElement("h1")


        div2.innerText = "Discount"

        div1.innerText = parseInt(discount);

        const finalDiscount = document.getElementById("discount")

        finalDiscount.setAttribute("class","flex");
       finalDiscount.classList.add("justify-between");
       finalDiscount.classList.add("font-bold");

        finalDiscount.appendChild(div2)
        finalDiscount.appendChild(div1)

        const hideApply = document.getElementById("hide-apply");

       hideApply.setAttribute("class","hidden");

       



    }
    else{
        alert("Enter Valid Coupon")
    }

 })





