<template>
    <!--Body-->
    <main>
        <div class="heading">
            <h2>Houses</h2>
            <button class="main"><router-link to="/listing">CREATE NEW</router-link></button>
        </div>

        <div class="search">

            <form autocomplete="off">
                <input type="search" name="search" placeholder="Search for a house" class="search-type">
            </form>


            <ul class="buttons">
                <li><button class="red" style="color: white;">Price</button></li>
                <li><button class="gray" style="color: white;">Size</button></li>
            </ul>
        </div>

        <div class="block-home">
            <router-link to="/detail"><img src="images/img_placeholder_house@3x.png" alt="House-Image"
                    id="House"></router-link>
            <div class="heading-1">
                <h5>Stokvisstraat 132</h5>

                <div class="information">
                    <p class="price">
                        € 500.000
                    </p>
                    <p class="description">
                        1011AA Amsterdam
                    </p>
                    <div class="sizing">
                        <div class="sizing-1"><img src="images/icons/ic_bed@3x.png" alt="icon-bed" id="list-icon">
                            <p>1</p>
                        </div>
                        <div class="sizing-1"><img src="images/icons/ic_bath@3x.png" alt="icon-bath" id="list-icon">
                            <p>1</p>
                        </div>
                        <div class="sizing-1"><img src="images/icons/ic_size@3x.png" alt="index-size" id="list-icon">
                            <p>120m2</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="block-home">
            <router-link to="/detail"><img src="images/img_placeholder_house@3x.png" alt="House-Image"
                    id="House"></router-link>
            <div class="heading-1">
                <h5>Stokvisstraat 132</h5>

                <div class="information">
                    <p class="price">
                        € 500.000
                    </p>
                    <p class="description">
                        1011AA Amsterdam
                    </p>
                    <div class="sizing">
                        <div class="sizing-1"><img src="images/icons/ic_bed@3x.png" alt="icon-bed" id="list-icon">
                            <p>1</p>
                        </div>
                        <div class="sizing-1"><img src="images/icons/ic_bath@3x.png" alt="icon-bath" id="list-icon">
                            <p>1</p>
                        </div>
                        <div class="sizing-1"><img src="images/icons/ic_size@3x.png" alt="index-size" id="list-icon">
                            <p>120m2</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="block-home">
            <router-link to="/detail"><img src="images/img_placeholder_house@3x.png" alt="House-Image"
                    id="House"></router-link>
            <div class="heading-1">
                <h5>Stokvisstraat 132</h5>

                <div class="information">
                    <p class="price">
                        € 500.000
                    </p>
                    <p class="description">
                        1011AA Amsterdam
                    </p>
                    <div class="sizing">
                        <div class="sizing-1"><img src="images/icons/ic_bed@3x.png" alt="icon-bed" id="list-icon">
                            <p>1</p>
                        </div>
                        <div class="sizing-1"><img src="images/icons/ic_bath@3x.png" alt="icon-bath" id="list-icon">
                            <p>1</p>
                        </div>
                        <div class="sizing-1"><img src="images/icons/ic_size@3x.png" alt="index-size" id="list-icon">
                            <p>120m2</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="block-home">
            <router-link to="/detail"><img src="images/img_placeholder_house@3x.png" alt="House-Image"
                    id="House"></router-link>
            <div class="heading-1">
                <h5>Stokvisstraat 132</h5>

                <div class="information">
                    <p class="price">
                        € 500.000
                    </p>
                    <p class="description">
                        1011AA Amsterdam
                    </p>
                    <div class="sizing">
                        <div class="sizing-1"><img src="images/icons/ic_bed@3x.png" alt="icon-bed" id="list-icon">
                            <p>1</p>
                        </div>
                        <div class="sizing-1"><img src="images/icons/ic_bath@3x.png" alt="icon-bath" id="list-icon">
                            <p>1</p>
                        </div>
                        <div class="sizing-1"><img src="images/icons/ic_size@3x.png" alt="index-size" id="list-icon">
                            <p>120m2</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <!--Body-->
</template>

<script>
export default {
    name: "Home"
}
</script>

<style lang="scss">@import "@/styles/style.scss";</style>