// import './App.css';
// import Ex_01_usestart from './All_Task/dailytask/Ex_01_usestart'
// import Displaydata from './All_Task/ex_01_usestate/Displaydata'
// import Card from './All_Task/ex_02_readmore/Card'
// import Slider from './All_Task/ex_03_slider/Slider'
// import DisplayValue from './All_Task/ex_04_CRUD/DisplayValue'
// import Reg from './All_Task/ex_05_formik_form/Reg'
// import RegFormikMaterial from './All_Task/ex_05_formik_form/RegFormikMaterial';
// import RegWithDesignuseFormik from './All_Task/ex_05_formik_form/RegWithDesignuseFormik';
// import FormikDynamicForm from './All_Task/ex_06_dynamic_form/FormikDynamicForm'
// import NormalDynamicForm from './All_Task/ex_06_dynamic_form/NormalDynamicForm'
// import EmpReg from './All_Task/ex_07_EmpForm/EmpReg';
// import Home from './All_Task/ex_08_Add_to_cart/Home';
import { Provider } from "react-redux";
import store from "./All_Task/Redux/store/store";
import Counter from "./All_Task/ex_09_redux_counter/Counter";
import ProductCard from "./All_Task/ex_09_redux_counter/ProductCard";
import Navbar from "./All_Task/CommonComponant/Navbar";
// import User from './All_Task/Props/User';
// import CRUD from './All_Task/ex_04.1 CRUD/CRUD';
// import store from './All_Task/ex_04.1 CRUD/Redux/Store/store';
// import { Provider } from 'react-redux';
// import CustomForm from './All_Task/ex_10_Custom_Validation/CustomForm';
// import Ex_02_useStateForm from './All_Task/dailytask/Ex_02_useStateForm';
import { React, useState } from "react";
import Form from "./All_Task/ex_11_UseContext/Form";
import Header from "./All_Task/ex_11_UseContext/Header";
import lanContext from "./All_Task/ex_11_UseContext/LanContext";

function App() {
  const [lan, setLan] = useState("en");

  return (
    // <Ex_01_usestart/>
    // <Ex_02_useStateForm />
    // <Displaydata/>
    // <Card/>
    // <Slider/>
    // <DisplayValue/>
    // <Reg />
    // <RegFormikMaterial/>
    // <RegWithDesignuseFormik />
    // <FormikDynamicForm />
    // <NormalDynamicForm/>
    // <EmpReg />
    // <User />
    // <Home/>

    // 4.1 CRUD

    // <Provider store={store} >
    //   <CRUD />
    // </Provider>

    // 09 redux_counter

    <Provider store={store}>
      {/* <Counter /> */}
      <Navbar />
      <ProductCard />
    </Provider>

    // 11 UseContext
    // <>
    //   <lanContext.Provider value={{ lan, setLan }}>
    //     <Header />
    //     <Form />
    //   </lanContext.Provider>
    // </>
    // <CustomForm />
  );
}

export default App;
