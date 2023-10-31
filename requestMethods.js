import axios from "axios";
  // )?.accessToken;

import AsyncStorage from "@react-native-async-storage/async-storage";
const BASE_URL = "http://10.0.2.2:5000/api/"


  
  // const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
  // const currentUser = user && JSON.parse(user)?.currentUser;
  // const TOKEN = JSON.parse(
  //   JSON.parse(localStorage?.getItem("persist:root"))?.currentUser


// Hàm để lấy dữ liệu từ AsyncStorage
const getDataFromAsyncStorage = async () => {
  try {
    // Sử dụng phương thức getItem để lấy dữ liệu dựa trên khóa
    const data = await AsyncStorage.getItem("persist:root"); // Thay 'khóa_lưu_trữ' bằng khóa bạn đã sử dụng khi lưu trữ dữ liệu.

    if (data !== null) {
      // Dữ liệu đã tồn tại trong AsyncStorage
      console.log('Dữ liệu từ AsyncStorage:', data);
      // Ở đây, bạn có thể xử lý dữ liệu theo cách bạn muốn.
    } else {
      // Không tìm thấy dữ liệu trong AsyncStorage
      console.log('Không có dữ liệu trong AsyncStorage');
    }
  } catch (error) {
    // Xử lý lỗi nếu có
    console.error('Lỗi khi lấy dữ liệu từ AsyncStorage:', error);
  }
};

// Gọi hàm để lấy dữ liệu

  const TOKEN = getDataFromAsyncStorage();
  console.log(TOKEN);

  // const TOKEN =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Yzc4OWJiYzczMjZkMDBjOTU0YjE3NiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5Mjk3ODI4OCwiZXhwIjoxNjkzMjM3NDg4fQ.Naxwjo9FR4m_wyd6nG60p67XOPLLMv5azQAR0-yqqpE";


export const publicRequest = axios.create({
    baseURL:BASE_URL,
})

// export const userRequest = axios.create({
//     baseURL: BASE_URL,
//     headers : {token :`Bearer ${TOKEN}`}
// })