import chipCardImg from '../assets/Maindashicons/Chip_Card.png';
import chipCardDarkImg from '../assets/Maindashicons/Chip_Card (1).png';
import headerAvatarImg from '../assets/Maindashicons/pexels-christina-morillo-1181690 1.png';
import liviaAvatarImg from '../assets/Maindashicons/pexels-julia-volk-5273755 1.png';
import randyAvatarImg from '../assets/Maindashicons/marcel-strauss-Uc_tOqa_jDY-unsplash 1.png';
import workmanAvatarImg from '../assets/Maindashicons/emanuel-minca-jYv069cQuB8-unsplash 1.png';
import depositCardIcon from '../assets/Maindashicons/Group 313.png';
import depositPaypalIcon from '../assets/Maindashicons/Group 314.png';
import jemiWilsonIcon from '../assets/Maindashicons/Group 315.png';
import mastercardLogo from '../assets/Maindashicons/Group 17.png';
import mastercardLightLogo from '../assets/Maindashicons/Group 17 (1).png';
import glyphIcon from '../assets/Maindashicons/Glyph.png';
import serviceIcon from '../assets/Maindashicons/service 1.png';
import userIcon from '../assets/Acc/Vector (6).png';

import moneyBagIcon from '../assets/In/money-bag-of-dollars 1.png';
import pieChartIcon from '../assets/In/pie-chart 1.png';
import repeatIcon from '../assets/In/repeat 1.png';
import appleIcon from '../assets/In/Group (2).png';
import googleIcon from '../assets/In/Group 249.png';
import teslaIcon from '../assets/In/Vector (7).png';
import appleStoreAccIcon from '../assets/Acc/apple 2 1.png';

import ccLockIcon from '../assets/CC/002-padlock.png';
import ccGoogleIcon from '../assets/CC/003-google-glass-logo.png';
import ccCardYellowIcon from '../assets/CC/Group (2).png';
import ccCardPinkIcon from '../assets/CC/Group (3).png';
import ccCardBlueIcon from '../assets/CC/Group (4).png';
import ccBlockCardIcon from '../assets/CC/Group (5).png';
import ccAppleIcon from '../assets/CC/Vector (7).png';

export const assetImages = {
  chipCardImg,
  chipCardDarkImg,
  headerAvatarImg,
  liviaAvatarImg,
  randyAvatarImg,
  workmanAvatarImg,
  depositCardIcon,
  depositPaypalIcon,
  jemiWilsonIcon,
  mastercardLogo,
  mastercardLightLogo,
  glyphIcon,
  serviceIcon,
  userIcon,
  moneyBagIcon,
  pieChartIcon,
  repeatIcon,
  appleIcon,
  googleIcon,
  teslaIcon,
};

export const mockUser = {
  name: "Charlene Reed",
  role: "Premium Member",
  email: "charlenereed@gmail.com",
  password: "••••••••••••",
  avatar: headerAvatarImg,
  username: "Charlene Reed",
  dob: "25 January 1990",
  presentAddress: "San Jose, California, USA",
  permanentAddress: "San Jose, California, USA",
  city: "San Jose",
  postalCode: "45962",
  country: "USA",
  timeZone: "(GMT-07:00) Pacific Time",
  currency: "USD ($)",
  twoFactorEnabled: true,
  emailNotifications: true,
  smsNotifications: false,
};

export const mockCards = [
  {
    id: "card-1",
    balance: "$5,756",
    cardHolder: "Eddy Cusuma",
    validThru: "12/22",
    cardNumber: "3778 **** **** 1234",
    type: "primary", // Emerald/Teal gradient theme
    network: "mastercard",
    isPrimary: true,
    chip: chipCardImg,
    logo: mastercardLogo,
  },
  {
    id: "card-2",
    balance: "$5,756",
    cardHolder: "Eddy Cusuma",
    validThru: "12/22",
    cardNumber: "3778 **** **** 1234",
    type: "accent",
    network: "mastercard",
    isPrimary: false,
    chip: chipCardImg,
    logo: mastercardLogo,
  },
  {
    id: "card-3",
    balance: "$5,756",
    cardHolder: "Eddy Cusuma",
    validThru: "12/22",
    cardNumber: "3778 **** **** 1234",
    type: "secondary", // Slate light theme
    network: "mastercard",
    isPrimary: false,
    chip: chipCardDarkImg,
    logo: mastercardLightLogo,
  }
];

export const mockRecentTransactions = [
  {
    id: "tx-1",
    title: "Deposit from my Card",
    date: "28 January 2021",
    fullDate: "28 Jan, 12.30 AM",
    amount: "-$850",
    rawAmount: -850,
    type: "Expense",
    category: "Shopping",
    transactionId: "#12548796",
    card: "1234 ****",
    status: "Completed",
    iconImage: depositCardIcon,
    iconType: "card",
    iconBg: "bg-amber-100 text-amber-600 dark:bg-amber-950/60 dark:text-amber-400"
  },
  {
    id: "tx-2",
    title: "Deposit Paypal",
    date: "25 January 2021",
    fullDate: "25 Jan, 10.40 PM",
    amount: "+$2,500",
    rawAmount: 2500,
    type: "Income",
    category: "Transfer",
    transactionId: "#12548797",
    card: "1234 ****",
    status: "Completed",
    iconImage: depositPaypalIcon,
    iconType: "paypal",
    iconBg: "bg-teal-100 text-teal-600 dark:bg-teal-950/60 dark:text-teal-400"
  },
  {
    id: "tx-3",
    title: "Jemi Wilson",
    date: "21 January 2021",
    fullDate: "21 Jan, 03.15 PM",
    amount: "+$5,400",
    rawAmount: 5400,
    type: "Income",
    category: "Transfer",
    transactionId: "#12548798",
    card: "1234 ****",
    status: "Completed",
    iconImage: jemiWilsonIcon,
    iconType: "user",
    iconBg: "bg-emerald-100 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400"
  },
  {
    id: "tx-4",
    title: "Spotify Subscription",
    date: "18 January 2021",
    fullDate: "18 Jan, 09.00 AM",
    amount: "-$150",
    rawAmount: -150,
    type: "Expense",
    category: "Subscriptions",
    transactionId: "#12548799",
    card: "1234 ****",
    status: "Completed",
    iconType: "music",
    iconBg: "bg-rose-100 text-rose-600 dark:bg-rose-950/60 dark:text-rose-400"
  },
  {
    id: "tx-5",
    title: "Freepik Sales",
    date: "14 January 2021",
    fullDate: "14 Jan, 04.20 PM",
    amount: "+$750",
    rawAmount: 750,
    type: "Income",
    category: "Revenue",
    transactionId: "#12548800",
    card: "1234 ****",
    status: "Completed",
    iconType: "work",
    iconBg: "bg-cyan-100 text-cyan-600 dark:bg-cyan-950/60 dark:text-cyan-400"
  }
];

export const mockWeeklyActivity = [
  { day: "Sat", Deposit: 240, Withdraw: 480 },
  { day: "Sun", Deposit: 130, Withdraw: 340 },
  { day: "Mon", Deposit: 270, Withdraw: 320 },
  { day: "Tue", Deposit: 370, Withdraw: 490 },
  { day: "Wed", Deposit: 240, Withdraw: 150 },
  { day: "Thu", Deposit: 250, Withdraw: 390 },
  { day: "Fri", Deposit: 340, Withdraw: 400 },
];

export const mockExpenseStatistics = [
  { name: "Entertainment", value: 30, color: "#343C6A" }, // Dark Navy
  { name: "Bill Expense", value: 15, color: "#FF82AC" },  // Vibrant Pink
  { name: "Others", value: 35, color: "#1814F3" },        // Royal Blue
  { name: "Investment", value: 20, color: "#16DBCC" },    // Theme Teal
];

export const mockQuickTransferContacts = [
  {
    id: "c-1",
    name: "Livia Bator",
    role: "CEO",
    avatar: liviaAvatarImg,
  },
  {
    id: "c-2",
    name: "Randy Press",
    role: "Director",
    avatar: randyAvatarImg,
  },
  {
    id: "c-3",
    name: "Workman",
    role: "Designer",
    avatar: workmanAvatarImg,
  },
  {
    id: "c-4",
    name: "Samantha Vance",
    role: "Marketing",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "c-5",
    name: "David Kim",
    role: "Engineer",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80"
  }
];

export const mockBalanceHistory = [
  { month: "Jul", balance: 110 },
  { month: "", balance: 330 },
  { month: "Aug", balance: 250 },
  { month: "", balance: 480 },
  { month: "Sep", balance: 430 },
  { month: "", balance: 780 },
  { month: "Oct", balance: 600 },
  { month: "", balance: 220 },
  { month: "Nov", balance: 380 },
  { month: "", balance: 570 },
  { month: "Dec", balance: 240 },
  { month: "", balance: 490 },
  { month: "Jan", balance: 640 },
];

export const mockMonthlyExpensesChart = [
  { month: "Aug", amount: 7500 },
  { month: "Sep", amount: 10200 },
  { month: "Oct", amount: 8400 },
  { month: "Nov", amount: 4500 },
  { month: "Dec", amount: 12500 },
  { month: "Jan", amount: 9100 },
];

export const mockAccountsOverview = {
  myBalance: "$12,750",
  income: "$5,600",
  expense: "$3,460",
  totalSaving: "$7,920"
};

export const mockDebitCreditData = [
  { day: "Sat", Debit: 240, Credit: 480 },
  { day: "Sun", Debit: 140, Credit: 340 },
  { day: "Mon", Debit: 130, Credit: 260 },
  { day: "Tue", Debit: 400, Credit: 220 },
  { day: "Wed", Debit: 280, Credit: 450 },
  { day: "Thu", Debit: 300, Credit: 200 },
  { day: "Fri", Debit: 380, Credit: 480 },
];

export const mockInvoices = [
  {
    id: "inv-1",
    company: "Apple Store",
    time: "5h ago",
    amount: "$450",
    iconBg: "bg-[#DCFAF8]"
  },
  {
    id: "inv-2",
    company: "Michael",
    time: "2 days ago",
    amount: "$160",
    iconBg: "bg-[#FFF5D9]"
  },
  {
    id: "inv-3",
    company: "Playstation",
    time: "5 days ago",
    amount: "$1085",
    iconBg: "bg-[#E7EDFF]"
  },
  {
    id: "inv-4",
    company: "William",
    time: "10 days ago",
    amount: "$90",
    iconBg: "bg-[#FFE0EB]"
  }
];

export const mockInvestmentsSummary = {
  totalInvestment: "$150,000",
  investmentCount: "1,250",
  rateOfReturn: "+5.80%",
};

export const mockYearlyTotalInvestment = [
  { year: "2016", value: 5000 },
  { year: "2017", value: 23000 },
  { year: "2018", value: 15000 },
  { year: "2019", value: 36000 },
  { year: "2020", value: 20000 },
  { year: "2021", value: 28000 },
];

export const mockMonthlyRevenue = [
  { year: "2016", displayYear: "2016", value: 11000 },
  { year: "2016.2", displayYear: "", value: 13000 },
  { year: "2016.4", displayYear: "", value: 14000 },
  { year: "2016.6", displayYear: "", value: 20000 },
  { year: "2016.8", displayYear: "", value: 16000 },
  { year: "2017", displayYear: "2017", value: 11500 },
  { year: "2017.3", displayYear: "", value: 18000 },
  { year: "2017.6", displayYear: "", value: 26000 },
  { year: "2017.9", displayYear: "", value: 28000 },
  { year: "2018.3", displayYear: "2018", value: 32000 },
  { year: "2018.6", displayYear: "", value: 27000 },
  { year: "2018.9", displayYear: "", value: 21500 },
  { year: "2019", displayYear: "2019", value: 20000 },
  { year: "2019.4", displayYear: "", value: 25000 },
  { year: "2019.7", displayYear: "", value: 28000 },
  { year: "2020", displayYear: "2020", value: 24000 },
  { year: "2020.3", displayYear: "", value: 23000 },
  { year: "2020.7", displayYear: "", value: 15000 },
  { year: "2020.9", displayYear: "", value: 22000 },
  { year: "2021", displayYear: "2021", value: 34000 },
];

export const mockMyInvestmentsList = [
  {
    id: "inv-1",
    name: "Apple Store",
    category: "E-commerce, Marketplace",
    value: "$54,000",
    valueLabel: "Envestment Value",
    returnRate: "+16%",
    returnLabel: "Return Value",
    returnType: "positive",
    icon: teslaIcon,
    bgColor: "bg-[#FFE0EB] dark:bg-pink-950/60",
  },
  {
    id: "inv-2",
    name: "Samsung Mobile",
    category: "E-commerce, Marketplace",
    value: "$25,300",
    valueLabel: "Envestment Value",
    returnRate: "-4%",
    returnLabel: "Return Value",
    returnType: "negative",
    icon: googleIcon,
    bgColor: "bg-[#E7EDFF] dark:bg-blue-950/60",
  },
  {
    id: "inv-3",
    name: "Tesla Motors",
    category: "Electric Vehicles",
    value: "$8,200",
    valueLabel: "Envestment Value",
    returnRate: "+25%",
    returnLabel: "Return Value",
    returnType: "positive",
    icon: appleIcon,
    bgColor: "bg-[#FFF5D9] dark:bg-amber-950/60",
  },
];

export const mockTrendingStocks = [
  { id: "01.", name: "Trivago", price: "$520", returnRate: "+5%", returnType: "positive" },
  { id: "02.", name: "Canon", price: "$480", returnRate: "+10%", returnType: "positive" },
  { id: "03.", name: "Uber Food", price: "$350", returnRate: "-3%", returnType: "negative" },
  { id: "04.", name: "Nokia", price: "$940", returnRate: "+2%", returnType: "positive" },
  { id: "05.", name: "Tiktok", price: "$670", returnRate: "-12%", returnType: "negative" },
];

export const mockInvestmentPerformance = mockYearlyTotalInvestment;
export const mockMyInvestments = mockMyInvestmentsList;

import loanUserIcon from '../assets/Lo/user 3 2.png';
import loanBriefcaseIcon from '../assets/Lo/Group (6).png';
import loanChartIcon from '../assets/Lo/Group (7).png';
import loanToolsIcon from '../assets/Lo/Group (8).png';

export const mockLoansSummary = [
  { title: "Personal Loans", amount: "$50,000", icon: loanUserIcon, bgColor: "bg-[#E7EDFF] dark:bg-blue-950/60" },
  { title: "Corporate Loans", amount: "$100,000", icon: loanBriefcaseIcon, bgColor: "bg-[#FFF5D9] dark:bg-amber-950/60" },
  { title: "Business Loans", amount: "$500,000", icon: loanChartIcon, bgColor: "bg-[#FFE0EB] dark:bg-pink-950/60" },
  { title: "Custom Loans", amount: "Choose Money", icon: loanToolsIcon, bgColor: "bg-[#DCFAF8] dark:bg-teal-950/60" },
];

export const mockLoansList = [
  {
    id: "loan-1",
    slNo: "01.",
    loanMoney: "$100,000",
    leftToRepay: "$40,500",
    duration: "8 Months",
    interestRate: "12%",
    installment: "$2,000 / month",
    isPrimary: true,
  },
  {
    id: "loan-2",
    slNo: "02.",
    loanMoney: "$500,000",
    leftToRepay: "$250,000",
    duration: "36 Months",
    interestRate: "10%",
    installment: "$8,000 / month",
    isPrimary: false,
  },
  {
    id: "loan-3",
    slNo: "03.",
    loanMoney: "$900,000",
    leftToRepay: "$40,500",
    duration: "12 Months",
    interestRate: "12%",
    installment: "$5,000 / month",
    isPrimary: false,
  },
  {
    id: "loan-4",
    slNo: "04.",
    loanMoney: "$50,000",
    leftToRepay: "$40,500",
    duration: "25 Months",
    interestRate: "5%",
    installment: "$2,000 / month",
    isPrimary: false,
  },
  {
    id: "loan-5",
    slNo: "05.",
    loanMoney: "$50,000",
    leftToRepay: "$40,500",
    duration: "5 Months",
    interestRate: "16%",
    installment: "$10,000 / month",
    isPrimary: false,
  },
  {
    id: "loan-6",
    slNo: "06.",
    loanMoney: "$80,000",
    leftToRepay: "$25,500",
    duration: "14 Months",
    interestRate: "8%",
    installment: "$2,000 / month",
    isPrimary: false,
  },
  {
    id: "loan-7",
    slNo: "07.",
    loanMoney: "$12,000",
    leftToRepay: "$5,500",
    duration: "9 Months",
    interestRate: "13%",
    installment: "$500 / month",
    isPrimary: false,
  },
  {
    id: "loan-8",
    slNo: "08.",
    loanMoney: "$160,000",
    leftToRepay: "$100,800",
    duration: "3 Months",
    interestRate: "12%",
    installment: "$900 / month",
    isPrimary: false,
  },
];

import serviceLifeInsuranceIcon from '../assets/Servic/Group (6).png';
import serviceShoppingIcon from '../assets/Servic/Group (7).png';
import serviceSafetyIcon from '../assets/Servic/surface1 (1).png';

import serviceRow1Icon from '../assets/Servic/Group (11).png';
import serviceRow2Icon from '../assets/Servic/Group (9).png';
import serviceRow3Icon from '../assets/Servic/Group (10).png';
import serviceUserIcon from '../assets/Servic/user 3 2.png';
import serviceRow6Icon from '../assets/Servic/Group (8).png';

export const mockServicesTopCards = [
  {
    id: "top-1",
    title: "Life Insurance",
    subtitle: "Unlimited protection",
    icon: serviceLifeInsuranceIcon,
    bgColor: "bg-[#E7EDFF] dark:bg-blue-950/60",
  },
  {
    id: "top-2",
    title: "Shopping",
    subtitle: "Buy. Think. Grow.",
    icon: serviceShoppingIcon,
    bgColor: "bg-[#FFF5D9] dark:bg-amber-950/60",
  },
  {
    id: "top-3",
    title: "Safety",
    subtitle: "We are your allies",
    icon: serviceSafetyIcon,
    bgColor: "bg-[#DCFAF8] dark:bg-teal-950/60",
  },
];

export const mockBankServicesList = [
  {
    id: "bs-1",
    title: "Business loans",
    subtitle: "It is a long established",
    col2Title: "Lorem Ipsum",
    col2Subtitle: "Many publishing",
    col3Title: "Lorem Ipsum",
    col3Subtitle: "Many publishing",
    col4Title: "Lorem Ipsum",
    col4Subtitle: "Many publishing",
    icon: serviceRow1Icon,
    bgColor: "bg-[#FFE0EB] dark:bg-pink-950/60",
    isPrimary: false,
  },
  {
    id: "bs-2",
    title: "Checking accounts",
    subtitle: "It is a long established",
    col2Title: "Lorem Ipsum",
    col2Subtitle: "Many publishing",
    col3Title: "Lorem Ipsum",
    col3Subtitle: "Many publishing",
    col4Title: "Lorem Ipsum",
    col4Subtitle: "Many publishing",
    icon: serviceRow2Icon,
    bgColor: "bg-[#FFF5D9] dark:bg-amber-950/60",
    isPrimary: false,
  },
  {
    id: "bs-3",
    title: "Savings accounts",
    subtitle: "It is a long established",
    col2Title: "Lorem Ipsum",
    col2Subtitle: "Many publishing",
    col3Title: "Lorem Ipsum",
    col3Subtitle: "Many publishing",
    col4Title: "Lorem Ipsum",
    col4Subtitle: "Many publishing",
    icon: serviceRow3Icon,
    bgColor: "bg-[#FFE0EB] dark:bg-pink-950/60",
    isPrimary: true,
  },
  {
    id: "bs-4",
    title: "Debit and credit cards",
    subtitle: "It is a long established",
    col2Title: "Lorem Ipsum",
    col2Subtitle: "Many publishing",
    col3Title: "Lorem Ipsum",
    col3Subtitle: "Many publishing",
    col4Title: "Lorem Ipsum",
    col4Subtitle: "Many publishing",
    icon: serviceUserIcon,
    bgColor: "bg-[#E7EDFF] dark:bg-blue-950/60",
    isPrimary: false,
  },
  {
    id: "bs-5",
    title: "Life Insurance",
    subtitle: "It is a long established",
    col2Title: "Lorem Ipsum",
    col2Subtitle: "Many publishing",
    col3Title: "Lorem Ipsum",
    col3Subtitle: "Many publishing",
    col4Title: "Lorem Ipsum",
    col4Subtitle: "Many publishing",
    icon: serviceSafetyIcon,
    bgColor: "bg-[#DCFAF8] dark:bg-teal-950/60",
    isPrimary: false,
  },
  {
    id: "bs-6",
    title: "Business loans",
    subtitle: "It is a long established",
    col2Title: "Lorem Ipsum",
    col2Subtitle: "Many publishing",
    col3Title: "Lorem Ipsum",
    col3Subtitle: "Many publishing",
    col4Title: "Lorem Ipsum",
    col4Subtitle: "Many publishing",
    icon: serviceRow6Icon,
    bgColor: "bg-[#FFE0EB] dark:bg-pink-950/60",
    isPrimary: false,
  },
];

export const mockServicesList = mockBankServicesList;

export const mockNotifications = [
  {
    id: "n-1",
    title: "Payment Received",
    message: "You received $2,500 from Paypal",
    time: "10 mins ago",
    read: false
  },
  {
    id: "n-2",
    title: "Security Alert",
    message: "New login detected from Mac OS X in San Francisco",
    time: "1 hour ago",
    read: false
  },
  {
    id: "n-3",
    title: "Card Statement Ready",
    message: "Your January credit card statement is now available",
    time: "1 day ago",
    read: true
  }
];

export const mockCardExpenseStats = [
  { name: "DBL Bank", value: 25, color: "#10B981" }, // Green
  { name: "BRC Bank", value: 25, color: "#38BDF8" }, // Sky-Blue
  { name: "ABM Bank", value: 30, color: "#FF4B4A" }, // Red
  { name: "MCP Bank", value: 20, color: "#343C6A" }, // Dark Gray
];

export const mockCardListItems = [
  {
    id: "card-item-1",
    cardType: "Secondary",
    bank: "DBL Bank",
    cardNumber: "**** **** 5600",
    nameInCard: "William",
    icon: ccCardBlueIcon,
    bgColor: "bg-[#E7EDFF] dark:bg-blue-950/60",
  },
  {
    id: "card-item-2",
    cardType: "Secondary",
    bank: "BRC Bank",
    cardNumber: "**** **** 4300",
    nameInCard: "Michel",
    icon: ccCardPinkIcon,
    bgColor: "bg-[#FFE0EB] dark:bg-pink-950/60",
  },
  {
    id: "card-item-3",
    cardType: "Secondary",
    bank: "ABM Bank",
    cardNumber: "**** **** 7560",
    nameInCard: "Edward",
    icon: ccCardYellowIcon,
    bgColor: "bg-[#FFF5D9] dark:bg-amber-950/60",
  },
];

export const mockCardSettingsList = [
  {
    id: "setting-1",
    title: "Block Card",
    subtitle: "Instantly block your card",
    icon: ccBlockCardIcon,
    bgColor: "bg-[#FFF5D9] dark:bg-amber-950/60",
  },
  {
    id: "setting-2",
    title: "Change Pin Code",
    subtitle: "Choose another pin code",
    icon: ccLockIcon,
    bgColor: "bg-[#E7EDFF] dark:bg-blue-950/60",
  },
  {
    id: "setting-3",
    title: "Add to Google Pay",
    subtitle: "Withdraw without any card",
    icon: ccGoogleIcon,
    bgColor: "bg-[#FFE0EB] dark:bg-pink-950/60",
  },
  {
    id: "setting-4",
    title: "Add to Apple Pay",
    subtitle: "Withdraw without any card",
    icon: ccAppleIcon,
    bgColor: "bg-[#DCFAF8] dark:bg-teal-950/60",
  },
  {
    id: "setting-5",
    title: "Add to Apple Store",
    subtitle: "Withdraw without any card",
    icon: ccAppleIcon,
    bgColor: "bg-[#DCFAF8] dark:bg-teal-950/60",
  },
];
