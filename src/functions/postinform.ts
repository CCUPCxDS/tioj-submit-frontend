import axios from 'axios';

export async function postInform(problemId: number, userId: string, password: string, file : File) {
  try {
    const url = import.meta.env.VITE_BACKEND;
    const formData = new FormData();
    formData.append('problemId', problemId.toString());
    formData.append('username', userId);
    formData.append('password', password);
    formData.append('file', file); // 'file'是后端接收文件的参数名

    console.log('Posting data:', formData);
    const response = await axios.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log('Response data:', response.data);
    // 处理响应数据
  } catch (error) {
    console.error('Error:', error);
    // 处理错误情况
  }
}