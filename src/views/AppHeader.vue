<template>
    <!--Navigatiom menu-->
    <nav>
        <ul>
            <li>
                <router-link to="/"><img src="images/img_logo_dtt@3x.png" alt="Logo" id="Logo"></router-link>
            </li>
    
            <li>
                <router-link to="/" id="houses">Houses</router-link>
            </li>
            <li>
                <router-link to="/about" id="about-link">About</router-link>
            </li>
        </ul>
    </nav>
    <!--Navigatiom menu-->
</template>

<script>
export default {
    name: "AppHeader"
}
</script>

<style lang="scss" scoped>
    @import "@/styles/_nav.scss";

    nav .active-link {
        color: rgba(0, 0, 0, 0.7);
        font-weight: bold;
    }
</style>