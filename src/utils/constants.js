import { AiFillCreditCard, AiFillBank, AiFillWallet } from "react-icons/ai";
import { LuPiggyBank } from "react-icons/lu";

export const CARD_PAYMENT_KEY = "card";
export const UPI_PAYMENT_KEY = "upi";
export const NET_BANKING_PAYMENT_KEY = "netbanking";
export const WALLET_PAYMENT_KEY = "wallet";

export const PAYMENT_OPTIONS = {
  [CARD_PAYMENT_KEY]: {
    name: "Credit/Debit Card",
    iconClass: "ri-bank-card-fill",
  },
  [UPI_PAYMENT_KEY]: {
    name: "UPI",
    iconClass: "ri-secure-payment-line",
  },
  [NET_BANKING_PAYMENT_KEY]: {
    name: "Net Banking",
    iconClass: "ri-bank-line",
  },
  [WALLET_PAYMENT_KEY]: {
    name: "Wallet",
    iconClass: "ri-wallet-3-line",
  },
};

export const getPaymentOptions = () => {
  return Object.keys(PAYMENT_OPTIONS).map((o) => ({
    key: o,
    name: PAYMENT_OPTIONS[o].name,
    iconClass: PAYMENT_OPTIONS[o].iconClass,
  }));
};

//   Payment Gateways
export const CASHFREE_PG = "cashfree";

// constants
// export const FEATURED_NET_BANKINGS = {
//   HDFC: {
//     key: "HDFCR",
//     name: "HDFC",
//     id: "hdfcr",
//     style: {
//       base: {
//         fontSize: "22px",
//       },
//     },
//   },
//   ICICI: {
//     key: "ICICR",
//     name: "ICICI",
//     id: "icici",
//     style: {
//       base: {
//         fontSize: "22px",
//       },
//     },
//   },

//   SBI: {
//     key: "SBINR",
//     name: "SBI",
//     id: "sbi",
//     style: {
//       base: {
//         fontSize: "22px",
//       },
//     },
//   },
//   KOTAK: {
//     key: "KKBKR",
//     name: "KOTAK",
//     id: "kotak",
//     style: {
//       base: {
//         fontSize: "22px",
//       },
//     },
//   },
// };

// export const FEATURED_NET_BANKINGS_MAP = [
//   ...Object.values(FEATURED_NET_BANKINGS),
// ];



export const renderIcon = (iconClass) => {
        switch (iconClass) {
            case "ri-bank-card-fill":
                return <AiFillCreditCard />;
            case "ri-secure-payment-line":
                return <LuPiggyBank />;
            case "ri-bank-line":
                return <AiFillBank />;
            case "ri-wallet-3-line":
                return <AiFillWallet />;
            default:
                return null;
        }
    };
/*
EXAMPLE
AUBLR: {
    name: "AU Small Finance Bank",
    key: "AUBLR",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3087,
    id: "net-banking-3087",
  },*/
export const NET_BANKINGS = {
  AUBLR: {
    name: "AU Small Finance Bank",
    key: "AUBLR",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3087,
    id: "net-banking-3087",
  },
  AIRPR: {
    name: "Airtel Payments Bank",
    key: "AIRPR",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3123,
    id: "net-banking-3123",
  },
  APGBR: {
    name: "Andhra Pragathi Grameena Bank",
    key: "APGBR",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3094,
    id: "net-banking-3094",
  },
  UTIBR: {
    name: "Axis Bank",
    key: "UTIBR",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3003,
    id: "net-banking-3003",
  },
  UTIBC: {
    name: "Axis Bank Corporate",
    key: "UTIBC",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3071,
    id: "net-banking-3071",
  },
  BDBLR: {
    name: "Bandhan Bank - Retail Banking",
    key: "BDBLR",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3088,
    id: "net-banking-3088",
  },
  BDBLC: {
    name: "Bandhan Bank- Corporate banking",
    key: "BDBLC",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3079,
    id: "net-banking-3079",
  },
  BBKMR: {
    name: "Bank of Bahrain and Kuwait",
    key: "BBKMR",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3095,
    id: "net-banking-3095",
  },
  BARBC: {
    name: "Bank of Baroda - Corporate",
    key: "BARBC",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3060,
    id: "net-banking-3060",
  },
  BARBR: {
    name: "Bank of Baroda - Retail Banking",
    key: "BARBR",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3005,
    id: "net-banking-3005",
  },
  BKIDR: {
    name: "Bank of India",
    key: "BKIDR",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3006,
    id: "net-banking-3006",
  },
  BKIDC: {
    name: "Bank of India - Corporate",
    key: "BKIDC",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3061,
    id: "net-banking-3061",
  },
  MAHBR: {
    name: "Bank of Maharashtra",
    key: "MAHBR",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3007,
    id: "net-banking-3007",
  },
  BARCC: {
    name: "Barclays Corporate- Corporate Banking - Corporate",
    key: "BARCC",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3080,
    id: "net-banking-3080",
  },
  BACBC: {
    name: "Bassien Catholic Coop Bank",
    key: "BACBC",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3096,
    id: "net-banking-3096",
  },
  CSBKR: {
    name: "CSB Bank Limited",
    key: "CSBKR",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3010,
    id: "net-banking-3010",
  },
  CNRBR: {
    name: "Canara Bank",
    key: "CNRBR",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3009,
    id: "net-banking-3009",
  },
  CLBLR: {
    name: "Capital Small Finance Bank",
    key: "CLBLR",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3098,
    id: "net-banking-3098",
  },
  CBIIN: {
    name: "Central Bank of India",
    key: "CBIIN",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3011,
    id: "net-banking-3011",
  },
  CIUBR: {
    name: "City Union Bank Ltd",
    key: "CIUBR",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3028,
    id: "net-banking-3028",
  },
  CRPBR: {
    name: "Corporation Bank",
    key: "CRPBR",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3012,
    id: "net-banking-3012",
  },
  DBSIN: {
    name: "DBS Bank India Limited",
    key: "DBSIN",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3102,
    id: "net-banking-3102",
  },
  DENBC: {
    name: "Dena Bank - Corporate",
    key: "DENBC",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3072,
    id: "net-banking-3072",
  },
  DENBR: {
    name: "Dena Bank - Retail Banking",
    key: "DENBR",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3013,
    id: "net-banking-3013",
  },
  DBSSR: {
    name: "Deutsche Bank",
    key: "DBSSR",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3014,
    id: "net-banking-3014",
  },
  DBSSG: {
    name: "Development Bank of Singapore",
    key: "DBSSG",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3099,
    id: "net-banking-3099",
  },
  DCBIL: {
    name: "Development Credit Bank Ltd.",
    key: "DCBIL",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3015,
    id: "net-banking-3015",
  },
  DNLMR: {
    name: "Dhanlaxmi Bank Ltd",
    key: "DNLMR",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3016,
    id: "net-banking-3016",
  },
  EQTSR: {
    name: "Equitas Small Finance Bank",
    key: "EQTSR",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3092,
    id: "net-banking-3092",
  },
  FEDBR: {
    name: "Federal Bank Ltd",
    key: "FEDBR",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3017,
    id: "net-banking-3017",
  },
  GBMCB: {
    name: "Greater Bombay Coop Bank",
    key: "GBMCB",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3097,
    id: "net-banking-3097",
  },
  HDFCC: {
    name: "HDFC Bank - Corporate",
    key: "HDFCC",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3073,
    id: "net-banking-3073",
  },
  HDFCR: {
    name: "HDFC Bank - Retail Banking",
    key: "HDFCR",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3002,
    id: "net-banking-3002",
  },
  HSBCR: {
    name: "HSBC Bank",
    key: "HSBCR",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3018,
    id: "net-banking-3018",
  },
  ICICR: {
    name: "ICICI Bank",
    key: "ICICR",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3004,
    id: "net-banking-3004",
  },
  IDBIR: {
    name: "IDBI Bank",
    key: "IDBIR",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3019,
    id: "net-banking-3019",
  },
  INBBR: {
    name: "Indian Bank",
    key: "INBBR",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3020,
    id: "net-banking-3020",
  },
  IOBIB: {
    name: "Indian Overseas Bank",
    key: "IOBIB",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3021,
    id: "net-banking-3021",
  },
  INDBR: {
    name: "IndusInd Bank",
    key: "INDBR",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3022,
    id: "net-banking-3022",
  },
  JPMCB: {
    name: "JPMorgan Chase Bank",
    key: "JPMCB",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3024,
    id: "net-banking-3024",
  },
  KBLBR: {
    name: "Karnataka Bank",
    key: "KBLBR",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3025,
    id: "net-banking-3025",
  },
  KKBKR: {
    name: "Kotak Mahindra Bank",
    key: "KKBKR",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3026,
    id: "net-banking-3026",
  },
  KBSLR: {
    name: "Krishna Bhima Samruddhi Local Area Bank",
    key: "KBSLR",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3089,
    id: "net-banking-3089",
  },
  MBGBR: {
    name: "Madhya Bihar Gramin Bank",
    key: "MBGBR",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3100,
    id: "net-banking-3100",
  },
  MAHGB: {
    name: "Maharashtra Gramin Bank",
    key: "MAHGB",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3101,
    id: "net-banking-3101",
  },
  MNPRF: {
    name: "Manappuram Finance Limited",
    key: "MNPRF",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3103,
    id: "net-banking-3103",
  },
  NICOB: {
    name: "New India Cooperative Bank",
    key: "NICOB",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3104,
    id: "net-banking-3104",
  },
  ORBCR: {
    name: "Oriental Bank of Commerce",
    key: "ORBCR",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3027,
    id: "net-banking-3027",
  },
  PMCBR: {
    name: "Punjab &amp; Maharashtra Co-operative Bank",
    key: "PMCBR",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3030,
    id: "net-banking-3030",
  },
  PNBNC: {
    name: "Punjab National Bank - Corporate",
    key: "PNBNC",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3074,
    id: "net-banking-3074",
  },
  PNBNR: {
    name: "Punjab National Bank - Retail Banking",
    key: "PNBNR",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3031,
    id: "net-banking-3031",
  },
  RATNB: {
    name: "RBL Bank",
    key: "RATNB",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3033,
    id: "net-banking-3033",
  },
  SARCB: {
    name: "Saraswat Co-operative Bank Ltd",
    key: "SARCB",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3034,
    id: "net-banking-3034",
  },
  SBRBR: {
    name: "Sberbank",
    key: "SBRBR",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3035,
    id: "net-banking-3035",
  },
  SOINR: {
    name: "South Indian Bank",
    key: "SOINR",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3036,
    id: "net-banking-3036",
  },
  SCBKR: {
    name: "Standard Chartered Bank",
    key: "SCBKR",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3037,
    id: "net-banking-3037",
  },
  SBINB: {
    name: "State Bank of India - Corporate",
    key: "SBINB",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3075,
    id: "net-banking-3075",
  },
  SBINR: {
    name: "State Bank of India - Retail Banking",
    key: "SBINR",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3038,
    id: "net-banking-3038",
  },
  SYNBR: {
    name: "Syndicate Bank",
    key: "SYNBR",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3039,
    id: "net-banking-3039",
  },
  TMBLR: {
    name: "Tamilnad Mercantile Bank Ltd",
    key: "TMBLR",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3040,
    id: "net-banking-3040",
  },
  AMCBR: {
    name: "The Ahmedabad Mercantile Co-op Bank Ltd",
    key: "AMCBR",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3041,
    id: "net-banking-3041",
  },
  COSBR: {
    name: "The Cosmos Cooperative Bank Ltd",
    key: "COSBR",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3042,
    id: "net-banking-3042",
  },
  FEDBK: {
    name: "The Federal Bank Ltd",
    key: "FEDBK",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3043,
    id: "net-banking-3043",
  },
  GBBKR: {
    name: "The Greater Bombay Co-op Bank",
    key: "GBBKR",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3044,
    id: "net-banking-3044",
  },
  GSCBR: {
    name: "The Gujarat State Coop Bank",
    key: "GSCBR",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3045,
    id: "net-banking-3045",
  },
  JAKAR: {
    name: "The Jammu and Kashmir Bank Ltd",
    key: "JAKAR",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3046,
    id: "net-banking-3046",
  },
  KSCAB: {
    name: "The Karnataka State Co-Operative Apex Bank Ltd",
    key: "KSCAB",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3047,
    id: "net-banking-3047",
  },
  KVBIN: {
    name: "The Karur Vysya Bank Ltd",
    key: "KVBIN",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3048,
    id: "net-banking-3048",
  },
  LVBRB: {
    name: "The Lakshmi Vilas Bank Ltd",
    key: "LVBRB",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3049,
    id: "net-banking-3049",
  },
  RKSVB: {
    name: "The Ratnakar Bank Ltd",
    key: "RKSVB",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3050,
    id: "net-banking-3050",
  },
  SARAS: {
    name: "The Saraswat Co-Operative Bank Ltd",
    key: "SARAS",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3051,
    id: "net-banking-3051",
  },
  SVBKR: {
    name: "The Shamrao Vithal Co-Operative Bank Ltd",
    key: "SVBKR",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3052,
    id: "net-banking-3052",
  },
  SPCBL: {
    name: "The Surat People Co-Op Bank Ltd",
    key: "SPCBL",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3053,
    id: "net-banking-3053",
  },
  TNSCB: {
    name: "The Tamil Nadu State Apex Coop Bank Ltd",
    key: "TNSCB",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3054,
    id: "net-banking-3054",
  },
  WBSCB: {
    name: "The West Bengal State Co-operative Bank Ltd",
    key: "WBSCB",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3055,
    id: "net-banking-3055",
  },
  UJVRB: {
    name: "Ujjivan Small Finance Bank",
    key: "UJVRB",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3091,
    id: "net-banking-3091",
  },
  UNIRB: {
    name: "Union Bank of India",
    key: "UNIRB",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3056,
    id: "net-banking-3056",
  },
  UBINB: {
    name: "United Bank of India",
    key: "UBINB",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3057,
    id: "net-banking-3057",
  },
  YESBK: {
    name: "Yes Bank Ltd",
    key: "YESBK",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3059,
    id: "net-banking-3059",
  },
  ZCBLR: {
    name: "Zoroastrian Co-Operative Bank Ltd",
    key: "ZCBLR",
    style: {
      base: {
        fontSize: "22px",
      },
    },
    code: 3121,
    id: "net-banking-3121",
  },
};

export const NET_BANKINGS_MAP = [...Object.values(NET_BANKINGS)];

const walletStyle = {
  base: {
    fontSize: "1.75rem",
  },
};
export const FEATURED_WALLET = {
  PHONEPE: {
    key: "PhonePe",
    id: "phonepe",
    style: walletStyle,
  },
  PAYTM: {
    key: "Paytm",
    id: "paytm",
    style: walletStyle,
  },
  AMAZON: {
    key: "Amazon",
    id: "amazon",
    style: walletStyle,
  },
  AIRTEL: {
    key: "Airtel",
    id: "airtel",
    style: walletStyle,
  },
  OLA: {
    key: "Ola",
    id: "ola",
    style: walletStyle,
  },
  FREECHARGE: {
    key: "Freecharge",
    id: "freecharge",
    style: walletStyle,
  },
  MOBIKWIK: {
    key: "Mobikwik",
    id: "mobikwik",
    style: walletStyle,
  },
  JIO: {
    key: "Jio",
    id: "jio",
    style: walletStyle,
  },
};
export const FEATURED_WALLET_MAP = [...Object.values(FEATURED_WALLET)];
