<template>
        <main>
            <form action="action_page.php" id="form">
                <div class="container">
                    <p class="back"><a href="detail.html"><img src="images/ic_back_grey@3x.png" alt="icon-array"
                                class="icon-array"></a>Back to detail page</p>
                    <h2 class="small-h2">Edit listing</h2>
                </div>
        
                    <div class="input-group">
                        <label for="street">Street name*</label>
                        <input type="text" name="street" id="street" placeholder="Enter the street name" />
                    </div>
        
                    <div class="display-connected">
                        <div class="input-group">
                            <label for="number">House number*</label>
                            <input type="text" name="number" id="number" placeholder="Enter house numbery" />
                        </div>
        
                        <div class="input-group">
                            <label id="optional">Addition (optional)</label>
                            <input type="text" id="optional" placeholder="e.g.A" />
                        </div>
                    </div>
        
                    <div class="input-group">
                        <label for="post">Postal code*</label>
                        <input type="text" name="post" id="post" placeholder="e.g.1000 AA" />
                    </div>
        
                    <div class="input-group">
                        <label for="city">City*</label>
                        <input type="text" name="city" id="city" placeholder="e.g. Utrecht" />
                    </div>
        
                    <label for="">Upload picture (PNG or JPG*)</label>
                    <div class="image-upload">
                        <label for="file-input">
                            <img src="images/input-square(1).png" id="square" />
                        </label>
        
                        <input id="file-input" type="file" />
                    </div>
        
                    <div class="input-group">
                        <label for="price">Price*</label>
                        <input type="text" name="price" id="price" placeholder="e.g. €150.000" />
                    </div>
        
                    <div class="display-connected">
                        <div class="input-group">
                            <label for="size">Size*</label>
                            <input type="text" name="size" id="size" placeholder="e.g. 60m2" />
                        </div>
        
                        <div class="input-group">
                            <label id="garage">Garage*</label>
                            <select name="garage" id="garage" required>
                                <option value="select">Select</option>
                                <option value="option1">Option-1</option>
                                <option value="option2">Option-2</option>
                            </select>
                        </div>
                    </div>
        
                    <div class="display-connected">
                        <div class="input-group">
                            <label for="bedrooms">Bedrooms*</label>
                            <input type="text" name="bedrooms" id="bedrooms" placeholder="Enter amount" />
                        </div>
        
                        <div class="input-group">
                            <label for="bathrooms" id="garage">Bathrooms*</label>
                            <input type="text" name="bathrooms" id="bathrooms" placeholder="Enter amount" />
                        </div>
                    </div>
        
                    <div class="input-group">
                        <label for="construction">Construction date*</label>
                        <input type="text" name="construction" id="construction" placeholder="e.g.1990" />
                    </div>
        
                    <div class="input-group">
                        <label for="description">Description*</label>
                        <input type="text" id="description">
                    </div>
        
                    <div class="input-group full">
                        <button type="submit" class="submit">SAVE</button>
                        <div class="clear"></div>
                    </div>
        
                    <div class="errors">
        
                    </div>
            </form>
        </main>
</template>

<script>
export default {
name: "Edit",
components: {
}
}

</script>

<style lang="scss" scoped>
    @import "@/styles/listing.scss";
</style>