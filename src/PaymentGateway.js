import { UIView } from "components/common/UIView";
import "App.css";
import { CASHFREE_PG } from "utils/constants";
import { useEffect } from "react";
import { useApp } from "hooks";
import { ThemeProvider, AppProvider, CashfreeProvider } from "contexts";
function PaymentGateway({ paymentGateway = CASHFREE_PG }) {
    const { initializeApp } = useApp();

    // const { setLight, setDark } = useTheme();

    // Mounting
    useEffect(() => {
        initializeApp({
            paymentGateway,
        });
    }, []);

    return (
        <ThemeProvider>
            <AppProvider>
                <CashfreeProvider>
        <div className="App bg-bgColor text-textColor">
            {/* <Button
                value="light"
                onClick={setLight}
                style={{ marginLeft: "20px" }}
            >
                Light
            </Button>
            <Button
                value="dark"
                onClick={setDark}
                style={{ marginLeft: "20px" }}
            >
                Dark
            </Button> */}
            <UIView gateway={paymentGateway} />
        </div>
        </CashfreeProvider>
        </AppProvider>
        </ThemeProvider>
    );
}

export default PaymentGateway;
