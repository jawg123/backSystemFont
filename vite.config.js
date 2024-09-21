import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'

const pathResolve =dir =>resolve(__dirname,dir)
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  pluginOptions:{
	  'style-resources-loader':{
		  prePrecessor:'scss',
		  patterns:[]
	  }
  },
  server:{
	  port:8080,//默认启动时的端口号
	  open:true,//自动打开默认浏览器
	  cors:true,//允许跨域
  },
  resolve:{
	  alias:{
		  '@':pathResolve('./src') //设置'@'指向'src'目录
	  }
  },
  define: {
      // 启用生产环境构建下激活不匹配的详细警告
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'true'
    }
})

