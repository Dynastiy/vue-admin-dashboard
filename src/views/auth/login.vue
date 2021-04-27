<template>
    <div class="log">
        <div class="login mb-3">
            <div>
            <h1 class="mb-4 text-center">Welcome Back</h1>
            </div>

            <div class="mb-5 input-field form-control" id="exampleFormControlInput1">
                <span class="icon"><i class="fa fa-envelope" aria-hidden="true"></i></span>
                <input type="email" class="mail " id="" placeholder="Email Address">
            </div>
            <div class="mb-5 form-control" id="exampleFormControlInput1">
                <span class="icon"><i class="fa fa-lock" aria-hidden="true"></i></span>
                <input type="email" class="pass"  placeholder="Password">
            </div>

            <!-- <button class="btn my-3 py-4 btn-login"> -->
                <router-link class="btn my-3 py-4 btn-login text-white" to="/dashboard"> Login</router-link>
            <!-- </button> -->
            <h5 class="text-center">By clicking Login, you agree to our <span class="terms">terms and conditions</span></h5>
            <div>
            </div>
        </div>

        <div class="background">
            <!-- <bg></bg> -->
        </div>
    </div>
</template>

<script>
// import bg from '@/components/background.vue'

export default {
    components: {
        // bg
    },
    data(){
        return{

        }

    }
}
</script>

<style scoped>
.log {
    margin: 0 !important;
    padding: 0 !important;
}

.login {
    /* position: absolute; */
    /* z-index: 999; */
    width: 60%;
    margin: 0 auto !important;
    /* left: 40%; */
    margin-top: 5rem !important ;
    background: #fff;
    padding: 3rem !important;
    height: 34rem;
    box-shadow: 5px 5px 0px 0px #efefef;
    border-radius: 5px;
    padding-bottom: 3rem !important;
}
.login  h1 {
    color: 0392ce;
}
.login a {
    font-size: 1rem !important;
    color: #0392ce;
}
.login a:hover {
    text-decoration: none;
}
.form-control {
    height: 4rem !important;
    padding: 0 !important;
}
.mail {
    border: none !important;
    margin: 0 auto;
    width: 21.3rem !important;
    height: 3.5rem !important;
}
.mail:focus {
    outline: none !important;
}
.mail::placeholder {
    font-size: 1rem;
    color: #999;
}
.icon {
    margin-right: 0.7rem !important;
    color: #999;
    font-size: 1.5rem;
    position: relative;
    top: 5%;
    margin-left: 0.3rem !important;
}
.pass {
    border: none !important;
    margin: 0 auto;
    width: 21.3rem !important;
    height: 3.5rem !important;
}
.pass::placeholder {
    font-size: 1rem;
    color: #999;
}
.pass:focus {
    outline: none;
}
.btn-login {
    width: 100% !important;
    text-transform: uppercase;
    color: #fff !important;
    font-size: 1.5rem;
    font-weight: bold;
    background: #01445f;
    border: none;
}
.btn-login:hover {
    background: #0392ce;
    transition: 2s;
}
.btn-login router-link {
    color: #fff !important;
    text-decoration: none !important;
}
.terms {
    color: #01455f;
}
</style>