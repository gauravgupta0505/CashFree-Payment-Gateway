import { createContext, useContext, useState } from "react";
import { noop } from "utils";
import { CASHFREE_PG } from "utils/constants";
import { defaultTheme } from "utils/defaults";
/*Make a useState for order (object)*/


/*
can add default value to children


*/
const AppContext = createContext({
  loading: false,
  paymentGateway: null,
  // theme: defaultTheme,
  changeTheme: noop,
  initializeApp: noop,
});

export const useApp = () => useContext(AppContext);

export const AppProvider = ({
  paymentGateway: _paymentGateway = CASHFREE_PG,
  // theme: _theme = defaultTheme,
  children 
  }) => {
  const [loading, setLoading] = useState(false);
  const [paymentGateway, setPaymentGateway] = useState(_paymentGateway);
  // const [theme, setTheme] = useState({...defaultTheme, ..._theme})
  

  // const handleThemeChange = (newTheme) => {
  //   const updatedTheme = {...defaultTheme,...theme, ...newTheme};
  //   setTheme(updatedTheme);
  // }


  // theme logic

  const initializeApp = (data, onSuccess = noop, onError = noop) => {
    try {
      setLoading(true);
      const { paymentGateway } = data;
      setPaymentGateway(paymentGateway);
      setLoading(false);
      onSuccess();
    } catch (err) {
      onError(err);
    }
  };

  const contextValue = {
    loading,
    paymentGateway,
    // theme,
    initializeApp,
    // changeTheme: handleThemeChange
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
