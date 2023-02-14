module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/listing.scss";
                        @import "@/styles/details.scss";
                        @import "@/styles/about.scss";
                        @import "@/styles/style.scss";
                        @import "@/styles/_align.scss";
                        @import "@/styles/_fonts.scss";
                        @import "@/styles/_mixin.scss";
                        @import "@/styles/_nav.scss";
                        @import "@/styles/_variables.scss";
                        `   
      }
    }
  }
};
