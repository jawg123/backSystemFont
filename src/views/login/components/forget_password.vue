<template>
	<!-- 忘记密码 -->
	<el-dialog v-model="state.forgetPasswordDialog" title="忘记密码" width="400px">
		<el-form class="login-form" :label-position="labelPosition" :rules="rules">
			<el-form-item label="请输入您的个人账号" prop="account">
				<el-input v-model="forgetData.account" placeholder="请输入您的个人账号" />
			</el-form-item>
			<el-form-item label="请输入您的个人邮箱" prop="email">
				<el-input v-model="forgetData.email" placeholder="请输入您的个人邮箱" />
			</el-form-item>
		</el-form>
		<!-- 底部内容 -->
		<template #footer>
		      <div class="dialog-footer">
		        <el-button @click="state.forgetPasswordDialog = false">取消</el-button>
		        <el-button type="primary" @click="openChangePassword">
		          下一步
		        </el-button>
		      </div>
		    </template>
	</el-dialog>
	<!-- 修改密码 -->
	<el-dialog v-model="state.changePasswordDialog" title="修改密码" width="400px">
		<el-form class="login-form" :label-position="labelPosition" :rules="rules">
			<el-form-item label="请输入您的新密码" prop="password">
				<el-input v-model="forgetData.account" placeholder="请输入您的新密码" />
			</el-form-item>
			<el-form-item label="请再次输入您的新密码" prop="repassword">
				<el-input v-model="forgetData.email" placeholder="请再次输入您的新密码" />
			</el-form-item>
		</el-form>
		<!-- 底部内容 -->
		<template #footer>
		      <div class="dialog-footer">
		        <el-button @click="state.changePasswordDialog = false">取消</el-button>
		        <el-button type="primary" @click="state.changePasswordDialog = false">
		          确定
		        </el-button>
		      </div>
		    </template>
	</el-dialog>
</template>

<script lang="ts" setup>
	import {reactive, ref} from 'vue'
	
	// 表单对齐方式
	const labelPosition = ref('top');
	
	// 表单对象接口
	interface forgetData{
		account:number,
		email:string,
		password:string,
		repassword:string
	}
	// 表单对象
	const forgetData:forgetData =reactive({
		account:null,
		email:'',
		password:'',
		repassword:''
	})
	// 控制弹窗 默认关闭
	const state =reactive({
		forgetPasswordDialog:false,
		changePasswordDialog:false
	})
	// 打开窗口
	const open =()=>{
		state.forgetPasswordDialog =true;
	}
	
	// 打开修改密码的弹窗
	const openChangePassword =()=>{
		state.changePasswordDialog =true;
		state.forgetPasswordDialog =false;
	}
	
	// 表单规则
	const rules = reactive({
		account: [
		    { required: true, message: '请输入您的个人账号', trigger: 'blur' },
		  ],
		email: [
		    { required: true, message: '请输入您的个人邮箱', trigger: 'blur' },
		  ],
		password: [
		    { required: true, message: '请输入您想修改的密码', trigger: 'blur' },
		  ],
		repassword: [
		    { required: true, message: '请再次输入您想修改的密码', trigger: 'blur' },
		  ],  
	})
	defineExpose({
		open
	})
</script>

<style lang="scss" scoped>
</style>