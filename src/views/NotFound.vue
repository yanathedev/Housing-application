<template>
    <main>
        <div class="heading">
            <h2>Houses</h2>
            <button class="main">CREATE NEW</button>
        </div>
    
        <div class="search">
            <form autocomplete="off">
                <input type="search" name="search" placeholder="Search for a house" class="search-type">
            </form>
            <ul class="buttons">
                <li><button class="red" style="color:white">Price</button></li>
                <li><button class="gray" style="color:white">Size</button></li>
            </ul>
        </div>
    
    
        <img src="images/img_empty_houses@3x.png" alt="Empty-House" id="empty"><br>
        <p class="empty">No result found.<br>Please try another keyword.</p>
    </main>
</template>

<script>
export default {
    name: "Empty"
}

</script>

<style>

</style>