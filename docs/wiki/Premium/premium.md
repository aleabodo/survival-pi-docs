---
sidebar_position: 3
sidebar_label: Premium Features
---

import DateFormatter from '@site/src/components/DateFormatter/dateFormatter.js';
import FundingCalculator from '@site/src/components/FundingCalculator/fundingCalculator.js';

# Donations and Cosmetics

## About Our Donation System

Going by our motto *For the community, by the community*, we have an optional donation system on this server to keep it running. Unlike other servers, it's not pay-to-win. Additionally, since the server is not profit oriented, we have pretty awesome cosmetics for comparably cheap. All money goes directly and only to keeping the server running, buying premium plugins, or upgrading the hardware! 

Consider donating. You get some nice cosmetics and a big Thank You from the community 😽 Check the sidebar menu for all ranks and features you can get.

### Store
- [Ranks](Ranks/ranks.md)
- [Decorational Heads](Heads/heads.md)

---

## Funds secured until...

<!--- The first date is an initial date that I put in based on calculations that funding would end at August 28 but I don't have all of the previous transactions to put into the list. So I just added that "fake" transaction to go to Aug 28.-->
<FundingCalculator
  transactions={[
    { date: '2024-06-31', amount: 10 },
    { date: '2024-07-14', amount: 17.85}
  ]}
  monthlyCost={5.25}
/>

:::note
This date is automatically calculated based on the recent donations and the approximated monthly running cost of 5.25€. You can view the most recent donations in the list on the Tebex store page.
:::

---

## FAQ

### Running Costs of Survival-Pi

The Survival-Pi SMP is running on an i3-10100 CPU 24/7. I measured the power consumption and calculated that it costs around **4.25€ electricity a month** with the current prices. I'm paying **11,75€ a year for the domain** survival-pi.com.

Thus, we have a **monthly running cost of approximately 5.25€**.

### How is my donation money used? 

All money will first go towards paying running costs. If the donation money exceeds our monthly costs then we'll reinvest everything back into the server. For example, we previously bought some paid premium plugins (Like CoreProtect on newer versions, HeadDatabase, LibsDisguises, and more) and thanks to generous donors we were able to afford a faster and larger SSD!

### How long can I keep the features I bought?

All ranks and cosmetics are life-time!

### Why is the donation website different from this one?

I decided to not host the store website and payment method myself and rather go with the trusted service [Tebex](pagename://https://www.tebex.io/). It's a service that lots of servers use, including Hypixel. They handle all of the payment transactions and are also legally liable. The donation website where you buy the actual packages is https://survival-pi.tebex.io.

### Do I need to add my personal information?

The Tebex shop will ask you for your personal details when you proceed with your purchase. From my side, you don't need to do that. You Minecraft name suffices for you to get your stuff.

### Can I upgrade my rank?

If you're unsure which rank to get, you can always just go with the cheapest first and upgrade to the other ones later.