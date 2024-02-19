<script>
import Form from '$lib/widgets/Form.svelte';


export let infoHeading;
export let tinyTopText;
export let infoPara1;
export let infoPara2;
export let imgUrl;
export let imgAlt
export let marginLeft = "5%"
</script>

<div class="catering-container">
<h2 class="info-heading" style="margin-left: {marginLeft}">{infoHeading}</h2>
<div class="info-container" style="margin-left: {marginLeft}">
    <div class="form-container">
        <Form></Form>
    </div>
    <hr class="separator">
        <div class="info-text-container">
            <p class="info-para">{infoPara1}</p>
            <p class="info-para">{infoPara2}</p>

        </div>
</div>
</div>

<style type="text/scss">
@import '../styles/theme.scss';
@import '../styles/breakpoints.scss';

.catering-container {
    width: 100%;
    margin: 0 auto;
    background: $secondary;
    padding: 20px 0;

}

.separator {
    height: 400px;
    width: 1px;
    background-color: #eaeaea;
    order: 2;

        @include for-size(tablet-landscape-down) {
            display: none;
        }
}

.info-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 90%;
    max-width: 100%;
    background-color: $secondary;
    margin: 0 auto;
    // padding-right: 2%;
    

        @include for-size(tablet-landscape-down) {
                padding: 50px 5%;
        }
    
        //  @include for-size(tablet-landscape-down) {
        //         padding: 50px 5%;
        // }

    @include for-size(phone-only) {
        flex-wrap: wrap;
    }
    @include for-size(tablet-portrait-up) {
                flex-wrap: wrap;

}

@include for-size(tablet-landscape-up) {
            flex-wrap: wrap;
}

@include for-size(desktop-up) {
            flex-wrap: nowrap;
}
}

.form-container {
    display: flex;
    justify-content: left;
    width: 50%;
         @include for-size(phone-only) {
        width: 100%;
        justify-content: center;

    }
     @include for-size(tablet-landscape-up) {

        justify-content: flex-end;
        // margin-left: 80px;

        order: 3;
     }

    @include for-size(tablet-landscape-down) {
        order: 3;
        justify-content: center;
        margin-left: 0;
        width: 70%;


    }
}
.info-img {
    // width: 400px;
    // height: 400px;
}

.info-text-container {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @include for-size(phone-only) {
           

        }

         @include for-size(tablet-landscape-up) {
            order: 1;
         }

                  @include for-size(tablet-landscape-down) {
                     width: 90%;
                    margin-top: 30px;
                    margin-left: $body-left-margin;
                    margin-right: $body-right-margin;
                    align-items: center;
                    order: 1;
                  }

            @include for-size(desktop-up) {
                    width: 40%;
            }
}

.tiny-text {
    color: $white;
    font-size: 18px;
    margin-bottom: 20px;
}
.info-heading {
    color: $white;
    margin-left: 5%;
    margin-bottom: 20px;

            @include for-size(tablet-landscape-down) {
                margin-left: 0;
             margin-bottom: 0px;

            }
}

.info-para {
    margin: 10px 0;
    color: $white;

        @include for-size(tablet-landscape-down) {
            text-align: center;
        }
}




</style>