import React from "react";
import './faq.css'
const Faq=()=>{
    return(
        <>
        <div className="mainfaq">

        <h1 className="Title">Faqs related to our service</h1>
<div className="answers">
<section>
            <h2>• What types of accommodations are available?</h2>
        <p>We offer single, double, and shared rooms in hostels and PGs, with various amenities to 
        suit your needs.</p>
            </section>

<section>
<h2>•
        Are accommodations near popular colleges/universities listed?
        </h2>
        <p>
        Yes, we have properties close to popular educational institutions for students' convenience
        </p>
</section>

<section>
<h2>•
What is included in the rent?
        </h2>
        <p>
        The rent typically covers the cost of the room, utilities, and basic amenities. Additional
 charges for meals or other services will be clearly mentioned.
        </p>
</section>


<section>
<h2>•
Are there any hidden charges?
        </h2>
        <p>
        No, we ensure transparency. All fees and charges are listed in the property details section.
        </p>
</section>


<section>
<h2>•
What amenities are provided in hostels and PGs?
        </h2>
        <p>
        Common amenities include Wi-Fi, laundry, housekeeping, meals, study tables, and more. 
        The amenities may vary depending on the property
        </p>
</section>


<section>
<h2>•
Are meals included in the rent?
        </h2>
        <p>
        Some properties offer meal plans included in the rent, while others have optional plans.
 Check the listing details for specific information. You can also select the meal according to
 yourself going on our meal section.
        </p>
</section>
</div>


        </div>
     
        
        </>
    )
};
export default Faq;