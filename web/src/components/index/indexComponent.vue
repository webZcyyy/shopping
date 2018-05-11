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

            <div class="ul-center">
                <li>
                    <img src="../../assets/index/1.png" alt="">
                    爆款手机
                </li>
                <li>
                    <img src="../../assets/index/2.png" alt="">
                    苏宁超市
                </li>
                <li>
                    <img src="../../assets/index/3.png" alt="">
                    母婴玩具
                </li>
                <li>
                    <img src="../../assets/index/1.png" alt="">
                    时尚服饰
                </li>
                <li>
                    <img src="../../assets/index/1.png" alt="">
                    生活家电
                </li>
                <li style="marginTop: 10px;">
                    <img src="../../assets/index/1.png" alt="">
                    大聚惠
                </li>
                <li style="marginTop: 10px;">
                    <img src="../../assets/index/1.png" alt="">
                    赚钱
                </li>
                <li style="marginTop: 10px;">
                    <img src="../../assets/index/1.png" alt="">
                    领云钻
                </li>
                <li style="marginTop: 10px;">
                    <img src="../../assets/index/1.png" alt="">
                    海外购
                </li>
                <li style="marginTop: 10px;">
                    <img src="../../assets/index/1.png" alt="">
                    分类
                </li>
            </div>

            <div class="toutiao">
                <img src="../../assets/index/toutiao.png" alt="">

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