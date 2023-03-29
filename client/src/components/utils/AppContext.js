/* eslint-disable react-hooks/exhaustive-deps */
import Cookie from "js-cookie";
import { createContext, useContext, useEffect, useState } from "react";


const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

function AppProvider(props) {
  const [ appState, setAppState ] = useState({ user: null });
  const [ appReady, setAppReady ] = useState(false);

  async function lookUpUser() {
    const authCheck = await fetch("/api/user/lookup");
    const checkResult = await authCheck.json();
    if( checkResult && checkResult.result === "success" ){
      setAppState({...appState, user: checkResult.payload});
      setAppReady(true);
    } else {
      setAppReady(true);
    }
  };

  function logout() {
    Cookie.remove("auth-token");
    window.location.href = "/";
  };

  useEffect(() => {
    if( !appState.user ) {
      lookUpUser();
    }
  }, [appState.user]);

  return (
    <>
      { appReady === true && (
        <AppContext.Provider value={{ appState, setAppState, logout }}>
          { props.children }
        </AppContext.Provider>
      )}
    </>
  )
};

const AppConsumer = AppContext.Consumer;
export { AppContext, AppConsumer, AppProvider };