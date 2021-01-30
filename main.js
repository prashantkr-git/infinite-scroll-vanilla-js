// js start
$(document).ready(function() {
    var finalVal, initialVal;
    initialVal = 0;
    finalVal = 10;
    // function definition to fetch college json data
    function loadJson(iVal, dataRow) {
        $.getJSON('colleges.json').then(function(result) {
            // console.log(result);
            var i, divHtml;
            if (result.colleges.length > 0) {
                // $(".wrapper").empty();
                for (i = iVal; i < dataRow; i++) {
                    if (result.colleges[i].promoted) {
                        var divHtml = '<div class="college-card"><div class="promote-flag"><p>PROMOTED</p></div><div class="card-banner"><div class="rating"><p><span class="rating-num">' + result.colleges[i].rating + '</span>/5<br>' + result.colleges[i].rating_remarks + '</p></div><div class="quotes"><div class="quo-Dis"><p class="college-quote">' + result.colleges[i].tags[0] + '</p><p class="college-distance">' + result.colleges[i].tags[1] + '</p></div><div class="college-rank"><p>#' + result.colleges[i].ranking + '</p></div></div></div><div class="card-content"><div class="college-details"><div class="college-info"><div class="college-name-stars"><p><span class="college-name gray-dark">' + result.colleges[i].college_name + '</span><span class="college-stars">' + rate(result.colleges[i].rating) + '</span></p></div></div><div class="college-address"><div class="address-landmark"><p class="font-5 gray-dark">' + result.colleges[i].nearest_place[0] + '</p></div><div class="address-distance"><p class="font-5 gray-light">| <span>' + result.colleges[i].nearest_place[1] + '</span></p></div></div><div class="actual-address"><div class="actual-landmark-distance"><p class="font-5"><span class="secondary-color">93% Match : </span><span class="third-color">2.5kms</span> <span class="gray-light">from GTB Nagar</span><span class="secondary-color">,</span> <span class="third-color">7Kms</span> <span class="gray-light">from Rajiv Chowk</span></p></div></div><div class="discount-off"><div class="actual-off"><p class="font-5">Flat <span class="third-color">Rs</span><span class="secondary-color">2,000</span> <span class="third-color">off + upto Rs</span> <span class="secondary-color">500</span> <span class="third-color">wallet!to avail... </span><a href="#">LOGIN</a></p></div></div></div><div class="college-fees-amenities"><div class="college-fee-structure"><div class="fee-discounts"><p>&#8377; ' + numberWithCommas(result.colleges[i].original_fees) + '</p><p>&#8226; ' + result.colleges[i].discount + '</p></div><div class="fee-per-semester"><p>&#8377; ' + numberWithCommas(result.colleges[i].discounted_fees) + '</p><p class="font-2">' + result.colleges[i].fees_cycle + '</p></div></div><div class="college-amenities"><p class="secondary-color">' + result.colleges[i].amenties[0] + ' &#8226; ' + result.colleges[i].amenties[1] + '</p></div></div></div></div>';

                        // bind template
                        $(".wrapper").append(divHtml);
                    } else {
                        var divHtml = '<div class="college-card"><div class="card-banner"><div class="rating"><p><span class="rating-num">' + result.colleges[i].rating + '</span>/5<br>' + result.colleges[i].rating_remarks + '</p></div><div class="quotes"><div class="quo-Dis"><p class="college-quote">' + result.colleges[i].tags[0] + '</p><p class="college-distance">' + result.colleges[i].tags[1] + '</p></div><div class="college-rank"><p>#' + result.colleges[i].ranking + '</p></div></div></div><div class="card-content"><div class="college-details"><div class="college-info"><div class="college-name-stars"><p><span class="college-name gray-dark">' + result.colleges[i].college_name + '</span><span class="college-stars">&#9733;&#9733;&#9733;&#9733;&#9734;</span></p></div></div><div class="college-address"><div class="address-landmark"><p class="font-5 gray-dark">' + result.colleges[i].nearest_place[0] + '</p></div><div class="address-distance"><p class="font-5 gray-light">| <span>' + result.colleges[i].nearest_place[1] + '</span></p></div></div><div class="actual-address"><div class="actual-landmark-distance"><p class="font-5"><span class="secondary-color">93% Match : </span><span class="third-color">2.5kms</span> <span class="gray-light">from GTB Nagar</span><span class="secondary-color">,</span> <span class="third-color">7Kms</span> <span class="gray-light">from Rajiv Chowk</span></p></div></div><div class="discount-off"><div class="actual-off"><p class="font-5">Flat <span class="third-color">Rs</span><span class="secondary-color">2,000</span> <span class="third-color">off + upto Rs</span> <span class="secondary-color">500</span> <span class="third-color">wallet!to avail... </span><a href="#">LOGIN</a></p></div></div></div><div class="college-fees-amenities"><div class="college-fee-structure"><div class="fee-discounts"><p>&#8377; ' + result.colleges[i].original_fees + '</p><p>&#8226; ' + result.colleges[i].discount + '</p></div><div class="fee-per-semester"><p>&#8377; ' + result.colleges[i].discounted_fees + '</p><p class="font-2">' + result.colleges[i].fees_cycle + '</p></div></div><div class="college-amenities"><p class="secondary-color">' + result.colleges[i].amenties[0] + ' &#8226; ' + result.colleges[i].amenties[1] + '</p></div></div></div></div>';

                        // bind template
                        $(".wrapper").append(divHtml);
                    }
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

    $(document).on('scroll', function() {
        if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
            initialVal = initialVal + 10;
            finalVal = finalVal + 10;
            loadJson(initialVal, finalVal);
        }
    });

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
                    <div class="college-amenities">
                        <p class="secondary-color">Free Cancellation &#8226; Free Wi-Fi</p>
                    </div>
                </div>
            </div>
        </div>
*/