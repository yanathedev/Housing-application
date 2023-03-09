<template>
    <div class="container-details">

        <div class="container-0">
            <div class="main">
                <div class="row-arrow">
                    <p class="back"><a href=""><img src="images/ic_back_grey@3x.png" alt="icon-array"
                                class="icon-array"></a>Back to
                        overview</p>
                    <div class="block">

                        <a href="detail.html"><img src="images/img_placeholder_house@3x.png" alt="House-Image"
                                id="House-detail"></a>

                        <div class="overview">
                            <div class="heading-buttons">
                                <h5>Stokvisstraat 132</h5>
                                <div class="icons">
                                    <router-link to="/edit"><img src="images/ic_edit@3x.png" alt="icon-edit"
                                            id="list-icon-btn"></router-link>
                                    <a href="delete.html"><img src="images/ic_delete@3x.png" alt="icon-delete"
                                            id="list-icon-btn"></a>
                                </div>
                            </div> <!--heading-buttons-->

                            <div class="location">
                                <img src="/images/ic_location@3x.png" alt="icon-location" class="icon-location">
                                <p class="description">
                                    1011AA Amsterdam
                                </p>
                            </div>

                            <div class="icons">
                                <div class="price">
                                    <img src="/images/ic_price@3x.png" alt="icon-price" class="icon-price">
                                    <p class="price">
                                        € 500.000
                                    </p>
                                </div>

                                <div class="sizing">
                                    <img src="/images/icons/ic_size@3x.png" alt="icon-size" class="icon-size">
                                    120m2
                                </div>

                                <div class="build">
                                    <img src="/images/ic_construction_date@3x.png" alt="icon-construction"
                                        class="icon-const">
                                    <p class="build">Built in 1990</p>
                                </div>
                            </div> <!--icons-->

                            <div class="rooms">
                                <div class="bed">
                                    <img src="/images/icons/ic_bed@3x.png" alt="icon-bed" class="icon-bed">
                                    <p class="rooms">1</p>
                                </div>

                                <div class="shower">
                                    <img src="/images/icons/ic_bath@3x.png" alt="icon-shower" class="icon-shower">
                                    <p class="shower">1</p>
                                </div>

                                <div class="garage">
                                    <img src="/images/ic_garage@3x.png" alt="icon-garage" class="icon-garage">
                                    <p class="garage">Yes</p>
                                </div>
                            </div> <!--rooms-->

                            <p class="detail">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci alias
                                officia assumenda veniam eligendi, provident harum fugiat nemo ipsa. Tempore sunt optio cum
                                necessitatibus! Adipisci ea eligendi ut, veritatis illum accusantium explicabo beatae vel?
                            </p>

                        </div> <!--information-->
                    </div> <!--main-->
                </div>

                <div class="aside">
                    <h3>Recommended for you</h3>
                    <div class="small-block">
                        <router-link to="/detail"><img src="images/img_placeholder_house@3x.png" alt="House-Image"
                                id="small-house"></router-link>
                        <div class="heading-1">
                            <label class="street">Stokvisstraat 132</label>

                            <div class="information">
                                <p class="price">
                                    € 500.000
                                </p>
                                <p class="description">
                                    1011AA Amsterdam
                                </p>
                                <div class="sizing-aside">
                                    <div class="sizing-1"><img src="images/icons/ic_bed@3x.png" alt="icon-bed"
                                            id="list-icon">
                                        <p>1</p>
                                    </div>
                                    <div class="sizing-1"><img src="images/icons/ic_bath@3x.png" alt="icon-bath"
                                            id="list-icon">
                                        <p>1</p>
                                    </div>
                                    <div class="sizing-1"><img src="images/icons/ic_size@3x.png" alt="index-size"
                                            id="list-icon">
                                        <p>120m2</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="small-block">
                        <router-link to="/detail"><img src="images/img_placeholder_house@3x.png" alt="House-Image"
                                id="small-house"></router-link>
                        <div class="heading-1">
                            <label>Stokvisstraat 132</label>

                            <div class="information">
                                <p class="price">
                                    € 500.000
                                </p>
                                <p class="description">
                                    1011AA Amsterdam
                                </p>
                                <div class="sizing-aside">
                                    <div class="sizing-1"><img src="images/icons/ic_bed@3x.png" alt="icon-bed"
                                            id="list-icon">
                                        <p>1</p>
                                    </div>
                                    <div class="sizing-1"><img src="images/icons/ic_bath@3x.png" alt="icon-bath"
                                            id="list-icon">
                                        <p>1</p>
                                    </div>
                                    <div class="sizing-1"><img src="images/icons/ic_size@3x.png" alt="index-size"
                                            id="list-icon">
                                        <p>120m2</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="small-block">
                        <router-link to="/detail"><img src="images/img_placeholder_house@3x.png" alt="House-Image"
                                id="small-house"></router-link>
                        <div class="heading-1">
                            <label class="street">Stokvisstraat 132</label>

                            <div class="information">
                                <p class="price">
                                    € 500.000
                                </p>
                                <p class="description">
                                    1011AA Amsterdam
                                </p>
                                <div class="sizing-aside">
                                    <div class="sizing-1"><img src="images/icons/ic_bed@3x.png" alt="icon-bed"
                                            id="list-icon">
                                        <p>1</p>
                                    </div>
                                    <div class="sizing-1"><img src="images/icons/ic_bath@3x.png" alt="icon-bath"
                                            id="list-icon">
                                        <p>1</p>
                                    </div>
                                    <div class="sizing-1"><img src="images/icons/ic_size@3x.png" alt="index-size"
                                            id="list-icon">
                                        <p>120m2</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    </div> <!--container-->
</template>

<script>
export default {
    name: "Detail"
}
</script>

<style lang="scss">
@import "@/styles/details.scss";
</style>