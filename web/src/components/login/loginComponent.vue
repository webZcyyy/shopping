<template>
    <div class="zcy-login">
        <div class="login-head">
            <i class="iconfont icon-left loginLeftIcon"></i>
            <h2>登录</h2>
        </div>

        <ul class="tabUl">
            <li>
                <a href="javascript:;">
                    快捷登录
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    账号密码登录
                </a>
            </li>
        </ul>

        <div class="login-main1">
            <!-- 手机号登录 -->
            <div class="loginTel">
                <label for="" class="t">
                    手机号
                </label>
                <div class="telNum">
                    <input type="text" id="phoneNum" name="phoneNum" placeholder="请输入手机号" maxlength="11">
                </div>
            </div>

            <div class="telYanZheng">
                <label for="" class="b">
                    手机验证码
                </label>

                <div class="yanZhengMa">
                    <input type="text" id="yan" name="yanNum" placeholder="请输入手机验证码" maxlength="6">
                    <a href="javascript:;" class="getYanNum">获取验证码</a>
                </div>
            </div>
        </div>

        <div class="login-main2">

        </div>

        <button class="toLogin">
            登录
        </button>

        <a href="javascript:;" class="othLogin">门店卡登录</a>
        <a href="javascript:;" class="forgetPwd">忘记密码？</a>

        <div class="quickReg">
            <button>
                快速注册
            </button>
        </div>
    </div>
</template>
<script>
import './login.scss'
export default {
    data () {
        return {
            
        }
    },
    mounted () {
        
    },
    methods: {
        
    },
    components: {
        
    }
}
</script>
