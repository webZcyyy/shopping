<template>
    <div class="zcy-index">
        <HeaderComponent></HeaderComponent>
        <div class="index-main">
            <div class="banner">
                <img src="../../assets/index/152566655741897112.jpg" alt="">
            </div>
            <div class="showActive">
                <img src="../../assets/index/152587128065439746.gif" alt="">
            </div>
        </div>
        <FooterComponent></FooterComponent>
    </div>
</template>
<script>
import './index.scss'
import { Progress } from 'mint-ui';
import HeaderComponent from '../header/headerComponent'
import FooterComponent from '../footer/footerComponent'
export default {
    data () {
        return{
            
        }
    },
    mounted () {

    },
    methods: {

    },
    components: {
        HeaderComponent,
        FooterComponent
    }
}
</script>