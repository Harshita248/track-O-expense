import React from 'react';
import { Header } from './component/header';
import { Balance } from './component/bal';
import { IncomeExpenses } from './component/income';
import { TransactionList } from './component/transac_list';
import { AddTransaction } from './component/transac_add';

import { GlobalProvider } from './content/global';

import './App.css';
//backgroundImage: url("./public/bg.jpg");

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
