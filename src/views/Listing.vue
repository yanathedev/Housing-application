<template>
    <body>
        <form action="action_page.php" id="form">
            <div class="container-listing">
                <p class="back"><router-link to="/detail"><img src="images/ic_back_grey@3x.png" alt="icon-array"
                            class="icon-array"></router-link>Back to overview</p>
                <h2 class="small-h2">Create new listing</h2>
            </div>

            <div class="input-group">
                <label for="street">Street name*</label>
                <input type="text" v-model="formData.streetName" name="street" id="street"
                    placeholder="Enter the street name" />
            </div>

            <div class="display-connected">
                <div class="input-group">
                    <label for="number">House number*</label>
                    <input type="text" v-model="formData.houseNumber" name="number" id="number"
                        placeholder="Enter house numbery" />
                </div>

                <div class="input-group">
                    <label id="optional">Addition (optional)</label>
                    <input type="text" v-model="formData.numberAddition" id="optional" placeholder="e.g.A" />
                </div>
            </div>

            <div class="input-group">
                <label for="post">Postal code*</label>
                <input type="text" v-model="formData.zip" name="post" id="post" placeholder="e.g.1000 AA" />
            </div>

            <div class="input-group">
                <label for="city">City*</label>
                <input type="text" v-model="formData.city" name="city" id="city" placeholder="e.g. Utrecht" />
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
                <input type="text" v-model="formData.price" name="price" id="price" placeholder="e.g. €150.000" />
            </div>

            <div class="display-connected">
                <div class="input-group">
                    <label for="size">Size*</label>
                    <input type="text" v-model="formData.size" name="size" id="size" placeholder="e.g. 60m2" />
                </div>

                <div class="input-group">
                    <label id="garage">Garage*</label>
                    <select name="garage" v-model="formData.hasGarage" id="garage" required>
                        <option value="select">Select</option>
                        <option value="option1">Option-1</option>
                        <option value="option2">Option-2</option>
                    </select>
                </div>
            </div>

            <div class="display-connected">
                <div class="input-group">
                    <label for="bedrooms">Bedrooms*</label>
                    <input type="text" v-model="formData.bedrooms" name="bedrooms" id="bedrooms"
                        placeholder="Enter amount" />
                </div>

                <div class="input-group">
                    <label for="bathrooms" id="garage">Bathrooms*</label>
                    <input type="text" v-model="formData.bathrooms" name="bathrooms" id="bathrooms"
                        placeholder="Enter amount" />
                </div>
            </div>

            <div class="input-group">
                <label for="construction">Construction date*</label>
                <input type="text" v-model="formData.constructionYear" name="construction" id="construction"
                    placeholder="e.g.1990" />
            </div>

            <div class="input-group">
                <label for="description">Description*</label>
                <input type="text" v-model="formData.description" id="description">
            </div>

            <div class="input-group full">
                <button @click.prevent="addProperty" type="submit" class="submit">SAVE</button>
                <div class="clear"></div>
            </div>

            <div class="errors">

            </div>
        </form>
    </body>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            formData: {
                streetName: "",
                houseNumber: "",
                numberAddition: "",
                zip: "",
                city: "",
                price: "",
                size: "",
                hasGarage: "",
                bedrooms: "",
                bathrooms: "",
                constructionYear: "",
                description: ""
            }
        }
    },

    methods: {
        addProperty() {
            axios.post("https://api.intern.d-tt.nl/api/houses", this.formData)
                .then(response => {
                    console.log(response)
                })
        }
    }
}

</script>

<style lang="scss" scoped>@import "@/styles/listing.scss";</style>