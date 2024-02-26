"use client";

import { createWeb3Modal, defaultConfig } from '@web3modal/ethers5/react'


// 1. Get projectId
const projectId = "YOUR_PROJECT_ID";

// 2. Set chains
const mumbaiTestNet = {
  chainId: 80001 ,
  name: "Mumbai",
  currency: "MATIC",
  explorerUrl: "https://mumbai.polygonscan.com/",
  rpcUrl: "https://api.zan.top/node/v1/polygon/mumbai/public",
};

// 3. Create modal
const metadata = {
  name: "My Website",
  description: "My Website description",
  url: "https://mywebsite.com", // origin must match your domain & subdomain
  icons: ["https://avatars.mywebsite.com/"],
};

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [mumbaiTestNet],
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
});

export function Web3ModalProvider({ children }: { children: React.ReactNode }) {
  return children;
}
