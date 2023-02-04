<template>
    <div class="login-layout">
        <div class="login-img"></div>
        <div class="login-form">
            <div class="login-title">欢迎访问本系统</div>
            <div class="login-form-box">
                <el-form
                    :model="loginForm"
                    :rules="loginFormRules"
                    label-width="70px"
                >
                    <el-form-item prop="username" label="用户名">
                        <el-input
                            v-model="loginForm.username"
                            placeholder="请输入用户名"
                            clearable
                        />
                    </el-form-item>
                    <el-form-item prop="password" label="密码">
                        <el-input
                            v-model="loginForm.password"
                            placeholder="请输入密码"
                            clearable
                            type="password"
                        />
                    </el-form-item>
                    <el-form-item>
                        <el-button
                            type="primary"
                            class="login-form-button"
                            @click="login"
                        >
                            {{ $t('login.goLogin') }}
                        </el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { loginInterface } from '@/interface/login';
import { loginApi } from '@/api/Login';
import { useUserStore } from '@/store';
import { useRouter } from 'vue-router';
const userStore = useUserStore();
const router = useRouter();
const loginForm: loginInterface = reactive({
    username: '',
    password: '',
});
const loginFormRules = {
    username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
};
const login = async () => {
    let res = await loginApi(loginForm);
    let { token } = res;
    userStore.setToken(token);
    await router.push('/');
};
</script>

<style scoped lang="less">
.login-layout {
    display: flex;
    height: 100%;
    .login-img {
        flex: 1;
        background: url('@/assets/images/login.png') no-repeat;
        background-size: cover;
    }
    .login-form {
        flex: 1.5;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 90%;
        .login-title {
            font-size: 30px;
            font-weight: 600;
            text-align: center;
            margin-bottom: 50px;
            margin-left: 40px;
        }
        .login-form-box {
            width: 400px;
            .login-form-button {
                margin-top: 20px;
                width: 100%;
            }
        }
    }
}
</style>
