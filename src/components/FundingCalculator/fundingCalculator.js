import React from 'react';
import PropTypes from 'prop-types';

const FundingCalculator = ({ transactions, monthlyCost }) => {
    const calculateEndDate = (transactions, monthlyCost) => {
        // Calculate total funds available as of the latest transaction date
        let totalFunds = 0;
        let latestDate = new Date(Math.max(...transactions.map(tx => new Date(tx.date))));
    
        transactions.forEach(transaction => {
          const transactionDate = new Date(transaction.date);
          if (transactionDate <= latestDate) {
            totalFunds += transaction.amount;
          }
        });
    
        // Determine how many months the total funds will cover
        const monthsCovered = totalFunds / monthlyCost;
        const endDate = new Date(latestDate);
        endDate.setMonth(endDate.getMonth() + Math.floor(monthsCovered));
        const remainingDays = (monthsCovered - Math.floor(monthsCovered)) * 30;
        endDate.setDate(endDate.getDate() + remainingDays);
    
        return endDate;
      };

    const securedUntilDate = calculateEndDate(transactions, monthlyCost);
    const currentDate = new Date();

    const dateStyle = {
        color: securedUntilDate >= currentDate ? 'green' : 'red',
        fontSize: '2.5em', 
        textAlign: 'center'
    };

    return (
        <div style={dateStyle}>{securedUntilDate.toDateString()}</div>
    );
};

FundingCalculator.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
        date: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        })
    ).isRequired,
    monthlyCost: PropTypes.number.isRequired,
};

export default FundingCalculator;
