// js start
var finalVal, initialVal;
initialVal = 0;
finalVal = 10;
// function definition to fetch college json data
function loadJson(iVal, dataRow) {
    // get json data from a source
    fetch("colleges.json")
        .then(res => res.json())
        .then(function(result) {
            // console.log(result);
            var i;
            if (result.colleges.length > 0) {
                for (i = iVal; i < dataRow; i++) {
                    var collegecardDiv = document.createElement("div");
                    collegecardDiv.className = "college-card";

                    var collegecardDiv_promoteflagDiv = document.createElement("div");
                    collegecardDiv_promoteflagDiv.className = "promote-flag";
                    var collegecardDiv_promoteflagDiv_P = document.createElement("p");
                    collegecardDiv_promoteflagDiv_P.innerHTML = "PROMOTED";

                    collegecardDiv_promoteflagDiv.append(collegecardDiv_promoteflagDiv_P);

                    // banner div container
                    var collegecardDiv_cardbannerDiv = document.createElement("div");
                    collegecardDiv_cardbannerDiv.className = "card-banner";

                    var collegecardDiv_cardbannerDiv_ratingDiv = document.createElement("div");
                    collegecardDiv_cardbannerDiv_ratingDiv.className = "rating";
                    var collegecardDiv_cardbannerDiv_ratingDiv_P = document.createElement("p");
                    var collegecardDiv_cardbannerDiv_ratingDiv_P_ratingnumSpan = document.createElement("span");
                    collegecardDiv_cardbannerDiv_ratingDiv_P_ratingnumSpan.className = "rating-num";
                    collegecardDiv_cardbannerDiv_ratingDiv_P_ratingnumSpan.innerHTML = result.colleges[i].rating;
                    var collegecardDiv_cardbannerDiv_ratingDiv_P_ratingnumSpan1 = document.createElement("span");
                    collegecardDiv_cardbannerDiv_ratingDiv_P_ratingnumSpan1.innerHTML = "/5<br>Very Good";

                    collegecardDiv_cardbannerDiv_ratingDiv_P.append(collegecardDiv_cardbannerDiv_ratingDiv_P_ratingnumSpan, collegecardDiv_cardbannerDiv_ratingDiv_P_ratingnumSpan1);
                    collegecardDiv_cardbannerDiv_ratingDiv.append(collegecardDiv_cardbannerDiv_ratingDiv_P);

                    var collegecardDiv_cardbannerDiv_quotesDiv = document.createElement("div");
                    collegecardDiv_cardbannerDiv_quotesDiv.className = "quotes";

                    var collegecardDiv_cardbannerDiv_quotesDiv_quodisDiv = document.createElement("div");
                    collegecardDiv_cardbannerDiv_quotesDiv_quodisDiv.className = "quo-Dis";
                    var collegecardDiv_cardbannerDiv_quotesDiv_quodisDiv_collegequoteP = document.createElement("p");
                    collegecardDiv_cardbannerDiv_quotesDiv_quodisDiv_collegequoteP.className = "college-quote";
                    collegecardDiv_cardbannerDiv_quotesDiv_quodisDiv_collegequoteP.innerHTML = result.colleges[i].tags[0];
                    var collegecardDiv_cardbannerDiv_quotesDiv_quodisDiv_collegedistanceP = document.createElement("p");
                    collegecardDiv_cardbannerDiv_quotesDiv_quodisDiv_collegedistanceP.className = "college-distance";
                    collegecardDiv_cardbannerDiv_quotesDiv_quodisDiv_collegedistanceP.innerHTML = result.colleges[i].tags[1];

                    collegecardDiv_cardbannerDiv_quotesDiv_quodisDiv.append(collegecardDiv_cardbannerDiv_quotesDiv_quodisDiv_collegequoteP, collegecardDiv_cardbannerDiv_quotesDiv_quodisDiv_collegedistanceP);

                    var collegecardDiv_cardbannerDiv_quotesDiv_collegerankDiv = document.createElement("div");
                    collegecardDiv_cardbannerDiv_quotesDiv_collegerankDiv.className = "college-rank";
                    collegecardDiv_cardbannerDiv_quotesDiv_collegerankDiv.className = "college-rank";
                    var collegecardDiv_cardbannerDiv_quotesDiv_collegerankDiv_P = document.createElement("p");
                    collegecardDiv_cardbannerDiv_quotesDiv_collegerankDiv_P.innerHTML = "#" + result.colleges[i].ranking;

                    collegecardDiv_cardbannerDiv_quotesDiv_collegerankDiv.append(collegecardDiv_cardbannerDiv_quotesDiv_collegerankDiv_P);

                    collegecardDiv_cardbannerDiv_quotesDiv.append(collegecardDiv_cardbannerDiv_quotesDiv_quodisDiv, collegecardDiv_cardbannerDiv_quotesDiv_collegerankDiv);

                    collegecardDiv_cardbannerDiv.append(collegecardDiv_cardbannerDiv_ratingDiv, collegecardDiv_cardbannerDiv_quotesDiv);

                    // content div container
                    var collegecardDiv_cardcontentDiv = document.createElement("div");
                    collegecardDiv_cardcontentDiv.className = "card-content";

                    // college details div container
                    var collegecardDiv_cardcontentDiv_collegedetailsDiv = document.createElement("div");
                    collegecardDiv_cardcontentDiv_collegedetailsDiv.className = "college-details";

                    var collegecardDiv_cardcontentDiv_collegedetailsDiv_collegeinfoDiv = document.createElement("div");
                    collegecardDiv_cardcontentDiv_collegedetailsDiv_collegeinfoDiv.className = "college-info";
                    var collegecardDiv_cardcontentDiv_collegedetailsDiv_collegeinfoDiv_collegenamestarsDiv = document.createElement("div");
                    collegecardDiv_cardcontentDiv_collegedetailsDiv_collegeinfoDiv_collegenamestarsDiv.className = "college-name-stars";
                    var collegecardDiv_cardcontentDiv_collegedetailsDiv_collegeinfoDiv_collegenamestarsDiv_P = document.createElement("p");
                    var collegecardDiv_cardcontentDiv_collegedetailsDiv_collegeinfoDiv_collegenamestarsDiv_P_collegenameSpan = document.createElement("span");
                    collegecardDiv_cardcontentDiv_collegedetailsDiv_collegeinfoDiv_collegenamestarsDiv_P_collegenameSpan.className = "college-name gray-dark";
                    collegecardDiv_cardcontentDiv_collegedetailsDiv_collegeinfoDiv_collegenamestarsDiv_P_collegenameSpan.innerHTML = result.colleges[i].college_name;
                    var collegecardDiv_cardcontentDiv_collegedetailsDiv_collegeinfoDiv_collegenamestarsDiv_P_collegestarsSpan = document.createElement("span");
                    collegecardDiv_cardcontentDiv_collegedetailsDiv_collegeinfoDiv_collegenamestarsDiv_P_collegestarsSpan.className = "college-stars";
                    collegecardDiv_cardcontentDiv_collegedetailsDiv_collegeinfoDiv_collegenamestarsDiv_P_collegestarsSpan.innerHTML = rate(result.colleges[i].rating);

                    collegecardDiv_cardcontentDiv_collegedetailsDiv_collegeinfoDiv_collegenamestarsDiv_P.append(collegecardDiv_cardcontentDiv_collegedetailsDiv_collegeinfoDiv_collegenamestarsDiv_P_collegenameSpan, collegecardDiv_cardcontentDiv_collegedetailsDiv_collegeinfoDiv_collegenamestarsDiv_P_collegestarsSpan);
                    collegecardDiv_cardcontentDiv_collegedetailsDiv_collegeinfoDiv_collegenamestarsDiv.append(collegecardDiv_cardcontentDiv_collegedetailsDiv_collegeinfoDiv_collegenamestarsDiv_P);
                    collegecardDiv_cardcontentDiv_collegedetailsDiv_collegeinfoDiv.append(collegecardDiv_cardcontentDiv_collegedetailsDiv_collegeinfoDiv_collegenamestarsDiv);

                    var collegecardDiv_cardcontentDiv_collegedetailsDiv_collegeaddressDiv = document.createElement("div");
                    collegecardDiv_cardcontentDiv_collegedetailsDiv_collegeaddressDiv.className = "college-address";
                    var collegecardDiv_cardcontentDiv_collegedetailsDiv_collegeaddressDiv_addresslandmarkDiv = document.createElement("div");
                    collegecardDiv_cardcontentDiv_collegedetailsDiv_collegeaddressDiv_addresslandmarkDiv.className = "address-landmark";
                    var collegecardDiv_cardcontentDiv_collegedetailsDiv_collegeaddressDiv_addresslandmarkDiv_fontgrayP = document.createElement("p");
                    collegecardDiv_cardcontentDiv_collegedetailsDiv_collegeaddressDiv_addresslandmarkDiv_fontgrayP.className = "font-5 gray-dark";
                    collegecardDiv_cardcontentDiv_collegedetailsDiv_collegeaddressDiv_addresslandmarkDiv_fontgrayP.innerHTML = result.colleges[i].nearest_place[0];
                    var collegecardDiv_cardcontentDiv_collegedetailsDiv_collegeaddressDiv_addressdistanceDiv = document.createElement("div");
                    collegecardDiv_cardcontentDiv_collegedetailsDiv_collegeaddressDiv_addressdistanceDiv.className = "address-distance";
                    var collegecardDiv_cardcontentDiv_collegedetailsDiv_collegeaddressDiv_addressdistanceDiv_fontgrayP = document.createElement("p");
                    collegecardDiv_cardcontentDiv_collegedetailsDiv_collegeaddressDiv_addressdistanceDiv_fontgrayP.className = "font-5 gray-light";
                    var collegecardDiv_cardcontentDiv_collegedetailsDiv_collegeaddressDiv_addressdistanceDiv_fontgrayP_Span = document.createElement("span");
                    collegecardDiv_cardcontentDiv_collegedetailsDiv_collegeaddressDiv_addressdistanceDiv_fontgrayP_Span.innerHTML = "| " + result.colleges[i].nearest_place[1];

                    collegecardDiv_cardcontentDiv_collegedetailsDiv_collegeaddressDiv_addressdistanceDiv_fontgrayP.append(collegecardDiv_cardcontentDiv_collegedetailsDiv_collegeaddressDiv_addressdistanceDiv_fontgrayP_Span);
                    collegecardDiv_cardcontentDiv_collegedetailsDiv_collegeaddressDiv_addresslandmarkDiv.append(collegecardDiv_cardcontentDiv_collegedetailsDiv_collegeaddressDiv_addresslandmarkDiv_fontgrayP);
                    collegecardDiv_cardcontentDiv_collegedetailsDiv_collegeaddressDiv_addressdistanceDiv.append(collegecardDiv_cardcontentDiv_collegedetailsDiv_collegeaddressDiv_addressdistanceDiv_fontgrayP);
                    collegecardDiv_cardcontentDiv_collegedetailsDiv_collegeaddressDiv.append(collegecardDiv_cardcontentDiv_collegedetailsDiv_collegeaddressDiv_addresslandmarkDiv, collegecardDiv_cardcontentDiv_collegedetailsDiv_collegeaddressDiv_addressdistanceDiv);



                    var collegecardDiv_cardcontentDiv_collegedetailsDiv_actualaddressDiv = document.createElement("div");
                    collegecardDiv_cardcontentDiv_collegedetailsDiv_actualaddressDiv.className = "actual-address";
                    var collegecardDiv_cardcontentDiv_collegedetailsDiv_actualaddressDiv_actuallandmarkdistanceDiv = document.createElement("div");
                    collegecardDiv_cardcontentDiv_collegedetailsDiv_actualaddressDiv_actuallandmarkdistanceDiv.className = "actual-landmark-distance";
                    var collegecardDiv_cardcontentDiv_collegedetailsDiv_actualaddressDiv_actuallandmarkdistanceDiv_font5P = document.createElement("p");
                    collegecardDiv_cardcontentDiv_collegedetailsDiv_actualaddressDiv_actuallandmarkdistanceDiv_font5P.className = "font-5";
                    var collegecardDiv_cardcontentDiv_collegedetailsDiv_actualaddressDiv_actuallandmarkdistanceDiv_font5P_Span0 = document.createElement("span");
                    collegecardDiv_cardcontentDiv_collegedetailsDiv_actualaddressDiv_actuallandmarkdistanceDiv_font5P_Span0.className = "secondary-color";
                    collegecardDiv_cardcontentDiv_collegedetailsDiv_actualaddressDiv_actuallandmarkdistanceDiv_font5P_Span0.innerHTML = "93% Match : ";
                    var collegecardDiv_cardcontentDiv_collegedetailsDiv_actualaddressDiv_actuallandmarkdistanceDiv_font5P_Span1 = document.createElement("span");
                    collegecardDiv_cardcontentDiv_collegedetailsDiv_actualaddressDiv_actuallandmarkdistanceDiv_font5P_Span1.className = "third-color";
                    collegecardDiv_cardcontentDiv_collegedetailsDiv_actualaddressDiv_actuallandmarkdistanceDiv_font5P_Span1.innerHTML = "2.5kms";
                    var collegecardDiv_cardcontentDiv_collegedetailsDiv_actualaddressDiv_actuallandmarkdistanceDiv_font5P_Span2 = document.createElement("span");
                    collegecardDiv_cardcontentDiv_collegedetailsDiv_actualaddressDiv_actuallandmarkdistanceDiv_font5P_Span2.className = "gray-light";
                    collegecardDiv_cardcontentDiv_collegedetailsDiv_actualaddressDiv_actuallandmarkdistanceDiv_font5P_Span2.innerHTML = " from GTB Nagar";
                    var collegecardDiv_cardcontentDiv_collegedetailsDiv_actualaddressDiv_actuallandmarkdistanceDiv_font5P_Span3 = document.createElement("span");
                    collegecardDiv_cardcontentDiv_collegedetailsDiv_actualaddressDiv_actuallandmarkdistanceDiv_font5P_Span3.className = "secondary-color";
                    collegecardDiv_cardcontentDiv_collegedetailsDiv_actualaddressDiv_actuallandmarkdistanceDiv_font5P_Span3.innerHTML = ",";
                    var collegecardDiv_cardcontentDiv_collegedetailsDiv_actualaddressDiv_actuallandmarkdistanceDiv_font5P_Span4 = document.createElement("span");
                    collegecardDiv_cardcontentDiv_collegedetailsDiv_actualaddressDiv_actuallandmarkdistanceDiv_font5P_Span4.className = "third-color";
                    collegecardDiv_cardcontentDiv_collegedetailsDiv_actualaddressDiv_actuallandmarkdistanceDiv_font5P_Span4.innerHTML = "7Kms";
                    var collegecardDiv_cardcontentDiv_collegedetailsDiv_actualaddressDiv_actuallandmarkdistanceDiv_font5P_Span5 = document.createElement("span");
                    collegecardDiv_cardcontentDiv_collegedetailsDiv_actualaddressDiv_actuallandmarkdistanceDiv_font5P_Span5.className = "gray-light";
                    collegecardDiv_cardcontentDiv_collegedetailsDiv_actualaddressDiv_actuallandmarkdistanceDiv_font5P_Span5.innerHTML = " from Rajiv Chowk";

                    collegecardDiv_cardcontentDiv_collegedetailsDiv_actualaddressDiv_actuallandmarkdistanceDiv_font5P.append(collegecardDiv_cardcontentDiv_collegedetailsDiv_actualaddressDiv_actuallandmarkdistanceDiv_font5P_Span0, collegecardDiv_cardcontentDiv_collegedetailsDiv_actualaddressDiv_actuallandmarkdistanceDiv_font5P_Span1, collegecardDiv_cardcontentDiv_collegedetailsDiv_actualaddressDiv_actuallandmarkdistanceDiv_font5P_Span2, collegecardDiv_cardcontentDiv_collegedetailsDiv_actualaddressDiv_actuallandmarkdistanceDiv_font5P_Span3, collegecardDiv_cardcontentDiv_collegedetailsDiv_actualaddressDiv_actuallandmarkdistanceDiv_font5P_Span4, collegecardDiv_cardcontentDiv_collegedetailsDiv_actualaddressDiv_actuallandmarkdistanceDiv_font5P_Span5);
                    collegecardDiv_cardcontentDiv_collegedetailsDiv_actualaddressDiv_actuallandmarkdistanceDiv.append(collegecardDiv_cardcontentDiv_collegedetailsDiv_actualaddressDiv_actuallandmarkdistanceDiv_font5P);
                    collegecardDiv_cardcontentDiv_collegedetailsDiv_actualaddressDiv.append(collegecardDiv_cardcontentDiv_collegedetailsDiv_actualaddressDiv_actuallandmarkdistanceDiv);


                    var collegecardDiv_cardcontentDiv_collegedetailsDiv_discountoffDiv = document.createElement("div");
                    collegecardDiv_cardcontentDiv_collegedetailsDiv_discountoffDiv.className = "discount-off";
                    collegecardDiv_cardcontentDiv_collegedetailsDiv_discountoffDiv.className = "discount-off";
                    var collegecardDiv_cardcontentDiv_collegedetailsDiv_discountoffDiv_actualoffDiv = document.createElement("div");
                    collegecardDiv_cardcontentDiv_collegedetailsDiv_discountoffDiv_actualoffDiv.className = "actual-off";
                    var collegecardDiv_cardcontentDiv_collegedetailsDiv_discountoffDiv_actualoffDiv_font5P = document.createElement("p");
                    collegecardDiv_cardcontentDiv_collegedetailsDiv_discountoffDiv_actualoffDiv_font5P.className = "font-5";
                    var collegecardDiv_cardcontentDiv_collegedetailsDiv_discountoffDiv_actualoffDiv_font5P_Span1 = document.createElement("span");
                    collegecardDiv_cardcontentDiv_collegedetailsDiv_discountoffDiv_actualoffDiv_font5P_Span1.className = "third-color";
                    collegecardDiv_cardcontentDiv_collegedetailsDiv_discountoffDiv_actualoffDiv_font5P_Span1.innerHTML = "Rs";
                    var collegecardDiv_cardcontentDiv_collegedetailsDiv_discountoffDiv_actualoffDiv_font5P_Span2 = document.createElement("span");
                    collegecardDiv_cardcontentDiv_collegedetailsDiv_discountoffDiv_actualoffDiv_font5P_Span2.className = "secondary-color";
                    collegecardDiv_cardcontentDiv_collegedetailsDiv_discountoffDiv_actualoffDiv_font5P_Span2.innerHTML = "2,000";
                    var collegecardDiv_cardcontentDiv_collegedetailsDiv_discountoffDiv_actualoffDiv_font5P_Span3 = document.createElement("span");
                    collegecardDiv_cardcontentDiv_collegedetailsDiv_discountoffDiv_actualoffDiv_font5P_Span3.className = "third-color";
                    collegecardDiv_cardcontentDiv_collegedetailsDiv_discountoffDiv_actualoffDiv_font5P_Span3.innerHTML = " off + upto Rs";
                    var collegecardDiv_cardcontentDiv_collegedetailsDiv_discountoffDiv_actualoffDiv_font5P_Span4 = document.createElement("span");
                    collegecardDiv_cardcontentDiv_collegedetailsDiv_discountoffDiv_actualoffDiv_font5P_Span4.className = "secondary-color";
                    collegecardDiv_cardcontentDiv_collegedetailsDiv_discountoffDiv_actualoffDiv_font5P_Span4.innerHTML = " 500";
                    var collegecardDiv_cardcontentDiv_collegedetailsDiv_discountoffDiv_actualoffDiv_font5P_Span5 = document.createElement("span");
                    collegecardDiv_cardcontentDiv_collegedetailsDiv_discountoffDiv_actualoffDiv_font5P_Span5.className = "third-color";
                    collegecardDiv_cardcontentDiv_collegedetailsDiv_discountoffDiv_actualoffDiv_font5P_Span5.innerHTML = " wallet!to avail... ";
                    var collegecardDiv_cardcontentDiv_collegedetailsDiv_discountoffDiv_actualoffDiv_font5P_A = document.createElement("a");
                    collegecardDiv_cardcontentDiv_collegedetailsDiv_discountoffDiv_actualoffDiv_font5P_A.href = "#";
                    collegecardDiv_cardcontentDiv_collegedetailsDiv_discountoffDiv_actualoffDiv_font5P_A.innerHTML = "LOGIN";
                    collegecardDiv_cardcontentDiv_collegedetailsDiv_discountoffDiv_actualoffDiv_font5P.append("Flat ", collegecardDiv_cardcontentDiv_collegedetailsDiv_discountoffDiv_actualoffDiv_font5P_Span1, collegecardDiv_cardcontentDiv_collegedetailsDiv_discountoffDiv_actualoffDiv_font5P_Span2, collegecardDiv_cardcontentDiv_collegedetailsDiv_discountoffDiv_actualoffDiv_font5P_Span3, collegecardDiv_cardcontentDiv_collegedetailsDiv_discountoffDiv_actualoffDiv_font5P_Span4, collegecardDiv_cardcontentDiv_collegedetailsDiv_discountoffDiv_actualoffDiv_font5P_Span5, collegecardDiv_cardcontentDiv_collegedetailsDiv_discountoffDiv_actualoffDiv_font5P_A);
                    collegecardDiv_cardcontentDiv_collegedetailsDiv_discountoffDiv_actualoffDiv.append(collegecardDiv_cardcontentDiv_collegedetailsDiv_discountoffDiv_actualoffDiv_font5P);
                    collegecardDiv_cardcontentDiv_collegedetailsDiv_discountoffDiv.append(collegecardDiv_cardcontentDiv_collegedetailsDiv_discountoffDiv_actualoffDiv);


                    collegecardDiv_cardcontentDiv_collegedetailsDiv.append(collegecardDiv_cardcontentDiv_collegedetailsDiv_collegeinfoDiv, collegecardDiv_cardcontentDiv_collegedetailsDiv_collegeaddressDiv, collegecardDiv_cardcontentDiv_collegedetailsDiv_actualaddressDiv, collegecardDiv_cardcontentDiv_collegedetailsDiv_discountoffDiv);

                    // college amenities div container
                    var collegecardDiv_cardcontentDiv_collegefeesamenitiesDiv = document.createElement("div");
                    collegecardDiv_cardcontentDiv_collegefeesamenitiesDiv.className = "college-fees-amenities";

                    var collegecardDiv_cardcontentDiv_collegefeesamenitiesDiv_collegefeestructureDiv = document.createElement("div");
                    collegecardDiv_cardcontentDiv_collegefeesamenitiesDiv_collegefeestructureDiv.className = "college-fee-structure";

                    var collegecardDiv_cardcontentDiv_collegefeesamenitiesDiv_collegefeestructureDiv_feediscountsDiv = document.createElement("div");
                    collegecardDiv_cardcontentDiv_collegefeesamenitiesDiv_collegefeestructureDiv_feediscountsDiv.className = "fee-discounts";
                    var collegecardDiv_cardcontentDiv_collegefeesamenitiesDiv_collegefeestructureDiv_feediscountsDiv_P1 = document.createElement("p");
                    collegecardDiv_cardcontentDiv_collegefeesamenitiesDiv_collegefeestructureDiv_feediscountsDiv_P1.innerHTML = "&#8377; " + numberWithCommas(result.colleges[i].original_fees);
                    var collegecardDiv_cardcontentDiv_collegefeesamenitiesDiv_collegefeestructureDiv_feediscountsDiv_P2 = document.createElement("p");
                    collegecardDiv_cardcontentDiv_collegefeesamenitiesDiv_collegefeestructureDiv_feediscountsDiv_P2.innerHTML = "&#8226; " + result.colleges[i].discount;
                    collegecardDiv_cardcontentDiv_collegefeesamenitiesDiv_collegefeestructureDiv_feediscountsDiv.append(collegecardDiv_cardcontentDiv_collegefeesamenitiesDiv_collegefeestructureDiv_feediscountsDiv_P1, collegecardDiv_cardcontentDiv_collegefeesamenitiesDiv_collegefeestructureDiv_feediscountsDiv_P2);

                    var collegecardDiv_cardcontentDiv_collegefeesamenitiesDiv_collegefeestructureDiv_feepersemesterDiv = document.createElement("div");
                    collegecardDiv_cardcontentDiv_collegefeesamenitiesDiv_collegefeestructureDiv_feepersemesterDiv.className = "fee-per-semester";
                    var collegecardDiv_cardcontentDiv_collegefeesamenitiesDiv_collegefeestructureDiv_feepersemesterDiv_P1 = document.createElement("p");
                    collegecardDiv_cardcontentDiv_collegefeesamenitiesDiv_collegefeestructureDiv_feepersemesterDiv_P1.innerHTML = "&#8377; " + numberWithCommas(result.colleges[i].discounted_fees);
                    var collegecardDiv_cardcontentDiv_collegefeesamenitiesDiv_collegefeestructureDiv_feepersemesterDiv_P2 = document.createElement("p");
                    collegecardDiv_cardcontentDiv_collegefeesamenitiesDiv_collegefeestructureDiv_feepersemesterDiv_P2.className = "font-2";
                    collegecardDiv_cardcontentDiv_collegefeesamenitiesDiv_collegefeestructureDiv_feepersemesterDiv_P2.innerHTML = result.colleges[i].fees_cycle;
                    collegecardDiv_cardcontentDiv_collegefeesamenitiesDiv_collegefeestructureDiv_feepersemesterDiv.append(collegecardDiv_cardcontentDiv_collegefeesamenitiesDiv_collegefeestructureDiv_feepersemesterDiv_P1, collegecardDiv_cardcontentDiv_collegefeesamenitiesDiv_collegefeestructureDiv_feepersemesterDiv_P2);

                    collegecardDiv_cardcontentDiv_collegefeesamenitiesDiv_collegefeestructureDiv.append(collegecardDiv_cardcontentDiv_collegefeesamenitiesDiv_collegefeestructureDiv_feediscountsDiv, collegecardDiv_cardcontentDiv_collegefeesamenitiesDiv_collegefeestructureDiv_feepersemesterDiv);

                    var collegecardDiv_cardcontentDiv_collegefeesamenitiesDiv_collegeamenitiesDiv = document.createElement("div");
                    collegecardDiv_cardcontentDiv_collegefeesamenitiesDiv_collegeamenitiesDiv.className = "college-amenities";
                    var collegecardDiv_cardcontentDiv_collegefeesamenitiesDiv_collegeamenitiesDiv_secondarycolorP = document.createElement("p");
                    collegecardDiv_cardcontentDiv_collegefeesamenitiesDiv_collegeamenitiesDiv_secondarycolorP.className = "secondary-color";
                    collegecardDiv_cardcontentDiv_collegefeesamenitiesDiv_collegeamenitiesDiv_secondarycolorP.innerHTML = result.colleges[i].amenties[0] + " &#8226; " + result.colleges[i].amenties[1];

                    collegecardDiv_cardcontentDiv_collegefeesamenitiesDiv_collegeamenitiesDiv.append(collegecardDiv_cardcontentDiv_collegefeesamenitiesDiv_collegeamenitiesDiv_secondarycolorP);

                    collegecardDiv_cardcontentDiv_collegefeesamenitiesDiv.append(collegecardDiv_cardcontentDiv_collegefeesamenitiesDiv_collegefeestructureDiv, collegecardDiv_cardcontentDiv_collegefeesamenitiesDiv_collegeamenitiesDiv);

                    collegecardDiv_cardcontentDiv.append(collegecardDiv_cardcontentDiv_collegedetailsDiv, collegecardDiv_cardcontentDiv_collegefeesamenitiesDiv);

                    collegecardDiv.append(collegecardDiv_promoteflagDiv, collegecardDiv_cardbannerDiv, collegecardDiv_cardcontentDiv);

                    document.getElementsByClassName("wrapper")[0].appendChild(collegecardDiv);
                }
            }

        })
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function rate(numRate) {
    switch (numRate) {
        case 1:
            return "&#9733;&#9734;&#9734;&#9734;&#9734;";
            break;
        case 2:
            return "&#9733;&#9733;&#9734;&#9734;&#9734;";
            break;
        case 3:
            return "&#9733;&#9733;&#9733;&#9734;&#9734;"
            break;
        case 4:
            return "&#9733;&#9733;&#9733;&#9733;&#9734;"
            break;

        case 5:
            return "&#9733;&#9733;&#9733;&#9733;&#9733;";
            break;
        default:
            return "&#9734;&#9734;&#9734;&#9734;&#9734;";
            break;
    }
}

// function call
loadJson(initialVal, finalVal);

document.addEventListener('scroll', function() {
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        initialVal = initialVal + 10;
        finalVal = finalVal + 10;
        loadJson(initialVal, finalVal);
    }
});
// js end

/* html backup

<!-- college card -->
        <div class="college-card">
            <!-- Flag -->
            <div class="promote-flag">
                <p>PROMOTED</p>
            </div>

            <!-- banner div -->
            <div class="card-banner">

                <!-- rating div -->
                <div class="rating">
                    <p><span class="rating-num">3.9</span>/5<br>Very Good</p>
                </div>

                <!-- quotes div -->
                <div class="quotes">
                    <div class="quo-Dis">
                        <p class="college-quote">Best college 2018</p>
                        <p class="college-distance">2kms away</p>
                    </div>
                    <div class="college-rank">
                        <p>#7 in 260 colleges in north campus</p>
                    </div>
                </div>

            </div>

            <!-- content div -->
            <div class="card-content">
                <!-- college details -->
                <div class="college-details">
                    <!-- college-info -->
                    <div class="college-info">
                        <div class="college-name-stars">
                            <p><span class="college-name gray-dark">Hansraj College Delhi University</span><span class="college-stars">&#9733;&#9733;&#9733;&#9733;&#9734;</span></p>
                        </div>
                    </div>

                    <!-- college-address -->
                    <div class="college-address">
                        <div class="address-landmark">
                            <p class="font-5 gray-dark">Near Vishwavidyalaya Metro Station</p>
                        </div>
                        <div class="address-distance">
                            <p class="font-5 gray-light">| <span>2Kms away from bus stand</span></p>
                        </div>
                    </div>

                    <!-- actual address -->
                    <div class="actual-address">
                        <div class="actual-landmark-distance">
                            <p class="font-5"><span class="secondary-color">93% Match : </span><span class="third-color">2.5kms</span> <span class="gray-light">from GTB Nagar</span><span class="secondary-color">,</span> <span class="third-color">7Kms</span> <span class="gray-light">from Rajiv Chowk</span></p>
                        </div>
                    </div>

                    <!-- actual address -->
                    <div class="discount-off">
                        <div class="actual-off">
                            <p class="font-5">Flat <span class="third-color">Rs</span><span class="secondary-color">2,000</span> <span class="third-color">off + upto Rs</span> <span class="secondary-color">500</span> <span class="third-color">wallet!to avail...</span>                                <a href="#">LOGIN</a></p>
                        </div>
                    </div>
                </div>

                <!-- college-amenities -->
                <div class="college-fees-amenities">
                    <!-- college fee structure -->
                    <div class="college-fee-structure">
                        <!-- fee discounts -->
                        <div class="fee-discounts">
                            <p>&#8377; 6,8756</p>
                            <p>&#8226; 20</p>
                        </div>

                        <!-- per semester fee -->
                        <div class="fee-per-semester">
                            <p>&#8377; 5,768</p>
                            <p class="font-2">Per Semester (3months)</p>
                        </div>
                    </div>

                    <!-- college amenities -->
                    <div class="college-amenities">
                        <p class="secondary-color">Free Cancellation &#8226; Free Wi-Fi</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- college card -->
        <div class="college-card">
            <!-- Flag -->
            <div class="promote-flag">
                <p>PROMOTED</p>
            </div>

            <!-- banner div -->
            <div class="card-banner">

                <!-- rating div -->
                <div class="rating">
                    <p><span class="rating-num">3.9</span>/5<br>Very Good</p>
                </div>

                <!-- quotes div -->
                <div class="quotes">
                    <div class="quo-Dis">
                        <p class="college-quote">Best college 2018</p>
                        <p class="college-distance">2kms away</p>
                    </div>
                    <div class="college-rank">
                        <p>#7 in 260 colleges in north campus</p>
                    </div>
                </div>

            </div>

            <!-- content div -->
            <div class="card-content">
                <!-- college details -->
                <div class="college-details">
                    <!-- college-info -->
                    <div class="college-info">
                        <div class="college-name-stars">
                            <p><span class="college-name gray-dark">Hansraj College Delhi University</span><span class="college-stars">&#9733;&#9733;&#9733;&#9733;&#9734;</span></p>
                        </div>
                    </div>

                    <!-- college-address -->
                    <div class="college-address">
                        <div class="address-landmark">
                            <p class="font-5 gray-dark">Near Vishwavidyalaya Metro Station</p>
                        </div>
                        <div class="address-distance">
                            <p class="font-5 gray-light">| <span>2Kms away from bus stand</span></p>
                        </div>
                    </div>

                    <!-- actual address -->
                    <div class="actual-address">
                        <div class="actual-landmark-distance">
                            <p class="font-5"><span class="secondary-color">93% Match : </span><span class="third-color">2.5kms</span> <span class="gray-light">from GTB Nagar</span><span class="secondary-color">,</span> <span class="third-color">7Kms</span> <span class="gray-light">from Rajiv Chowk</span></p>
                        </div>
                    </div>

                    <!-- actual address -->
                    <div class="discount-off">
                        <div class="actual-off">
                            <p class="font-5">Flat <span class="third-color">Rs</span><span class="secondary-color">2,000</span> <span class="third-color">off + upto Rs</span> <span class="secondary-color">500</span> <span class="third-color">wallet!to avail... </span><a href="#">LOGIN</a></p>
                        </div>
                    </div>
                </div>

                <!-- college-amenities -->
                <div class="college-fees-amenities">
                    <!-- college fee structure -->
                    <div class="college-fee-structure">
                        <!-- fee discounts -->
                        <div class="fee-discounts">
                            <p>&#8377; 6,8756</p>
                            <p>&#8226; 20</p>
                        </div>

                        <!-- per semester fee -->
                        <div class="fee-per-semester">
                            <p>&#8377; 5,768</p>
                            <p class="font-2">Per Semester (3months)</p>
                        </div>
                    </div>
                    <div class="college-amenities">
                        <p class="secondary-color">Free Cancellation &#8226; Free Wi-Fi</p>
                    </div>
                </div>
            </div>
        </div>
*/
